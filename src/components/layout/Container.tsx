import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px; /* Ensure there is breathing room on mobile */
  box-sizing: border-box; /* This is critical */
`;

interface ContainerProps {
    children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
    return <StyledContainer>{children}</StyledContainer>;
}