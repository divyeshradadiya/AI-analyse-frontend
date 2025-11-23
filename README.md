# Frontend - AI Content Analyzer

Next.js 14 frontend application for the AI Content Analyzer with App Router, TypeScript, and modern React patterns.

## Features

- **Next.js 14** with App Router for optimal performance
- **TypeScript** for type safety and better developer experience
- **Tailwind CSS** for responsive, utility-first styling
- **shadcn/ui** component library for consistent, accessible UI
- **React Markdown** for rendering article content with proper formatting
- **Modular Components** with separate components for content, SEO, and factual analysis
- **Responsive Design** that works on all device sizes
- **Real-time Analysis** with loading states and error handling

## Tech Stack

- **Framework**: Next.js 16.0.3
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 3.3.x
- **UI Components**: shadcn/ui with Radix UI primitives
- **Icons**: Lucide React
- **HTTP Client**: Axios
- **Markdown Rendering**: React Markdown

## Setup

```bash
# Install dependencies
npm install

# Copy environment variables (optional - defaults are configured)
cp .env.local.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run Next.js linter

## Environment Variables

Create `.env.local` file (optional - defaults are provided):

```env
# Backend API URL (optional - defaults to http://localhost:3001/api)
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

**Note:** The frontend will work without any environment variables as it has sensible defaults.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout with providers
│   ├── page.tsx             # Home page component
│   └── globals.css          # Global styles and Tailwind imports
├── components/
│   ├── ui/                  # shadcn/ui reusable components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── ...
│   ├── ArticleForm.tsx      # URL input form with validation
│   ├── AnalysisResults.tsx  # Main results container
│   ├── ContentViewer.tsx    # Article content display with markdown
│   ├── SeoAnalysis.tsx      # SEO analysis results
│   └── FactualAccuracy.tsx  # Factual accuracy results
├── lib/
│   ├── api.ts               # API client functions
│   └── utils.ts             # Utility functions
└── types/
    └── index.ts             # TypeScript type definitions
```

components/
├── ui/ # shadcn/ui components
│ ├── badge.tsx
│ ├── button.tsx
│ ├── card.tsx
│ ├── input.tsx
│ └── alert.tsx
├── ArticleForm.tsx # URL input form
└── AnalysisResults.tsx # Results display

lib/
├── api.ts # API client functions
└── utils.ts # Utility functions

types/
└── index.ts # TypeScript type definitions

```

## Styling

This project uses:

- **Tailwind CSS** for utility-first styling
- **shadcn/ui** for pre-built, customizable components
- **Lucide React** for icons
- CSS variables for theming

## Development

The app uses Next.js App Router with React Server Components where appropriate. Client components are marked with `'use client'` directive.
```
