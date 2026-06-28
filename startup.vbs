' REPNOXX Server - Silent launcher for Windows startup
' No console window, no admin needed

Dim objShell, strScriptDir
Set objShell = CreateObject("WScript.Shell")
strScriptDir = CreateObject("Scripting.FileSystemObject").GetParentFolderName(WScript.ScriptFullName)
objShell.Run "python -u """ & strScriptDir & "\server.py""", 0, False
