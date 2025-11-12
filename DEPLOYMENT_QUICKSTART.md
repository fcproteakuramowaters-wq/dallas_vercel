# 🚀 Quick Start: Deploy to Vercel

## TL;DR - 3 Easy Steps

### 1. Push Code to GitHub
```bash
git push origin main
```

### 2. Set Environment Variables on Vercel
```
SMTP_HOST = smtp.gmail.com
SMTP_PORT = 587
SMTP_USER = fc.proteakuramowaters@gmail.com
SMTP_PASS = qppvdwzmjmndjynj
```

### 3. Test on Live URL
- Book a room on your Vercel URL + `/book`
- Check emails arrive in inbox

---

## Security Checklist

- [ ] `.env.local` contains **placeholders only** (not real passwords)
- [ ] `.env.local` is in `.gitignore` (won't be committed)
- [ ] Real credentials are **ONLY** in Vercel's Environment Variables
- [ ] Vercel's Environment Variables are **encrypted**
- [ ] GitHub repo does **NOT** contain real passwords

---

## URLs

| Service | URL |
|---------|-----|
| Vercel Dashboard | https://vercel.com/dashboard |
| Gmail App Passwords | https://myaccount.google.com/apppasswords |
| Documentation | See `VERCEL_DEPLOYMENT.md` |

---

## If Something Breaks

| Issue | Check |
|-------|-------|
| Email not sending | `SMTP_CONFIG.md` |
| Vercel deployment | `VERCEL_DEPLOYMENT.md` |
| Security question | `SECURITY_DEPLOYMENT.md` |

---

**Status: ✅ Ready to Deploy**
