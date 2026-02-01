---

new: false
footer: true
header: true
updated: true
layout: templates/new/help/post-new.html
title: How to Disable Helperbird Features Using JSON Policy - Admins
description: Learn how to disable specific Helperbird features using JSON policy in the Google Admin Console, including disabling features from the main interface or quick actions.
keywords: Helperbird disable features, Helperbird JSON policy, Chrome extension admin policy, Google Admin Console Helperbird, Helperbird EditorReader
cardTitle: Disable Helperbird Features with JSON Policy
featureDescription: Learn how administrators can disable specific Helperbird features for users using managed JSON policy.
youtubeId: vwT8SAJfU3E
date: 2025-08-20
headerTags:

- tag: disabling-helperbird-features
  title: Disabling Helperbird Features
- tag: feature-types
  title: Understanding Feature Types
- tag: feature-tables
  title: Feature Tables
- tag: examples
  title: Examples
tags:
- admin
- helpguides
- adminHelpGuides

url: help/how-to-disable-helperbird-features-though-json-policy/
permalink: help/how-to-disable-helperbird-features-though-json-policy/

---

This guide shows you how to **disable specific Helperbird features** for users in your organization using the Google Admin Console and managed JSON policy.

This is useful if you want to limit access to certain tools (for example, writing or editing features) while keeping the rest of Helperbird available.

---

## Before You Start

Make sure that:

* Helperbird is already added to your Organizational Unit (OU)
* You have administrator access to **admin.google.com**
* You have already enabled admin control using `isAdminControl`

If you haven’t done this yet, follow our guide:
**How to Set Helperbird JSON Policy in Google Admin**

---

## Understanding Feature Types in Helperbird

Helperbird features are grouped into two types:

### Main Features (All Features)

* Appear in Helperbird’s **main feature list**
* Disabling one removes it from the primary interface

### Quick Features (Quick Actions)

* Appear in **Quick Actions**
* Disabling one removes it from the Quick Actions menu

> **Note:** Some features appear in both places.
> Disabling them will remove the feature everywhere it appears.

---

## How Feature Disabling Works

Helperbird uses two policy values:

* **`disableFeatures`** – turns feature disabling on or off
* **`disabledFeatures`** – the list of feature codes to disable

If `disableFeatures` is set to `false`, **no features are disabled**, even if a list exists.

---

## Starter JSON Template (Recommended)

If you’re not sure where to start, use this **starter template**.
It enables admin control and feature disabling, but does not disable anything yet.

```json
{
  "subKey": {
    "Value": "YOUR SUBSCRIPTION KEY"
  },
  "isAdminControl": {
    "Value": true
  },
  "disableFeatures": {
    "Value": true
  },
  "disabledFeatures": {
    "Value": []
  }
}
```

Add feature codes from the tables below into the `disabledFeatures` list.

---

## Feature Tables

To disable a feature, copy the **Policy Code** and add it to the `disabledFeatures` list.

### Quick Actions (Quick Features)

| Feature                | Policy Code                |
| ---------------------- | -------------------------- |
| Settings App           | `SettingsApp`              |
| Highlight Menu         | `HighlightMenu`            |
| Summarize Page         | `SummarizePage`            |
| Reading Mode Tool      | `ReadingModeTool`          |
| Simplify Options       | `SimplifyOptions`          |
| Grammar Options        | `GrammarOptions`           |
| Immersive Reader       | `ImmersiveReader`          |
| Translate Options      | `TranslateOptions`         |
| PDF Reader             | `PdfReader`                |
| Annotation Reader      | `AnnotationReader`         |
| Reading List Reader    | `ReadinglistReader`        |
| Add to Reading List    | `ReadinglistReaderAdd`     |
| Editor                 | `EditorReader`             |
| Dictionary / Define    | `DefineReader`             |
| Hover Light Options    | `HoverLightOptions`        |
| Voice Typing           | `VoiceTypingOptions`       |
| Sticky Note            | `StickyNote`               |
| Word Prediction        | `WordPrediction`           |
| Text to Speech Options | `TextToSpeechOptions`      |
| Highlighter Marker     | `HighlighterMarkerOptions` |
| Text Color             | `TextColor`                |
| Link Color             | `LinkColor`                |
| Background Color       | `BackgroundColor`          |
| Extract Text           | `ExtractTextOptions`       |
| Speed Reading          | `SpeedReadingOptions`      |
| Screenshot             | `ScreenshotOptions`        |
| Overlay Tint           | `OverlayTint`              |
| Dyslexia Rulers        | `DyslexiaRulers`           |
| Custom Font            | `CustomFont`               |
| Text Size              | `TextSize`                 |
| Word Spacing           | `WordSpacing`              |
| Letter Spacing         | `LetterSpacing`            |
| Line Height            | `LineHeight`               |
| Text Alignment         | `TextAligment`             |
| Paragraph Borders      | `ParagraphBorders`         |
| Paragraph Background   | `ParagraphBackground`      |
| Paragraph Width        | `ParagraphWidth`           |
| Paragraph Columns      | `ParagraphColumns`         |
| Show Alt Text          | `ShowAlt`                  |
| Show Titles            | `ShowTitles`               |
| Hide Images            | `HideImages`               |
| Hide GIFs              | `HideGifs`                 |
| Video Playback         | `VideoPlayback`            |
| Volume Booster         | `VolumeBooster`            |
| High Contrast          | `HighContrast`             |
| Emphasize Links        | `EmphasizeLinks`           |
| Text Stroke            | `TextStroke`               |
| Saturation Control     | `SaturationControl`        |
| Cursor Size            | `CursorSize`               |
| Zoom Control           | `ZoomControl`              |
| Reduce Motion          | `ReduceMotion`             |
| Spell Check            | `SpellCheck`               |
| Edit Website           | `EditWebsite`              |
| Maths Options          | `MathsOptions`             |
| Print Tool             | `PrintTool`                |
| New Menu               | `NewMenu`                  |

---

### All Features (Main Features)

| Feature                | Policy Code                |
| ---------------------- | -------------------------- |
| Quick Actions Options  | `QuickActionsOptions`      |
| Ignition Button        | `IgnitionButton`           |
| Text to Speech Modal   | `TextToSpeechModal`        |
| Banner Message         | `BannerMessage`            |
| Reading Preferences    | `ReadingPreferences`       |
| Dyslexia Tools         | `DyslexiaTools`            |
| Translate Options      | `TranslateOptions`         |
| Extract Text           | `ExtractTextOptions`       |
| Text to Speech Options | `TextToSpeechOptions`      |
| Grammar Options        | `GrammarOptions`           |
| Highlight Menu         | `HighlightMenu`            |
| Maths Options          | `MathsOptions`             |
| Screenshot             | `ScreenshotOptions`        |
| Immersive Reader       | `ImmersiveReader`          |
| Edit Website           | `EditWebsite`              |
| Reading Mode Tool      | `ReadingModeTool`          |
| Simplify Options       | `SimplifyOptions`          |
| Summarize Page         | `SummarizePage`            |
| Word Prediction        | `WordPrediction`           |
| Settings Modal         | `SettingsModal`            |
| Simplify Modal         | `SimplifyModal`            |
| Summarize Modal        | `SummarizeModal`           |
| Speed Reading          | `SpeedReadingOptions`      |
| Voice Typing           | `VoiceTypingOptions`       |
| Highlighter Marker     | `HighlighterMarkerOptions` |
| Grammar Dialog         | `GrammarDialog`            |
| Display Options        | `DisplayOptions`           |
| PDF Reader             | `PdfReader`                |
| Annotation Reader      | `AnnotationReader`         |
| Reading List Reader    | `ReadinglistReader`        |
| Add to Reading List    | `ReadinglistReaderAdd`     |
| Editor                 | `EditorReader`             |
| Dictionary / Define    | `DefineReader`             |
| Media Options          | `MediaOptions`             |
| Show Alt Text          | `ShowAlt`                  |
| Show Titles            | `ShowTitles`               |
| Hover Light Options    | `HoverLightOptions`        |
| Reduce Motion          | `ReduceMotion`             |
| Hide Images            | `HideImages`               |
| Hide GIFs              | `HideGifs`                 |
| Print Tool             | `PrintTool`                |
| Sticky Note            | `StickyNote`               |

---

## Example: Disable the Helperbird Editor Feature

To disable the Helperbird Editor feature everywhere it appears, add:

```json
{
  "subKey": {
    "Value": "YOUR SUBSCRIPTION KEY"
  },
  "isAdminControl": {
    "Value": true
  },
  "disableFeatures": {
    "Value": true
  },
  "disabledFeatures": {
    "Value": [
      "EditorReader"
    ]
  }
}
```

---

## Commonly Disabled Features (Example)

The following features are commonly disabled in managed environments:

```txt
EditorReader
VoiceTypingOptions
EditWebsite
ScreenshotOptions
```

Example JSON:

```json
{
  "subKey": {
    "Value": "YOUR SUBSCRIPTION KEY"
  },
  "isAdminControl": {
    "Value": true
  },
  "disableFeatures": {
    "Value": true
  },
  "disabledFeatures": {
    "Value": [
      "EditorReader",
      "VoiceTypingOptions",
      "EditWebsite",
      "ScreenshotOptions"
    ]
  }
}
```

---

## Important Notes

* **Feature codes are case-sensitive** and must match the tables exactly
* Features that appear in both **Main Features** and **Quick Actions** will be removed from both
* Unknown or invalid feature codes are **safely ignored**

---

## Verifying and Troubleshooting

If changes don’t appear immediately:

* Restart Chrome, or
* Visit `chrome://policy` and click **Reload policies**

Double-check:

* The correct OU is selected
* JSON formatting is valid
* `disableFeatures` is set to `true`

---

## Video Tutorial

{% if youtubeId %}
<iframe width="560" height="315" class="aspect-video rounded-2xl mb-8 mt-8" src="https://www.youtube-nocookie.com/embed/{{ youtubeId }}?si=6BtkhydcpJ8UFQ_l" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
{% else %}
Coming soon
{% endif %}

---

## Need Additional Help?

If you need help finding a feature code or validating your policy, reach out to our [Helperbird support team](/support/) and we'll help you out!
