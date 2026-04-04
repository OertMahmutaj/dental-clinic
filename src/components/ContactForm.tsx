'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormData } from '@/lib/validations';
import {
  FormContainer,
  SuccessMessage,
  FormGroup,
  Label,
  Input,
  ErrorMessage,
  Textarea,
  SubmitButton
} from '@/styles/ContactForm.styles';



export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitSuccess(true);
      reset();

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Ndodhi një gabim. Ju lutem provoni përsëri.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      {submitSuccess && (
        <SuccessMessage>
          ✓ Mesazhi juaj u dërgua me sukses! Do t&apos;ju kontaktojmë së shpejti.
        </SuccessMessage>
      )}

      <FormGroup>
        <Label htmlFor="name">Emri dhe Mbiemri *</Label>
        <Input
          id="name"
          type="text"
          className={errors.name ? 'error' : ''}
          {...register('name')}
        />
        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="email">Email *</Label>
        <Input
          id="email"
          type="email"
          className={errors.email ? 'error' : ''}
          {...register('email')}
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="phone">Telefon *</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="+355 69 XXX XXXX"
          className={errors.phone ? 'error' : ''}
          {...register('phone')}
        />
        {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="message">Mesazhi *</Label>
        <Textarea
          id="message"
          className={errors.message ? 'error' : ''}
          {...register('message')}
        />
        {errors.message && (
          <ErrorMessage>{errors.message.message}</ErrorMessage>
        )}
      </FormGroup>

      <SubmitButton type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Duke Dërguar...' : 'Dërgo Mesazhin'}
      </SubmitButton>
    </FormContainer>
  );
}