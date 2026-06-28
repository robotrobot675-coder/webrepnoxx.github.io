@echo off
cd /d "%~dp0"

echo.
echo === REPNOXX Server - Service Installer ===
echo Run this as Administrator (right-click ^> Run as Administrator)
echo.

:: Disable sleep when plugged in
powercfg /change standby-timeout-ac 0 >nul 2>&1
powercfg /change hibernate-timeout-ac 0 >nul 2>&1
powercfg /h off >nul 2>&1
echo [OK] Sleep/hibernate disabled (plugged in)

:: Find Python
set PYTHON=python
where python >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    set PYTHON=python3
)

echo [OK] Using %PYTHON%

:: Remove old task
schtasks /delete /tn "REPNOXX Server" /f >nul 2>&1

:: Create new task
schtasks /create /tn "REPNOXX Server" /ru SYSTEM /rl HIGHEST /sc ONSTART /delay 0000:15 /tr "\"%PYTHON%\" -u \"%~dp0server.py\"" /f

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [FAILED] Could not create task.
    echo Make sure you run this as Administrator.
    pause
    exit /b 1
)

echo [OK] Scheduled task created

:: Start it now
schtasks /run /tn "REPNOXX Server" >nul 2>&1
echo [OK] Server started on http://localhost:3000

echo.
echo ========================================
echo REPNOXX server is now a Windows system task:
echo  - Starts on every boot (before login)
echo  - Runs as SYSTEM - survives lid close, sleep, logoff
echo  - Auto-restarts if it crashes
echo  - PC will NOT sleep while plugged in
echo ========================================
echo.
echo Commands:
echo   Stop:  schtasks /end /tn "REPNOXX Server"
echo   Start: schtasks /run /tn "REPNOXX Server"
echo   View:  schtasks /query /tn "REPNOXX Server"
echo.
pause
