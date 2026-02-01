---
new: false
footer: true
header: true
updated: true
layout: templates/new/help/post-new.html
title: How to Set Helperbird JSON Policy for a User Group in Google Admin
description: Learn how Google Workspace admins can apply Helperbird's JSON policy in the Google Admin Console for a specific user group, setting their subscription key and admin permissions.
keywords: Helperbird admin policy, Chrome extension policy, Google Admin Console, JSON policy, Helperbird isAdmin, Helperbird subKey, Chrome app extension settings, Chrome policy JSON, Google Admin user group
youtubeId:
cardTitle: Set Helperbird JSON Policy for User Group
featureDescription: Learn how to paste and apply Helperbird's JSON policy in Google Admin for a group of users so the subscription key and optional admin controls apply just to them.
date: 2025-08-20
headerTags:
  - tag: adding-helperbird-for-the-group
    title: Adding Helperbird for the Group
  - tag: applying-the-json-policy
    title: Applying the JSON Policy
  - tag: verifying-and-troubleshooting
    title: Verifying and Troubleshooting
tags:
  - admin
  - helpguides
  - adminHelpGuides
url: help/set-helperbird-json-policy-for-user-group/
permalink: help/set-helperbird-json-policy-for-user-group/
---

This guide shows you how to apply Helperbird's JSON policy for a specific user group in your Google Workspace. This is perfect for phased rollouts, pilot programs, or giving Helperbird features to select teams.

**Before you start:** You'll need administrator access to the Google Admin Console and Helperbird's extension ID: **ahmapmilbkfamljbpgphfndeemhnajme**

---

## Adding Helperbird for the Group

### Step 1: Access Group Settings

Log into **admin.google.com** and go to **Devices** → **Chrome** → **Apps & extensions** → **Users & browsers**. In the left panel, select the specific user group you want to configure (not an organizational unit or individual user).

---

### Step 2: Add Helperbird

If Helperbird isn't already listed for this group, click **+** and select **Add from Chrome Web Store**. Search for Helperbird or paste the extension ID: **ahmapmilbkfamljbpgphfndeemhnajme**

---

### Step 3: Set Installation Policy

Set the **Installation policy** to **Force install** (recommended) so the extension installs automatically for all users in this group. Click **Save**, then click on the Helperbird tile to open its settings.

**Tip:** User groups let you target specific teams without affecting your entire organization. This is great for testing or gradual rollouts.

---

## Applying the JSON Policy

### Step 1: Open the Policy Editor

In the Helperbird settings panel, find the **Policy for extensions** section (it might also be called "Additional settings" or "Extension settings"). Click **Edit** or **Add** to open the JSON editor.

---

### Step 2: Paste the JSON Policy

Copy and paste this JSON, replacing `YOUR SUBSCRIPTION KEY` with the actual subscription key for this group:

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

---

### Step 3: Save Your Changes

Click **Save** in the JSON editor, then click **Save** again at the top right to confirm all changes for this group.

**Tip:** Set `"isAdminControl": true` only if everyone in this group needs admin-level controls in Helperbird. Most groups should have this set to `false`.

---

## Verifying and Troubleshooting

### Step 1: Check on a Group Member's Device

Have someone from the group sign into their managed Chrome browser. Helperbird should be installed automatically (check Chrome menu → **Extensions**).

---

### Step 2: Test the Settings

Ask a group member to open Helperbird and confirm that features tied to their subscription key are unlocked and working correctly.

---

### Step 3: Force a Policy Refresh if Needed

If the settings don't appear right away:
- **On Windows/Mac/Linux**: Restart Chrome or go to `chrome://policy` and click **Reload policies**
- **On ChromeOS**: Sign out and sign back in, or restart the device

**Common issues:**
- **Wrong target**: Double-check you applied settings at the user group level, not an organizational unit
- **JSON formatting errors**: Make sure all braces, quotes, and commas are correct
- **Policy conflicts**: User group policies override OU policies, so check for conflicts
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