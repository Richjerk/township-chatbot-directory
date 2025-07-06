@echo off
echo 🔄 Cleaning and building project...

cd frontend
echo ✅ Removing node_modules, dist, and lock files...
rmdir /s /q node_modules
del /f /q package-lock.json
rmdir /s /q dist

echo 📦 Reinstalling dependencies...
npm install

echo 🛠️ Running Vite build...
npm run build

echo ✅ Done!
pause
