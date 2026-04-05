import styled from "styled-components";

export const ContactSection = styled.section`
  padding: 6rem 1.5rem;
  background: #f9fafb;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 2.75rem;
  font-weight: 700;
  text-align: center;
  color: #111827;
  margin-bottom: 1rem;
`;

export const Subtitle = styled.p`
  font-size: 1.125rem;
  text-align: center;
  color: #6b7280;
  margin-bottom: 3rem;
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const InfoBox = styled.div`
  background: #ffffff;
  padding: 2rem;
  border-radius: 0px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: #111827;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  margin-bottom: 1.5rem;

  .icon {
    font-size: 1.75rem;
  }

  .content {
    display: flex;
    flex-direction: column;

    strong {
      font-weight: 600;
      color: #111827;
      margin-bottom: 0.25rem;
    }

    a,
    span {
      font-size: 0.95rem;
      color: #6b7280;
      text-decoration: none;

      &:hover {
        color: #2563eb;
      }
    }
  }
`;
