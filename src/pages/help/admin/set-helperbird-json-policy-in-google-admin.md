---
new: false
footer: true
header: true
updated: true
layout: templates/new/help/post-new.html
title: How to Set Helperbird JSON Policy in Google Admin
description: Learn how Google Workspace admins can apply Helperbird's JSON policy in the Google Admin Console, setting the subscription key and admin controls for an organizational unit.
keywords: Helperbird admin policy, Chrome extension policy, Google Admin Console, JSON policy, Helperbird isAdmin, Helperbird subKey, Chrome app extension settings, Chrome policy JSON
youtubeId:
cardTitle: Set Helperbird JSON Policy in Google Admin
featureDescription: Learn how to paste and apply Helperbird's JSON policy in Google Admin so the subscription key and admin controls are enforced for your organizational unit.
date: 2025-08-20
headerTags:
  - tag: adding-helperbird-for-your-ou
    title: Adding Helperbird for Your OU
  - tag: applying-the-json-policy
    title: Applying the JSON Policy
  - tag: verifying-and-troubleshooting
    title: Verifying and Troubleshooting
tags:
  - admin
  - helpguides
  - adminHelpGuides
url: help/set-helperbird-json-policy-in-google-admin/
permalink: help/set-helperbird-json-policy-in-google-admin/
---

This guide shows you how to apply Helperbird's JSON policy for an entire organizational unit (OU) in your Google Workspace. This lets you enforce subscription keys and admin controls across all users in that OU.

**Before you start:** You'll need administrator access to the Google Admin Console and Helperbird's extension ID: **ahmapmilbkfamljbpgphfndeemhnajme**

---

## Adding Helperbird for Your OU

### Step 1: Access Your Organizational Unit

Log into **admin.google.com** and go to **Devices** → **Chrome** → **Apps & extensions** → **Users & browsers**. Select the Organizational Unit you want to configure.

---

### Step 2: Add Helperbird

If Helperbird isn't already listed for this OU, click **+** and select **Add from Chrome Web Store**. Search for Helperbird or paste the extension ID: **ahmapmilbkfamljbpgphfndeemhnajme**

---

### Step 3: Set Installation Policy

Set the **Installation policy** to **Force install** (recommended) so the extension installs automatically for all users in this OU. Click **Save**, then click on the Helperbird tile to open its settings.

**Tip:** If you manage multiple OUs, you'll need to repeat these steps for each one. Child OUs can override parent OU settings, so make sure you're configuring the right OU.

---

## Applying the JSON Policy

### Step 1: Open the Policy Editor

In the Helperbird settings panel, find the **Policy for extensions** section (it might also be called "Additional settings" or "Extension settings"). Click **Edit** or **Add** to open the JSON editor.

---

### Step 2: Paste the JSON Policy

Copy and paste this JSON, replacing `YOUR SUBSCRIPTION KEY` with your actual subscription key:

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

Click **Save** in the JSON editor, then click **Save** again at the top right to confirm all changes for this OU.

**Tip:** The `isAdminControl` value set to `true` enables admin-specific options in Helperbird. Set it to `false` if you don't want users to have admin controls.

---

## Verifying and Troubleshooting

### Step 1: Check on a Managed Device

Sign into a Chrome browser on a device within your configured OU. Helperbird should be installed automatically (check Chrome menu → **Extensions**).

---

### Step 2: Test the Settings

Open Helperbird and confirm that admin options are active (if applicable) and features tied to your subscription key are working correctly.

---

### Step 3: Force a Policy Refresh if Needed

If the settings don't appear right away:
- **On Windows/Mac/Linux**: Restart Chrome or go to `chrome://policy` and click **Reload policies**
- **On ChromeOS**: Sign out and sign back in, or restart the device

**Common issues:**
- **Wrong OU**: Double-check you edited the same OU the user belongs to
- **JSON formatting errors**: Make sure all braces, quotes, and commas are correct
- **Child OU overrides**: Verify that a child OU isn't overriding your parent OU settings
- **Wait a few minutes**: Policies can take a few minutes to propagate

---

## Video Tutorial

{% if youtubeId %}
<div class="aspect-w-16 aspect-h-9 mt-12 mb-12">
<iframe id="videos" src="https://www.youtube-nocookie.com/embed/{{youtubeId}}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
{% else %}
Coming soon.
{% endif %}

---

## Need Additional Help?

Ran into a snag while getting started? No worries at all! Just reach out to our friendly [Helperbird support team](/support/), and we'll help you smooth things out in no time.