import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Emri duhet të ketë të paktën 2 karaktere'),
  email: z.string().email('Email i pavlefshëm'),
  phone: z
    .string()
    .min(9, 'Numri i telefonit duhet të ketë të paktën 9 shifra')
    .regex(/^[0-9+\s()-]+$/, 'Numri i telefonit është i pavlefshëm'),
  message: z.string().min(10, 'Mesazhi duhet të ketë të paktën 10 karaktere'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;