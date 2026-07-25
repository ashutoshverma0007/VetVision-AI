'use client';

import { healthQueryOptions } from '@/lib/api/health';
import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

function StatusPill({ label, tone }: { label: string; tone: string }) {
  return (
    <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${tone}`}>
      {label}
    </span>
  );
}

export function BackendHealthCard() {
  const healthQuery = useQuery(healthQueryOptions());

  return (
    <Card className="border-slate-200/80 bg-white/95 shadow-lg backdrop-blur">
      <CardHeader>
        <CardTitle>Backend contract</CardTitle>
        <CardDescription>Checks the FastAPI service and shows typed API status.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {healthQuery.isLoading ? (
          <div className="space-y-3">
            <div className="h-4 w-28 animate-pulse rounded-full bg-slate-200" />
            <div className="h-9 w-full animate-pulse rounded-xl bg-slate-100" />
          </div>
        ) : healthQuery.isError ? (
          <div className="space-y-3">
            <StatusPill label="Disconnected" tone="bg-rose-100 text-rose-700" />
            <p className="text-sm text-slate-600">
              The backend is not reachable yet. Start the API container or run the FastAPI server
              locally.
            </p>
            <Button variant="outline" size="sm" type="button" onClick={() => healthQuery.refetch()}>
              Retry connection
            </Button>
          </div>
        ) : healthQuery.data ? (
          <div className="space-y-3">
            <StatusPill label="Connected" tone="bg-emerald-100 text-emerald-700" />
            <dl className="grid gap-3 text-sm text-slate-600">
              <div className="flex items-center justify-between gap-4 rounded-xl bg-slate-50 px-4 py-3">
                <dt className="font-medium text-slate-900">Service</dt>
                <dd>{healthQuery.data.service}</dd>
              </div>
              <div className="flex items-center justify-between gap-4 rounded-xl bg-slate-50 px-4 py-3">
                <dt className="font-medium text-slate-900">Status</dt>
                <dd>{healthQuery.data.status}</dd>
              </div>
              <div className="flex items-center justify-between gap-4 rounded-xl bg-slate-50 px-4 py-3">
                <dt className="font-medium text-slate-900">Environment</dt>
                <dd>{healthQuery.data.environment}</dd>
              </div>
            </dl>
          </div>
        ) : (
          <div className="space-y-3">
            <StatusPill label="Empty state" tone="bg-slate-100 text-slate-600" />
            <p className="text-sm text-slate-600">No backend response was returned yet.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
