---
new: false
header: true
header: true
layout: templates/new/help/post.html
title: Setting Helperbird Policies in Enterprise Environments

description: In enterprise environments, administrators can control Helperbird settings across Windows, ChromeOS, and MacOS platforms using a managed schema.


keywords:
  Dyslexia software, Reading Mode for Google Chrome, Voice typing for chrome, Text to speech for
  chrome,  text reader, Immersive Reader, dyslexia fonts, accessibility software, dyslexia software,
  Helperbird for Edge, Helperbird for Firefox, Helperbird for Chrome, Opendyslexic for Chrome,
  OpenDyslexic

youtubeId: PfILiWebkuc
cardTitle: Setting Helperbird Policies in Enterprise Environments
featureDescription: In enterprise environments, administrators can control Helperbird settings across Windows, ChromeOS, and MacOS platforms using a managed schema.
date: 2016-01-04
tags: adminTools
url: help/setting-helperbird-policies-in-enterprise-environments/
---



## Overview
In enterprise settings, administrators can control and manage Helperbird extension settings using a managed schema. The schema enables the configuration of properties such as subscription key (`subKey`), exam mode (`isExamMode`), and admin control (`isAdminControl`)



### Windows Configuration

1. **Access Group Policy Editor**: 
   - Search for `gpedit.msc` in the Start menu.
   - Open the Group Policy Editor.

2. **Navigate to Chrome Policies**: 
   - Go to `User Configuration` -> `Administrative Templates` -> `Google` -> `Google Chrome` -> `Extensions`.

3. **Configure Helperbird Extension Policy**: 
   - Find `Configure extension installation policy`.
   - Right-click and select `Edit`.
   - Add Helperbird's extension ID: `ahmapmilbkfamljbpgphfndeemhnajme`.

4. **Apply Managed Schema Settings**: 
   - Use the `Additional Policies for Chrome` section.
   - Input the specific JSON configuration for Helperbird's settings.

5. **Deploy Policy**: 
   - Ensure that the policy is refreshed across the network to apply these settings to all relevant users.

### ChromeOS Configuration

1. **Open Google Admin Console**: 
   - Access the console at `admin.google.com`.
   - Navigate to `Devices` -> `Chrome` -> `Settings` -> `Users & Browsers`.

2. **Select the Appropriate Organizational Unit (OU)**: 
   - Choose the OU where you want to apply the Helperbird settings.

3. **Manage Extension Settings**: 
   - Scroll down to the `Extensions` section.
   - Locate and select `Managed Extensions`.
   - Add Helperbird's extension ID: `ahmapmilbkfamljbpgphfndeemhnajme`.

4. **Input JSON Configuration for Helperbird**: 
   - In the `ExtensionSettings` section, paste the JSON configuration for Helperbird.
   - This configures settings like `subKey`, `isExamMode`, and `isAdminControl`.

5. **Save and Deploy the Configuration**: 
   - Apply the settings, ensuring they propagate to all users under the selected OU.

### MacOS Configuration

1. **Use a Managed Preferences Tool**: 
   - Access Apple's Profile Manager or a third-party Mobile Device Management (MDM) solution.

2. **Create a Configuration Profile for Chrome Extensions**: 
   - Navigate to the extensions settings in the profile creation section.

3. **Include Helperbird Extension**: 
   - Add Helperbird’s extension ID: `ahmapmilbkfamljbpgphfndeemhnajme`.

4. **Apply JSON Configuration**: 
   - Input the specific JSON settings for the Helperbird extension.
   - Configure the `subKey`, `isExamMode`, and `isAdminControl` as per requirement.

5. **Deploy the Configuration Profile**: 
   - Distribute the profile to relevant MacOS devices in your network.
   - Ensure the policy applies correctly to all targeted devices.


### Understanding Helperbird Policy Settings

The managed schema for Helperbird includes three key settings that administrators can configure for enterprise environments. These settings are:

#### `subKey` (Subscription Key)
- **Description**: The `subKey` represents the subscription key associated with your Helperbird Pro account.
- **Type**: String.
- **Purpose**: This key is used to authenticate and activate the Helperbird Pro features across the enterprise. It ensures that all users within the organization have access to the Pro version of Helperbird without needing individual subscriptions.
- **Usage**: Enter the Pro subscription key provided by Helperbird. This key will be applied to all instances of Helperbird across the organization.

#### `isExamMode` (Exam Mode)
- **Description**: The `isExamMode` setting enables or disables a specific mode designed for exam conditions.
- **Type**: Boolean (True/False).
- **Purpose**: When enabled, it restricts certain features of Helperbird to comply with exam standards, ensuring students are not accessing tools or features that are not permitted during examinations.
- **Usage**: Set to `true` to activate exam mode, and `false` to deactivate it. This setting can be particularly useful in educational institutions during test periods.

#### `isAdminControl` (Admin Control)
- **Description**: The `isAdminControl` setting indicates whether the Helperbird settings are under administrative control.
- **Type**: Boolean (True/False).
- **Purpose**: When enabled, it ensures that only administrators can alter Helperbird settings, preventing end-users from making unauthorized changes.
- **Usage**: Set to `true` to enforce administrative control over the Helperbird settings. This is particularly useful in maintaining uniformity and compliance in how Helperbird is used within the organization.

Each of these settings can be configured in the JSON schema that is applied to the Helperbird extension through your enterprise management console or tool.



## Need Help?

Contact the Helperbird support team for assistance with the Dyslexia Ruler.


