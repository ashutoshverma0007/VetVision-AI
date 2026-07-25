import { z } from 'zod';

const clientEnvSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.string().url(),
  NEXT_PUBLIC_APP_NAME: z.string().min(1).default('VetVision AI'),
});

const parsedEnv = clientEnvSchema.safeParse({
  NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:8000',
  NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME ?? 'VetVision AI',
});

if (!parsedEnv.success) {
  throw new Error(`Invalid frontend environment: ${parsedEnv.error.message}`);
}

export const env = parsedEnv.data;
