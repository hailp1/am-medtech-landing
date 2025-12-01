# 🚀 Push Landing Page lên GitHub

## ✅ Git Đã Được Initialize

```
✓ Git repository initialized
✓ All files added
✓ Initial commit created
✓ Branch: main
✓ Status: Clean
```

---

## 📝 Bước Tiếp Theo

### 1. Tạo GitHub Repository

#### Option A: Qua Web Interface (Dễ nhất)

1. Mở browser: https://github.com/new
2. **Repository name**: `am-medtech-landing`
3. **Description**: `Public landing page for AM Medtech - Pharma Distribution Solutions`
4. **Visibility**: ✅ **Public** (để deploy free trên Vercel)
5. ❌ **KHÔNG** check "Initialize with README" (đã có rồi)
6. Click **"Create repository"**

#### Option B: Qua GitHub CLI (Nếu đã cài)

```bash
gh repo create am-medtech-landing --public --source=. --remote=origin --push
```

---

### 2. Add Remote & Push

Sau khi tạo repository trên GitHub, copy URL và chạy:

```bash
# Add remote (thay YOUR_USERNAME bằng GitHub username của bạn)
git remote add origin https://github.com/YOUR_USERNAME/am-medtech-landing.git

# Verify remote
git remote -v

# Push to GitHub
git push -u origin main
```

**Hoặc dùng SSH** (nếu đã setup SSH key):

```bash
git remote add origin git@github.com:YOUR_USERNAME/am-medtech-landing.git
git push -u origin main
```

---

### 3. Verify Push

Sau khi push, kiểm tra:

1. Vào https://github.com/YOUR_USERNAME/am-medtech-landing
2. Xem files đã được push chưa
3. Check README.md hiển thị đúng

---

## 🎯 Quick Commands

### Nếu Chưa Có GitHub Account

1. Tạo account: https://github.com/signup
2. Verify email
3. Quay lại bước 1 ở trên

### Nếu Đã Có GitHub Account

```bash
# 1. Tạo repo trên GitHub (qua web)
# 2. Chạy commands sau:

cd d:\newNCSKITORG\newNCSkit\AM_BS\am-medtech-landing

# Add remote (THAY YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/am-medtech-landing.git

# Push
git push -u origin main
```

---

## 🔐 Authentication

### Nếu Bị Hỏi Username/Password

GitHub không còn hỗ trợ password authentication. Bạn cần:

#### Option 1: Personal Access Token (Recommended)

1. Vào https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. **Note**: `am-medtech-landing-deploy`
4. **Expiration**: 90 days (hoặc No expiration)
5. **Scopes**: Check ✅ `repo` (full control)
6. Click "Generate token"
7. **COPY TOKEN** (chỉ hiện 1 lần!)
8. Khi push, dùng token thay vì password:
   - Username: `your-github-username`
   - Password: `paste-your-token-here`

#### Option 2: GitHub CLI

```bash
# Install GitHub CLI
winget install --id GitHub.cli

# Login
gh auth login

# Push sẽ tự động authenticate
```

#### Option 3: SSH Key (Best for long-term)

```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your-email@example.com"

# Copy public key
cat ~/.ssh/id_ed25519.pub

# Add to GitHub: https://github.com/settings/keys
# Then use SSH URL instead of HTTPS
```

---

## 📊 After Push

Sau khi push thành công, bạn sẽ thấy:

```
Enumerating objects: 26813, done.
Counting objects: 100% (26813/26813), done.
Delta compression using up to 8 threads
Compressing objects: 100% (...)
Writing objects: 100% (26813/26813), ... MiB | ... MiB/s, done.
Total 26813 (delta ...), reused 26813 (delta ...)
To https://github.com/YOUR_USERNAME/am-medtech-landing.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

---

## ✅ Checklist

- [x] Git initialized
- [x] Files added
- [x] Initial commit created
- [ ] GitHub repository created
- [ ] Remote added
- [ ] Code pushed to GitHub
- [ ] Repository visible on GitHub

---

## 🚀 Next: Deploy to Vercel

Sau khi push lên GitHub thành công, bước tiếp theo:

1. Vào https://vercel.com
2. Import repository `am-medtech-landing`
3. Deploy
4. Xem `DEPLOY_GUIDE.md` để biết chi tiết

---

## 🆘 Troubleshooting

### Error: "remote origin already exists"

```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/am-medtech-landing.git
```

### Error: "Permission denied"

- Check username/password (dùng token thay vì password)
- Hoặc setup SSH key

### Error: "Repository not found"

- Check repository name đúng chưa
- Check repository là Public chưa
- Check username trong URL đúng chưa

---

## 📞 Need Help?

- GitHub Docs: https://docs.github.com
- Vercel Docs: https://vercel.com/docs
- Or ask me! 😊

---

**Ready to push?** Tạo GitHub repository và chạy commands ở trên! 🚀
