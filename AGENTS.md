# Personal Portfolio Website — Codex Build Specification

## 1. Project Goal

Build a modern, creative, highly polished personal portfolio website for **Marvin Serge Fuentes**.

The portfolio must primarily present Marvin as an experienced **Software Engineer**. His background in data engineering, AI/computer vision, graduate education, and future research should reinforce his engineering depth rather than make the site feel primarily academic.

The website should feel like a **personal digital identity**, not a generic developer portfolio or résumé template.

Design reference:
- https://iwanbork.com/

Use the reference only for inspiration in:
- unusual animations and interactions
- creative presentation
- strong typography and visual hierarchy
- personal branding
- storytelling through scrolling

Do not copy the reference website. Create an original visual identity.

## 2. Primary Positioning

Primary identity:

**Software Engineer**

Supporting areas:
- Backend and software development
- Data engineering and data-intensive systems
- Automation
- Cloud technologies
- AI / Machine Learning
- Computer Vision

Within approximately 10 seconds, a visitor should understand:

- MARVIN SERGE FUENTES
- SOFTWARE ENGINEER
- 5+ YEARS OF EXPERIENCE
- PYTHON / DATA / BACKEND / CLOUD
- FACTSET → STRAIVE
- BUDAPEST, HUNGARY

Software engineering must remain the dominant professional identity.

## 3. Technology Stack

Use:
- React
- Vite
- TypeScript
- Tailwind CSS

Preferred optional libraries:
- Framer Motion for purposeful animation
- Lucide React for icons

Avoid unnecessary dependencies.

The application should be fast, lightweight, responsive, maintainable, accessible, and easy to deploy.

## 4. Website Architecture

Build primarily as a **single-page scrolling experience**.

Initial production sections:
1. Home
2. About
3. Journey — combined Work Experience and Education timeline
4. Contact

Future section:
5. Projects

Do not display an empty Projects section initially, but architect the application so it can be added easily later.

## 5. Visual Identity

Target aesthetic:

**Dark + Experimental + Playful + Technical**

The website should communicate:
- creativity
- technical competence
- curiosity
- personality
- strong software engineering identity

Prefer creative-but-usable over safe-but-generic.

Avoid:
- generic developer templates
- black background + white cards + purple gradient clichés
- excessive glassmorphism
- excessive rounded cards
- cyberpunk/hacker clichés
- arbitrary skill progress bars
- huge technology-logo grids
- excessive gradients or glow
- decorative animation without purpose

Prefer:
- deep dark backgrounds
- strong editorial typography
- high contrast
- intentional whitespace
- unexpected composition
- carefully selected accents
- coordinated motion
- distinctive personal branding

A light-mode toggle is not required initially.

## 6. Photography

A personal photograph of Marvin should be a prominent design element.

Do not use it merely as:
- a circular avatar
- a small résumé headshot
- a conventional profile card

Possible treatments:
- large portrait cropping
- image masks
- reveal animations
- typography overlapping the portrait
- parallax
- dynamic clipping
- subtle mouse-position interaction
- monochrome-to-color interaction

The exact treatment should respond to the final photograph.

If no final portrait exists yet, build a clearly replaceable portrait placeholder component.

## 7. Hero Experience

The first viewport should be visually memorable and prominently feature:

MARVIN  
SERGE  
FUENTES

and:

SOFTWARE ENGINEER

Experiment with scale, composition, cropping, layering, and portrait interaction.

Do not use a generic:
“Hi, I’m Marvin 👋” + circular photo + two CTA buttons layout.

Possible concise supporting statement:

> I build software, data systems, and intelligent solutions.

Include accessible paths to:
- About
- Journey
- Contact
- LinkedIn
- GitHub
- Download CV

## 8. About Experience

Do not build a conventional heading + three paragraphs + skills grid.

Use visual storytelling to communicate:
- 5+ years building production software and data systems
- experience across financial, healthcare, government, and data-intensive environments
- progression from FactSet to Straive
- technical breadth across Python, Perl, SQL, automation, ETL/data workflows, CI/CD, AWS, and production systems
- continued advanced education alongside professional engineering

Possible visual language:

5+  
YEARS  
BUILDING SOFTWARE

FINANCE  
HEALTHCARE  
DATA  
CLOUD

Keep the narrative concise. Use `CONTENT.md` as the source of truth for personal facts.

## 9. Journey — Experience & Education Timeline

The combined Journey timeline should be a signature component.

It must visually distinguish:
- WORK
- EDUCATION

while presenting them as one continuous professional journey.

Core milestones are defined in `CONTENT.md`.

Professional experience should receive greater visual emphasis than education.

The timeline should clearly communicate overlapping work and education.

Possible interactions:
- scroll-progress line
- animated year transitions
- sticky year markers
- hover previews
- expandable details
- technology reveals
- entries appearing on different tracks/sides

Do not display every résumé bullet simultaneously. Use progressive disclosure.

## 10. Technology Presentation

Do not use arbitrary proficiency percentages.

Integrate technologies naturally into:
- career entries
- typographic compositions
- domain groupings
- interactive labels
- subtle moving/revealing elements

Skills should reinforce demonstrated experience rather than make unsupported proficiency claims.

## 11. Interaction Philosophy

Interaction is central to the identity.

Consider a small number of strong, coherent systems such as:
- contextual custom cursor
- magnetic links/buttons
- scroll-controlled typography
- image reveals
- interactive timeline
- mouse-position movement
- text masking/reveals
- section transitions
- subtle Easter eggs

Do not implement every possible effect.

Every major interaction must serve storytelling or usability.

## 12. Custom Cursor

On desktop, consider a contextual custom cursor that can display states such as:

VIEW  
OPEN  
EXPLORE  
→

Disable custom cursor behavior on touch devices.

Never compromise keyboard accessibility or normal interaction semantics.

## 13. Scroll Experience

Scrolling should contribute to storytelling.

Consider:
- sticky compositions
- scroll-controlled reveals
- horizontal visual movement within normal vertical scrolling
- large typography transitions
- timeline progression
- layered elements
- subtle parallax

Do not hijack scrolling or make navigation frustrating.

## 14. Playfulness

Allow subtle playful details:
- cursor messages
- small developer jokes
- hidden interactions
- interactive typography
- a subtle terminal-style Easter egg
- dynamic status messages

Playfulness should reward exploration without reducing professionalism.

## 15. Projects — Future Architecture

Projects will be added later.

Do not build the full section now and do not show an empty Projects section.

Prepare the architecture/data model for future:
- software engineering projects
- data engineering systems
- AI/computer vision projects
- master’s research
- experimental personal projects

Future projects should be visual and interactive rather than generic repository cards.

## 16. Contact

Create a strong closing section rather than a generic contact form block.

Possible direction:

“LET’S BUILD SOMETHING.”

Include:
- email
- LinkedIn
- GitHub

A contact form is optional and should only be included if it adds clear value.

## 17. Navigation

Use minimal persistent navigation.

Possible labels:
- MARVIN
- About
- Journey
- Contact

Requirements:
- smooth section navigation
- current-section indication
- accessible keyboard behavior
- responsive mobile treatment

Avoid a large corporate-style navigation bar.

## 18. Animation Principles

Animation is a core feature, but:

**Quality > Quantity.**

Establish consistent:
- easing
- duration
- reveal language
- motion behavior

Prefer transform and opacity where possible.

Use Framer Motion when justified and CSS when simpler.

Respect `prefers-reduced-motion`.

The site must remain fully usable without animation.

## 19. Performance

Experimental must not mean slow.

Target:
- smooth interactions where practical
- fast initial load
- minimal layout shift
- optimized portrait/media assets
- lazy-loaded non-critical media
- minimal unnecessary JavaScript

Avoid unnecessary:
- WebGL
- Three.js
- particle systems
- background video
- large animation dependencies

Only introduce 3D/WebGL later if a specific creative concept genuinely requires it.

## 20. Responsive Design

Support:
- desktop
- laptop
- tablet
- mobile

Desktop may use more experimental compositions.

Mobile should simplify interactions while preserving identity and narrative.

The Journey timeline must remain understandable on narrow screens.

## 21. Accessibility

Implement:
- semantic HTML
- keyboard navigation
- visible focus states
- appropriate ARIA labels
- sufficient contrast
- reduced-motion support
- descriptive image alt text

Creative design must not compromise accessibility.

## 22. SEO

Configure:
- page title
- meta description
- Open Graph metadata
- favicon
- social preview support
- semantic heading structure

## 23. Content Architecture

`CONTENT.md` is the human-readable source of truth for portfolio content.

Do not invent facts missing from `CONTENT.md`.

In the application, store display content in centralized structured data, for example:

src/
  data/
    personal.ts
    experience.ts
    education.ts
    skills.ts
    social.ts
    projects.ts

Do not hardcode large amounts of content inside UI components.

## 24. Suggested Component Architecture

src/
  components/
    navigation/
    hero/
    about/
    timeline/
    contact/
    ui/
  sections/
    Home.tsx
    About.tsx
    Journey.tsx
    Contact.tsx
  data/
  hooks/
  styles/

Do not over-engineer abstractions.

## 25. Development Rules

1. Inspect the existing repository before modifying it.
2. Preserve useful existing configuration.
3. Use TypeScript properly.
4. Avoid `any` unless necessary.
5. Keep components reasonably small.
6. Separate content from presentation.
7. Ensure responsive behavior.
8. Test navigation and interactions.
9. Run TypeScript checks, lint, and production build.
10. Fix errors before considering a task complete.
11. Do not invent employment history, dates, achievements, metrics, education, or awards.
12. If content is missing, use an explicit placeholder or leave the feature out.

## 26. Implementation Strategy

### Phase 1 — Foundation
- React/Vite/TypeScript
- Tailwind
- project structure
- typography
- responsive layout
- navigation
- content data layer

### Phase 2 — Core Experience
- Hero
- About
- Journey
- Contact
- portrait placeholder/integration

### Phase 3 — Visual Identity
- distinctive typography
- dark visual system
- composition
- personal branding
- section transitions

### Phase 4 — Interaction
- coordinated scroll animations
- timeline interaction
- hover systems
- optional custom cursor
- subtle playful details

### Phase 5 — Polish
- mobile responsiveness
- accessibility
- performance
- SEO
- browser checks
- production build

## 27. Creative Rule

When choosing between:

“safe but generic”

and:

“creative but still usable”

prefer:

**creative but still usable.**

The visitor should remember the website after closing it, while a recruiter should still immediately understand Marvin’s professional identity and experience.
