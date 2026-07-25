# VetVision AI

VetVision AI is a production-ready monorepo scaffold for a veterinary computer-vision platform.
It is organized for a Next.js frontend, a FastAPI backend, a dedicated AI workspace, PostgreSQL,
Supabase services, and Docker-based local development.

## Tech Stack

- Frontend: Next.js 16, React 19, TypeScript, Tailwind CSS v4, shadcn/ui, TanStack Query, React Hook Form, Zod
- Backend: FastAPI, Python, SQLAlchemy, Alembic, PostgreSQL, Pydantic
- AI: PyTorch, OpenCV, Ultralytics YOLOv11, XGBoost, SHAP
- Storage and Auth: Supabase Storage and Supabase Auth
- Deployment: Docker and Docker Compose

## Folder Guide

- [frontend](frontend) contains the Next.js App Router application, reusable UI components, typed API clients, and the React Query provider.
- [backend](backend) contains the FastAPI application, database session wiring, Alembic migrations, and REST API routing.
- [ai](ai) contains the Python AI workspace for inference pipelines, model contracts, explainability, and future training utilities.
- [database](database) contains database documentation, schema snapshots, and seed or design artifacts that are not part of Alembic itself.
- [docker](docker) contains the Dockerfiles and Compose setup for local development and container builds.
- [docs](docs) contains architecture notes and folder-level documentation.

## Local Development

1. Copy `.env.example` to `.env` and adjust the values for your machine.
2. Install dependencies separately for the frontend and Python workspaces.
3. Start PostgreSQL, backend, and frontend with Docker Compose or run them independently during development.

## Scripts

- `pnpm frontend:dev` starts the Next.js frontend.
- `pnpm frontend:build` builds the frontend for production.
- `pnpm frontend:lint` runs frontend lint checks.
- `pnpm frontend:typecheck` runs the TypeScript compiler in no-emit mode.

## Architecture Notes

This scaffold intentionally avoids business logic. It establishes the folder structure,
configuration surface, and integration contracts needed for future feature work.
