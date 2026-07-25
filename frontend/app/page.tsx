import { BackendHealthCard } from '@/components/system/backend-health-card';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const highlights = [
  'App Router-first frontend architecture',
  'Typed backend contract surface',
  'React Query for async state management',
  'Reusable UI primitives with shadcn-style composition',
];

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-10 px-6 py-10 lg:px-10">
      <section className="grid gap-8 lg:grid-cols-[1.4fr_0.9fr] lg:items-start">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-sky-700">
            VetVision AI
          </p>
          <div className="space-y-4">
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
              A monorepo foundation for veterinary vision workflows.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
              This scaffold sets up the frontend, backend, AI workspace, database assets, and
              Docker-based local development so product work can start on top of a stable
              architecture.
            </p>
          </div>
        </div>

        <BackendHealthCard />
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {highlights.map((item) => (
          <Card key={item} className="bg-white/90 shadow-sm backdrop-blur">
            <CardHeader>
              <CardTitle className="text-base">Architecture target</CardTitle>
              <CardDescription>Designed for scalable feature delivery.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm leading-6 text-slate-600">{item}</CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
}
