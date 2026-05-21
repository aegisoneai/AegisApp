$Source = "$env:USERPROFILE\OneDrive - Default Directory\AegisApp_Backup\CURRENT"
$Destination = "C:\AegisApp"

Write-Host "Pulling AegisApp from OneDrive to LOCAL-DEV..."
Write-Host "Source: $Source"
Write-Host "Destination: $Destination"

robocopy $Source $Destination /MIR /XD .git node_modules dist .vscode /XF *.log .env .env.*

Write-Host ""
Write-Host "AegisApp OneDrive pull complete."
pause