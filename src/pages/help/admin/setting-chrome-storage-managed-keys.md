---
new: true
updated: false
layout: templates/new/help/post-new.html
title: Setting Chrome Storage Managed Keys for Helperbird
description: Learn how to set Chrome storage managed keys using Google Admin Console. Step-by-step instructions for admins to configure secure policy management for Helperbird in your organization.
keywords: Dyslexia software, Reading Mode for Google Chrome, Voice typing for chrome, Text to speech for chrome, text reader, Immersive Reader, dyslexia fonts, accessibility software, dyslexia software, Helperbird for Edge, Helperbird for Firefox, Helperbird for Chrome, Opendyslexic for Chrome, OpenDyslexic, managed keys, Chrome policy
url: help/setting-chrome-storage-managed-keys/
permalink: help/setting-chrome-storage-managed-keys/
name: Robert James
headerTags:
  - tag: adding-helperbird-for-your-ou
    title: Adding Helperbird for Your OU
  - tag: applying-managed-keys
    title: Applying Managed Keys
  - tag: verifying-and-troubleshooting
    title: Verifying and Troubleshooting
tags:
  - admin
  - helpguides
  - adminHelpGuides
img: assets/images2/uploads/add-a-heading.png
date: 2016-01-04
youtubeId: vwT8SAJfU3E
cardTitle: Managed Keys
featureDescription: Learn how to set Chrome storage managed keys using Google Admin Console. Step-by-step instructions for admins to configure secure policy management for Helperbird in your organization.
footer: true
header: true
---

This guide shows you how to set Chrome storage managed keys for Helperbird in your Google Workspace. Managed keys allow you to enforce subscription settings and admin controls across your organizational unit through Chrome's policy system.

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

## Applying Managed Keys

### Step 1: Open the Policy Editor

In the Helperbird settings panel, find the **Policy for extensions** section (it might also be called "Additional settings" or "Extension settings"). Click **Edit** or **Add** to open the JSON editor.

---

### Step 2: Paste the Managed Keys JSON

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

**Tip:** Setting managed keys through Chrome's policy system ensures users can't modify these settings on their own. The `isAdminControl` value set to `true` enables admin-specific options.

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
<iframe width="560" height="315" class="aspect-video rounded-2xl mb-8 mt-8" src="https://www.youtube-nocookie.com/embed/{{ youtubeId }}?si=6BtkhydcpJ8UFQ_l" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
{% else %}
Coming soon.
{% endif %}

---

## Need Additional Help?

Ran into a snag while getting started? No worries at all! Just reach out to our friendly [Helperbird support team](/support/), and we'll help you smooth things out in no time.