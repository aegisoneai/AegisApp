$Source = "C:\AegisApp"
$Destination = "$env:USERPROFILE\OneDrive - Default Directory\AegisApp_Backup\CURRENT"

Write-Host "Pushing AegisApp from LOCAL-DEV to OneDrive..."
Write-Host "Source: $Source"
Write-Host "Destination: $Destination"

robocopy $Source $Destination /MIR /XD .git node_modules dist .vscode /XF *.log .env .env.*

Write-Host ""
Write-Host "AegisApp OneDrive push complete."
pause