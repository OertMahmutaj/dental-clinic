import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 24px;
  background: white;
  border-bottom: 1px solid #e5e7eb;
  z-index: 1000;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 800;
  font-size: 1.25rem;
  color: var(--accent-blue);
`;

export const TopButtonsBar = styled.nav`
  display: flex;
  gap: 12px;

  @media (max-width: 600px) {
    gap: 8px;
    
    /* Hide text labels on very small screens to keep the header clean */
    span {
      display: none;
    }
  }
`;

export const TopButton = styled.a`
  padding: 14px 20px;
  color: #374151;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;
  border-left: 1px solid #e5e7eb;

  &:hover {
    background-color: #f9fafb;
    color: var(--accent-blue);
  }
`;

export const ScrollToContactButton = styled.button`
  padding: 14px 24px;
  background-color: var(--accent-blue);
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    filter: brightness(1.1);
  }
`;