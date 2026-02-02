# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

The Helperbird website is the marketing and documentation site for Helperbird. It's a static site built with Eleventy (11ty) featuring blog posts, feature documentation, help articles, and product pages.

## Commands

### Development Commands

```bash
# Development server
npm run dev                  # Webpack dev + Eleventy serve
npm start                    # Eleventy serve only

# Production build
npm run build                # Full production build
npm run css                  # Webpack CSS build only
npm run live                 # Webpack production mode

# Code quality
npm run lint                 # ESLint with auto-fix
npm run format               # Prettier formatting
npm run a11y                 # Accessibility linting

# Utilities
npm run clean                # Remove public and generated CSS
npm run alts                 # Alt text generation
npm run link                 # Link processing
```

## Architecture

### Technology Stack

- **Static Site Generator**: Eleventy (11ty) 3.0.0
- **Styling**: Tailwind CSS 3.2.7 with DaisyUI 4.11.1
- **Bundler**: Webpack 5.90.0
- **Template Languages**: Liquid, Nunjucks, Markdown
- **Markdown**: markdown-it with plugins

### Project Structure

```
website/
├── src/
│   ├── pages/               # Content pages (268 files)
│   │   ├── index.liquid     # Homepage
│   │   ├── blog/            # 54 blog posts
│   │   ├── features/        # 45 feature pages
│   │   ├── help/            # 127 support articles
│   │   │   ├── account/     # Account management
│   │   │   ├── admin/       # Admin settings
│   │   │   ├── apps/        # App integrations
│   │   │   ├── features/    # Feature tutorials
│   │   │   ├── introduction/ # Getting started
│   │   │   ├── ios/         # iOS guides
│   │   │   └── trouble/     # Troubleshooting
│   │   ├── compare/         # Comparison pages
│   │   ├── products/        # Product pages
│   │   ├── partners/        # Partner info
│   │   └── [other sections]
│   │
│   ├── _includes/           # Templates and partials
│   │   ├── templates/       # Base layouts
│   │   │   ├── base.html    # Main HTML scaffold
│   │   │   ├── blog/        # Blog layouts
│   │   │   ├── new/         # Modern component system
│   │   │   │   ├── cta/     # Call-to-action sections
│   │   │   │   ├── features/ # Feature showcases
│   │   │   │   ├── help/    # Help page layouts
│   │   │   │   ├── marketing/ # Marketing sections
│   │   │   │   └── sections/ # Reusable sections
│   │   │   └── [other templates]
│   │   ├── common/          # Shared components (20 files)
│   │   └── svgs/            # SVG icons (49 files)
│   │
│   ├── _data/               # Data files
│   │   ├── site.js          # Site configuration
│   │   ├── features.json    # Feature definitions
│   │   ├── pricing.json     # Pricing tiers
│   │   ├── reviews.json     # Testimonials
│   │   ├── compare.json     # Feature comparisons
│   │   ├── shortcuts.json   # Keyboard shortcuts
│   │   └── [other data files]
│   │
│   └── assets/
│       ├── css/             # Stylesheets
│       │   ├── styles.css   # Main Tailwind entry
│       │   ├── blog.css     # Blog overrides
│       │   └── help.css     # Help styling
│       ├── js/              # JavaScript
│       │   ├── index.js     # Main entry
│       │   └── core/        # Core modules
│       ├── images/          # Image assets
│       └── videos/          # Video content
│
├── docs/                    # Build output (generated)
├── .eleventy.js             # Eleventy configuration
├── webpack.config.js        # Webpack configuration
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
└── package.json
```

### Build Pipeline

1. **Webpack** compiles CSS (Tailwind) and JavaScript
2. **Eleventy** processes templates and generates HTML
3. **Social images** are auto-generated for blog posts
4. **HTML minification** in production mode

### Template Languages

| Extension | Language | Usage |
|-----------|----------|-------|
| `.liquid` | Liquid | Pages, layouts |
| `.njk` | Nunjucks | Complex templates |
| `.md` | Markdown | Content pages |
| `.html` | HTML | Includes, partials |

## Content Management

### Front Matter

Blog posts and pages use YAML front matter:

```yaml
---
layout: templates/new/help/post.html
title: "Page Title"
description: "Meta description"
keywords: "seo, keywords"
cardTitle: "Social Card Title"
blog_cat: "Category"
blog_snip: "Short description for cards"
img: /assets/images/page-image.png
date: 2024-01-15
url: help/article-name/
---
```

### Data Files

Data files in `src/_data/` are available in templates:

```liquid
{% for feature in features.popular %}
  <div>{{ feature.name }}</div>
{% endfor %}
```

Key data files:
- `site.js` - Environment-aware site config
- `features.json` - Feature definitions with icons
- `pricing.json` - Free/Pro/Unlimited tiers
- `reviews.json` - User testimonials
- `help.json` - Help article metadata

## Styling

### Tailwind Configuration

```javascript
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/*.md",
    "./src/**/*.liquid",
    "./src/**/*.njk",
    "./src/assets/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'base-helperbird': '#f4f6e7',      // Light cream
        'bg-base-helperbird': '#fef5ec'    // Off-white
      },
      borderRadius: {
        '4xl': '2rem'
      }
    }
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ],
  daisyui: {
    themes: ['light']
  }
}
```

### Markdown → CSS Mapping

The markdown-it-class plugin maps HTML elements to Tailwind classes:

| Element | Classes |
|---------|---------|
| `h1` | `text-3xl font-bold text-gray-900 mb-8` |
| `h2` | `text-2xl font-bold text-gray-900 mb-6` |
| `h3` | `text-xl font-bold text-gray-900 mb-4` |
| `p` | `text-lg text-gray-900 mt-4 mb-4` |
| `ul` | `list-disc ml-6 space-y-2` |
| `ol` | `list-decimal ml-6 space-y-2` |
| `a` | `text-blue-600 underline hover:text-blue-800` |
| `blockquote` | `border-l-4 border-gray-300 pl-4 italic` |
| `code` | `bg-gray-100 rounded px-1 font-mono` |
| `img` | `rounded-3xl border-2 aspect-square` |
| `table` | `border-collapse w-full` |

### CSS Files

| File | Purpose |
|------|---------|
| `styles.css` | Main Tailwind entry point |
| `blog.css` | Blog-specific overrides |
| `help.css` | Help documentation styling |

---

## Unified Design System Reference

This website follows the Helperbird design system defined in `/Helperbird/extension/CLAUDE.md`.

### Brand Colors

| Name | Hex | Usage |
|------|-----|-------|
| Helperbird Cream | `#fbf2ea` | Light backgrounds |
| Base Helperbird | `#f4f6e7` | Page backgrounds |
| Brand Purple | `#450a75` | Social images, accents |
| Primary Blue | `#5046e4` | CTAs, links |

### Typography

Follow the extension's typography scale:
- Headings: Bold, gray-900
- Body: text-lg, gray-900
- Links: blue-600 with underline

### Component Patterns

When creating new components, reference DaisyUI patterns from the extension:
- Buttons: Use DaisyUI button classes
- Cards: Rounded corners, subtle shadows
- Badges: For feature indicators

---

## Quick Start

```bash
# Clone and install
cd website
npm install

# Development server (with hot reload)
npm run dev

# Production build
npm run build

# Site is available at http://localhost:8080
# Built files output to /docs
```

---

## Eleventy Configuration

### Key Features (.eleventy.js)

```javascript
// Filters
eleventyConfig.addFilter("date", formatDate);
eleventyConfig.addFilter("shuffle", shuffleArray);
eleventyConfig.addFilter("formatDateWithOrdinal", formatWithOrdinal);

// Shortcodes
eleventyConfig.addShortcode("youtubeEmbed", generateEmbed);
eleventyConfig.addShortcode("bundledCss", getCssPath);
eleventyConfig.addShortcode("bundledJs", getJsPath);

// Plugins
eleventyConfig.addPlugin(syntaxHighlight);
eleventyConfig.addPlugin(svgContents);
eleventyConfig.addPlugin(pwaPlugin);
```

### Social Image Generation

Blog posts automatically get social images (1200x627px):
- Purple background (#450a75)
- Helperbird logo centered
- Title, category badge, tagline
- Generated via Canvas library

### PWA Support

The site is a Progressive Web App:
- Service worker generated by Workbox
- Offline capability
- Installable on mobile devices

## Development Notes

### Adding New Pages

1. Create file in `src/pages/[section]/`
2. Add front matter with layout, title, description
3. Write content in Markdown or Liquid
4. Data available via `_data/` files

### Adding New Help Articles

```markdown
---
layout: templates/new/help/post.html
title: "How to Use Feature X"
description: "Learn how to use Feature X in Helperbird"
keywords: "feature x, tutorial, help"
url: help/features/feature-x/
date: 2024-01-15
---

Content here...
```

### Adding New Blog Posts

```markdown
---
layout: templates/blog/post.html
title: "Blog Post Title"
description: "Post description"
cardTitle: "Social Card Title"
blog_cat: "Accessibility"
blog_snip: "Short snippet for cards"
img: /assets/images/blog/post-image.png
date: 2024-01-15
url: blog/post-slug/
---

Content here...
```

### SVG Icons

SVG icons are in `src/_includes/svgs/`. Use with:

```liquid
{% include "svgs/feature-icon.svg" %}
```

### Image Optimization

- Place images in `src/assets/images/[section]/`
- Use descriptive filenames
- Provide alt text in front matter
- Images are copied to `docs/assets/images/` on build

## SEO & Meta

### Required Meta Tags

Each page should have:
- `title` - Page title
- `description` - Meta description (150-160 chars)
- `keywords` - Comma-separated keywords
- `url` - Canonical URL path
- `img` - Open Graph image

### Schema.org Markup

The base template includes structured data:
- Organization schema
- SoftwareApplication schema
- Breadcrumbs where applicable

---

## Development Workflow Rules

### When a New Feature is Added to the Extension

**Every new extension feature MUST have a help documentation page.** This is mandatory.

1. **Create help article** in `src/pages/help/features/[feature-name].md`

2. **Use the standard template**:
   ```markdown
   ---
   layout: templates/new/help/post.html
   title: "How to Use [Feature Name] in Helperbird"
   description: "Learn how to use [Feature Name] to [benefit]"
   keywords: "helperbird, [feature], accessibility, [related terms]"
   url: help/features/[feature-name]/
   date: YYYY-MM-DD
   ---

   ## What is [Feature Name]?

   [Brief description of the feature]

   ## How to Use [Feature Name]

   1. Open Helperbird
   2. [Steps to use the feature]
   3. ...

   ## Settings and Options

   [Describe any configurable options]

   ## Tips

   [Any helpful tips or use cases]
   ```

3. **Add screenshots** to `src/assets/images/help/[feature-name]/`

4. **Update feature data** in `src/_data/features.json` if it's a major feature

### Help Article Checklist

- [ ] Clear, descriptive title
- [ ] SEO-friendly description (150-160 chars)
- [ ] Step-by-step instructions
- [ ] Screenshots showing the feature
- [ ] Accessibility considerations mentioned
- [ ] Related features linked

### Content Guidelines

- Write for users who may have reading difficulties
- Use short sentences and simple language
- Include visual aids (screenshots, GIFs)
- Provide keyboard shortcuts where applicable

### Commit Message Conventions

Use conventional commits:

```
type(scope): description

# Examples
feat(help): add voice typing tutorial
fix(blog): correct broken image links
docs(pricing): update Pro tier features
```

---

## Related Projects

- **Extension**: Browser extension at `/Helperbird/extension/` (design system source)
- **API**: Backend services at `/Helperbird/API/`
- **Google Docs**: Workspace add-on at `/Helperbird/google-docs/`

For the complete design system including colors, typography, and components, reference `/Helperbird/extension/CLAUDE.md`.
