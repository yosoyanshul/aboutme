# Design Document: Portfolio Website Redesign

## Overview

This design document outlines the architecture and implementation approach for redesigning Anshul Pandey's portfolio website. The redesign creates a modern, visually stunning single-page application inspired by kasiasiwosz.com, featuring smooth scroll animations, an animated career timeline, and a premium dark aesthetic.

The website will be built using React 18 with Vite, styled with Tailwind CSS, and animated using GSAP with ScrollTrigger. It will showcase Anshul's expertise as a Platform Engineer through eight main sections: Hero, About, Certifications, Skills, Experience, Projects, Blogs, and Contact.

## Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      Portfolio Website                       │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────────┐   │
│  │                   App Component                      │   │
│  │  ┌─────────────────────────────────────────────┐    │   │
│  │  │              Navigation                      │    │   │
│  │  │  (Fixed, Glassmorphism, Scroll-spy)         │    │   │
│  │  └─────────────────────────────────────────────┘    │   │
│  │                                                      │   │
│  │  ┌─────────────────────────────────────────────┐    │   │
│  │  │              Hero Section                    │    │   │
│  │  │  (Animated text, Photo, Shrink-on-scroll)   │    │   │
│  │  └─────────────────────────────────────────────┘    │   │
│  │                                                      │   │
│  │  ┌─────────────────────────────────────────────┐    │   │
│  │  │              About Section                   │    │   │
│  │  │  (Introduction, Highlights, Reveal anim)    │    │   │
│  │  └─────────────────────────────────────────────┘    │   │
│  │                                                      │   │
│  │  ┌─────────────────────────────────────────────┐    │   │
│  │  │           Certifications Section             │    │   │
│  │  │  (Badge cards, Staggered animations)        │    │   │
│  │  └─────────────────────────────────────────────┘    │   │
│  │                                                      │   │
│  │  ┌─────────────────────────────────────────────┐    │   │
│  │  │              Skills Section                  │    │   │
│  │  │  (4 category cards, Tech tags, Hover fx)    │    │   │
│  │  └─────────────────────────────────────────────┘    │   │
│  │                                                      │   │
│  │  ┌─────────────────────────────────────────────┐    │   │
│  │  │            Experience Section                │    │   │
│  │  │  (Animated timeline, SVG path, Scroll fx)   │    │   │
│  │  └─────────────────────────────────────────────┘    │   │
│  │                                                      │   │
│  │  ┌─────────────────────────────────────────────┐    │   │
│  │  │             Projects Section                 │    │   │
│  │  │  (Project cards, Grid/Scroll, Hover fx)     │    │   │
│  │  └─────────────────────────────────────────────┘    │   │
│  │                                                      │   │
│  │  ┌─────────────────────────────────────────────┐    │   │
│  │  │              Blogs Section                   │    │   │
│  │  │  (Blog cards, Links, Animations)            │    │   │
│  │  └─────────────────────────────────────────────┘    │   │
│  │                                                      │   │
│  │  ┌─────────────────────────────────────────────┐    │   │
│  │  │             Contact Section                  │    │   │
│  │  │  (Form, Social links, CTA)                  │    │   │
│  │  └─────────────────────────────────────────────┘    │   │
│  │                                                      │   │
│  │  ┌─────────────────────────────────────────────┐    │   │
│  │  │                Footer                        │    │   │
│  │  └─────────────────────────────────────────────┘    │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

### Technology Stack

| Layer      | Technology                             | Purpose                               |
| ---------- | -------------------------------------- | ------------------------------------- |
| Framework  | React 18                               | Component-based UI                    |
| Build Tool | Vite                                   | Fast development and optimized builds |
| Styling    | Tailwind CSS                           | Utility-first CSS framework           |
| Animations | GSAP + ScrollTrigger                   | Scroll-triggered animations           |
| Icons      | Lucide React                           | Modern icon library                   |
| Fonts      | Google Fonts (Inter, Playfair Display) | Typography                            |

### Project Structure

```
portfolio-redesign/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   ├── favicon.ico
│   └── assets/
│       └── img/
│           ├── my-photo.jpg
│           ├── logo-dark.png
│           ├── logo-light.png
│           └── signature.png
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── components/
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
│   ├── hooks/
│   │   └── useScrollAnimation.js
│   └── data/
│       └── content.js
```

## Components and Interfaces

### Navigation Component

```jsx
interface NavigationProps {
  sections: string[];
  activeSection: string;
}

// Features:
// - Fixed position with glassmorphism backdrop
// - Logo on left, nav links on right
// - Scroll-spy to highlight active section
// - Mobile hamburger menu with slide animation
// - Background opacity change on scroll
```

### Hero Component

```jsx
interface HeroProps {
  name: string;
  title: string;
  tagline: string;
  photoUrl: string;
}

// Features:
// - Full viewport height
// - Animated text reveal (staggered GSAP)
// - Background photo with grayscale filter
// - Shrink-on-scroll effect using ScrollTrigger
// - Large italic typography
```

### About Component

```jsx
interface AboutProps {
  introduction: string;
  location: string;
  highlights: string[];
}

// Features:
// - Large typography with highlight boxes
// - Wave emoji animation
// - Scroll-triggered reveal animations
// - Accent-colored highlight badges
```

### Certifications Component

```jsx
interface Certification {
  name: string;
  issuer: string;
  date: string;
  badgeUrl?: string;
}

interface CertificationsProps {
  certifications: Certification[];
}

// Features:
// - Grid of certification cards
// - Staggered fade-in animations
// - Hover effects (scale, glow)
```

### Skills Component

```jsx
interface SkillCategory {
  title: string;
  description: string;
  technologies: string[];
}

interface SkillsProps {
  categories: SkillCategory[];
}

// Features:
// - 2x2 grid on desktop, single column on mobile
// - Card hover effects (translateY, border glow)
// - Technology tags with accent colors
// - Staggered entrance animations
```

### Experience Component (Timeline)

```jsx
interface TimelineEntry {
  year: string;
  title: string;
  company?: string;
  description: string;
}

interface ExperienceProps {
  entries: TimelineEntry[];
}

// Features:
// - Vertical timeline with SVG connecting line
// - Alternating left-right layout on desktop
// - Progressive reveal on scroll
// - Animated SVG path drawing
// - Timeline dots with pulse effect
```

### Projects Component

```jsx
interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

interface ProjectsProps {
  projects: Project[];
}

// Features:
// - Grid or horizontal scroll layout
// - Card hover effects (elevation, border accent)
// - Technology tags
// - Link buttons with hover animations
```

### Blogs Component

```jsx
interface BlogPost {
  title: string;
  description: string;
  date: string;
  link: string;
}

interface BlogsProps {
  posts: BlogPost[];
}

// Features:
// - Card layout with hover effects
// - Date display
// - External link handling
```

### Contact Component

```jsx
interface ContactProps {
  email: string;
  socialLinks: {
    linkedin: string,
    github: string,
    youtube: string,
  };
}

// Features:
// - Contact form (name, email, subject, message)
// - Social link buttons with icons
// - Hover animations on buttons
// - Call-to-action headline
```

## Data Models

### Content Data Structure

```javascript
// src/data/content.js

export const personalInfo = {
  name: 'Anshul Pandey',
  title: 'Platform Engineer',
  tagline:
    'I turn infrastructure complexity into things that make teams ship faster',
  location: 'Pune, India',
  email: 'anshul@anshulpandey.in',
  photo: '/assets/img/my-photo.jpg',
  social: {
    linkedin: 'https://www.linkedin.com/in/yosoyanshul',
    github: 'https://github.com/yosoyanshul',
    youtube: 'https://www.youtube.com/@freecloudcamp',
  },
};

export const aboutContent = {
  intro: "Pleased to meet ya, I'm a platform engineer based in",
  description:
    "I build everything from Kubernetes platforms to AWS architectures, but what I'm most passionate about is creating infrastructure that's reliable & self-service",
};

export const certifications = [
  {
    name: 'AWS Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2023',
  },
  // ... more certifications
];

export const skillCategories = [
  {
    title: 'Platform Engineering',
    description:
      'Multi-tenant Kubernetes platforms, GitOps workflows, and developer self-service systems',
    technologies: ['Kubernetes', 'ArgoCD', 'Helm', 'Istio', 'Kyverno'],
  },
  {
    title: 'Cloud Architecture',
    description:
      'Enterprise AWS at scale. Landing Zones, multi-account strategies, networking, and governance',
    technologies: ['AWS', 'Control Tower', 'Terraform', 'Azure'],
  },
  {
    title: 'Backend Development',
    description: 'APIs, event-driven architectures, and automation',
    technologies: ['Python', 'FastAPI', 'Django', 'Node.js'],
  },
  {
    title: 'DevOps & Automation',
    description: 'CI/CD pipelines, infrastructure as code, and monitoring',
    technologies: ['GitHub Actions', 'Jenkins', 'Prometheus', 'Grafana'],
  },
];

export const timelineEntries = [
  {
    year: '2018',
    title: 'Started B.Tech in Computer Science',
    description:
      'Acropolis Institute. Discovered my love for building things with code.',
  },
  {
    year: '2020',
    title: 'Web Developer',
    company: 'Biomech Healthcare',
    description:
      'Built responsive web apps, learned Node.js, shipped first production code.',
  },
  {
    year: '2021',
    title: 'Full Stack Developer',
    company: 'Fealty Technologies',
    description:
      'Vue.js frontend, FastAPI backend, exposure to Django, Express, Spring Boot.',
  },
  {
    year: '2022',
    title: 'Cloud Engineer',
    company: 'Blazeclan Technologies',
    description: 'Graduated B.Tech. Infrastructure became my obsession.',
  },
  {
    year: '2022-24',
    title: 'AWS Landing Zones',
    description:
      'Built AWS Landing Zones across 100+ accounts. Control Tower, Terraform, EKS clusters. PCI DSS compliance. Reduced manual work by 40%.',
  },
  {
    year: '2024',
    title: 'Senior Software Engineer',
    company: 'Volkswagen Group',
    description:
      'Building multi-tenant Kubernetes platforms for autonomous driving workloads.',
  },
  {
    year: 'Now',
    title: 'Platform Engineering',
    description:
      'Policy-as-code with Kyverno, GitOps with ArgoCD, enabling teams to ship autonomous vehicle software with confidence.',
  },
];

export const projects = [
  // Project data
];

export const blogPosts = [
  // Blog post data
];
```

## Correctness Properties

_A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees._

Based on the acceptance criteria analysis, the following correctness properties have been identified for property-based testing:

### Property 1: Navigation scroll-spy correctly identifies active section

_For any_ scroll position on the page, the Navigation_Component SHALL highlight exactly one section as active, and that section SHALL be the one currently most visible in the viewport.

**Validates: Requirements 2.3**

### Property 2: Certification cards render all required fields

_For any_ certification data object containing name, issuer, and date fields, the rendered certification card SHALL display all three fields in the DOM.

**Validates: Requirements 4.2**

### Property 3: Skill category cards render all technologies

_For any_ skill category data object containing a technologies array, the rendered skill card SHALL display a tag element for each technology in the array.

**Validates: Requirements 5.2**

### Property 4: Timeline entries render all required fields

_For any_ timeline entry data object containing year, title, and description fields, the rendered timeline entry SHALL display all three fields in the DOM. If a company field is present, it SHALL also be displayed.

**Validates: Requirements 6.2**

### Property 5: Project cards render all required fields

_For any_ project data object containing title, description, and technologies fields, the rendered project card SHALL display the title, description, and a tag for each technology.

**Validates: Requirements 7.2**

### Property 6: Blog cards render all required fields

_For any_ blog post data object containing title, description, and date fields, the rendered blog card SHALL display all three fields in the DOM.

**Validates: Requirements 8.2**

## Error Handling

### Component Error Boundaries

Each major section component will be wrapped in an error boundary to prevent cascading failures:

```jsx
// Error boundary wrapper for sections
class SectionErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div className="section-error">Section failed to load</div>;
    }
    return this.props.children;
  }
}
```

### Data Validation

- Missing or malformed data in content.js will be handled with default values
- Image loading failures will show placeholder or graceful fallback
- External link failures will not break the page

### Animation Fallbacks

- If GSAP fails to load, content will still be visible (no animation dependency for content visibility)
- CSS fallbacks for critical animations
- Reduced motion media query support for accessibility

## Testing Strategy

### Dual Testing Approach

The testing strategy combines unit tests for specific examples and property-based tests for universal properties.

### Unit Testing

Unit tests will cover:

- Component rendering with specific data
- Navigation link click behavior
- Mobile menu toggle functionality
- Form validation in Contact section
- External link target attributes

**Framework:** Vitest (Vite-native testing)

### Property-Based Testing

Property-based tests will verify the correctness properties defined above using fast-check library.

**Framework:** fast-check with Vitest

**Configuration:** Each property test will run a minimum of 100 iterations.

**Test File Structure:**

```
src/
├── __tests__/
│   ├── Navigation.test.jsx
│   ├── Certifications.test.jsx
│   ├── Skills.test.jsx
│   ├── Experience.test.jsx
│   ├── Projects.test.jsx
│   ├── Blogs.test.jsx
│   └── properties/
│       ├── certifications.property.test.jsx
│       ├── skills.property.test.jsx
│       ├── timeline.property.test.jsx
│       ├── projects.property.test.jsx
│       └── blogs.property.test.jsx
```

**Property Test Annotation Format:**
Each property-based test will be tagged with:

```javascript
// **Feature: portfolio-redesign, Property {number}: {property_text}**
// **Validates: Requirements X.Y**
```

### Test Data Generators

For property-based testing, custom generators will be created:

```javascript
// Certification generator
const certificationArb = fc.record({
  name: fc.string({ minLength: 1, maxLength: 100 }),
  issuer: fc.string({ minLength: 1, maxLength: 100 }),
  date: fc.string({ minLength: 4, maxLength: 10 }),
});

// Skill category generator
const skillCategoryArb = fc.record({
  title: fc.string({ minLength: 1, maxLength: 50 }),
  description: fc.string({ minLength: 1, maxLength: 200 }),
  technologies: fc.array(fc.string({ minLength: 1, maxLength: 30 }), {
    minLength: 1,
    maxLength: 10,
  }),
});

// Timeline entry generator
const timelineEntryArb = fc.record({
  year: fc.string({ minLength: 4, maxLength: 10 }),
  title: fc.string({ minLength: 1, maxLength: 100 }),
  company: fc.option(fc.string({ minLength: 1, maxLength: 100 })),
  description: fc.string({ minLength: 1, maxLength: 300 }),
});

// Project generator
const projectArb = fc.record({
  title: fc.string({ minLength: 1, maxLength: 100 }),
  description: fc.string({ minLength: 1, maxLength: 300 }),
  technologies: fc.array(fc.string({ minLength: 1, maxLength: 30 }), {
    minLength: 1,
    maxLength: 8,
  }),
  link: fc.option(fc.webUrl()),
  github: fc.option(fc.webUrl()),
});

// Blog post generator
const blogPostArb = fc.record({
  title: fc.string({ minLength: 1, maxLength: 100 }),
  description: fc.string({ minLength: 1, maxLength: 200 }),
  date: fc.string({ minLength: 10, maxLength: 20 }),
  link: fc.webUrl(),
});
```

## Visual Design Specifications

### Color Palette

```css
:root {
  --bg-primary: #0a0a0a;
  --bg-secondary: #111111;
  --text-primary: #f5f2eb;
  --text-secondary: #d4cfc4;
  --text-muted: #6b6560;
  --accent: #4169e1;
  --highlight-bg: #d4cfc4;
  --highlight-text: #0a0a0a;
}
```

### Typography

- **Headings:** Inter, 800 weight, italic style
- **Body:** Inter, 400-500 weight
- **Accent text:** Playfair Display for special highlights

### Animation Specifications

| Animation        | Duration | Easing       | Trigger                      |
| ---------------- | -------- | ------------ | ---------------------------- |
| Hero text reveal | 1000ms   | power3.out   | Page load                    |
| Section reveal   | 800ms    | power3.out   | ScrollTrigger (85% viewport) |
| Card stagger     | 600ms    | power3.out   | ScrollTrigger                |
| Shrink-on-scroll | Scrub    | linear       | ScrollTrigger                |
| Timeline path    | 1200ms   | power2.inOut | ScrollTrigger                |
| Hover effects    | 300ms    | ease         | Mouse enter                  |

### Responsive Breakpoints

| Breakpoint | Width      | Layout Changes                   |
| ---------- | ---------- | -------------------------------- |
| Desktop    | > 1024px   | Full layout, 2-column grids      |
| Tablet     | 768-1024px | Adjusted spacing, 2-column grids |
| Mobile     | < 768px    | Single column, hamburger nav     |
