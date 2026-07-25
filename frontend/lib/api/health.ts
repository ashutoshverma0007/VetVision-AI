import { apiFetch } from '@/lib/api/client';
import { healthResponseSchema, type HealthResponse } from '@/lib/schemas/health';

export const healthQueryKey = ['health'] as const;

export async function fetchHealth(): Promise<HealthResponse> {
  const payload = await apiFetch<HealthResponse>('/api/v1/health');
  return healthResponseSchema.parse(payload);
}

export function healthQueryOptions() {
  return {
    queryKey: healthQueryKey,
    queryFn: fetchHealth,
    staleTime: 30_000,
    retry: 1,
  };
}
