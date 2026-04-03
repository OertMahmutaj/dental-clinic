'use client';

import { useState } from 'react';
import { testimonials } from '@/lib/config';
import {
    TestimonialsSection,
    Container,
    HeadingWrapper,
    Title,
    Subtitle,
    Divider,
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
                    <Title>
                        Çfarë Thonë <span>Pacientët</span>
                    </Title>
                    <Subtitle>Kënaqësia juaj është prioriteti ynë kryesor</Subtitle>
                    <Divider />
                </HeadingWrapper>

                <TestimonialCard>
                    <TestimonialText>
                        {testimonials[activeIndex].text}
                    </TestimonialText>

                    <AuthorWrapper>
                        <Avatar>{testimonials[activeIndex].name.charAt(0)}</Avatar>
                        <AuthorInfo>
                            <div className="name">{testimonials[activeIndex].name}</div>
                            <div className="rating">
                                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                                    <span key={i}>⭐</span>
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
                    <p>Lexo më shumë recensione në</p>
                    <GoogleButton
                        href="https://www.google.com/maps" // to replace with Google Reviews link
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        📝 Google Reviews
                    </GoogleButton>
                </GoogleCTA>
            </Container>
        </TestimonialsSection>
    );
}