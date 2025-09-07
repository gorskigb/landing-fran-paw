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

## File Structure & Development Approach
**Single-File Implementation (for Claude Code):**
Generate as a single HTML file with:
- Inline CSS in `<style>` tags (organized by sections)
- Inline JavaScript in `<script>` tags (modular approach)
- Embedded SVG icons where possible
- Base64 encoded small images or use placeholder image services
- External CDN links for recommended libraries

**Alternative Multi-File Structure (for production):**
If deploying separately, organize as:
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

**CDN Resources to Include:**
```html
<!-- Animation Libraries -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.min.js"></script>

<!-- Gallery/Carousel -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.5/swiper-bundle.min.js"></script>

<!-- Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">

<!-- Icons -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
```