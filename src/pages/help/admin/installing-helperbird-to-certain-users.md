---
new: false
footer: true
header: true
updated: false
layout: templates/new/help/post-new.html
title: How to Install Helperbird for Certain Users in G Suite and Microsoft 365
description: Learn how administrators can selectively install the Helperbird extension for specific users or groups within G Suite and Microsoft 365 organizations.
keywords: Dyslexia software, Reading Mode for Google Chrome, Voice typing for chrome, Text to speech for chrome, text reader, Immersive Reader, dyslexia fonts, accessibility software, dyslexia software, Helperbird for Edge, Helperbird for Firefox, Helperbird for Chrome, Opendyslexic for Chrome, OpenDyslexic, G Suite, Microsoft 365, selective deployment
youtubeId: vwT8SAJfU3E
cardTitle: Install Helperbird for Specific Users
featureDescription: Learn how administrators can selectively install the Helperbird extension for specific users or groups within G Suite and Microsoft 365 organizations.
date: 2016-01-04
headerTags:
  - tag: installing-helperbird-in-g-suite
    title: Installing Helperbird in G Suite
  - tag: installing-helperbird-in-microsoft-365
    title: Installing Helperbird in Microsoft 365
  - tag: verifying-the-installation
    title: Verifying the Installation
tags:
  - admin
  - helpguides
  - adminHelpGuides
url: help/installing-helperbird-to-certain-users/
permalink: help/installing-helperbird-to-certain-users/
---

This guide shows administrators how to install Helperbird for specific users or groups in your organization, rather than deploying it to everyone. This is useful when you want to pilot the extension with a small group or only provide it to users who need accessibility features.

**Before you start:** You'll need administrator access to either the Google Admin Console or Microsoft 365 Admin Center, and the appropriate Helperbird extension ID:
- Chrome: **ahmapmilbkfamljbpgphfndeemhnajme**
- Edge: **bkibfggdahioahpokehoiimdmdjefjmd**

---

## Installing Helperbird in G Suite

### Step 1: Access Chrome Management

Log into the Google Admin Console at **admin.google.com**. Navigate to **Devices** > **Chrome** > **Apps & Extensions**.

---

### Step 2: Add Helperbird to an Organizational Unit

Select the Organizational Unit (OU) containing the users who need Helperbird. Click the **+** icon, select **Add from Chrome Web Store**, and enter Helperbird's extension ID: **ahmapmilbkfamljbpgphfndeemhnajme**

---

### Step 3: Set to Allow Install

In the installation policy, select **Allow install & Pin** instead of "Force install." This makes Helperbird available to users in that OU without automatically installing it. Click **Save**.

**Tip:** Let your selected users know that Helperbird is now available in the Chrome Web Store and they can install it themselves. Consider sending them installation instructions to make it easier.

---

## Installing Helperbird in Microsoft 365

### Step 1: Access Edge Management

Log into the Microsoft 365 Admin Center at **admin.microsoft.com**. Navigate to **Settings** > **Services & Add-ins** > **Microsoft Edge Management**.

---

### Step 2: Add Helperbird for Specific Users

Select **Manage Extensions** and add Helperbird's extension ID: **bkibfggdahioahpokehoiimdmdjefjmd**. Choose the specific user groups or individual users who should have access to Helperbird.

---

### Step 3: Set Deployment Options

Set the installation policy to **Optional** to allow your selected users to install Helperbird when they need it. Click **Save** to apply your changes.

**Tip:** Communicate with your selected users that Helperbird is now available for them to install. You might want to include a link to installation instructions or a quick start guide.

---

## Verifying the Installation

### Step 1: Log in as a Target User

Log into Chrome or Edge using an account from your selected Organizational Unit or user group.

---

### Step 2: Check Extension Availability

For G Suite, check the Chrome Web Store to confirm Helperbird appears as an available extension. For Microsoft 365, check that Helperbird is listed in the available extensions for Edge.

---

### Step 3: Test Installation

Install Helperbird and confirm it works correctly for your target users.

**Tip:** Ask a few users from your pilot group to test the installation and provide feedback before rolling out more widely.

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