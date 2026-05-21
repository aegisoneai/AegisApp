@echo off
title Pull AegisApp From OneDrive

powershell -ExecutionPolicy Bypass -File "%~dp0Pull-AegisApp-OneDrive-To-DEV.ps1"

echo.
echo AegisApp pull complete.
pause
