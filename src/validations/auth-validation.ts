import z from 'zod';

export const subscribeSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email'),
});

export type SubscribeForm = z.infer<typeof subscribeSchema>;