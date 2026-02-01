---
new: false
updated: false
layout: templates/new/help/post-new.html
title: Why Helperbird Safari Extension Is Greyed Out on iPad (Jamf & MDM Explained)
description:
  Learn why Helperbird and other Safari extensions may appear greyed out on iPads deployed with Jamf.
  Understand Apple’s iPadOS limitations, Screen Time restrictions, and what admins and users can do
  to enable Safari extensions correctly.
keywords:
  Safari extensions iPad, Jamf Safari extension, Helperbird iPad, iPadOS Safari extensions,
  Jamf MDM iPad, Safari extensions greyed out, accessibility Safari iPad, Helperbird Jamf
url: help/helperbird-safari-extension-greyed-out-ipad-jamf/
permalink: help/helperbird-safari-extension-greyed-out-ipad-jamf/
name: Robert James
headerTags:
  [
    { tag: 'apple-mdm-limitation', title: "It's an Apple iPadOS Limitation" },
    { tag: 'why-extension-greyed-out', title: 'Why the Extension Is Greyed Out' },
    { tag: 'how-to-enable-helperbird', title: 'How to Enable Helperbird on iPad' }
  ]
tags:
  - trouble
  - helpguides
  - troubleHelpGuides
img: assets/images2/uploads/add-a-heading.png
date: 2025-12-12
youtubeId: vwT8SAJfU3E
cardTitle: Why Helperbird Is Greyed Out on iPad
featureDescription:
  Safari extensions like Helperbird can appear disabled or greyed out on iPads managed with Jamf.
  This guide explains why it happens and what steps are required to enable the extension.
footer: true
header: true
---

If you’re deploying Helperbird to iPads using Jamf and notice that the Safari extension toggle is **greyed out**, this is expected behavior on many iPad setups.

This is **not a Helperbird bug**.  
This is **not usually a Jamf misconfiguration**.

In most cases, this is a **hard limitation set by Apple in iPadOS**.

---

## Step 1: Understand the Reality (This Part Is Important)

There are **two very different situations**, depending on the iPadOS version.

### iPadOS 17 and Earlier
There is **no way** for Jamf (or any MDM) to automatically enable a Safari extension.

- Jamf can install the Helperbird app
- Apple does not allow MDMs to turn Safari extensions on
- A user must enable the extension manually
- If restrictions are in place, the toggle will stay greyed out

There is **no workaround, script, or hidden setting** that fixes this.

---

### iPadOS 18 and Later (Supervised Devices Only)
Apple introduced **limited** MDM support for Safari extensions.

Even here:
- The device must be supervised
- Jamf must explicitly allow the extension
- Screen Time and content restrictions can still block it

---

## Step 2: Why the Safari Extension Toggle Is Greyed Out

### Screen Time Restrictions (Most Common)
If Screen Time is enabled with Content & Privacy Restrictions or Web Content filtering, Safari extensions may be completely disabled.

This is very common on school and business-managed iPads.

---

### Device Management Restrictions
Some Jamf configuration profiles restrict Safari behavior, preventing manual changes.

Check on the iPad:
Settings → General → VPN & Device Management

---

### iPadOS Version Limitations
On iPadOS 17 and earlier, this behavior is expected and unavoidable.

---

## Step 3: What You Can Actually Do (The Only Real Solutions)

### iPadOS 17 and Earlier
1. Open Settings → Screen Time
2. Turn Content & Privacy Restrictions OFF (or set Web Content to Unrestricted)
3. Go to Settings → Safari → Extensions
4. Enable Helperbird manually

If restrictions cannot be removed, there is **no way** to enable the extension.

---

### iPadOS 18+ (Supervised Devices)
1. Confirm the iPad is supervised and enrolled via Automated Device Enrollment
2. In Jamf, ensure the extension is not set to Always Off
3. Verify Screen Time isn’t blocking extensions
4. Enable Helperbird in Safari settings

---

## TL;DR

- If the toggle is greyed out, nothing is broken
- On iPadOS 17 and earlier, manual enablement is required
- If restrictions are locked, there may be no solution
- On iPadOS 18+, MDM control exists but is still limited
- Once enabled, Helperbird works normally

---

## Video Tutorial

{% if youtubeId %}
<iframe width="560" height="315" class="aspect-video rounded-2xl mb-8 mt-8" src="https://www.youtube-nocookie.com/embed/{{ youtubeId }}?si=6BtkhydcpJ8UFQ_l" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
{% else %}
Coming soon
{% endif %}

---

## Need Additional Help?

If you're unsure which restriction is blocking Helperbird, reach out to our [Helperbird support team](https://www.helperbird.com/support) and we'll help!