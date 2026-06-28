# Install REPNOXX server to auto-start on Windows login
$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
$startScript = Join-Path $scriptPath "start-server.ps1"
$name = "REPNOXX Server"
$regPath = "HKCU:\Software\Microsoft\Windows\CurrentVersion\Run"
$cmd = "powershell.exe -WindowStyle Hidden -File `"$startScript`""
Set-ItemProperty -Path $regPath -Name $name -Value $cmd
Write-Host "REPNOXX server will auto-start on login." -ForegroundColor Green
Write-Host "Registry: HKCU\...\Run\$name" -ForegroundColor DarkGray
Write-Host ("To remove: Remove-ItemProperty -Path '" + $regPath + "' -Name '" + $name + "'") -ForegroundColor DarkGray
