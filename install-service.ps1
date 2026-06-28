# Install REPNOXX server as a Windows Scheduled Task (runs on boot, survives logoff/sleep)
# Run this script as Administrator!

$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
$pythonExe = (Get-Command python).Source
$taskName = "REPNOXX Server"
$taskDesc = "REPNOXX fitness tracker sync server"

# --- Power settings: prevent sleep when plugged in ---
Write-Host "Configuring power settings..." -ForegroundColor DarkGray
powercfg /change standby-timeout-ac 0
powercfg /change hibernate-timeout-ac 0
powercfg /h off 2>$null
Write-Host "  Sleep/hibernate disabled (plugged in)." -ForegroundColor DarkGray
Write-Host "  Lid can be closed freely, device stays awake." -ForegroundColor Yellow

# --- Remove old task if exists ---
Unregister-ScheduledTask -TaskName $taskName -Confirm:$false -ErrorAction SilentlyContinue

# --- Create the scheduled task ---
$action = New-ScheduledTaskAction -Execute $pythonExe -Argument "-u `"$scriptPath\server.py`"" -WorkingDirectory $scriptPath
$trigger = New-ScheduledTaskTrigger -AtStartup
$settings = New-ScheduledTaskSettingsSet -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries -StartWhenAvailable -RestartCount 5 -RestartInterval (New-TimeSpan -Minutes 1)
$principal = New-ScheduledTaskPrincipal -UserId "SYSTEM" -LogonType ServiceAccount -RunLevel Highest

Register-ScheduledTask -TaskName $taskName -Action $action -Trigger $trigger -Settings $settings -Principal $principal -Description $taskDesc | Out-Null

Start-Sleep -Seconds 2
Start-ScheduledTask -TaskName $taskName

Write-Host ""
Write-Host "REPNOXX server installed as a Windows system task." -ForegroundColor Green
Write-Host "  - Starts on every boot (before login)" -ForegroundColor Green
Write-Host "  - Runs as SYSTEM (survives logoff/sleep/lid-close)" -ForegroundColor Green
Write-Host "  - Auto-restarts if it crashes" -ForegroundColor Green
Write-Host "  - PC will not sleep (lid can be closed freely)" -ForegroundColor Green
Write-Host ""
Write-Host "Commands:" -ForegroundColor Cyan
Write-Host "  Stop:    Stop-ScheduledTask -TaskName '$taskName'" -ForegroundColor DarkGray
Write-Host "  Start:   Start-ScheduledTask -TaskName '$taskName'" -ForegroundColor DarkGray
Write-Host "  Status:  Get-ScheduledTask -TaskName '$taskName' | fl State" -ForegroundColor DarkGray
Write-Host "  Remove:  Unregister-ScheduledTask -TaskName '$taskName' -Confirm:`$false" -ForegroundColor DarkGray
