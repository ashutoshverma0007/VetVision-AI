import { z } from 'zod';

export const healthResponseSchema = z.object({
  status: z.literal('ok'),
  service: z.literal('vetvision-backend'),
  environment: z.string(),
});

export type HealthResponse = z.infer<typeof healthResponseSchema>;
