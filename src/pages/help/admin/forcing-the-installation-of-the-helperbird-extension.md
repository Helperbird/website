---
new: false
updated: false
layout: templates/new/help/post-new.html
title: How to Force Install the Helperbird Extension in a G Suite Organization
description: Step-by-step instructions for administrators on how to force install the Helperbird extension across an entire G Suite organization, ensuring all users have access to Helperbird's accessibility features.
keywords: Dyslexia software, Reading Mode for Google Chrome, Voice typing for chrome, Text to speech for chrome, text reader, Immersive Reader, dyslexia fonts, accessibility software, dyslexia software, Helperbird for Edge, Helperbird for Firefox, Helperbird for Chrome, Opendyslexic for Chrome, OpenDyslexic, G Suite admin, Google Workspace
url: help/forcing-the-installation-of-the-helperbird-extension/
permalink: help/forcing-the-installation-of-the-helperbird-extension/
name: Robert James Gabriel
headerTags:
  - tag: accessing-chrome-management
    title: Accessing Chrome Management
  - tag: force-installing-helperbird
    title: Force Installing Helperbird
  - tag: verifying-the-installation
    title: Verifying the Installation
tags:
  - admin
  - helpguides
  - adminHelpGuides
img: assets/images2/uploads/add-a-heading.png
date: 2023-09-10T18:36:26.826Z
youtubeId: vwT8SAJfU3E
cardTitle: Force Install Helperbird in G Suite
featureDescription: Step-by-step instructions for administrators on how to force install the Helperbird extension across an entire G Suite organization, ensuring all users have access to Helperbird's accessibility features.
footer: true
header: true
---

This guide is for G Suite administrators who want to automatically install Helperbird for all users in their organization. Force installing ensures everyone has access to Helperbird's features without having to install it themselves.

**Before you start:** You'll need G Suite administrator rights and must be logged into your G Suite admin account.

---

## Accessing Chrome Management

### Step 1: Open the Admin Console

Log in to your G Suite Admin console by going to **admin.google.com**.

---

### Step 2: Navigate to Chrome Management

From the Home page, go to **Devices**, then click **Chrome**, and finally select **Apps & Extensions**.

---

### Step 3: Select Your Organization

Choose the organizational unit where you want to install Helperbird. You can select your entire organization or specific groups.

**Tip:** If you want to test first, create a test organizational unit with a few users before rolling out to everyone.

---

## Force Installing Helperbird

### Step 1: Add a New Extension

Click the yellow **+** button at the bottom right corner of the page.

---

### Step 2: Enter Helperbird's Extension ID

In the dialog box, go to the **Add Chrome app or extension by ID** section and enter Helperbird's extension ID: **ahmapmilbkfamljbpgphfndeemhnajme**

---

### Step 3: Set to Force Install

In the **Installation Policy** dropdown, select **Force install**. Then click **Save** to apply your changes.

**Tip:** Force install means users can't uninstall Helperbird unless you change this setting later. If you want users to have the option to remove it, choose "Force install + pin" instead.

---

## Verifying the Installation

### Step 1: Check the Settings

After saving, you should see Helperbird listed in your Apps & Extensions with "Force install" as the policy.

---

### Step 2: Test on a User Account

Log in to a Chrome browser with a user account from your selected organizational unit. Helperbird should automatically appear in their extensions.

---

### Step 3: Confirm Across Devices

The extension will install on all Chrome browsers linked to your organization. Users will see Helperbird appear automatically the next time they open Chrome.

**Tip:** Changes can take a few minutes to propagate. If users don't see Helperbird right away, have them restart their browser or wait up to 15 minutes.

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