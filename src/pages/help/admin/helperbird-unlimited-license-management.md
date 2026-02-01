---
new: true
footer: true
header: true
updated: false
layout: templates/new/help/post-new.html
title: Helperbird Unlimited License Management for Schools
description:
  Learn how to manage your Helperbird Unlimited license for schools, including activating licenses, adding users, and monitoring usage.
keywords:
  Helperbird Unlimited, Helperbird school license, Helperbird EDU, manage Helperbird licenses,
  Helperbird for schools, Helperbird admin, school accessibility software
youtubeId: vwT8SAJfU3E
cardTitle: Unlimited License Management
featureDescription:
  Learn how to manage your Helperbird Unlimited license for schools.
headerTags:
  [
    { tag: 'activating-your-license', title: 'Activating Your License' },
    { tag: 'distributing-to-users', title: 'Distributing to Users' },
    { tag: 'monitoring-usage', title: 'Monitoring Usage' }
  ]
tags:
  - admin
  - helpguides
  - adminHelpGuides
url: help/helperbird-unlimited-license-management/
permalink: help/helperbird-unlimited-license-management/
date: 2025-01-25
---

Helperbird Unlimited gives your entire school access to all Pro features. Here's how to set it up and manage your license.

---

## Activating Your License

### Step 1: Receive Your License Key

After purchasing Helperbird Unlimited, you'll receive a license key via email. This key activates Pro features for all users in your organization.

---

### Step 2: Set Up via Google Admin Console

Log into your Google Admin Console at **admin.google.com**. Navigate to **Devices > Chrome > Apps & Extensions** and find the Helperbird extension.

---

### Step 3: Add Your License Key

In the extension settings, add your subscription key using the JSON policy:

```json
{
  "subKey": {
    "Value": "YOUR-LICENSE-KEY"
  },
  "isAdminControl": {
    "Value": true
  }
}
```

This activates Pro features for everyone in your selected Organizational Unit.

---

## Distributing to Users

### Automatic Activation

Once configured in Google Admin, all users in your Organizational Unit will automatically have Pro features when they use Helperbird. No individual login required.

---

### Multiple Organizational Units

If you have different schools or departments, you can apply the license to multiple OUs. Just add the same JSON policy to each OU where you want Pro features enabled.

---

### New Users

When new students or staff join your organization and are added to a licensed OU, they automatically get Pro access. No additional setup needed.

---

## Monitoring Usage

### Access the Dashboard

Visit the [Helperbird Usage Dashboard](https://www.helperbird.com/dashboard/) to monitor how your license is being used.

---

### What You Can See

The dashboard shows:
- Total active users
- Most-used features
- Usage trends over time

This helps you understand how Helperbird is being used and demonstrate value to stakeholders.

---

## Renewing Your License

Helperbird Unlimited licenses are annual. You'll receive a renewal reminder before your license expires. Contact our team to renew and maintain uninterrupted access for your users.

---

## Video Tutorial

{% if youtubeId %}
<iframe width="560" height="315" class="aspect-video rounded-2xl mb-8 mt-8" src="https://www.youtube-nocookie.com/embed/{{ youtubeId }}?si=6BtkhydcpJ8UFQ_l" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
{% else %}
Coming soon
{% endif %}

---

## Need Additional Help?

Questions about your Unlimited license? Reach out to our [Helperbird support team](/support/) and we'll help you out!
