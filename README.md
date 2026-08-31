# NEWS24 — News Room HTML Template

> Breaking Barriers, Breaking News

A bold, editorial HTML template for news rooms, press hubs, and online journalism. Built with pure HTML5, CSS3, and vanilla JavaScript — zero frameworks, zero dependencies.

## 📄 Pages

| Page | Description | Link |
|------|-------------|------|
| Home | Breaking ticker, hero with featured stories, category strips, trending sidebar, newsletter | [index.html](index.html) |
| Article | Full article view with author bio, share buttons, related stories | [article.html](article.html) |
| Category | Filtered article listings by topic with sidebar widgets | [category.html](category.html) |
| Contact | Editorial contact form, office info, secure tip line | [contact.html](contact.html) |

## ✨ Features

- **Editorial Typography** — Playfair Display serif headings paired with Nunito body text
- **Breaking News Ticker** — Animated scrolling headline bar
- **Hero Layout** — Large featured story with sidebar highlights
- **Trending Sidebar** — Numbered most-read stories with popular topic tags
- **Category Strips** — Image-overlay category navigation
- **Article Cards** — Multiple layouts (compact, featured, standard) with author avatars
- **Secure Tip Line** — Dedicated section for confidential source submissions
- **Newsletter Subscription** — Email form with validation feedback
- **Responsive Layout** — Beautiful on desktop, tablet, and mobile
- **Scroll Animations** — IntersectionObserver-powered reveal effects
- **Mobile Navigation** — Hamburger menu with smooth transitions
- **Reduced Motion Support** — Respects `prefers-reduced-motion` setting

## 🚀 Quick Start

1. Open `index.html` in a browser — no build step needed
2. Replace images in `assets/img/` with your own
3. Edit content directly in the HTML files
4. Customize colors in `assets/css/style.css` via CSS custom properties

## 🎨 Design System

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--clr-charcoal` | `#374151` | Primary dark |
| `--clr-red` | `#B91C1C` | Accent / breaking news |
| `--clr-cream` | `#FEF3C7` | Warm backgrounds |
| `--clr-white` | `#FFFFFF` | Cards / surfaces |

### Typography
- **Headings:** Playfair Display (Google Fonts) — classic editorial serif
- **Body:** Nunito (Google Fonts) — clean, friendly sans-serif

## 📁 File Structure

```
news-room-html-template/
├── index.html          # Home — breaking ticker, hero, trending
├── article.html        # Full article view
├── category.html       # Category-filtered listings
├── contact.html        # Contact & secure tips
├── assets/
│   ├── css/
│   │   └── style.css   # Full design system
│   ├── js/
│   │   └── main.js     # All interactions
│   └── img/            # Template images
└── README.md           # This file
```

## 🔧 Customization

1. **Colors:** Edit CSS custom properties in `:root` block of `style.css`
2. **Fonts:** Change Google Fonts `@import` URL and update `--ff-heading` / `--ff-body`
3. **Content:** Edit text directly in HTML files
4. **Images:** Replace files in `assets/img/` keeping same filenames
5. **Ticker Text:** Update the `header__breaking-ticker` content in each HTML file

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 License

Free for personal and commercial use. Attribution appreciated.

---

[![Build Something Together](https://img.shields.io/badge/Let's_Build_Something_Together-🚀-B91C1C)](https://tally.so/r/q4q1L9)
