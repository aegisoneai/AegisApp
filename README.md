# AegisApp

AegisApp is the forward-facing platform application for the Aegis Trade Systems ecosystem.

It is currently maintained as a LOCAL-DEV application and is not deployed to AWS production infrastructure yet.

## Purpose

AegisApp will eventually support the user-facing platform experience for:

- guided automation
- account and portfolio visibility
- modular Aegis ecosystem access
- explainable AI guidance
- risk and protection visibility
- future retail/professional platform workflows

## Current Environment Role

AegisApp is currently used for:

- LOCAL-DEV design work
- React/Vite interface development
- platform experience prototyping
- commercial product interface planning

AegisApp should not currently be deployed to AWS-WEB-01 or AWS-STAGING unless a future deployment plan is approved.

## Canonical Workflow

LOCAL-DEV edit  
↓  
GitHub source control  
↓  
OneDrive deployment snapshot using approved AegisApp sync script  
↓  
Future deployment environment when approved

## Development

Run from LOCAL-DEV:

```powershell
cd C:\AegisApp
npm install
npm run dev