'use client';

import React, { useState } from 'react';
import { testimonials } from '@/lib/config';
import Container from '@/components/layout/Container'; // Using the global container
import {
  TestimonialsSection,
  HeadingWrapper,
  TestimonialCard,
  TestimonialText,
  AuthorWrapper,
  Avatar,
  AuthorInfo,
  NavigationDots,
  Dot,
  GoogleCTA,
  GoogleButton
} from '@/styles/Testimonials.styles';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <TestimonialsSection id="testimonials">
      <Container>
        <HeadingWrapper>
          <h2>Çfarë thonë pacientët</h2>
          <p className="subtitle-text">Përvoja juaj është vlerësimi ynë më i mirë.</p>
        </HeadingWrapper>

        <TestimonialCard>
          <TestimonialText>“{testimonials[activeIndex].text}”</TestimonialText>
          <AuthorWrapper>
            <Avatar>{testimonials[activeIndex].name.charAt(0)}</Avatar>
            <AuthorInfo>
              <div className="name">{testimonials[activeIndex].name}</div>
              <div className="rating">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </AuthorInfo>
          </AuthorWrapper>
        </TestimonialCard>

        <NavigationDots>
          {testimonials.map((_, index) => (
            <Dot
              key={index}
              $active={index === activeIndex}
              onClick={() => setActiveIndex(index)}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </NavigationDots>

        <GoogleCTA>
          <p>Për më shumë vlerësime të verifikuara:</p>
          <GoogleButton
            href="https://www.google.com/maps/place/Klinika+Dentare+Adi+Dent/@41.3258319,19.8243573,17z/data=!3m1!5s0x1350311784aadfdb:0xe562087b50209c8c!4m8!3m7!1s0x1350312f872bd857:0xb91f0d3f7413a3f3!8m2!3d41.3258279!4d19.8269322!9m1!1b1!16s%2Fg%2F11h4ycx_cx?entry=ttu&g_ep=EgoyMDI2MDYxMy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shiko vlerësimet në Google
          </GoogleButton>
        </GoogleCTA>
      </Container>
    </TestimonialsSection>
  );
}