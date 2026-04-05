import styled from 'styled-components';

export const TopButtonsBar = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  align-items: flex-start;
  gap: 1rem;
  padding: 2rem 1rem 2rem;
  background: #ffffff;
  border-bottom: 1px solid #BCBCBC;
  position: sticky;
  top: 0;
  z-index: 50;
`;

export const TopButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem 0.5rem 0.4rem;
  font-weight: 600;
  font-size: 0.95rem;
  color: #e4e6eb;
  background: #516EFF;
  border-radius: 0px;
  border: 1px solid #ebeff5;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background: #3b82f6;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(59, 130, 246, 0.3);
  }
`;

export const ScrollToContactButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem 0.5rem 0.4rem;
  font-weight: 600;
  font-size: 0.95rem;
  color: #e4e6eb;
  background: #516EFF;
  border-radius: 0px;
  border: 1px solid #d1d5db;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background: #094181;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(59, 130, 246, 0.3);
  }
`;