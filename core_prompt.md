# Claude Code Prompt: FRAN-PAW Container Buildings Landing Page

## Project Overview
Create a modern, professional Polish landing page for FRAN-PAW, a leading container building manufacturer specializing in office, commercial, and restaurant spaces for small business owners and corporate facilities managers.

## Design Requirements

### Visual Style
- Modern industrial design with clean, professional aesthetics
- Color scheme: Use industrial colors (steel greys, deep blues, whites) with accent colors that convey trust and innovation
- Typography: Professional, readable fonts that work well in Polish
- Layout: Responsive design optimized for desktop and mobile
- Include subtle animations and hover effects for engagement

### Company Branding
- Company name: **FRAN-PAW**
- Create a simple, modern logo concept or use clean typography treatment
- Professional business card/landing page feel

## Content Structure & Polish Copy

### Hero Section
**Headline:** "FRAN-PAW - Profesjonalne Kontenery Budowlane"
**Subheading:** "Kompleksowe rozwiązania kontenerowe dla restauracji, biur i obiektów komercyjnych"
**CTA Button:** "Skonsultuj swój projekt"

### About Section
**Title:** "O firmie FRAN-PAW"
**Content:** Refine and professionalize this copy:
"Firma FRAN-PAW jest jednym z czołowych zakładów specjalizujących się w produkcji wysokiej jakości kontenerów budowlanych. Specjalizujemy się w projektach dla restauracji, przestrzeni biurowych i obiektów komercyjnych. Dzięki wieloletniemu doświadczeniu oferujemy naszym klientom rozwiązania dostosowane do indywidualnych potrzeb, zapewniając najwyższą jakość wykonania i kompleksową obsługę projektów."

### Key Benefits Section
**Title:** "Dlaczego wybrać kontenery FRAN-PAW?"
Create compelling benefit cards for:
- **Opłacalność** - Cost-effective solutions
- **Szybka realizacja** - Quick installation and delivery
- **Ekologiczne** - Sustainable building practices
- **Personalizacja** - Fully customizable designs
- **Trwałość** - Durable, long-lasting construction
- **Nowoczesny design** - Contemporary architectural solutions

### Product Categories Section
**Title:** "Nasze specjalizacje"
Create three main product cards:

1. **Kontenery Restauracyjne**
   - Professional kitchen setups
   - Custom dining spaces
   - Food truck and mobile restaurant solutions

2. **Kontenery Biurowe**
   - Modern office spaces
   - Meeting room configurations
   - Multi-unit office complexes

3. **Obiekty Komercyjne**
   - Retail spaces
   - Storage facilities
   - Mixed-use commercial buildings

### Technical Specifications Section
**Title:** "Specyfikacja techniczna"
Organize and present professionally:

**Okna:** PCV, aluminium, drewniane (z roletami lub bez)
**Ściany:** Izolacja z wełny mineralnej, elewacja z blachy profilowanej T18, wnętrze w płycie laminowanej
**Drzwi:** Stalowe ocieplane, PCV, aluminiowe
**Dach:** Blacha ocynkowana T55 lub system TROPIK z pełną izolacją
**Podłoga:** Wykładzina PCV, płyta wiórowa 22mm, pełne ocieplenie
**Instalacje:** Kompletne systemy sanitarne i elektryczne

### Portfolio/Gallery Section
**Title:** "Nasze realizacje"
Create placeholder gallery with:
- Restaurant container projects
- Office space installations
- Commercial building examples
- Before/after transformations

### Contact & Consultation Section
**Title:** "Skontaktuj się z nami"
**Subheading:** "Otrzymaj bezpłatną konsultację i wycenę swojego projektu"

Include:
- Professional contact form with fields:
  - Imię i nazwisko (Name)
  - Email
  - Telefon (Phone)
  - Typ projektu (Project type dropdown)
  - Opis projektu (Project description)
  - CTA: "Wyślij zapytanie"
- Phone number display
- Email address display
- Business hours information

## Technical Implementation

### Technology Stack
- Use modern HTML5, CSS3, and JavaScript
- Implement CSS Grid and Flexbox for responsive layouts
- Add smooth scrolling and subtle animations
- Optimize for Polish language (proper font rendering, spacing)
- Ensure fast loading times and mobile optimization

### Interactive Elements
- Smooth scroll navigation
- Image gallery with lightbox functionality
- Contact form validation
- Hover effects on cards and buttons
- Mobile-friendly hamburger menu

### SEO Considerations
- Proper Polish meta tags and descriptions
- Semantic HTML structure
- Alt text for images in Polish
- Schema markup for business information

## Call-to-Action Strategy
Primary CTA: Schedule consultation/project discussion
Secondary CTAs: View portfolio, download brochure, contact information

Create a professional, trustworthy landing page that positions FRAN-PAW as the premier choice for container building solutions in Poland, with clear paths for lead generation and customer engagement.

## Common Issues & Solutions

### CDN & External Dependencies
- **Issue**: CDNJS sometimes blocks resources or has MIME type issues
- **Solution**: Use UNPKG CDN for better reliability
- **Fallback**: Always implement error handling for missing libraries

### Visual Elements
- **Issue**: External images may fail to load (404 errors)
- **Solution**: Use CSS gradients as primary backgrounds, external images as enhancement only
- **Implementation**: `background: gradient, url(image)` - gradient shows if image fails

### JavaScript Errors
- **Issue**: `querySelector('#')` throws "not a valid selector" error
- **Solution**: Validate href attributes before using as selectors
- **Code**: Check for empty or "#" only hrefs and handle specially

### CSS Specificity
- **Issue**: Button text colors may not show due to specificity conflicts
- **Solution**: Use explicit colors with `!important` for critical UI elements
- **Example**: `color: #ffffff !important;` for CTA buttons

## File Structure & Development Approach
Organize the project with proper separation of concerns:
```
fran-paw-landing/
├── index.html
├── css/
│   ├── main.css
│   ├── components.css
│   └── responsive.css
├── js/
│   ├── main.js
│   ├── gallery.js
│   └── forms.js
├── assets/
│   ├── images/
│   │   ├── hero-bg.jpg
│   │   ├── products/
│   │   └── portfolio/
│   └── icons/
└── README.md
```

**CDN Resources (Recommended - Tested & Working):**
```html
<!-- Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">

<!-- Icons -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">

<!-- Animation Library (AOS) -->
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

<!-- Gallery/Carousel (Swiper) -->
<link href="https://unpkg.com/swiper@8/swiper-bundle.min.css" rel="stylesheet">
<script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>
```

**Important Implementation Notes:**
- Use UNPKG CDN for AOS and Swiper (more reliable than CDNJS)
- Implement error handling in JavaScript for missing libraries
- Use gradient backgrounds instead of external images for better reliability
- Include explicit color declarations with `!important` for critical UI elements
- Handle anchor links carefully to avoid selector errors with "#" hrefs