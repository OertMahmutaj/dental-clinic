import React from 'react';
import styled from 'styled-components';

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 800;
  font-size: 1.25rem;
  color: var(--accent-blue);
`;

const Icon = styled.img`
  width: 40px;  /* Keep it small to avoid blurriness */
  height: 40px;
`;

export default function Logo() {
  return (
    <LogoWrapper>
      {/* Next.js serves the public folder directly */}
      <Icon src="/favicon.ico" alt="Adi Dent Logo" />
      <span>Adi Dent</span>
    </LogoWrapper>
  );
}