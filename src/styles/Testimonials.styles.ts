import styled from 'styled-components';

export const TestimonialsSection = styled.section`
  padding: 80px 0;
  background: white;
`;

export const HeadingWrapper = styled.div`
  text-align: center;
  margin-bottom: 40px;
  h2 { font-size: 2.25rem; margin-bottom: 12px; }
  .subtitle-text { color: var(--text-secondary); }
`;

export const TestimonialCard = styled.div`
  max-width: 700px;
  margin: 0 auto 32px;
  padding: 40px;
  background: #f9fafb;
  border-radius: 12px;
  text-align: center;
`;

export const TestimonialText = styled.p`
  font-size: 1.25rem;
  font-style: italic;
  margin-bottom: 24px;
  line-height: 1.6;
`;

export const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const Avatar = styled.div`
  width: 48px;
  height: 48px;
  background: var(--accent-blue);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

export const AuthorInfo = styled.div`
  text-align: left;
  .name { font-weight: 700; }
  .rating { color: #fbbf24; }
`;

export const NavigationDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 40px;
`;

export const Dot = styled.button<{ $active: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.$active ? 'var(--accent-blue)' : '#e5e7eb'};
  border: none;
  cursor: pointer;
`;

export const GoogleCTA = styled.div`
  text-align: center;
`;

export const GoogleButton = styled.a`
  display: inline-block;
  margin-top: 16px;
  color: var(--accent-blue);
  font-weight: 600;
  text-decoration: underline;
`;