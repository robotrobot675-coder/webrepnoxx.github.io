# Stop all Python server instances on port 3000
$stopped = $false
Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue | ForEach-Object {
    $proc = Get-Process -Id $_.OwningProcess -ErrorAction SilentlyContinue
    if ($proc -and $proc.ProcessName -eq "python") {
        $proc.Kill()
        $stopped = $true
    }
}
if ($stopped) {
    Write-Host "REPNOXX server stopped." -ForegroundColor Yellow
} else {
    Write-Host "No running server found." -ForegroundColor DarkGray
}
