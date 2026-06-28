# REPNOXX Server Launcher - runs silently in background
$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
$logFile = Join-Path $scriptPath "server.log"

# Kill any existing instance on port 3000
Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue | ForEach-Object {
    $proc = Get-Process -Id $_.OwningProcess -ErrorAction SilentlyContinue
    if ($proc -and $proc.ProcessName -eq "python") { $proc.Kill() }
}

Start-Process -WindowStyle Hidden -FilePath "python" -ArgumentList "server.py" -WorkingDirectory $scriptPath
Write-Host "REPNOXX server started on http://localhost:3000 (background)" -ForegroundColor Green
Write-Host "Log: $logFile" -ForegroundColor DarkGray
