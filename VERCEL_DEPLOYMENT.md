# Vercel Deployment Checklist

## 🔒 Security First: Never Expose Credentials

### Before Pushing Code:
- [ ] Remove real passwords from `.env.local` (replace with placeholders)
- [ ] Verify `.env.local` is in `.gitignore` (prevents accidental commits)
- [ ] Use `.env.example` as a template showing required variables
- [ ] Run `git status` to confirm `.env.local` is NOT staged for commit

### Git Commands to Verify:
```bash
# Check what's staged for commit
git status

# Make sure .env.local shows "Ignored" (not "Changes to be committed")
# If accidentally committed, immediately remove:
git rm --cached .env.local
git commit -m "Remove .env.local from tracking"
```

## 📋 Step-by-Step Vercel Deployment

### 1. Prepare Your Repository
```bash
# Make sure .env.local is NOT committed
git status

# Add and commit your code (without .env.local)
git add .
git commit -m "Add booking with SMTP email feature"
git push origin main
```

### 2. Create/Connect Vercel Project
- Go to https://vercel.com/dashboard
- Click "Add New..." → "Project"
- Select your GitHub repository
- Click "Import"

### 3. Set Environment Variables in Vercel
- After import, you'll see "Environment Variables" section
- **Add these variables:**
  ```
  SMTP_HOST     → smtp.gmail.com
  SMTP_PORT     → 587
  SMTP_USER     → your-email@gmail.com
  SMTP_PASS     → your-16-char-app-password
  ```
- Make sure **Production** is selected (not "Preview")
- Click "Deploy"

### 4. Wait for Deployment
- Vercel will build and deploy your site
- You'll see a live URL when complete
- Takes 2-5 minutes usually

### 5. Test the Booking Flow
- Visit your live Vercel URL + `/book`
- Fill in a test booking
- Click "Confirm Booking"
- Check that email was sent (check your inbox/spam folder)

### 6. Monitor Logs
- Go back to Vercel Dashboard
- Click on the deployment
- Go to "Logs" or "Function Logs"
- Search for "email sent" or error messages

## 🚨 If Email Fails on Production

1. **Check Vercel Logs:**
   - Dashboard → Deployments → (latest) → Function Logs
   - Look for "Booking API error" messages

2. **Common Issues:**
   - App password expired → regenerate in Google Account
   - Wrong SMTP credentials in Vercel → update and redeploy
   - Email quota exceeded → check Gmail account

3. **Redeploy After Fixing:**
   ```bash
   # Update Environment Variables in Vercel Dashboard
   # Then click "Redeploy" or:
   git push origin main  # Automatic redeploy on push
   ```

## 📊 What to See After Deployment

✅ **Successful Booking:**
- Form accepts guest info
- "Confirm Booking" button works
- Success message: "Booking confirmed! Confirmation email sent."

✅ **Email Working:**
- Guest receives confirmation email with booking details
- Hotel admin gets a copy
- Email contains: name, email, phone, room type, dates, nights, rate, total

❌ **Email Failing (but booking saved):**
- Success message: "Booking saved. Email notification may not have been sent..."
- Check Vercel logs for SMTP error details

## 🔑 Generating Google App Password

If you haven't created an app-specific password:

1. Go to https://myaccount.google.com/apppasswords
2. Select "Mail" and your device
3. Google generates a 16-character password
4. Copy it to `.env.local` (local) or Vercel Environment Variables (production)

⚠️ **Important:** Never share this password. It's like your account password for third-party apps.

## 📚 Additional Resources

- [Vercel Environment Variables Docs](https://vercel.com/docs/projects/environment-variables)
- [Gmail App Passwords](https://support.google.com/accounts/answer/185833)
- [Nodemailer Docs](https://nodemailer.com/about/)

## ✅ Summary

| Step | Local Development | Vercel Production |
|------|------------------|------------------|
| Credentials Location | `.env.local` (not committed) | Environment Variables (web dashboard) |
| Visibility | Only on your machine | Private, encrypted |
| Risk | Low (file ignored) | Very Low (managed by Vercel) |
| Easy to Update | Edit `.env.local`, restart | Edit dashboard, auto-redeploy |

**KEY RULE:** Never commit `.env.local` with real passwords to GitHub!
