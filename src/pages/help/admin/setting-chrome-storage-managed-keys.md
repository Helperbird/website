---
new: true
updated: false
layout: templates/new/help/post-new.html
title: Setting Chrome Storage Managed Keys for Helperbird
description:
  Learn how to set Chrome storage managed keys using Google Admin Console with this comprehensive
  Helperbird guide for admins. Step-by-step instructions to ensure secure and compliant policy
  management for your organization.
keywords:
  Dyslexia software, Reading Mode for Google Chrome, Voice typing for chrome, Text to speech for
  chrome, text reader, Immersive Reader, dyslexia fonts, accessibility software, dyslexia software,
  Helperbird for Edge, Helperbird for Firefox, Helperbird for Chrome, Opendyslexic for Chrome,
  OpenDyslexic
url: help/setting-chrome-storage-managed-keys/
permalink: help/setting-chrome-storage-managed-keys/
name: 'Robert James '
headerTags: []
tags: admin
img: assets/images2/uploads/add-a-heading.png
date: 2016-01-04
youtubeId: vwT8SAJfU3E
cardTitle: Managed Keys
featureDescription:
  Learn how to set Chrome storage managed keys using Google Admin Console with this comprehensive
  Helperbird guide for admins. Step-by-step instructions to ensure secure and compliant policy
  management for your organization.
footer: true
header: true
---

This guide walks you through applying Helperbird’s JSON policy in the Google Admin Console so you can enforce two key settings across your domain.

> TL;DR: You’ll open the Helperbird extension settings at **Devices → Chrome → Apps & extensions**, pick your OU, click **Helperbird**, then paste the JSON below into the **Policy for extensions** (or **Extension settings/JSON**) section and hit **Save**.

## Prerequisites

**Administrator access** to the Google Admin Console (admin.google.com).

The Helperbird Chrome extension is either already added to your OU or you know the **extension ID**.

**Helperbird Extension ID (Chrome):** **ahmapmilbkfamljbpgphfndeemhnajme**

## Add or Locate the Helperbird Extension

1. Sign in to  [admin.google.com](https://admin.google.com) with an admin account.  
2. Go to **Devices** → **Chrome** → **Apps & extensions** → **Users & browsers**.  
3. Select the **Organizational Unit (OU)** you want to configure.  
4. If Helperbird isn’t listed:

Click **+** → **Add from Chrome Web Store**.
Search for **Helperbird** or paste the ID **ahmapmilbkfamljbpgphfndeemhnajme**.
Set **Installation policy** to **Force install** (recommended) or your preferred setting.
Click **Save**.

5. Click the **Helperbird** tile to open its settings panel for the selected OU.

## Apply the JSON Policy (isAdmin & subKey)

In the Helperbird settings panel, locate the **Policy** section. 

Depending on your Admin Console version, this may appear as:
**Policy for extensions**
**Additional settings**
**Extension settings (JSON)**.

2. Click **Edit** (or **Add**) to open the JSON editor.
3. Paste the following JSON, updating the `subKey` value if needed:

```json
{
  "subKey": {
    "Value": "YOUR SUBSCRIPTION KEY"
  },
  "isAdminControl": {
    "Value": true
  }
}
```

4. Click **Save**.
5. At the top right of the page, click **Save** again (if prompted) to confirm changes for the OU.

> Pro tip: If you manage multiple OUs, repeat these steps for each OU where you want this policy applied. Policies in child OUs can override parent OU settings, so make sure you’re in the right OU before editing.

## Verify & Troubleshoot

### Verify on a managed device
1. On a device within the configured OU, sign in with a managed user.  
2. Ensure the Helperbird extension is installed (Chrome menu → **Extensions**).  
3. Open Helperbird and confirm that:

The **admin-specific options** (if applicable to your plan) are active.
The **subKey**-based features/license routing behaves as expected.

### Force a policy refresh (optional)
On Windows/macOS/Linux: Restart Chrome, or visit `chrome://policy` → **Reload policies**.

On ChromeOS: Reboot the device or sign out/in to pull the latest policy.

### Common gotchas

**Wrong OU**: Double-check you edited the same OU the user/device belongs to.

**JSON formatting**: Make sure the JSON is valid (matching braces, proper quotes, correct `Value` types).  

**Policy precedence**: A child OU may override a parent OU—verify inheritance settings.  

**Propagation time**: Policies usually apply quickly, but allow a few minutes and refresh policies if needed.

---

## Need a hand?

If anything’s acting sus or you want us to sanity-check your JSON, ping the  
[Helperbird support team](https://www.helperbird.com/support). We’ve got you.