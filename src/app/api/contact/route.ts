import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactFormSchema } from '@/lib/validations';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validatedData = contactFormSchema.parse(body);

    // Sending email with resend
    const data = await resend.emails.send({
      from: 'Adi Dent Website <onboarding@resend.dev>', // Domain to be changed
      to: ['oert64@gmail.com'], // Clinic Email to be changed
      subject: `Mesazh i Ri nga ${validatedData.name}`,
      html: `
        <h2>Mesazh i Ri nga Faqja e Klinikës</h2>
        <p><strong>Emri:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Telefon:</strong> ${validatedData.phone}</p>
        <p><strong>Mesazhi:</strong></p>
        <p>${validatedData.message}</p>
      `,
    });

    return NextResponse.json(
      { message: 'Email sent successfully', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Failed to send email', error },
      { status: 500 }
    );
  }
}