# Gadki Code Style Guide

This document defines code style standards for the Gadki React application to ensure consistency, readability, and maintainability.

---

## React Component Structure

### File Organization

```jsx
// 1. Imports (external first, then internal)
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CustomComponent } from '../components/CustomComponent';

// 2. Component definition
export default function ComponentName() {
  // 3. Hooks at the top
  const [state, setState] = useState(null);

  useEffect(() => {
    // side effects
  }, []);

  // 4. Event handlers
  const handleClick = () => {
    // handler logic
  };

  // 5. Render
  return (
    <div className="...">
      {/* JSX */}
    </div>
  );
}
```

### Component Naming

- **Files**: PascalCase with `.jsx` extension
  - ✅ `GadkiStronaGwna.jsx`
  - ✅ `Newsletter.jsx`
  - ❌ `gadki-strona-gwna.jsx`
  - ❌ `Newsletter.js`

- **Components**: PascalCase function names matching file name
  - ✅ `export default function Newsletter()`
  - ❌ `export default function newsletter()`

- **Polish Characters**: Allowed and encouraged for domain-specific names
  - ✅ `GadkiDlaRodzicwI.jsx`
  - ✅ `GadkiDlaEdukatorw.jsx`

---

## Tailwind CSS Standards

### Class Organization

Order classes logically for readability:

```jsx
// Good: Layout → Spacing → Typography → Colors → States
<div className="flex items-center justify-between p-6 gap-4 font-lato text-lg text-gray-700 bg-beige-100 hover:bg-beige-200 transition-all">

// Bad: Random order
<div className="text-gray-700 flex bg-beige-100 p-6 font-lato items-center gap-4 text-lg hover:bg-beige-200 justify-between transition-all">
```

### Class Grouping Recommendations

1. **Layout & Positioning**: `flex`, `grid`, `absolute`, `relative`, `top-[x]`, `left-[x]`
2. **Sizing**: `w-full`, `h-screen`, `min-w-[1728px]`, `max-w-7xl`
3. **Spacing**: `p-6`, `m-4`, `gap-8`, `space-y-4`
4. **Typography**: `font-lato`, `text-2xl`, `font-bold`, `leading-tight`
5. **Colors**: `text-gadkidarkblue`, `bg-beige-100`, `border-gadkiorange`
6. **Effects**: `shadow-lg`, `rounded-lg`, `opacity-90`
7. **States**: `hover:`, `focus:`, `active:`, `disabled:`
8. **Transitions**: `transition-all`, `duration-200`, `ease-in-out`

### Avoid Custom CSS

**Prefer Tailwind utilities over custom CSS:**

```jsx
// Good: Tailwind utilities
<button className="px-6 py-3 bg-gadkidarkblue text-white rounded-lg hover:bg-opacity-90 transition-colors">
  Click Me
</button>

// Avoid: Custom CSS classes (unless absolutely necessary)
<button className="custom-button">
  Click Me
</button>
```

**Exception**: Complex animations or very specific designs can use `@apply` in Tailwind CSS file.

---

## Anima-Specific Patterns

### Fixed Dimensions

Maintain auto-generated fixed dimensions for consistency:

```jsx
// Typical Anima pattern - keep these
<div className="min-w-[1728px] h-[9567px] relative">
  {/* content */}
</div>
```

### Absolute Positioning

Use relative parent with absolute children:

```jsx
<div className="relative">
  <div className="absolute top-[40px] left-[200px]">
    {/* Positioned element */}
  </div>
  <div className="absolute top-[120px] left-[200px]">
    {/* Another positioned element */}
  </div>
</div>
```

**Note**: While not ideal for responsive design, this pattern ensures visual fidelity with Anima-generated designs.

---

## Navigation & Routing

### Use React Router Links

```jsx
// Good: React Router Link
import { Link } from 'react-router-dom';
<Link to="/dla-dzieci" className="...">Dla Dzieci</Link>

// Bad: Native anchor tag for internal routes
<a href="/dla-dzieci" className="...">Dla Dzieci</a>
```

### Route Naming

- Use kebab-case for route paths
- Use Polish language for route names (domain-specific)

```jsx
// Good
<Route path="/dla-rodzicow-i-opiekunow" element={<GadkiDlaRodzicwI />} />

// Bad
<Route path="/forParentsAndGuardians" element={<GadkiDlaRodzicwI />} />
<Route path="/dla_rodzicow_i_opiekunow" element={<GadkiDlaRodzicwI />} />
```

---

## JavaScript/JSX Standards

### Variable Naming

- **camelCase** for variables and functions
- **PascalCase** for components and classes
- **UPPER_SNAKE_CASE** for constants

```jsx
// Good
const userName = "Jan Kowalski";
const API_URL = "https://api.example.com";
const MAX_ITEMS = 100;

function fetchUserData() { }
function NewsletterForm() { }

// Bad
const UserName = "Jan Kowalski";
const api_url = "https://api.example.com";
function FetchUserData() { }
```

### Conditional Rendering

```jsx
// Good: Ternary for simple conditions
{isLoading ? <Spinner /> : <Content />}

// Good: Logical AND for showing/hiding
{isVisible && <Component />}

// Good: Early return for complex conditions
if (!data) return null;
return <Component data={data} />;

// Bad: Multiple nested ternaries (hard to read)
{condition1 ? value1 : condition2 ? value2 : condition3 ? value3 : value4}
```

### Props Destructuring

```jsx
// Good: Destructure props for clarity
export default function Newsletter({ title, subtitle, onSubmit }) {
  return <div>{title}</div>;
}

// Acceptable: When props object is passed around
export default function Newsletter(props) {
  return <ChildComponent {...props} />;
}

// Bad: Accessing via props repeatedly
export default function Newsletter(props) {
  return <div>{props.title} {props.subtitle}</div>;
}
```

---

## Accessibility Standards

### Semantic HTML

```jsx
// Good: Semantic elements
<header>
  <nav>
    <Link to="/">Home</Link>
  </nav>
</header>
<main>
  <article>{/* content */}</article>
</main>
<footer>{/* footer */}</footer>

// Bad: Generic divs everywhere
<div>
  <div>
    <a href="/">Home</a>
  </div>
</div>
```

### ARIA Labels

```jsx
// Good: Descriptive aria-label for icons
<button aria-label="Zamknij menu" onClick={closeMenu}>
  <XIcon />
</button>

// Good: Alt text for images
<img src="logo.png" alt="Logo Gadki - kampania edukacyjna" />

// Bad: Missing accessibility attributes
<button onClick={closeMenu}>
  <XIcon />
</button>
```

### Keyboard Navigation

```jsx
// Good: Keyboard accessible buttons
<button
  onClick={handleClick}
  onKeyDown={(e) => e.key === 'Enter' && handleClick()}
  className="focus:ring-2 focus:ring-gadkidarkblue focus:outline-none"
>
  Kliknij
</button>

// Good: Tab index for custom interactive elements
<div
  role="button"
  tabIndex={0}
  onClick={handleClick}
  onKeyDown={(e) => e.key === 'Enter' && handleClick()}
>
  Custom Button
</div>
```

---

## State Management

### useState Hook

```jsx
// Good: Descriptive state names
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [formData, setFormData] = useState({ name: '', email: '' });

// Bad: Single-letter or unclear names
const [x, setX] = useState(false);
const [data, setData] = useState({});
```

### useEffect Hook

```jsx
// Good: Empty dependency array for mount-only effect
useEffect(() => {
  fetchData();
}, []);

// Good: Specific dependencies
useEffect(() => {
  updateTitle(pageTitle);
}, [pageTitle]);

// Bad: Missing dependencies (can cause bugs)
useEffect(() => {
  updateTitle(pageTitle); // pageTitle not in deps
}, []);
```

---

## Comments & Documentation

### Component Documentation

```jsx
/**
 * Newsletter signup component for Gadki campaign
 * Displays email signup form with validation
 *
 * @param {string} title - Section heading
 * @param {string} subtitle - Section description
 * @param {function} onSubmit - Form submission handler
 */
export default function Newsletter({ title, subtitle, onSubmit }) {
  // ...
}
```

### Inline Comments

```jsx
// Good: Explain WHY, not WHAT
// Using absolute positioning to match Anima design specs
<div className="absolute top-[40px] left-[200px]">

// Bad: Stating the obvious
// Set state to true
setIsMenuOpen(true);
```

---

## Performance Best Practices

### Lazy Loading

```jsx
// Good: Lazy load heavy components
import { lazy, Suspense } from 'react';
const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Ładowanie...</div>}>
      <HeavyComponent />
    </Suspense>
  );
}
```

### Memoization

```jsx
// Good: Memoize expensive calculations
import { useMemo } from 'react';

const sortedData = useMemo(() => {
  return data.sort((a, b) => a.value - b.value);
}, [data]);

// Good: Memoize callbacks to prevent re-renders
import { useCallback } from 'react';

const handleSubmit = useCallback(() => {
  submitForm(formData);
}, [formData]);
```

---

## Error Handling

### Safe Navigation

```jsx
// Good: Optional chaining
const userName = user?.profile?.name ?? 'Guest';

// Good: Nullish coalescing
const displayName = name ?? 'Nieznany';

// Bad: Multiple nested checks
const userName = user && user.profile && user.profile.name ? user.profile.name : 'Guest';
```

### Try-Catch for Async Operations

```jsx
// Good: Error handling in async functions
const fetchData = async () => {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    setData(data);
  } catch (error) {
    console.error('Failed to fetch data:', error);
    setError('Nie udało się pobrać danych');
  }
};
```

---

## File & Folder Structure

### Directory Placement

```
src/
├── components/           # Global reusable components
│   └── Header.jsx
├── routes/              # Route-specific screens
│   ├── GadkiMenuGwne/
│   │   └── screens/
│   │       └── GadkiMenuGwne.jsx
│   └── sections/        # SHARED section components
│       └── screens/
│           └── sections/
│               ├── Footer.jsx
│               └── Newsletter.jsx
└── screens/             # Root-level screens
    └── GadkiStronaGwna/
        ├── GadkiStronaGwna.jsx
        └── sections/    # Screen-specific sections
```

### Import Paths

```jsx
// Good: Relative imports for nearby files
import { Newsletter } from '../sections/Newsletter';

// Good: Absolute imports from src root (if configured)
import { Header } from 'components/Header';

// Bad: Overly long relative paths
import { Header } from '../../../../components/Header';
```

---

## Git Commit Standards

### Commit Message Format

```
<type>: <subject>

<body>

<footer>
```

**Types**:
- `feat`: New feature
- `fix`: Bug fix
- `style`: Styling changes (CSS, Tailwind)
- `refactor`: Code refactoring
- `docs`: Documentation updates
- `test`: Adding tests
- `chore`: Build process or auxiliary tool changes

**Examples**:
```
feat: add newsletter signup to footer

Implemented newsletter component with email validation
using React Hook Form and Tailwind styling.

Closes #123
```

```
fix: correct routing for /dla-rodzicow-i-opiekunow

Fixed typo in route path that caused 404 errors.
```

---

## Code Review Checklist

Before submitting code, verify:

- ✅ Component follows React functional component pattern
- ✅ Uses Tailwind utilities (not custom CSS)
- ✅ Color palette matches brand colors (beige-*, gadki*)
- ✅ Typography uses `font-lato` or `font-happy-season`
- ✅ Navigation uses React Router `<Link>`
- ✅ Accessibility: ARIA labels, alt text, keyboard navigation
- ✅ No console errors or warnings
- ✅ Polish/Ukrainian characters render correctly
- ✅ Fixed dimensions maintained (Anima pattern)
- ✅ Reuses existing components before creating new ones
- ✅ Props properly typed/documented
- ✅ State management follows hooks best practices

---

**Last Updated**: 2025-11-15
**Maintained By**: Development Team
