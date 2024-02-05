---
new: false
header: true
updated: true
layout: templates/new/help/post.html
title: Setting Helperbird Policies in Enterprise Environments

description: In enterprise environments, administrators can control Helperbird settings across Windows, ChromeOS, and MacOS platforms using a managed schema.


keywords:
  Dyslexia software, Reading Mode for Google Chrome, Voice typing for chrome, Text to speech for
  chrome,  text reader, Immersive Reader, dyslexia fonts, accessibility software, dyslexia software,
  Helperbird for Edge, Helperbird for Firefox, Helperbird for Chrome, Opendyslexic for Chrome,
  OpenDyslexic

youtubeId: vwT8SAJfU3E
cardTitle: Setting Policies
featureDescription: In enterprise environments, administrators can control Helperbird settings across Windows, ChromeOS, and MacOS platforms using a managed schema.
date: 2016-01-04
tags: adminTools
url: help/setting-helperbird-policies-in-enterprise-environments/
---

## Key Points

**Version Requirement**: Ensure you have Helperbird version 116.0.0.

**Enterprise Feature**: Learn how to add a subscription key for all users.

## Overview

In enterprise settings, administrators can manage Helperbird extension settings using a managed schema. This allows for configuration of properties such as the subscription key (`subKey`), exam mode (`isExamMode`), and admin control (`isAdminControl`).

### Windows Configuration

**Step 1**: Access Group Policy Editor

   - Search for `gpedit.msc` in the Start menu and open the Group Policy Editor.

**Step 2**: Navigate to Chrome Policies

   - Go to `User Configuration` -> `Administrative Templates` -> `Google` -> `Google Chrome` -> `Extensions`.

**Step 3**: Configure Helperbird Extension Policy

   - Find `Configure extension installation policy`, right-click, and select `Edit`.
   - Add Helperbird's extension ID: `ahmapmilbkfamljbpgphfndeemhnajme`.

**Step 4**: Apply Managed Schema Settings

   - Use the `Additional Policies for Chrome` section to input the JSON configuration for Helperbird's settings.

**Step 5**: Deploy Policy

   - Refresh the policy across the network to apply these settings to all users.

### ChromeOS Configuration

**Step 1**: Open Google Admin Console

   - Access at `admin.google.com` and navigate to `Devices` -> `Chrome` -> `Settings` -> `Users & Browsers`.

**Step 2**: Select Organizational Unit (OU)

   - Choose the OU where Helperbird settings are to be applied.

**Step 3**: Manage Extension Settings

   - In the `Extensions` section, select `Managed Extensions`.
   - Add Helperbird's extension ID: `ahmapmilbkfamljbpgphfndeemhnajme`.

**Step 4**: Input JSON Configuration for Helperbird

   - In `ExtensionSettings`, paste the JSON configuration for Helperbird.

**Step 5**: Save and Deploy Configuration

   - Apply the settings to propagate them to all users under the selected OU.

### MacOS Configuration

**Step 1**: Use Managed Preferences Tool

   - Use Apple's Profile Manager or a third-party Mobile Device Management (MDM) solution.

**Step 2**: Create Configuration Profile for Chrome Extensions

   - Go to the extensions settings in the profile creation section.

**Step 3**: Include Helperbird Extension

   - Add Helperbird’s extension ID: `ahmapmilbkfamljbpgphfndeemhnajme`.

**Step 4**: Apply JSON Configuration

   - Input specific JSON settings for Helperbird extension.

**Step 5**: Deploy Configuration Profile

   - Distribute the profile to MacOS devices in your network and ensure policy application.


### Understanding Helperbird Policy Settings

The managed schema for Helperbird includes three key settings that administrators can configure for enterprise environments:

#### `subKey` (Subscription Key)

**Description**: The `subKey` represents the subscription key associated with your Helperbird Pro account.
**Type**: String.
**Purpose**: Authenticates and activates Helperbird Pro features across the enterprise. Ensures all users within the organization have access to Pro version without individual subscriptions.
**Usage**: Enter the Pro subscription key provided by Helperbird. Applied to all instances of Helperbird across the organization.

#### `isExamMode` (Exam Mode)

**Description**: Enables or disables a mode designed for exam conditions.
**Type**: Boolean (True/False).
**Purpose**: Restricts certain features of Helperbird to comply with exam standards. Ensures students do not access tools/features not permitted during exams.
**Usage**: Set to `true` to activate exam mode, `false` to deactivate. Useful in educational institutions during test periods.

#### `isAdminControl` (Admin Control)

**Description**: Indicates whether Helperbird settings are under administrative control.
**Type**: Boolean (True/False).
**Purpose**: Ensures only administrators can alter Helperbird settings, preventing unauthorized changes by end-users.
**Usage**: Set to `true` for administrative control over settings. Useful for maintaining uniformity and compliance in Helperbird usage within the organization.

These settings are configured in the JSON schema applied to the Helperbird extension through enterprise management consoles or tools.


## Examples

### Windows Policy (Group Policy) Example

In this Windows Group Policy example, replace "Your_Pro_Subscription_Key_Here" with your actual Helperbird Pro subscription key. The isExamMode and isAdminControl are set to true, indicating they are active. Adjust these settings as needed.

```js

   {
      "ExtensionSettings": {
         "ahmapmilbkfamljbpgphfndeemhnajme": {
               "subKey": "Your_Pro_Subscription_Key_Here",
               "isExamMode": true,
               "isAdminControl": true
         }
      }
   }

```

### MacOS Plist Example

For the MacOS plist example, you should again replace "Your_Pro_Subscription_Key_Here" with your actual subscription key. The boolean values for isExamMode and isAdminControl are set to <true/>, indicating they are enabled. Modify these as required for your environment.

```bash

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

### ChromeOS Configuration Example


- The "ahmapmilbkfamljbpgphfndeemhnajme" is the extension ID for Helperbird.

- The "subKey" field should be replaced with your actual Helperbird Pro subscription key.

- The "isExamMode" and "isAdminControl" are set to true, indicating that these features are enabled. You can set these to false if you want to disable them.

- This JSON configuration can be used in the Google Admin Console to apply these settings to the Helperbird extension for ChromeOS devices within your organization. Adjust the values as needed for your specific setup.

```js
{
  "ExtensionSettings": {
    "ahmapmilbkfamljbpgphfndeemhnajme": {
      "Policy": {
        "subKey": {
          "Value": "Your_Pro_Subscription_Key_Here"
        },
        "isExamMode": {
          "Value": true
        },
        "isAdminControl": {
          "Value": true
        }
      }
    }
  }
}
```

## Need Help?

Contact the Helperbird support team for assistance with the Dyslexia Ruler.


