# Gadki Design Principles

This document outlines the design standards and principles for the Gadki educational campaign website. This is an auto-generated React application from Anima design-to-code platform, using React 18, React Router, Vite, and Tailwind CSS.

---

## Philosophy & Strategy

**User-First Education**: Prioritize clarity and accessibility for Polish/Ukrainian audiences (parents, children, educators). Every design decision should support the educational mission of the campaign.

**Anima-Generated Consistency**: Maintain the design-to-code patterns from Anima, including fixed dimensions and absolute positioning, to preserve visual fidelity with original designs.

**Performance & Accessibility**: Ensure fast load times and WCAG compliance for inclusive access to educational content.

---

## Design System Foundation

### Color Palette

The Gadki brand uses a warm, approachable color system defined in `tailwind.config.js`:

**Beige Neutrals** (backgrounds and subtle accents):
- `beige-100` - Lightest beige
- `beige-200`
- `beige-300`
- `beige-400`
- `beige-500` - Darkest beige

**Brand Colors** (primary UI elements):
- `gadkidarkblue` - Primary dark blue for headers and navigation
- `gadkidarkgreen` - Primary dark green for success states
- `gadkidarkred` - Primary dark red for important CTAs
- `gadkiorange` - Primary orange for highlights
- `gadkiyellow` - Primary yellow for accents
- `fddsraspberry` - Raspberry accent color

**Usage Guidelines**:
- Use Tailwind classes: `bg-gadkidarkblue`, `text-gadkiyellow`, `border-beige-300`
- Maintain consistent color usage across routes
- Ensure sufficient contrast ratios (WCAG AA minimum)

### Typography

**Fonts**:
- **Lato** (`font-lato`) - Primary sans-serif for body text, navigation, and UI elements
- **Happy Season** (`font-happy-season`) - Display font for large headings and titles

**Usage Guidelines**:
- Body text: `font-lato` with standard weights
- Main headings (H1): `font-happy-season text-4xl` or larger
- Subheadings (H2-H3): `font-lato font-bold text-2xl` or `text-xl`
- Button text: `font-lato font-semibold`
- Polish and Ukrainian characters must render correctly in both fonts

**Sizing Scale** (Tailwind):
- `text-sm` - Small UI text
- `text-base` - Default body text (16px)
- `text-lg` - Large body text
- `text-xl`, `text-2xl`, `text-3xl` - Subheadings
- `text-4xl`, `text-5xl`, `text-6xl` - Main headings

### Spacing & Layout

**Spacing System** (Tailwind 8px grid):
- Use standard Tailwind spacing: `m-4`, `p-6`, `gap-8`, `space-y-4`
- Maintain consistent padding within sections
- Use `gap-` utilities for flexbox/grid layouts

**Layout Patterns** (Anima-specific):
- **Fixed Dimensions**: Many screens have fixed widths (e.g., `min-w-[1728px]`) and heights (e.g., `h-[9567px]`)
- **Absolute Positioning**: Common pattern for precise layout control
  - Parent: `relative`
  - Children: `absolute top-[40px] left-[200px]`
- **Maintain this pattern** when creating new components to ensure consistency with auto-generated screens

### Component Architecture

**Standard Components** (reusable across routes):
- Location: `src/routes/sections/screens/sections/`
- Examples: `Footer.jsx`, `Newsletter.jsx`, `BoxesWrapper.jsx`, `MoreQuestions.jsx`
- Before creating a new section, check if a reusable component exists

**Screen Components**:
- Root screen: `src/screens/GadkiStronaGwna/` (home page)
- Route screens: `src/routes/[RouteName]/screens/`
- Screen-specific sections: `src/routes/[RouteName]/screens/sections/`

**Global Components**:
- Location: `src/components/`
- Example: `Header.jsx` (logo navigation + hamburger menu)

---

## Navigation & Routing

**Routes Structure** (React Router v6):
- `/` - Home (GadkiStronaGwna)
- `/menu` - Menu overlay (GadkiMenuGwne)
- `/o-kampanii` - About campaign
- `/dla-dzieci` - For children
- `/dla-rodzicow-i-opiekunow` - For parents
- `/dla-edukatorow` - For educators
- `/faq` - FAQ
- `/logowanie` - Login/Registration
- `/konto` - User account

**Navigation Guidelines**:
- Use React Router's `<Link>` component (never `<a>` tags for internal routes)
- Logo → home navigation
- Hamburger → menu overlay navigation
- All routes defined in `src/App.jsx`
- Update `.screen-graph.json` when adding new navigation paths

---

## Interaction Design

**Micro-animations**:
- Keep animations subtle and purposeful
- Duration: 150-300ms for most transitions
- Use Tailwind transition utilities: `transition-all duration-200 ease-in-out`

**Loading States**:
- Show loading indicators for async operations
- Skeleton screens for content-heavy sections

**Focus States** (accessibility):
- Visible focus indicators on all interactive elements
- Use `focus:ring-2 focus:ring-gadkidarkblue focus:outline-none`

**Hover States**:
- Subtle color shifts on buttons and links
- Example: `hover:bg-gadkiorange hover:scale-105`

---

## Assets & Media

**Static Files**:
- Location: `./static` directory
- Images: Many reference `c.animaapp.com` CDN (Anima pattern)
- For new assets: follow existing CDN pattern or place in `./static`

**Image Guidelines**:
- Use appropriate alt text for accessibility
- Optimize images for web (WebP format preferred)
- Lazy load images below the fold

---

## Responsive Design

**Important Note**: This codebase has **fixed dimensions** due to Anima auto-generation.

**Current Behavior**:
- Many screens have `min-w-[1728px]` minimum width
- Fixed heights like `h-[9567px]` are common
- Not fully responsive by default

**Future Considerations**:
- If adding responsive breakpoints, use Tailwind: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
- Test on mobile devices if modifying layouts
- Consider progressive enhancement for smaller screens

---

## Accessibility (WCAG Compliance)

**Color Contrast**:
- Maintain AA level minimum (4.5:1 for normal text, 3:1 for large text)
- Test with tools like WebAIM Contrast Checker

**Keyboard Navigation**:
- All interactive elements must be keyboard accessible
- Logical tab order
- Visible focus states

**Screen Readers**:
- Semantic HTML elements (`<header>`, `<nav>`, `<main>`, `<footer>`)
- ARIA labels where necessary
- Alt text for all images

**Language Support**:
- Polish and Ukrainian language support
- Proper `lang` attributes in HTML

---

## Code Quality Standards

**React Patterns**:
- Functional components with hooks
- Use `useState`, `useEffect`, `useCallback` appropriately
- Avoid prop drilling (consider Context API if needed)

**Naming Conventions**:
- Component files: PascalCase with Polish characters allowed (e.g., `GadkiDlaRodzicwI.jsx`)
- Functions: PascalCase for components, camelCase for utilities
- CSS classes: Inline Tailwind (not separate CSS files)
- Routes: kebab-case (e.g., `/dla-rodzicow-i-opiekunow`)

**File Organization**:
- Single `.jsx` file per component
- Export default component
- Import dependencies at top
- Co-locate screen-specific sections with screens

**Tailwind Usage**:
- Prefer Tailwind utility classes over custom CSS
- Use `@apply` directive sparingly
- Maintain consistency with existing component patterns

---

## Testing & Validation

**Visual Testing**:
- Compare against Figma designs when available
- Test in Chrome, Firefox, Safari
- Verify Polish/Ukrainian character rendering

**Functional Testing**:
- All links navigate correctly
- Forms validate properly
- No console errors

**Accessibility Testing**:
- Run Lighthouse accessibility audit
- Test with keyboard navigation
- Verify screen reader compatibility

---

## Performance Optimization

**Build Configuration**:
- Vite 6.0.4 for fast builds
- PostCSS for Tailwind processing
- Tree-shaking for production builds

**Best Practices**:
- Code splitting with React.lazy() for large routes
- Minimize bundle size
- Optimize images and fonts
- Use CDN for static assets

---

## Common Patterns to Follow

### Creating a New Route

1. Create screen component in `src/routes/[RouteName]/screens/`
2. Add route to `src/App.jsx`
3. Update `.screen-graph.json` if adding navigation
4. Use reusable sections from `src/routes/sections/screens/sections/`
5. Maintain fixed dimensions and absolute positioning patterns

### Adding a Shared Section

1. Create in `src/routes/sections/screens/sections/`
2. Use Tailwind color palette
3. Use `font-lato` or `font-happy-season`
4. Export default component
5. Import in multiple screens as needed

### Styling a Component

```jsx
// Good: Tailwind utilities with brand colors
<div className="bg-beige-100 p-8 rounded-lg shadow-md">
  <h2 className="font-happy-season text-4xl text-gadkidarkblue mb-4">
    Tytuł sekcji
  </h2>
  <p className="font-lato text-base text-gray-700">
    Treść paragrafu...
  </p>
</div>
```

---

## Summary Checklist

When creating or reviewing UI components, ensure:

- ✅ Uses approved color palette (`beige-*`, `gadki*` colors)
- ✅ Uses correct fonts (`font-lato` for body, `font-happy-season` for headings)
- ✅ Maintains fixed dimensions and absolute positioning where appropriate
- ✅ Uses Tailwind utility classes (not custom CSS)
- ✅ Follows directory structure conventions
- ✅ Accessible (keyboard nav, focus states, alt text, contrast)
- ✅ Polish/Ukrainian characters render correctly
- ✅ React Router `<Link>` for navigation (not `<a>` tags)
- ✅ No console errors or warnings
- ✅ Reuses existing components before creating new ones

---

**Last Updated**: 2025-11-15
**Maintained By**: Development Team
