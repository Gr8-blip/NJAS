@echo off
echo 🔄 Fetching latest frontend changes...
git checkout njas-frontend
git pull origin njas-frontend 2>nul
git checkout njas-main
if exist temp-frontend rmdir /S /Q temp-frontend
if exist temp_frontend.zip del temp_frontend.zip
echo 📦 Archiving njas-frontend branch...
git archive --format=zip -o temp_frontend.zip njas-frontend
mkdir temp-frontend
tar -xf temp_frontend.zip -C temp-frontend
echo 🚚 Copying files to frontend/user/...
xcopy temp-frontend\* frontend\user\ /E /Y /I >nul
echo 🧹 Cleaning up...
rmdir /S /Q temp-frontend
del temp_frontend.zip
echo 💾 Staging and committing changes...
git add frontend/user/
git commit -m "Auto-sync: updated frontend/user folder"
echo ✨ Done! Your main branch is now updated.
