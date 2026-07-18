# Towing Service

A responsive landing page for a 24/7 towing, roadside recovery and vehicle repair business. The site presents the company's core services, availability, key benefits and contact information in a modern single-page layout.

## Features

- Responsive layouts optimized for desktop and mobile devices
- Dedicated sections for towing, workshop and box truck services
- Animated content and transitions powered by Motion
- Reusable, typed React components
- Custom design system built with Tailwind CSS
- Error boundary for graceful UI failure handling

## Tech Stack

- React 18
- TypeScript
- Vite 5
- Tailwind CSS 4
- Motion
- Lucide React
- Vitest and React Testing Library
- ESLint and Prettier

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

Clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd towing-service
npm install
```

Start the local development server:

```bash
npm run dev
```

Vite will print the local development URL in the terminal, typically `http://localhost:5173`.

## Available Scripts

| Command                | Description                                               |
| ---------------------- | --------------------------------------------------------- |
| `npm run dev`          | Start the Vite development server with hot reload         |
| `npm run build`        | Type-check and create a production build                  |
| `npm run preview`      | Preview the production build locally                      |
| `npm run typecheck`    | Run TypeScript checks without emitting files              |
| `npm run lint`         | Run ESLint across TypeScript and React files              |
| `npm run format`       | Format the project with Prettier                          |
| `npm run format:check` | Check formatting without changing files                   |
| `npm run test`         | Run the test suite once with Vitest                       |
| `npm run check`        | Run linting, type checks, tests, and the production build |

## Project Structure

```text
src/
├── assets/          # Images and other static assets
├── components/      # Reusable page sections and UI components
├── models/          # Typed content and data models
├── pages/           # Top-level page components
├── styles/          # Global styles, fonts, Tailwind, and theme tokens
├── utils/           # Animation and theme utilities
├── App.tsx          # Application root
└── main.tsx         # Client entry point
```

The main service, statistics, and promise content is defined in `src/models/home.ts`. Hero images are exported from `src/assets/index.ts`.

## Production Build

Create an optimized build with:

```bash
npm run build
```

The generated files are written to the `dist/` directory and can be deployed to any static hosting provider.
