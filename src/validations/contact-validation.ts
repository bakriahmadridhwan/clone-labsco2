import z from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email'),
  message: z.string().min(10, 'Message must be at least 10 characters long'),
});

export type ContactForm = z.infer<typeof contactSchema>;