# Portfolio Redesign

A modern, award-winning style portfolio website built with React, Vite, Tailwind CSS, and GSAP animations.

## Design Philosophy

This portfolio follows the design principles of award-winning portfolio sites like kasiasiwosz.com:

### Key Layout Principles

1. **Full-height sections**: Each major section takes up at least the full viewport height (`min-h-screen`) to create a dramatic, immersive experience
2. **Generous whitespace**: Large padding (`py-32`, `px-6 md:px-12`) gives content room to breathe
3. **Constrained content width**: Using `max-w-7xl` keeps content readable while still feeling spacious
4. **Large typography**: Bold headings (`text-4xl md:text-6xl`) create visual hierarchy
5. **Vertical rhythm**: Consistent spacing between elements (`space-y-32`, `gap-16`, `mb-24`)

### Problems We Solved

#### Issue: Cramped Layout

**Problem**: Initial implementation used narrow containers (`max-w-5xl`, `max-w-6xl`) with minimal padding (`px-4`), causing content to feel cramped and not utilizing screen space effectively.

**Solution**:

- Changed to `max-w-7xl` for content containers
- Increased horizontal padding to `px-6 md:px-12`
- Added `min-h-screen flex items-center` to sections for full-height layouts
- Increased vertical padding to `py-32`

#### Issue: Sections Running Together

**Problem**: Sections flowed directly into each other without visual separation, making it hard to distinguish where one ended and another began.

**Solution**:

- Each section now takes full viewport height minimum
- Alternating background colors (`bg-neutral-950` / `bg-neutral-900`)
- Large spacing between sections
- Clear section headings with generous margins

#### Issue: Navigation Cramped

**Problem**: Navigation links were too close together (`space-x-1`).

**Solution**: Increased to `gap-8` for proper spacing between nav items.

## Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool
- **Tailwind CSS 4** - Utility-first styling
- **GSAP + ScrollTrigger** - Scroll animations
- **Lucide React** - Icons
- **Vitest + fast-check** - Testing with property-based tests

## Project Structure

```
portfolio-redesign/
├── src/
│   ├── components/       # React components
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Certifications.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Blogs.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/            # Content data
│   │   └── content.js
│   ├── hooks/           # Custom hooks
│   │   └── useScrollAnimation.js
│   └── __tests__/       # Tests
│       └── properties/  # Property-based tests
├── public/              # Static assets
└── tailwind.config.js   # Tailwind configuration
```

## Color Palette

```css
--bg-primary: #0a0a0a      /* Main background */
--bg-secondary: #111111    /* Alternate sections */
--text-primary: #f5f2eb    /* Main text */
--text-secondary: #d4cfc4  /* Secondary text */
--text-muted: #6b6560      /* Muted text */
--accent: #4169e1          /* Accent color (blue) */
```

## Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run test       # Run tests
npm run lint       # Lint code
```

## Design Reference

Inspired by award-winning portfolios that feature:

- Dramatic full-screen sections
- Smooth scroll animations
- Dark, premium aesthetic
- Large, bold typography
- Generous whitespace
- Animated timelines
- Hover interactions

## License

MIT
