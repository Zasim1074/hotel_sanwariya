# Hotel Sanwariya Website

The Hotel Sanwariya website is a responsive hotel information and booking site for properties in Indore, Madhya Pradesh. Guests can explore rooms and amenities, read guest feedback, view hotel photos, and contact the hotel by phone or WhatsApp.

Production site: [sanwariyahotel.com](https://sanwariyahotel.com/)

## Features

- Landing page with hotel introduction, rooms, services, guest reviews, and photo showcase.
- Room information for single, double, and triple occupancy, with AC and non-AC options.
- Booking and enquiry forms, plus direct call and WhatsApp contact links.
- Location and map links for Hotel Sanwariya and Hotel Bamleshwari.
- Search metadata, Open Graph and Twitter metadata, and Hotel structured data.
- Responsive styling with Tailwind CSS 4 and shared UI components.

## Tech stack

- [Next.js](https://nextjs.org/) 16 with the App Router
- React 19 and TypeScript
- Tailwind CSS 4
- Radix UI, Lucide icons, and Framer Motion

## Requirements

- Node.js compatible with the installed Next.js 16 release
- npm (or another package manager supported by the lockfile)

## Getting started

Install dependencies and start the local development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server. |
| `npm run build` | Create a production build. |
| `npm run start` | Serve the production build locally. Run `npm run build` first. |
| `npm run lint` | Run ESLint. |

## Project structure

```text
app/
  page.tsx              Home page composition and page metadata
  layout.tsx            Shared layout, fonts, metadata, and Hotel schema
  Pages/                Home page sections (hero, rooms, services, etc.)
components/
  forms/                Booking and enquiry forms
  layout/               Header, navigation, and footer
  ui/                   Shared interface components
data/
  contacts.js           Contact details, room data, services, and reviews
public/                 Hotel photography, logos, and social/booking images
styles/
  globals.css           Global styles, theme tokens, and Tailwind imports
```

## Updating site content

- Contact numbers, WhatsApp booking text, room data, amenities, and review data are maintained in `data/contacts.js`.
- Home page sections are composed in `app/page.tsx`; section components are in `app/Pages/`.
- Shared header, navigation, and footer are in `components/layout/`.
- Place local images in `public/` and reference them from components with paths beginning `/` (for example, `/Images/home/h1_hero.jpg`).
- Theme colors, typography mappings, and global behavior are in `styles/globals.css`.

## Deployment

The site can be deployed to any platform that supports Next.js. For a standard Node.js deployment, run:

```bash
npm run build
npm run start
```

The configured canonical site URL and metadata base use `https://sanwariyahotel.com/`; update those values in `app/layout.tsx` if deploying under a different domain. For Vercel, import the repository and use the detected Next.js build settings.

## Notes

- The site currently keeps its content in source files; no database or environment variables are configured in the repository.
- The image configuration permits remote images from `images.unsplash.com`. Hotel images are served from `public/`.
