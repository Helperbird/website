---
new: false
footer: true
header: true
updated: true
layout: templates/new/help/post-new.html
title: How to Set Helperbird JSON Policy for an Individual User in Google Admin
description: Learn how Google Workspace admins can apply Helperbird's JSON policy in the Google Admin Console for a single user, setting their subscription key and admin permissions.
keywords: Helperbird admin policy, Chrome extension policy, Google Admin Console, JSON policy, Helperbird isAdmin, Helperbird subKey, Chrome app extension settings, Chrome policy JSON, Google Admin user settings
youtubeId:
cardTitle: Set Helperbird JSON Policy for Individual User
featureDescription: Learn how to paste and apply Helperbird's JSON policy in Google Admin for a specific user so the subscription key and optional admin controls apply just to them.
date: 2025-08-20
headerTags:
  - tag: adding-helperbird-for-the-user
    title: Adding Helperbird for the User
  - tag: applying-the-json-policy
    title: Applying the JSON Policy
  - tag: verifying-and-troubleshooting
    title: Verifying and Troubleshooting
tags:
  - admin
  - helpguides
  - adminHelpGuides
url: help/set-helperbird-json-policy-for-individual-user/
permalink: help/set-helperbird-json-policy-for-individual-user/
---

This guide shows you how to apply Helperbird's JSON policy for just one user in your Google Workspace. This is perfect for testing before rolling out to everyone, or when only specific users need Helperbird.

**Before you start:** You'll need administrator access to the Google Admin Console and Helperbird's extension ID: **ahmapmilbkfamljbpgphfndeemhnajme**

---

## Adding Helperbird for the User

### Step 1: Access User Settings

Log into **admin.google.com** and go to **Devices** → **Chrome** → **Apps & extensions** → **Users & browsers**. In the left panel, select the specific user you want to configure (not an organizational unit).

---

### Step 2: Add Helperbird

If Helperbird isn't already listed for this user, click **+** and select **Add from Chrome Web Store**. Search for Helperbird or paste the extension ID: **ahmapmilbkfamljbpgphfndeemhnajme**

---

### Step 3: Set Installation Policy

Set the **Installation policy** to **Force install** (recommended) so the extension installs automatically for this user. Click **Save**, then click on the Helperbird tile to open its settings.

**Tip:** Force install ensures the user gets Helperbird without having to install it manually.

---

## Applying the JSON Policy

### Step 1: Open the Policy Editor

In the Helperbird settings panel, find the **Policy for extensions** section (it might also be called "Additional settings" or "Extension settings"). Click **Edit** or **Add** to open the JSON editor.

---

### Step 2: Paste the JSON Policy

Copy and paste this JSON, replacing `YOUR SUBSCRIPTION KEY` with the actual subscription key for this user:

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

---

### Step 3: Save Your Changes

Click **Save** in the JSON editor, then click **Save** again at the top right to confirm all changes for this user.

**Tip:** Set `"isAdminControl": true` only if this user needs admin-level controls in Helperbird. Most users should have this set to `false`.

---

## Verifying and Troubleshooting

### Step 1: Check on the User's Device

Have the user sign into their managed Chrome browser. Helperbird should be installed automatically (check Chrome menu → **Extensions**).

---

### Step 2: Test the Settings

Ask the user to open Helperbird and confirm that features tied to their subscription key are unlocked and working correctly.

---

### Step 3: Force a Policy Refresh if Needed

If the settings don't appear right away:
- **On Windows/Mac/Linux**: Restart Chrome or go to `chrome://policy` and click **Reload policies**
- **On ChromeOS**: Sign out and sign back in, or restart the device

**Common issues:**
- **Wrong user selected**: Double-check you applied settings at the user level, not an organizational unit
- **JSON formatting errors**: Make sure all braces, quotes, and commas are correct
- **Wait a few minutes**: Policies can take a few minutes to propagate

---

## Video Tutorial

{% if youtubeId %}
<iframe width="560" height="315" class="aspect-video rounded-2xl mb-8 mt-8" src="https://www.youtube-nocookie.com/embed/{{ youtubeId }}?si=6BtkhydcpJ8UFQ_l" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
{% else %}
Coming soon.
{% endif %}

---

## Need Additional Help?

Ran into a snag while getting started? No worries at all! Just reach out to our friendly [Helperbird support team](/support/), and we'll help you smooth things out in no time.