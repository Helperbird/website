---
new: true
updated: false
layout: templates/new/help/post.html
title: Setting Chrome Storage Managed Keys in Google Admin Console
description: Learn how to set Chrome storage managed keys using Google Admin Console with this comprehensive Helperbird guide for admins. Step-by-step instructions to ensure secure and compliant policy management for your organization.
keywords: Dyslexia software, Reading Mode for Google Chrome, Voice typing for
  chrome, Text to speech for chrome,  text reader, Immersive Reader, dyslexia
  fonts, accessibility software, dyslexia software, Helperbird for Edge,
  Helperbird for Firefox, Helperbird for Chrome, Opendyslexic for Chrome,
  OpenDyslexic
url: help/setting-chrome-storage-managed-keys/
name: "Robert James "
headerTags: []
tags: Admin
img: assets/images2/uploads/add-a-heading.png
date: 2016-01-04
youtubeId: vwT8SAJfU3E
cardTitle: Managed Keys
featureDescription: Learn how to set Chrome storage managed keys using Google Admin Console with this comprehensive Helperbird guide for admins. Step-by-step instructions to ensure secure and compliant policy management for your organization.
footer: true
header: true
---


## Step 1: Create a JSON Policy File

Create a JSON file that defines the policies you want to set. Your JSON file should look like this:

```json
{
  "subKey": "exampleValue",
  "isExamMode": true,
  "isAdminControl": false
}
```


## Step 2: Upload the JSON Policy File to Google Admin Console

**Sign in to the Google Admin console**:
Go to [admin.google.com](https://admin.google.com) and sign in with your administrator account.

**Navigate to Device Management**:
From the Admin console Home page, go to `Devices`.

**Chrome Management**:
Click on `Chrome management`.

**App Management**:

Click on **Apps & extensions**.

**Manage Policies for Extensions**:
Find the extension for which you want to set the policy. If the extension is not already listed, you'll need to add it. Click on the `+` icon to add a new app or extension by ID.

**Upload Custom Policy**:

Once you have located or added the extension, click on it.
Navigate to the **User settings** tab.
Under **Policy for extensions**, you’ll see an option to upload your custom JSON policy file.
Upload the JSON file you created in Step 1.



## Step 3: Apply the Policy

**Save and Apply**:
Save the changes. The policy will be applied to all users under the specified organizational unit.

**Verify Policy Application**:
To verify that the policy has been applied, users can navigate to **chrome://policy** in their Chrome browser. They should see the policies listed under the **Managed Configuration** section.

## Example of Applying Policies

Here's an example of how your managed storage policy might be configured for an extension with ID **ahmapmilbkfamljbpgphfndeemhnajme**:

```json
{
  "ahmapmilbkfamljbpgphfndeemhnajme": {
    "subKey": "exampleValue",
    "isExamMode": true,
    "isAdminControl": false
  }
}
```


## Additional Tips

**Organizational Units**: Ensure you are applying the policy to the correct organizational unit within your domain.
**Policy Propagation**: Policies can take some time to propagate across all devices. It might require users to restart their Chrome browser or device.
**Debugging**: Use the **chrome://policy** URL to debug and verify the policies applied to Chrome.

By following these steps, you can configure **chrome.storage.managed** keys using the Google Admin Console, ensuring that your Chrome extension receives the specified managed storage settings.