---
new: true
footer: true
header: true
updated: false
layout: templates/new/help/post-new.html
title: How to Deploy Helperbird Using Microsoft Intune
description:
  Step-by-step guide for IT administrators on deploying the Helperbird browser extension using Microsoft Intune for Chrome and Edge.
keywords:
  Helperbird Intune, deploy Helperbird Microsoft, Helperbird MDM, Helperbird enterprise deployment,
  Intune browser extension, Helperbird Edge deployment
youtubeId: vwT8SAJfU3E
cardTitle: Deploy with Microsoft Intune
featureDescription:
  Step-by-step guide for deploying Helperbird using Microsoft Intune.
headerTags:
  [
    { tag: 'deploy-to-edge', title: 'Deploy to Edge' },
    { tag: 'deploy-to-chrome', title: 'Deploy to Chrome' },
    { tag: 'verify-deployment', title: 'Verify Deployment' }
  ]
tags:
  - admin
  - helpguides
  - adminHelpGuides
url: help/helperbird-intune-deployment/
permalink: help/helperbird-intune-deployment/
date: 2025-01-26
---

Microsoft Intune allows you to deploy and manage browser extensions across your organization. Here's how to deploy Helperbird to your users.

---

## Deploy to Microsoft Edge

### Step 1: Access Intune Admin Center

Log into the [Microsoft Intune admin center](https://intune.microsoft.com) with your administrator account.

---

### Step 2: Navigate to Configuration Profiles

Go to **Devices > Configuration profiles** and click **Create profile**.

Select:
- Platform: **Windows 10 and later**
- Profile type: **Templates**
- Template name: **Administrative Templates**

---

### Step 3: Configure Edge Extensions

In the profile settings, navigate to:
**Computer Configuration > Microsoft Edge > Extensions**

Enable **Control which extensions are installed silently** and add Helperbird's Edge extension ID:

```
bkibfggdahioahpokehoiimdmdjefjmd
```

Set the installation mode to **Force install**.

---

### Step 4: Assign the Profile

Assign the configuration profile to your target groups (users or devices) and save.

---

## Deploy to Google Chrome

### Step 1: Create a New Profile

In the Intune admin center, go to **Devices > Configuration profiles** and create a new profile for Chrome.

---

### Step 2: Configure Chrome Extensions

Navigate to the Chrome extension settings and enable **Configure the list of force-installed apps and extensions**.

Add Helperbird's Chrome extension ID:

```
ahmapmilbkfamljbpgphfndeemhnajme
```

---

### Step 3: Add Update URL

For Chrome extensions, you'll also need the update URL:

```
https://clients2.google.com/service/update2/crx
```

The full entry should be:
```
ahmapmilbkfamljbpgphfndeemhnajme;https://clients2.google.com/service/update2/crx
```

---

### Step 4: Assign and Deploy

Assign the profile to your target groups and save. The extension will be installed on devices during the next sync.

---

## Verify Deployment

### Step 1: Check Device Sync

Ensure target devices have synced with Intune. This can take up to 8 hours for new policies.

---

### Step 2: Verify in Browser

On a target device, open Edge or Chrome and check that Helperbird appears in the extensions list. It should be installed and marked as "Installed by your organization."

---

### Step 3: Test Functionality

Click the Helperbird icon to ensure it opens correctly and features are accessible.

**Tip:** If the extension doesn't appear immediately, try restarting the browser or forcing a device sync in Intune.

---

## Adding License Key via Intune

To activate Pro features, you can also deploy the license key through Intune using managed preferences or registry settings. Contact our support team for specific guidance on your configuration.

---

## Video Tutorial

{% if youtubeId %}
<iframe width="560" height="315" class="aspect-video rounded-2xl mb-8 mt-8" src="https://www.youtube-nocookie.com/embed/{{ youtubeId }}?si=6BtkhydcpJ8UFQ_l" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
{% else %}
Coming soon
{% endif %}

---

## Need Additional Help?

Having trouble with Intune deployment? Reach out to our [Helperbird support team](/support/) and we'll help you get set up!
