@echo off
echo === Cleaning up old files ===
rmdir /s /q node_modules
del /f /q package-lock.json
rmdir /s /q dist

echo === Installing dependencies ===
npm install

echo === Building project ===
npm run build

echo === Done ===
pause
