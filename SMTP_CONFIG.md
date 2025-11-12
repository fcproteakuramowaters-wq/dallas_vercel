# Zoho SMTP Configuration Guide

## Current Setup
- **SMTP Host:** smtp.gmail.com
- **SMTP Port:** 587 (TLS) or 465 (SSL)
- **Security:** TLS/SSL
- **Email:** your-email@gmail.com
- **Password:** 16-character app-specific password

## Troubleshooting "Access Restricted" Error

The error `554 5.7.8 Access Restricted` means authentication failed. Follow these steps:

### 1. Verify the Password
- Log into your Google Account (myaccount.google.com)
- Go to **Security → App passwords** (or https://myaccount.google.com/apppasswords)
- Select "Mail" and "Windows Computer" (or your device)
- Generate a new 16-character app password
- Copy the generated password and update `.env.local`:
  ```
  SMTP_PASS=<your-new-16-char-app-password>
  ```

### 2. Enable 2FA on Google Account
- If you don't see "App passwords" option, you need to enable 2FA first:
  - Go to **Security → 2-Step Verification**
  - Follow the setup wizard
  - Then app passwords will be available

### 3. Verify Your Gmail Account
- Ensure the email is active and not suspended
- Check if you're using the correct email address

## Environment Variable Location

### Local Development
File: `.env.local` (in project root)
- This file is in `.gitignore` and won't be committed
- Copy from `.env.example` and fill in your credentials

After updating `.env.local`, restart the dev server:
```bash
npm run dev
```

### Vercel Deployment (IMPORTANT!)

**DO NOT put credentials in code or `.env.local`**

Instead, use Vercel's Environment Variables:

1. **Push your code to GitHub** (without `.env.local`):
   ```bash
   git push origin main
   ```

2. **Go to Vercel Dashboard:**
   - Log in at https://vercel.com
   - Select your project
   - Go to **Settings → Environment Variables**

3. **Add the variables:**
   - Click "Add Environment Variable"
   - Key: `SMTP_HOST` | Value: `smtp.gmail.com`
   - Key: `SMTP_PORT` | Value: `587`
   - Key: `SMTP_USER` | Value: `your-email@gmail.com`
   - Key: `SMTP_PASS` | Value: `your-16-char-app-password`
   - Make sure to mark them as **"Production"** (check the environment)

4. **Redeploy:**
   - Vercel will automatically redeploy when you add environment variables
   - Or manually trigger a redeploy from the dashboard

5. **Test:**
   - Try booking a room on your deployed site
   - Check the Vercel logs for errors: **Deployments → (latest) → Logs**

## Testing the Booking

### Local Development
1. Navigate to http://localhost:3000/book
2. Fill in the form and click "Confirm Booking"
3. Check the server console logs for email status

### Production (Vercel)
1. Navigate to your Vercel URL + `/book`
2. Fill in the form and click "Confirm Booking"
3. Check Vercel logs: Dashboard → Deployments → (latest) → Function logs → Runtime logs

## Debug Output

Server logs will show:
- ✓ Confirmation email sent to [email]  (if successful)
- ⚠ Error sending confirmation email  (if SMTP fails)
- ❌ SMTP Authentication Failed  (with details)

## Security Checklist

✅ **Before deploying to Vercel:**
- [ ] `.env.local` is in `.gitignore` ✓ (already added)
- [ ] `.env.local` contains placeholder values (not real credentials)
- [ ] Real credentials are ONLY in Vercel's Environment Variables
- [ ] Never commit `.env.local` with real passwords
- [ ] Use app-specific passwords, not account passwords

✅ **After deploying to Vercel:**
- [ ] Test booking flow works on production URL
- [ ] Check Vercel logs for email sending status
- [ ] Verify emails arrive in the inbox

## Alternative: Zoho Mail SMTP

If using Zoho instead of Gmail:

1. Log into Zoho Mail (mail.zoho.com)
2. Go to **Settings → Security → App Passwords**
3. Generate a new app password
4. Set in Vercel Environment Variables:
   ```
   SMTP_HOST=smtppro.zoho.com
   SMTP_PORT=465
   SMTP_USER=your-email@zoho.com
   SMTP_PASS=<your-app-password>
   ```

## Troubleshooting Vercel Deployment

If emails aren't sending on Vercel:

1. **Check Function Logs:**
   - Vercel Dashboard → Deployments → (latest) → Function logs
   - Look for error messages with details

2. **Common Issues:**
   - App password expired or regenerated (regenerate a new one)
   - Wrong SMTP credentials in Vercel settings
   - Firewall blocking SMTP (unlikely on Vercel)

3. **Debug Mode:**
   - The API logs detailed errors, check Vercel runtime logs

## Testing Email Sending

You can manually test SMTP by running:
```bash
node scripts/test-smtp.js
```

(Optional: create this script if you need detailed SMTP testing)

