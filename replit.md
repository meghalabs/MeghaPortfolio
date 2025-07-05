# Replit.md - Portfolio Website

## Overview

This is a full-stack portfolio website built with React, TypeScript, and Express.js for Megha Gupta, a Frontend Software Engineer with 10+ years of experience. The application showcases her professional profile including work at Walmart Labs and Alaska Airlines, with sections for about, skills, projects, experience, and contact information. It features a modern design using shadcn/ui components and includes a contact form with backend data persistence.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Radix UI primitives with custom styling

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon serverless PostgreSQL
- **API**: RESTful endpoints for contact form submissions
- **Development Storage**: In-memory storage fallback for development

### Data Flow
1. **Contact Form Submission**: User fills out contact form → Form validation → API request to `/api/contact` → Database storage → Success response
2. **Static Content**: Hero section, about, skills, projects, and experience data customized with Megha's actual professional information from her resume
3. **Image Assets**: External images served from Unsplash for portfolio content

## Key Components

### Frontend Components
- **Navigation**: Fixed header with smooth scrolling to sections
- **Hero Section**: Professional introduction with call-to-action buttons
- **About Section**: Personal background and expertise highlights
- **Skills Section**: Technical skills with progress indicators
- **Projects Section**: Featured work with descriptions and tags
- **Experience Section**: Professional timeline and education
- **Contact Section**: Form with validation and submission handling
- **Footer**: Social links and additional navigation

### Backend Components
- **Routes**: Contact form API endpoints (`/api/contact`, `/api/contact-submissions`)
- **Storage**: Abstracted storage interface with memory and database implementations
- **Schema**: Database schema definitions using Drizzle ORM
- **Middleware**: Request logging and error handling

## Data Flow

### Contact Form Process
1. User submits contact form with name, email, subject, and message
2. Client-side validation using Zod schemas
3. Form data sent to `/api/contact` endpoint
4. Server validates data against schema
5. Contact submission stored in database
6. Success/error response sent back to client
7. Toast notification displayed to user

### Development vs Production
- **Development**: Uses in-memory storage for contact submissions
- **Production**: Uses PostgreSQL database via Neon serverless
- **Build Process**: Vite builds React client, esbuild bundles server code

## External Dependencies

### UI and Styling
- **shadcn/ui**: Pre-built accessible components
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Unstyled, accessible UI primitives
- **Lucide React**: Icon library

### Backend and Database
- **Drizzle ORM**: Type-safe database operations
- **Neon Database**: Serverless PostgreSQL hosting
- **Zod**: Schema validation library
- **TanStack Query**: Server state management

### Development Tools
- **Vite**: Fast build tool and dev server
- **TypeScript**: Type safety across the stack
- **ESBuild**: Fast JavaScript bundler for production

## Deployment Strategy

### Build Process
1. **Client Build**: Vite builds React app to `dist/public`
2. **Server Build**: ESBuild bundles server code to `dist/index.js`
3. **Database Migration**: Drizzle pushes schema changes to database

### Environment Configuration
- **Development**: Uses `NODE_ENV=development` with Vite dev server
- **Production**: Uses `NODE_ENV=production` with built assets
- **Database**: Requires `DATABASE_URL` environment variable

### Scripts
- `npm run dev`: Start development server with hot reload
- `npm run build`: Build both client and server for production
- `npm run start`: Start production server
- `npm run db:push`: Push database schema changes

## Changelog

```
Changelog:
- July 05, 2025. Initial setup
- July 05, 2025. Customized portfolio with Megha Gupta's actual professional information:
  * Updated hero section with Frontend Software Engineer title and experience
  * Modified about section to reflect 10+ years at Walmart Labs and tech background
  * Updated skills section with React, TypeScript, performance optimization focus
  * Replaced projects with actual work: Walmart.com rebuild, CI/CD optimization, Alaska Airlines RouteMap
  * Updated experience timeline with Walmart Labs, Alaska Airlines, and previous roles
  * Modified education section with M.S. Computer Science and B.E. degrees
  * Updated contact information with real email, phone, and SF Bay Area location
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```