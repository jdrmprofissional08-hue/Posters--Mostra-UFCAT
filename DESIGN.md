---
name: UFCAT BIA Posters Portal Design System
description: Institutional design specification for Mostra UFCAT 2026 Posters portal, based on design.md guidelines.
version: 1.0.0
tokens:
  color:
    brand:
      ufcat_teal: "#007a78"
      ufcat_green: "#3a9e7e"
      ufcat_orange: "#f47920"
      ufcat_orange_light: "#ff9a4d"
    surfaces:
      background: "#080f0c"
      surface_primary: "#0f1a16"
      surface_card: "#162420"
      surface_card_hover: "#1c2f29"
      surface_nav: "rgba(8, 15, 12, 0.92)"
    text:
      primary: "#f0f5f3"
      secondary: "#a0b8ad"
      muted: "#5e7d6e"
      inverse: "#080f0c"
    borders:
      subtle: "rgba(58, 158, 126, 0.12)"
      default: "rgba(58, 158, 126, 0.2)"
      accent: "rgba(244, 121, 32, 0.3)"
  typography:
    font_sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    font_mono: "'JetBrains Mono', 'Fira Code', monospace"
    headings:
      h1: "clamp(2rem, 5vw, 3.2rem)"
      h2: "1.5rem"
      h3: "1.2rem"
  layout:
    max_width: "1000px"
    border_radius:
      sm: "6px"
      md: "12px"
      lg: "20px"
      full: "9999px"
---

# UFCAT BIA Posters Portal — Design System

This design document establishes the visual identity, tokens, layout standards, and UI guidelines for the Mostra UFCAT 2026 Pôsteres Portal.

## 1. Vision & Identity

- **Academic Rigor**: The portal presents official undergraduate research posters from the Bacharelado em Inteligência Artificial at Universidade Federal de Catalão (UFCAT).
- **No Gimmicks**: Avoid sci-fi tropes, AI emojis (🤖, ⚡), floating glowing effects, or artificial intelligence "generated" badges. The aesthetic must feel like an official university portal.
- **Brand Identity**: Features the authentic UFCAT logo (Teal `#007a78` & Orange `#f47920`), official typography, and clean structured layout.

## 2. Component Guidelines

### Header & Navigation
- Official UFCAT logo with subtext "Inteligência Artificial".
- Institution metadata: Universidade Federal de Catalão | IMTec.
- Accessible breadcrumb / "Voltar para a página inicial" actions on viewer subpages.

### Poster Viewer
- Protected responsive viewport preventing casual image dragging or right-click context menus.
- Clear metadata bar displaying poster title, number, and external links when available (e.g. ednAI Live Lab link).

### Interactive Cards
- Distinct numerical badges (`01`, `02`, etc.) in UFCAT Teal and Orange accents.
- Subtle state changes on hover without flashy animations.

## 3. Do's and Don'ts

- **DO** use official brand colors and high-contrast readable typography.
- **DO** provide clear navigation back to home from any view.
- **DO** include direct academic links (such as the live ednAI application).
- **DON'T** use emojis anywhere in the interface.
- **DON'T** show AI badges like "Gerado por IA".
