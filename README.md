# DevCode - Competitive Programming Platform

DevCode is a modern competitive programming platform built with Next.js 16, Tailwind CSS v4, and Shadcn UI. It features a sleek, fixed-layout interface designed for optimal coding focus.

## Features

- **Contest Page**: View active and upcoming contests with a clean timeline interface.
- **Problems Dashboard**: A robust problem explorer with category filters, search, and activity tracking.
- **Code Workspace**: A split-screen IDE-like environment powered by Monaco Editor.
  - Resizable panels (Description vs Editor).
  - Language selection (JS, Python, C++, etc.).
  - Dark/Light mode support.
- **Modern UI**: Fully responsive, fixed-screen layout with dark mode support.

## Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Editor**: [Monaco Editor](https://microsoft.github.io/monaco-editor/)
- **Utilities**: `react-resizable-panels`, `next-themes`, `clsx`, `tailwind-merge`

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open the application:**
   Navigate to [http://localhost:3000](http://localhost:3000).

## Project Structure

- `src/app/problems`: Main problems listing and dynamic problem pages.
- `src/app/contest`: Contest listing page.
- `src/components/workspace`: Components specific to the coding workspace (Editor, Description).
- `src/components/ui`: Reusable UI components.

## License

MIT
