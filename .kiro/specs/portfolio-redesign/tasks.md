# Implementation Plan

- [x] 1. Set up project structure and dependencies

  - [x] 1.1 Initialize React project with Vite
    - Run `npm create vite@latest` with React template
    - Configure vite.config.js for optimal build settings
    - _Requirements: 12.1, 12.2_
  - [x] 1.2 Install and configure Tailwind CSS
    - Install tailwindcss, postcss, autoprefixer
    - Create tailwind.config.js with custom theme colors
    - Set up postcss.config.js
    - Create src/index.css with Tailwind directives and CSS variables
    - _Requirements: 12.2, 10.1_
  - [x] 1.3 Install GSAP and additional dependencies
    - Install gsap, @gsap/react
    - Install lucide-react for icons
    - Configure Google Fonts (Inter, Playfair Display)
    - _Requirements: 12.3_
  - [x] 1.4 Set up project file structure
    - Create src/components/ directory
    - Create src/hooks/ directory
    - Create src/data/ directory
    - Copy assets from existing assets/img/ to public/assets/img/
    - _Requirements: 12.4_
  - [x] 1.5 Set up testing infrastructure
    - Install vitest, @testing-library/react, jsdom
    - Install fast-check for property-based testing
    - Configure vitest.config.js
    - _Requirements: 12.1_

- [x] 2. Create content data and shared utilities

  - [x] 2.1 Create content data file
    - Create src/data/content.js with all portfolio content
    - Include personalInfo, aboutContent, certifications, skillCategories, timelineEntries, projects, blogPosts
    - _Requirements: 3.1, 4.1, 5.1, 6.6, 7.1, 8.1_
  - [x] 2.2 Create scroll animation hook
    - Create src/hooks/useScrollAnimation.js
    - Implement GSAP ScrollTrigger setup for reveal animations
    - _Requirements: 10.2, 10.6_

- [x] 3. Implement Navigation component

  - [x] 3.1 Create Navigation component with scroll-spy
    - Create src/components/Navigation.jsx
    - Implement fixed positioning with glassmorphism backdrop
    - Add scroll-spy to highlight active section
    - Implement smooth scroll on link click
    - Add background opacity change on scroll
    - _Requirements: 2.1, 2.2, 2.3, 2.5, 2.6_
  - [x] 3.2 Implement mobile hamburger menu
    - Add hamburger icon toggle for mobile
    - Create slide-in mobile menu overlay
    - Handle menu close on link click
    - _Requirements: 2.4, 11.4_
  - [x] 3.3 Write property test for scroll-spy
    - **Property 1: Navigation scroll-spy correctly identifies active section**
    - **Validates: Requirements 2.3**

- [x] 4. Implement Hero section

  - [x] 4.1 Create Hero component with animations
    - Create src/components/Hero.jsx
    - Display name "Anshul Pandey" and title "Platform Engineer"
    - Display tagline with large italic typography
    - Add professional photo with grayscale filter
    - Implement GSAP staggered text reveal animation on load
    - Implement shrink-on-scroll effect using ScrollTrigger
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.6_

- [x] 5. Implement About section

  - [x] 5.1 Create About component
    - Create src/components/About.jsx
    - Display personal introduction with location (Pune, India)
    - Add highlight boxes with accent backgrounds for key aspects
    - Display passion areas (Kubernetes, AWS, reliable infrastructure)
    - Add wave emoji with CSS animation
    - Implement scroll-triggered reveal animations
    - _Requirements: 3.1, 3.2, 3.3, 3.5_

- [x] 6. Implement Certifications section

  - [x] 6.1 Create Certifications component
    - Create src/components/Certifications.jsx
    - Render certification cards in a grid layout
    - Display certification name, issuer, and date for each card
    - Implement staggered fade-in animations on scroll
    - Add hover effects (scale, glow)
    - _Requirements: 4.1, 4.2, 4.3, 4.4_
  - [x] 6.2 Write property test for certification rendering
    - **Property 2: Certification cards render all required fields**
    - **Validates: Requirements 4.2**

- [x] 7. Implement Skills section

  - [x] 7.1 Create Skills component
    - Create src/components/Skills.jsx
    - Render 4 skill category cards in 2x2 grid (single column on mobile)
    - Display category title, description, and technology tags
    - Implement card hover effects (translateY, border glow)
    - Implement staggered entrance animations
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_
  - [x] 7.2 Write property test for skills rendering
    - **Property 3: Skill category cards render all technologies**
    - **Validates: Requirements 5.2**

- [x] 8. Checkpoint - Ensure all tests pass

  - Ensure all tests pass, ask the user if questions arise.

- [x] 9. Implement Experience section (animated timeline)

  - [x] 9.1 Create Experience component with timeline
    - Create src/components/Experience.jsx
    - Render vertical timeline with all career milestones (2018-Now)
    - Display year, title, company (if present), and description for each entry
    - Implement alternating left-right layout on desktop
    - Implement single-column layout on mobile
    - _Requirements: 6.1, 6.2, 6.5, 6.6_
  - [x] 9.2 Add timeline animations
    - Add SVG connecting line with scroll-triggered path animation
    - Implement progressive reveal of timeline entries on scroll
    - Add timeline dot pulse effect
    - _Requirements: 6.3, 6.4_
  - [x] 9.3 Write property test for timeline rendering
    - **Property 4: Timeline entries render all required fields**
    - **Validates: Requirements 6.2**

- [x] 10. Implement Projects section

  - [x] 10.1 Create Projects component
    - Create src/components/Projects.jsx
    - Render project cards in grid layout
    - Display project title, description, technology tags, and links
    - Implement card hover effects (elevation, border accent)
    - Implement staggered entrance animations
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5_
  - [x] 10.2 Write property test for projects rendering
    - **Property 5: Project cards render all required fields**
    - **Validates: Requirements 7.2**

- [x] 11. Implement Blogs section

  - [x] 11.1 Create Blogs component
    - Create src/components/Blogs.jsx
    - Render blog post cards with title, description, and date
    - Add external links with target="\_blank"
    - Implement scroll-triggered animations
    - _Requirements: 8.1, 8.2, 8.3, 8.4_
  - [x] 11.2 Write property test for blogs rendering
    - **Property 6: Blog cards render all required fields**
    - **Validates: Requirements 8.2**

- [x] 12. Implement Contact section

  - [x] 12.1 Create Contact component
    - Create src/components/Contact.jsx
    - Display call-to-action headline
    - Render contact form with name, email, subject, message fields
    - Display social link buttons (email, LinkedIn, GitHub, YouTube) with icons
    - Add hover animations on buttons (background fill, scale)
    - Ensure external links open in new tab
    - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5_

- [x] 13. Implement Footer and finalize App

  - [x] 13.1 Create Footer component
    - Create src/components/Footer.jsx
    - Display copyright text
    - Add subtle border top styling
  - [x] 13.2 Assemble App component
    - Update src/App.jsx to import and render all section components
    - Ensure proper section ordering: Navigation, Hero, About, Certifications, Skills, Experience, Projects, Blogs, Contact, Footer
    - Add section IDs for navigation scroll targets
    - _Requirements: 2.2_

- [x] 14. Implement responsive design

  - [x] 14.1 Add responsive styles
    - Ensure all components have proper mobile breakpoints
    - Verify navigation hamburger menu works on mobile
    - Verify grid layouts collapse to single column on mobile
    - Verify touch targets are minimum 44px
    - _Requirements: 11.1, 11.2, 11.3, 11.4, 11.5, 1.5_

- [x] 15. Final Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.
