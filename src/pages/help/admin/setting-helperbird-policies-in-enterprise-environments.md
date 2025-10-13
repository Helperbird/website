---
new: false
footer: true
header: true
updated: false
layout: templates/new/help/post-new.html
title: Setting Helperbird Policies in Enterprise Environments
description: Learn how administrators can configure Helperbird settings across Windows, ChromeOS, and macOS platforms using managed policies for subscription keys, exam mode, and admin controls.
keywords: Dyslexia software, Reading Mode for Google Chrome, Voice typing for chrome, Text to speech for chrome, text reader, Immersive Reader, dyslexia fonts, accessibility software, dyslexia software, Helperbird for Edge, Helperbird for Firefox, Helperbird for Chrome, Opendyslexic for Chrome, OpenDyslexic, enterprise policy, Chrome extension policy
youtubeId: vwT8SAJfU3E
cardTitle: Setting Policies in Enterprise
featureDescription: Learn how administrators can configure Helperbird settings across Windows, ChromeOS, and macOS platforms using managed policies for subscription keys, exam mode, and admin controls.
date: 2016-01-04
headerTags:
  - tag: understanding-policy-settings
    title: Understanding Policy Settings
  - tag: configuring-policies-on-windows
    title: Configuring Policies on Windows
  - tag: configuring-policies-on-chromeos
    title: Configuring Policies on ChromeOS
  - tag: configuring-policies-on-macos
    title: Configuring Policies on macOS
tags:
  - admin
  - helpguides
  - adminHelpGuides
url: help/setting-helperbird-policies-in-enterprise-environments/
permalink: help/setting-helperbird-policies-in-enterprise-environments/
---

This guide shows administrators how to configure Helperbird settings across your organization using enterprise policies. You can control subscription keys, exam mode, and admin permissions on Windows, ChromeOS, and macOS platforms.

**Before you start:** You'll need administrator access to your organization's management tools and Helperbird's extension ID: **ahmapmilbkfamljbpgphfndeemhnajme**

---

## Understanding Policy Settings

Helperbird supports three key policy settings that you can configure for your organization:

**subKey (Subscription Key)**
- Your Helperbird Pro subscription key
- Authenticates and activates Pro features across the enterprise
- Ensures all users have access without individual subscriptions

**isExamMode (Exam Mode)**
- Enables/disables exam mode (true/false)
- Restricts certain features during exams
- Useful for educational institutions during test periods

**isAdminControl (Admin Control)**
- Controls whether settings can be changed by users (true/false)
- When set to true, only admins can modify Helperbird settings
- Helps maintain uniformity and compliance

---

## Configuring Policies on Windows

### Step 1: Open Group Policy Editor

Search for **gpedit.msc** in the Start menu and open the Group Policy Editor. Navigate to **User Configuration** → **Administrative Templates** → **Google** → **Google Chrome** → **Extensions**.

---

### Step 2: Configure the Extension Policy

Find **Configure extension installation policy**, right-click, and select **Edit**. Add Helperbird's extension ID: **ahmapmilbkfamljbpgphfndeemhnajme**

---

### Step 3: Apply JSON Configuration

In the **Additional Policies for Chrome** section, paste this JSON configuration (replace **Your_Pro_Subscription_Key_Here** with your actual subscription key):

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

Refresh the policy across your network to apply the settings to all users.

**Tip:** Set `isExamMode` and `isAdminControl` to `false` if you don't need those features enabled.

---

## Configuring Policies on ChromeOS

### Step 1: Access Admin Console

Log into **admin.google.com** and navigate to **Devices** → **Chrome** → **Apps & extensions** → **Users & browsers**. Select the Organizational Unit where you want to apply Helperbird settings.

---

### Step 2: Add the Extension

In the Extensions section, select **Managed Extensions**. Add Helperbird's extension ID: **ahmapmilbkfamljbpgphfndeemhnajme**

---

### Step 3: Apply JSON Configuration

In the **ExtensionSettings** section, paste this JSON configuration (replace **Your_Pro_Subscription_Key_Here** with your actual subscription key):

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

Click **Save** to apply the settings to all users in the selected OU.

**Tip:** Note that ChromeOS uses a slightly different JSON structure with `"Value"` fields for each setting.

---

## Configuring Policies on macOS

### Step 1: Access Management Tools

Use Apple's Profile Manager or your organization's Mobile Device Management (MDM) solution. Navigate to the configuration profile creation section.

---

### Step 2: Create Chrome Extension Profile

Go to the extensions settings in the profile creation section. Add Helperbird's extension ID: **ahmapmilbkfamljbpgphfndeemhnajme**

---

### Step 3: Apply Plist Configuration

Input this plist configuration (replace **Your_Pro_Subscription_Key_Here** with your actual subscription key):

```xml
<dict>
  <key>ExtensionSettings</key>
  <dict>
    <key>ahmapmilbkfamljbpgphfndeemhnajme</key>
    <dict>
      <key>subKey</key>
      <string>Your_Pro_Subscription_Key_Here</string>
      <key>isExamMode</key>
      <true/>
      <key>isAdminControl</key>
      <true/>
    </dict>
  </dict>
</dict>
```

Deploy the configuration profile to all macOS devices in your network.

**Tip:** Change `<true/>` to `<false/>` to disable exam mode or admin control features.

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