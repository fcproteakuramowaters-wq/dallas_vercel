import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface BookingRequest {
  fullName: string;
  email: string;
  phone: string;
  roomType: string;
  roomRate: number;
  checkin: string;
  checkout: string;
  nights: number;
  total: number;
}

export async function POST(request: NextRequest) {
  try {
    const body: BookingRequest = await request.json();

    // Validate required fields
    if (!body.fullName || !body.email || !body.phone || !body.roomType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get SMTP credentials from environment or use defaults
    const smtpUser = process.env.SMTP_USER || 'info@dallasgrandbeachhotel.com';
    const smtpPass = process.env.SMTP_PASS || 'UFSitWL8pBE2';
    const smtpHost = process.env.SMTP_HOST || 'smtppro.zoho.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '465', 10);

    // Configure Zoho SMTP transporter with additional debugging
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      logger: true,
      debug: true,
    });

    // Build email HTML content with reservation summary
    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #1a56db; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
    .content { background-color: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
    .section { margin-bottom: 20px; }
    .section-title { font-weight: bold; color: #1a56db; margin-bottom: 10px; }
    .row { display: flex; justify-content: space-between; margin-bottom: 8px; }
    .label { font-weight: bold; }
    .footer { background-color: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #6b7280; border-radius: 0 0 5px 5px; border: 1px solid #e5e7eb; border-top: none; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Booking Confirmation</h1>
      <p>Dallas Grand Beach Hotel & Resort Suite</p>
    </div>
    <div class="content">
      <div class="section">
        <div class="section-title">Guest Information</div>
        <div class="row">
          <span class="label">Full Name:</span>
          <span>${body.fullName}</span>
        </div>
        <div class="row">
          <span class="label">Email:</span>
          <span>${body.email}</span>
        </div>
        <div class="row">
          <span class="label">Phone Number:</span>
          <span>${body.phone}</span>
        </div>
      </div>

      <div class="section">
        <div class="section-title">Reservation Details</div>
        <div class="row">
          <span class="label">Room Type:</span>
          <span>${body.roomType}</span>
        </div>
        <div class="row">
          <span class="label">Check-in Date:</span>
          <span>${new Date(body.checkin).toLocaleDateString()}</span>
        </div>
        <div class="row">
          <span class="label">Check-out Date:</span>
          <span>${new Date(body.checkout).toLocaleDateString()}</span>
        </div>
        <div class="row">
          <span class="label">Room Nights:</span>
          <span>${body.nights}</span>
        </div>
      </div>

      <div class="section">
        <div class="section-title">Pricing Summary</div>
        <div class="row">
          <span class="label">Room Rate (per night):</span>
          <span>₦${body.roomRate.toLocaleString()}</span>
        </div>
        <div class="row">
          <span class="label" style="font-size: 16px;">Total Amount:</span>
          <span style="font-size: 16px; color: #1a56db; font-weight: bold;">₦${body.total.toLocaleString()}</span>
        </div>
      </div>

      <p style="margin-top: 30px; font-size: 14px; color: #6b7280;">
        Thank you for choosing Dallas Grand Beach Hotel. We look forward to welcoming you!
      </p>
    </div>
    <div class="footer">
      <p>© 2025 Dallas Grand Beach Hotel. All rights reserved.<br/>
      123 Ocean Drive, Oghara, Delta State</p>
    </div>
  </div>
</body>
</html>
    `;

    // Send confirmation email
    let emailSent = false;
    try {
      await transporter.sendMail({
        from: smtpUser,
        to: body.email,
        subject: `Booking Confirmation - ${body.roomType} Room`,
        html: emailHtml,
      });
      emailSent = true;
      console.log(`✓ Confirmation email sent to ${body.email}`);
    } catch (emailError) {
      console.warn('⚠ Error sending confirmation email to guest:', emailError);
      // Don't throw; allow booking to proceed but warn about email failure
    }

    // Send copy to hotel admin
    try {
      await transporter.sendMail({
        from: smtpUser,
        to: smtpUser, // Send to the same email (hotel admin)
        subject: `New Booking - ${body.fullName} - ${body.roomType} Room`,
        html: emailHtml,
      });
      console.log(`✓ Admin copy sent to ${smtpUser}`);
    } catch (emailError) {
      console.warn('⚠ Error sending admin copy:', emailError);
      // Don't throw here; admin email failure shouldn't block guest confirmation
    }

    return NextResponse.json(
      { 
        success: true, 
        message: emailSent 
          ? 'Booking confirmed! Confirmation email sent.' 
          : 'Booking saved. Email notification may not have been sent due to configuration. Please contact the hotel directly.',
        emailSent: emailSent,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ Booking API error:', error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    // Log full error for debugging
    if (error instanceof Error && (error as any).code === 'EAUTH') {
      console.error('SMTP Authentication Failed. Please verify:');
      console.error('- SMTP_USER:', process.env.SMTP_USER);
      console.error('- SMTP_HOST:', process.env.SMTP_HOST);
      console.error('- SMTP_PORT:', process.env.SMTP_PORT);
      console.error('- Password may be incorrect or account not configured for SMTP');
    }
    return NextResponse.json(
      { error: 'Failed to process booking', details: errorMessage },
      { status: 500 }
    );
  }
}
