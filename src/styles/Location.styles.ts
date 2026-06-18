import styled from 'styled-components';

export const LocationSection = styled.section`
  padding: 80px 0;
  background-color: var(--bg-primary);
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
`;

export const DirectionsButton = styled.a`
  display: inline-block;
  padding: 12px 24px;
  background-color: var(--accent-blue);
  color: white;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;