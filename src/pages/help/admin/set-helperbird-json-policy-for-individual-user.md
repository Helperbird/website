---
new: false
footer: true
header: true
updated: true
layout: templates/new/help/post-new.html
title: How to Set Helperbird JSON Policy for an Individual User in Google Admin
description:
  This guide shows Google Workspace admins how to apply Helperbird’s JSON policy in the Google Admin
  Console for a single user—specifically setting the subKey (and optionally the isAdmin flag) for the Helperbird Chrome extension.
keywords:
  Helperbird admin policy, Chrome extension policy, Google Admin Console, JSON policy, Helperbird isAdmin, Helperbird subKey, Chrome app extension settings, Chrome policy JSON, Google Admin user settings
youtubeId:
cardTitle: Set Helperbird JSON Policy for an Individual User in Google Admin
featureDescription:
  Learn how to paste and apply Helperbird’s JSON policy in Google Admin for a specific user so the
  subKey and optional admin controls apply just to them.
date: 2025-08-20
headerTags:
  [
    { tag: 'prerequisites', title: 'Prerequisites' },
    {
      tag: 'add-helperbird',
      title: 'Add or Locate the Helperbird Extension'
    },
    {
      tag: 'apply-json-policy',
      title: 'Apply the JSON Policy to a Single User'
    },
    {
      tag: 'verify-and-troubleshoot',
      title: 'Verify & Troubleshoot'
    }
  ]
tags: admin
url: help/set-helperbird-json-policy-for-individual-user/
permalink: help/set-helperbird-json-policy-for-individual-user/
---

This guide walks you through applying Helperbird’s JSON policy in the Google Admin Console for **just one user** in your domain. Perfect if you’re testing before rolling out widely, or if only one person needs specific settings.  

> TL;DR: You’ll open the Helperbird extension settings at **Devices → Chrome → Apps & extensions → Users & browsers**, select the **individual user**, click **Helperbird**, then paste the JSON below into the **Policy for extensions** section and hit **Save**.

---

## Prerequisites

- **Administrator access** to the Google Admin Console (admin.google.com).  
- The Helperbird Chrome extension is already installed, or you know the **extension ID**.  

**Helperbird Extension ID (Chrome):** **ahmapmilbkfamljbpgphfndeemhnajme**

---

## Add or Locate the Helperbird Extension

1. Sign in to [admin.google.com](https://admin.google.com) with an admin account.  
2. Go to **Devices** → **Chrome** → **Apps & extensions** → **Users & browsers**.  
3. In the left panel, instead of selecting an **Organizational Unit**, scroll down to find and select the **specific user** you want to configure.  
4. If Helperbird isn’t listed for them:  
   - Click **+** → **Add from Chrome Web Store**.  
   - Search for **Helperbird** or paste the ID **ahmapmilbkfamljbpgphfndeemhnajme**.  
   - Set **Installation policy** to **Force install** (recommended) or your preferred setting.  
   - Click **Save**.  
5. Click the **Helperbird** tile to open its settings panel for that user.  

---

## Apply the JSON Policy to a Single User

1. In the Helperbird settings panel, locate the **Policy** section.  
   Depending on your Admin Console version, this may appear as:  
   - **Policy for extensions**  
   - **Additional settings**  
   - **Extension settings (JSON)**  
2. Click **Edit** (or **Add**) to open the JSON editor.  
3. Paste the following JSON, replacing `YOUR SUBSCRIPTION KEY` with the correct value for this user:  

```json
{
  "subKey": {
    "Value": "YOUR SUBSCRIPTION KEY"
  },
  "isAdminControl": {
    "Value": false
  }
}
```

> Note: Set `"isAdminControl": true` only if this user should have admin-level Helperbird controls.  

4. Click **Save**.  
5. At the top right, click **Save** again (if prompted) to confirm changes for that user.  

---

## Verify & Troubleshoot

### Verify on the user’s device

1. Have the user sign in on their managed Chrome browser or Chromebook.  
2. Confirm the Helperbird extension is installed (Chrome menu → **Extensions**).  
3. Open Helperbird and check that:  
   - Features tied to the **subKey** are unlocked.  
   - Admin-only options (if enabled) appear correctly.  

### Force a policy refresh (optional)

- On Windows/macOS/Linux: Restart Chrome, or go to `chrome://policy` → **Reload policies**.  
- On ChromeOS: Reboot the device or sign out/in.  

### Common gotchas

- **Wrong user**: Double-check you applied settings at the user level, not an OU.  
- **JSON errors**: Ensure braces, quotes, and `"Value"` formatting are correct.  
- **Policy inheritance**: User-level settings override OU settings. If unexpected behavior happens, check if higher-level policies are conflicting.  
- **Propagation time**: Policies usually apply fast, but allow a few minutes and reload.  

---

## Need a hand?

If anything feels off or the JSON isn’t sticking, reach out to the  
[Helperbird support team](https://www.helperbird.com/support). We’ll help troubleshoot with you.  