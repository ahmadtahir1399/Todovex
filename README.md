<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:050505,55:1c1d20,100:0c63e7&height=170&section=header&text=Todovex&fontSize=52&fontColor=fcfaf8&fontAlignY=38&desc=AI-powered%20task%20manager&descAlignY=60&descSize=16" width="100%" alt="Todovex" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Convex-0a85ed?style=for-the-badge" alt="Convex" />
  <img src="https://img.shields.io/badge/NextAuth-1c1d20?style=for-the-badge" alt="NextAuth" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
</p>

> 🚧 **Work in progress.** The landing page, Google sign-in and the database schema are done. Task management and the AI features are being built on top of them.

## ✨ About

Todovex is a task manager built with **Next.js 15** and a **Convex** real-time backend. Users sign in with Google through **NextAuth (Auth.js)**. A custom Convex adapter stores users and sessions, and each session gets a signed JWT so Convex can authenticate requests.

The schema is ready for the next stage: todos and sub-todos linked to projects and labels, priorities and due dates, plus a **vector index on 1536-dim embeddings** for AI-powered semantic search.

## 🔋 Features

- ✅ Animated landing page (Framer Motion) with light and dark mode
- ✅ Google OAuth sign-in with NextAuth and a custom **Convex adapter**
- ✅ RS256-signed JWTs bridging NextAuth sessions to Convex auth
- ✅ Protected dashboard using Next.js middleware
- ✅ Convex schema for todos, sub-todos, projects and labels with vector search
- 🔜 Task CRUD, projects and labels UI
- 🔜 AI prioritization and natural-language task input

## 🛠️ Tech stack

| Layer | Tools |
|---|---|
| Framework | Next.js 15 (App Router), React, TypeScript |
| Backend / DB | Convex (real-time database, vector index) |
| Auth | NextAuth v5 (Google provider), `jose` for JWT signing |
| UI | Tailwind CSS, shadcn/ui (Radix), Framer Motion, Lucide icons |
| Forms | React Hook Form + Zod |

## 🚀 Getting started

```bash
git clone https://github.com/ahmadtahir1399/Todovex.git
cd Todovex
npm install
```

Generate the key pair that signs Convex tokens:

```bash
node generateKeys.mjs
```

Create `.env.local`:

```env
NEXT_PUBLIC_CONVEX_URL=        # from `npx convex dev`
CONVEX_AUTH_PRIVATE_KEY=       # from generateKeys.mjs
JWKS=                          # from generateKeys.mjs
CONVEX_AUTH_ADAPTER_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
AUTH_SECRET=                   # npx auth secret
```

Set `CONVEX_SITE_URL`, `JWKS` and `CONVEX_AUTH_ADAPTER_SECRET` in the Convex dashboard too, then run both servers:

```bash
npx convex dev
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 📁 Project structure

```
app/
  (customer)/      landing page (header, features)
  dashboard/       protected user area
  api/auth/        NextAuth route handlers
  ConvexAdapter.ts NextAuth ↔ Convex adapter
convex/
  schema.ts        auth tables + todos, subTodos, projects, labels
  authAdapter.ts   Convex functions used by the adapter
auth.ts            NextAuth config + Convex JWT signing
middleware.ts      route protection
```

## 👤 Author

**Muhammad Ahmad Tahir** · [Portfolio](https://ahmadverse.vercel.app/) · [LinkedIn](https://www.linkedin.com/in/ahmad-ai-enginner/) · [GitHub](https://github.com/ahmadtahir1399)
