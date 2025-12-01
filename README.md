# AM Medtech - Landing Page

> Public-facing landing page for AM Medtech, deployed on Vercel

## 🌐 Live URL
- **Production**: https://ammedtech.com
- **Staging**: https://am-medtech-landing.vercel.app

## 🏗️ Tech Stack
- **Framework**: Next.js 16.0.5 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel
- **CDN**: Vercel Edge Network

## 📁 Project Structure

```
am-medtech-landing/
├── app/
│   ├── page.tsx                    # Homepage
│   ├── about/                      # About page
│   ├── blog/                       # Blog posts
│   │   ├── page.tsx
│   │   ├── ai-in-supply-chain/
│   │   └── digital-transformation-pharma/
│   ├── careers/                    # Careers page
│   ├── case-studies/               # Case studies
│   ├── contact/                    # Contact page
│   ├── data-intelligence/          # Data Intelligence page
│   ├── solutions/                  # Solution pages
│   │   ├── dms-platform/
│   │   ├── distribution-development/
│   │   ├── pharma-ecommerce/
│   │   └── rtm-strategy/
│   ├── components/                 # Shared components
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── ...
│   ├── globals.css                 # Global styles
│   └── layout.tsx                  # Root layout
├── public/                         # Static assets
│   ├── logo_medtech.png
│   ├── banner.png
│   ├── blog/
│   └── team/
├── vercel.json                     # Vercel config
├── next.config.ts                  # Next.js config
├── tailwind.config.ts              # Tailwind config
└── package.json
```

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 🔧 Environment Variables

Create a `.env.local` file for development:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_CONTACT_API=http://localhost:3001/api/contact
NEXT_PUBLIC_NEWSLETTER_API=http://localhost:3001/api/newsletter
```

For production (set in Vercel dashboard):

```env
NEXT_PUBLIC_API_URL=https://internal.ammedtech.com
NEXT_PUBLIC_SITE_URL=https://ammedtech.com
NEXT_PUBLIC_CONTACT_API=https://internal.ammedtech.com/api/contact
NEXT_PUBLIC_NEWSLETTER_API=https://internal.ammedtech.com/api/newsletter
```

## 📦 Deployment to Vercel

### First Time Setup

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Landing page"
   git remote add origin https://github.com/yourusername/am-medtech-landing.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Framework: Next.js (auto-detected)
   - Click "Deploy"

3. **Configure Environment Variables**
   - Go to Project Settings → Environment Variables
   - Add all `NEXT_PUBLIC_*` variables
   - Redeploy

4. **Setup Custom Domain**
   - Go to Project Settings → Domains
   - Add `ammedtech.com`
   - Update DNS records as instructed

### Continuous Deployment

Every push to `main` branch will automatically deploy to production.

```bash
git add .
git commit -m "Update content"
git push
```

## 🔗 Integration with Internal System

This landing page connects to the internal system for:

### API Calls
- **Contact Form**: `POST /api/contact`
- **Newsletter**: `POST /api/newsletter`

### Redirects
- **Login**: Redirects to `https://internal.ammedtech.com/login`
- **Admin**: Redirects to `https://internal.ammedtech.com/admin`

## 📱 Responsive Design

Fully responsive across all devices:
- **Mobile**: 375px - 639px
- **Tablet**: 640px - 1023px
- **Desktop**: 1024px+

### Breakpoints
```css
sm: 640px   /* Small tablets */
md: 768px   /* Tablets */
lg: 1024px  /* Desktops */
xl: 1280px  /* Large desktops */
2xl: 1536px /* Extra large */
```

## 🎨 Design System

### Colors
- **Primary**: `#00D4FF` (Cyan)
- **Primary Dark**: `#0096C7`
- **Dark BG**: `#020617`
- **Dark BG Secondary**: `#0B1221`

### Typography
- Fluid typography using `clamp()`
- Responsive from mobile to desktop
- Font: Arial, Helvetica, sans-serif

### Components
All components are fully responsive with:
- Flexible padding/margin
- Responsive grid layouts
- Touch-friendly buttons (44px minimum)
- Smooth animations

## 📄 Pages

### Public Pages
- ✅ **/** - Homepage with Hero section
- ✅ **/about** - About AM Medtech
- ✅ **/blog** - Blog listing
- ✅ **/blog/[slug]** - Individual blog posts
- ✅ **/careers** - Careers page
- ✅ **/case-studies** - Case studies
- ✅ **/contact** - Contact form
- ✅ **/data-intelligence** - Data Intelligence solution
- ✅ **/solutions/dms-platform** - DMS Platform
- ✅ **/solutions/distribution-development** - Distribution Development
- ✅ **/solutions/pharma-ecommerce** - Pharma E-commerce
- ✅ **/solutions/rtm-strategy** - RTM Strategy

### Removed Pages (Internal System Only)
- ❌ **/login** - Moved to internal system
- ❌ **/admin** - Moved to internal system

## 🔒 Security

- **HTTPS**: Automatic SSL via Vercel
- **Headers**: Security headers configured in `vercel.json`
- **CORS**: API calls to internal system only
- **No Secrets**: No sensitive data in frontend

## 📊 Performance

- **Edge Network**: Global CDN via Vercel
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic by Next.js
- **Static Generation**: Pre-rendered pages

## 🐛 Troubleshooting

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### API Connection Issues
- Check `NEXT_PUBLIC_API_URL` is correct
- Verify internal system is running
- Check CORS settings on backend

## 📝 Development Notes

### Adding New Pages
1. Create page in `app/[page-name]/page.tsx`
2. Add to navigation in `components/Navbar.tsx`
3. Test responsive design
4. Push to GitHub (auto-deploy)

### Updating Content
- Blog posts: `app/blog/[slug]/`
- Images: `public/`
- Styles: `app/globals.css`

## 🤝 Related Projects

- **Internal System**: `AM_BS/` - Admin dashboard and backend API
- **Mobile App**: `AM_BS/mobile/` - React Native mobile app

## 📞 Support

For issues or questions:
- **Email**: contact@ammedtech.com
- **Internal**: https://internal.ammedtech.com

---

**Built with ❤️ by AM Medtech Team**
