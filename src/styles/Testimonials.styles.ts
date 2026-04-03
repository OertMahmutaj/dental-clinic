import styled from 'styled-components';

export const TestimonialsSection = styled.section`
  padding: 5rem 2rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const HeadingWrapper = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: 1rem;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.darkGray};
  max-width: 600px;
  margin: 0 auto;
`;

export const Divider = styled.div`
  width: 5rem;
  height: 0.25rem;
  background-color: ${({ theme }) => theme.colors.primary};
  margin: 1rem auto 0 auto;
  border-radius: 9999px;
`;

export const TestimonialCard = styled.div`
  background: linear-gradient(to bottom right, ${({ theme }) => theme.colors.primary}10, ${({ theme }) => theme.colors.secondary}10);
  border-radius: 2rem;
  padding: 3rem;
  margin-bottom: 2rem;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TestimonialText = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.dark};
  line-height: 1.8;
  font-style: italic;
  margin-bottom: 2rem;
`;

export const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Avatar = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 9999px;
  background: linear-gradient(to bottom right, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  font-size: 1.25rem;
`;

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;

  .name {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.dark};
    font-size: 1.125rem;
  }

  .rating {
    display: flex;
    gap: 0.25rem;
    color: ${({ theme }) => theme.colors.yellow || '#FACC15'}; // fallback if yellow not in theme
    font-size: 1rem;
  }
`;

export const NavigationDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
`;

interface DotProps {
  $active?: boolean;
}

export const Dot = styled.button<DotProps>`
  width: ${({ $active }) => ($active ? '2rem' : '0.75rem')};
  height: 0.75rem;
  border-radius: 9999px;
  background-color: ${({ theme, $active }) => ($active ? theme.colors.primary : theme.colors.gray)};
  transition: all 0.3s;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkGray};
  }
`;

export const GoogleCTA = styled.div`
  text-align: center;
  margin-top: 3rem;

  p {
    color: ${({ theme }) => theme.colors.darkGray};
    margin-bottom: 1rem;
  }
`;

export const GoogleButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.gray};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.dark};
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;