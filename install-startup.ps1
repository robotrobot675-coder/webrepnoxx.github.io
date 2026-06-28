# Add REPNOXX server to Windows Startup (no admin needed)
$startupDir = [Environment]::GetFolderPath("Startup")
$vbsPath = Join-Path (Split-Path -Parent $MyInvocation.MyCommand.Path) "startup.vbs"
$shortcutPath = Join-Path $startupDir "REPNOXX Server.lnk"

$shell = New-Object -ComObject WScript.Shell
$shortcut = $shell.CreateShortcut($shortcutPath)
$shortcut.TargetPath = "wscript.exe"
$shortcut.Arguments = """$vbsPath"""
$shortcut.WorkingDirectory = Split-Path -Parent $vbsPath
$shortcut.WindowStyle = 7  # Minimized (7 = Minimized, but wscript is windowless anyway)
$shortcut.Description = "REPNOXX Fitness Sync Server"
$shortcut.Save()

Write-Host "REPNOXX server added to Windows Startup." -ForegroundColor Green
Write-Host "Path: $shortcutPath" -ForegroundColor DarkGray
Write-Host ""
Write-Host "It will start automatically on your next login." -ForegroundColor Green
Write-Host "The server keeps your PC awake while running." -ForegroundColor Green
Write-Host ""
Write-Host "To start now, run: start-server.ps1" -ForegroundColor Cyan
Write-Host "To remove: Remove-Item '$shortcutPath'" -ForegroundColor DarkGray
