@echo off
cd /d "%~dp0"
echo ============================================
echo   Starting Your Chicken Tracker...
echo ============================================
echo.
echo When you see the line:
echo     Local:  http://localhost:3000
echo.
echo Open your browser and go to:
echo     http://localhost:3000
echo.
echo To STOP the tracker, close this window.
echo ============================================
echo.
npm run dev
pause
