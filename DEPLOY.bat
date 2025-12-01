@echo off
echo ========================================
echo   AM Medtech Landing Page - Deploy
echo ========================================
echo.

echo [1/5] Checking Git status...
git status

echo.
echo [2/5] Adding all changes...
git add .

echo.
set /p commit_msg="Enter commit message: "
if "%commit_msg%"=="" set commit_msg="Update landing page"

echo [3/5] Committing changes...
git commit -m "%commit_msg%"

echo.
echo [4/5] Pushing to GitHub...
git push origin main

echo.
echo [5/5] Deployment complete!
echo.
echo Vercel will automatically deploy your changes.
echo Check status at: https://vercel.com/dashboard
echo.
pause
