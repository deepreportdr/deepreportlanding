---
description: Build and deploy the application to Firebase Hosting
---

# Deploy Workflow

This workflow ensures a reliable and non-interactive deployment to Firebase Hosting.

1. Build the production assets
// turbo
run_command("npm run build")

2. Deploy to Firebase using non-interactive mode
// turbo
run_command("npx firebase deploy --only hosting:deepreport-site --non-interactive")
