---
new: false
footer: true
header: true
updated: true
layout: templates/new/help/post-new.html
title: How to Set Helperbird JSON Policy for a User Group in Google Admin
description:
  This guide shows Google Workspace admins how to apply Helperbird’s JSON policy in the Google Admin
  Console for a specific user group—setting the subKey and optional isAdmin flag for the Helperbird Chrome extension.
keywords:
  Helperbird admin policy, Chrome extension policy, Google Admin Console, JSON policy, Helperbird isAdmin, Helperbird subKey, Chrome app extension settings, Chrome policy JSON, Google Admin user group
youtubeId:
cardTitle: Set Helperbird JSON Policy for a User Group in Google Admin
featureDescription:
  Learn how to paste and apply Helperbird’s JSON policy in Google Admin for a group of users so the
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
      title: 'Apply the JSON Policy to a User Group'
    },
    {
      tag: 'verify-and-troubleshoot',
      title: 'Verify & Troubleshoot'
    }
  ]
tags: admin
url: help/set-helperbird-json-policy-for-user-group/
permalink: help/set-helperbird-json-policy-for-user-group/
---

This guide walks you through applying Helperbird’s JSON policy in the Google Admin Console for **a specific user group** in your domain. This is ideal for phased rollouts, pilot programs, or granting specific features to a select team.  

> TL;DR: You’ll open the Helperbird extension settings at **Devices → Chrome → Apps & extensions → Users & browsers**, select the **user group**, click **Helperbird**, then paste the JSON below into the **Policy for extensions** section and hit **Save**.

---

## Prerequisites

- **Administrator access** to the Google Admin Console (admin.google.com).  
- The Helperbird Chrome extension is already installed, or you know the **extension ID**.  

**Helperbird Extension ID (Chrome):** **ahmapmilbkfamljbpgphfndeemhnajme**

---

## Add or Locate the Helperbird Extension

1. Sign in to [admin.google.com](https://admin.google.com) with an admin account.  
2. Go to **Devices** → **Chrome** → **Apps & extensions** → **Users & browsers**.  
3. In the left panel, instead of choosing the entire **Organizational Unit**, select the **user group** you want to configure.  
   - User groups appear under the same selection tree but let you target a subset of users.  
4. If Helperbird isn’t listed for this group:  
   - Click **+** → **Add from Chrome Web Store**.  
   - Search for **Helperbird** or paste the ID **ahmapmilbkfamljbpgphfndeemhnajme**.  
   - Set **Installation policy** to **Force install** (recommended) or your preferred setting.  
   - Click **Save**.  
5. Click the **Helperbird** tile to open its settings panel for that group.  

---

## Apply the JSON Policy to a User Group

1. In the Helperbird settings panel, locate the **Policy** section.  
   Depending on your Admin Console version, this may appear as:  
   - **Policy for extensions**  
   - **Additional settings**  
   - **Extension settings (JSON)**  
2. Click **Edit** (or **Add**) to open the JSON editor.  
3. Paste the following JSON, replacing `YOUR SUBSCRIPTION KEY` with the correct key for this group:  

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

> Note: Set `"isAdminControl": true` only if all members of this group should have admin-level Helperbird controls.  

4. Click **Save**.  
5. At the top right, click **Save** again (if prompted) to confirm changes for the group.  

---

## Verify & Troubleshoot

### Verify on a user’s device

1. Have someone in the group sign in on their managed Chrome browser or Chromebook.  
2. Confirm the Helperbird extension is installed (Chrome menu → **Extensions**).  
3. Open Helperbird and check that:  
   - Features tied to the **subKey** are unlocked.  
   - Admin-only options (if enabled) appear correctly.  

### Force a policy refresh (optional)

- On Windows/macOS/Linux: Restart Chrome, or go to `chrome://policy` → **Reload policies**.  
- On ChromeOS: Reboot the device or sign out/in.  

### Common gotchas

- **Wrong target**: Double-check you applied settings at the **user group** level, not an OU or individual user.  
- **JSON errors**: Ensure braces, quotes, and `"Value"` formatting are correct.  
- **Policy precedence**: User group policies override OU policies. Verify no conflicts are happening.  
- **Propagation time**: Policies usually apply fast, but allow a few minutes and reload.  

---

## Need a hand?

If the policy isn’t applying to your group as expected, reach out to the  
[Helperbird support team](https://www.helperbird.com/support). We’ll help troubleshoot with you.  