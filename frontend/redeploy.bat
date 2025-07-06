@echo off
echo 🚀 Cleaning and redeploying Vite project...

:: Go to frontend folder
cd /d "%~dp0"

:: Clean old files
echo 🔄 Removing dist, node_modules, and package-lock.json...
rmdir /s /q node_modules
rmdir /s /q dist
del /q package-lock.json

:: Install dependencies
echo 📦 Installing dependencies...
npm install

:: Build project
echo 🛠️ Building Vite project...
npm run build

:: Go back to root directory
cd ..

:: Stage all changes
echo ➕ Staging changes...
git add .

:: Commit changes
git commit -m "♻️ Clean build and deploy"

:: Push to GitHub
echo 📤 Pushing to origin/main...
git push origin main

echo ✅ Done! Vercel will now redeploy from the latest commit.
pause
