# Frontend - AI Content Analyzer

Next.js frontend application for the AI Content Analyzer.

## Features

- Modern, responsive UI built with Next.js 14 (App Router)
- Tailwind CSS for styling
- shadcn/ui component library
- Real-time article analysis
- Beautiful results visualization
- TypeScript for type safety

## Setup

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.local.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run Next.js linter

## Environment Variables

See `.env.local.example` for configuration options.

Required:

- `NEXT_PUBLIC_API_URL` - Backend API URL (default: http://localhost:3001/api)

## Project Structure

```
app/
├── layout.tsx       # Root layout
├── page.tsx         # Home page
└── globals.css      # Global styles

components/
├── ui/              # shadcn/ui components
│   ├── badge.tsx
│   ├── button.tsx
│   ├── card.tsx
│   ├── input.tsx
│   └── alert.tsx
├── ArticleForm.tsx      # URL input form
└── AnalysisResults.tsx  # Results display

lib/
├── api.ts           # API client functions
└── utils.ts         # Utility functions

types/
└── index.ts         # TypeScript type definitions
```

## Styling

This project uses:

- **Tailwind CSS** for utility-first styling
- **shadcn/ui** for pre-built, customizable components
- **Lucide React** for icons
- CSS variables for theming

## Development

The app uses Next.js App Router with React Server Components where appropriate. Client components are marked with `'use client'` directive.
