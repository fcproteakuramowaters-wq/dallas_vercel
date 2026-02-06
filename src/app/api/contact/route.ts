import nodemailer from 'nodemailer';

interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export async function POST(req: Request) {
  try {
    const body: ContactRequest = await req.json();

    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: 'Missing required fields: name, email, subject, message' },
        { status: 400 }
      );
    }

    // Get SMTP configuration from environment
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '587', 10);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpUser || !smtpPass) {
      console.error('SMTP credentials not configured');
      return Response.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Email to customer
    const customerEmailContent = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #1e40af; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
    .content { background-color: #f5f5f5; padding: 20px; }
    .footer { background-color: #1e40af; color: white; padding: 10px; text-align: center; border-radius: 0 0 5px 5px; font-size: 12px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #1e40af; }
    .message-box { background-color: white; padding: 15px; border-left: 4px solid #1e40af; margin-top: 15px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Thank You for Contacting Us</h1>
    </div>
    <div class="content">
      <p>Hello ${name},</p>
      <p>We have received your message and will get back to you as soon as possible. Thank you for reaching out to Dallas Grand Beach Hotel!</p>
      
      <div class="message-box">
        <div class="field">
          <span class="label">Subject:</span> ${subject}
        </div>
        <div class="field">
          <span class="label">Your Message:</span>
          <p>${message}</p>
        </div>
      </div>
      
      <p>If you have any urgent matters, please call us at <strong>+234 907 455 4875</strong> (Available 24/7)</p>
      
      <p>Best regards,<br/>Dallas Grand Beach Hotel Team</p>
    </div>
    <div class="footer">
      <p>&copy; 2025 Dallas Grand Beach Hotel. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
    `;

    // Email to admin
    const adminEmailContent = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #dc2626; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
    .content { background-color: #f5f5f5; padding: 20px; }
    .footer { background-color: #dc2626; color: white; padding: 10px; text-align: center; border-radius: 0 0 5px 5px; font-size: 12px; }
    .field { margin-bottom: 10px; border-bottom: 1px solid #ddd; padding-bottom: 10px; }
    .label { font-weight: bold; color: #dc2626; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Contact Form Submission</h1>
    </div>
    <div class="content">
      <p><strong>A new message has been submitted through the contact form:</strong></p>
      
      <div class="field">
        <span class="label">Name:</span> ${name}
      </div>
      <div class="field">
        <span class="label">Email:</span> <a href="mailto:${email}">${email}</a>
      </div>
      <div class="field">
        <span class="label">Phone:</span> ${phone || 'Not provided'}
      </div>
      <div class="field">
        <span class="label">Subject:</span> ${subject}
      </div>
      <div class="field">
        <span class="label">Message:</span>
        <p>${message}</p>
      </div>
      
      <p><em>Reply to: ${email}</em></p>
    </div>
    <div class="footer">
      <p>Dallas Grand Beach Hotel - Contact Form</p>
    </div>
  </div>
</body>
</html>
    `;

    // Send email to customer
    await transporter.sendMail({
      from: smtpUser,
      to: email,
      subject: `Thank You - We Received Your Message`,
      html: customerEmailContent,
    });

    console.log('✓ Customer confirmation email sent to', email);

    // Send email to admin
    await transporter.sendMail({
      from: smtpUser,
      to: smtpUser,
      subject: `New Contact Form Submission - ${subject}`,
      html: adminEmailContent,
    });

    console.log('✓ Admin notification email sent');

    return Response.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return Response.json(
      { error: 'Failed to send message', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
