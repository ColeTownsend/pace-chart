# Next.js App

This is a modern web application built using the Next.js framework.

## Tech stack

- Next.js framework for server-side rendering and routing
- TypeScript for type checking and improved developer experience
- DrizzleORM for accessing the database at the edge
- TailwindCSS for styling

## Features

- Server-side edge rendering with streaming responses for improved performance
- A 3 column layout. Top full width navbar, with 3 columns underneath: a left sidebar, a main column, and a right sidebar. At mobile breakpoints collapse the sidebars into a mobile menu. 

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Pages

The application has a single page:

- Home page (`pages/index.tsx`): This page has 3 inputs in the main column for Distance, Duration, and Pace.

## Components

The application has several components:

- Navbar (`components/Navbar.tsx`)
- Sidebar (`components/Sidebar.tsx`)
- MainColumn (`components/MainColumn.tsx`)
- MobileMenu (`components/MobileMenu.tsx`)
- DistanceInput (`components/DistanceInput.tsx`)
- DurationInput (`components/DurationInput.tsx`)
- PaceInput (`components/PaceInput.tsx`)

## Styles

The application uses TailwindCSS for styling. Each component has its own CSS module.

## Database

The application uses DrizzleORM for accessing the database at the edge. The database connection is set up in `lib/drizzle-orm.ts`.

## TypeScript

The application uses TypeScript for type checking. The TypeScript configuration is in `tsconfig.json`.

## Public Assets

The application's public assets like favicon and logo are in the `public` directory.

## Configuration

The application's configuration for Next.js is in `next.config.js`.

## Dependencies

The application's dependencies are listed in `package.json`.