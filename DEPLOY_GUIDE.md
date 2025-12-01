# 🚀 Hướng Dẫn Deploy Landing Page lên Vercel

## Bước 1: Chuẩn Bị

### 1.1. Tạo GitHub Repository

```bash
cd am-medtech-landing

# Initialize git
git init

# Add all files
git add .

# First commit
git commit -m "Initial commit - AM Medtech Landing Page"
```

### 1.2. Tạo Repository trên GitHub

1. Vào https://github.com/new
2. Repository name: `am-medtech-landing`
3. Description: "Public landing page for AM Medtech"
4. **Public** repository
5. Click "Create repository"

### 1.3. Push Code lên GitHub

```bash
# Add remote
git remote add origin https://github.com/YOUR_USERNAME/am-medtech-landing.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Bước 2: Deploy lên Vercel

### 2.1. Tạo Tài Khoản Vercel

1. Vào https://vercel.com/signup
2. Sign up với GitHub account
3. Authorize Vercel

### 2.2. Import Project

1. Click "Add New..." → "Project"
2. Import Git Repository
3. Chọn `am-medtech-landing`
4. Click "Import"

### 2.3. Configure Project

**Framework Preset**: Next.js (auto-detected)

**Build Settings**:
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

**Root Directory**: `./`

Click "Deploy"

### 2.4. Đợi Deploy Hoàn Thành

- Vercel sẽ build và deploy (2-3 phút)
- Bạn sẽ nhận được URL: `https://am-medtech-landing.vercel.app`

## Bước 3: Cấu Hình Environment Variables

### 3.1. Vào Project Settings

1. Click vào project name
2. Settings → Environment Variables

### 3.2. Thêm Variables

Thêm các biến sau:

```
NEXT_PUBLIC_API_URL=https://internal.ammedtech.com
NEXT_PUBLIC_SITE_URL=https://ammedtech.com
NEXT_PUBLIC_CONTACT_API=https://internal.ammedtech.com/api/contact
NEXT_PUBLIC_NEWSLETTER_API=https://internal.ammedtech.com/api/newsletter
```

**Environment**: Production, Preview, Development (chọn tất cả)

### 3.3. Redeploy

1. Deployments tab
2. Click "..." trên deployment mới nhất
3. Click "Redeploy"

## Bước 4: Setup Custom Domain

### 4.1. Thêm Domain

1. Settings → Domains
2. Add Domain: `ammedtech.com`
3. Click "Add"

### 4.2. Cấu Hình DNS

Vercel sẽ cho bạn DNS records. Vào domain provider (GoDaddy, Namecheap, etc.):

**A Record**:
```
Type: A
Name: @
Value: 76.76.21.21
```

**CNAME Record (www)**:
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 4.3. Đợi DNS Propagate

- DNS có thể mất 24-48 giờ
- Kiểm tra: https://dnschecker.org

## Bước 5: Verify Deployment

### 5.1. Test URLs

- ✅ https://ammedtech.com
- ✅ https://www.ammedtech.com
- ✅ https://ammedtech.com/about
- ✅ https://ammedtech.com/blog
- ✅ https://ammedtech.com/solutions

### 5.2. Test Responsive

1. Mở DevTools (F12)
2. Toggle Device Toolbar (Ctrl+Shift+M)
3. Test trên:
   - iPhone SE (375px)
   - iPad (768px)
   - Desktop (1920px)

### 5.3. Test Performance

1. Vào https://pagespeed.web.dev
2. Nhập URL: https://ammedtech.com
3. Kiểm tra scores (nên >90)

## Bước 6: Continuous Deployment

### 6.1. Workflow

Mỗi khi push code lên GitHub:

```bash
# Make changes
# ...

# Deploy
git add .
git commit -m "Update content"
git push
```

Vercel sẽ tự động:
1. Detect push
2. Build project
3. Deploy to production
4. Update https://ammedtech.com

### 6.2. Sử Dụng Script

```bash
# Chạy script deploy
DEPLOY.bat

# Nhập commit message
# Script sẽ tự động push và deploy
```

## Bước 7: Monitor & Analytics

### 7.1. Vercel Analytics

1. Project → Analytics tab
2. Xem:
   - Page views
   - Unique visitors
   - Top pages
   - Performance metrics

### 7.2. Setup Google Analytics (Optional)

1. Tạo GA4 property
2. Lấy Measurement ID (G-XXXXXXXXXX)
3. Thêm vào Environment Variables:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
4. Redeploy

## 🔧 Troubleshooting

### Build Failed

**Lỗi**: `Module not found`
```bash
# Xóa node_modules và reinstall
rm -rf node_modules package-lock.json
npm install
git add .
git commit -m "Fix dependencies"
git push
```

**Lỗi**: `Type error`
```bash
# Check TypeScript errors locally
npm run build

# Fix errors
# Commit and push
```

### Domain Not Working

1. Kiểm tra DNS records
2. Đợi DNS propagate (24-48h)
3. Clear browser cache
4. Try incognito mode

### Environment Variables Not Working

1. Check spelling
2. Prefix với `NEXT_PUBLIC_`
3. Redeploy sau khi thêm
4. Clear cache: Ctrl+Shift+R

## 📊 Vercel Dashboard

### Deployments

- **Production**: Main branch
- **Preview**: Pull requests
- **Development**: Local

### Logs

- Build logs
- Function logs
- Edge logs

### Settings

- Environment Variables
- Domains
- Git Integration
- Build & Development

## ✅ Checklist Deploy

- [ ] Code pushed to GitHub
- [ ] Vercel project created
- [ ] Environment variables added
- [ ] Custom domain configured
- [ ] DNS records updated
- [ ] SSL certificate active
- [ ] Test all pages
- [ ] Test responsive design
- [ ] Check performance scores
- [ ] Setup analytics

## 🎉 Hoàn Thành!

Landing page của bạn giờ đã live tại:
- 🌐 https://ammedtech.com
- 🚀 Auto-deploy khi push code
- 📊 Analytics tracking
- 🔒 HTTPS secure
- ⚡ Edge network CDN

## 📞 Support

Nếu gặp vấn đề:
- Vercel Docs: https://vercel.com/docs
- Vercel Support: https://vercel.com/support
- Next.js Docs: https://nextjs.org/docs
