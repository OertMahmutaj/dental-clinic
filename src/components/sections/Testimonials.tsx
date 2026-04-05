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
                        {`Çfarë Thonë`} <span>{`Pacientët`}</span>
                    </Title>
                    <Subtitle>{`Kënaqësia juaj është prioriteti ynë kryesor`}</Subtitle>
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
                    <p>{`Lexo më shumë recensione në`}</p>
                    <GoogleButton
                        href="https://www.google.com/maps/place/Klinika+Dentare+Adi+Dent/@41.3258319,19.8243573,17z/data=!3m1!5s0x1350311784aadfdb:0xe562087b50209c8c!4m8!3m7!1s0x1350312f872bd857:0xb91f0d3f7413a3f3!8m2!3d41.3258279!4d19.8269322!9m1!1b1!16s%2Fg%2F11h4ycx_cx?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {`📝 Google Reviews`}
                    </GoogleButton>
                </GoogleCTA>
            </Container>
        </TestimonialsSection>
    );
}