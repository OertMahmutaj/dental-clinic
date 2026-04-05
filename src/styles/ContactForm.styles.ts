import styled, { keyframes } from 'styled-components';

export const FormContainer = styled.form`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.offWhite};
  border-radius: 0px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const Input = styled.input<{ className?: string }>`
  padding: 0.75rem 1rem;
  border-radius: 0px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  font-size: 1rem;
  transition: border 0.2s, box-shadow 0.2s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
  }

  &.error {
    border-color: ${({ theme }) => theme.colors.danger};
  }
`;

export const Textarea = styled.textarea<{ className?: string }>`
  padding: 0.75rem 1rem;
  border-radius: 0px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  font-size: 1rem;
  resize: vertical;
  min-height: 120px;
  transition: border 0.2s, box-shadow 0.2s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
  }

  &.error {
    border-color: ${({ theme }) => theme.colors.danger};
  }
`;

export const ErrorMessage = styled.span`
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.danger};
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-5px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const SuccessMessage = styled.div`
  background-color: ${({ theme }) => theme.colors.success};
  color: ${({ theme }) => theme.colors.white};
  padding: 1rem;
  border-radius: 0px;
  text-align: center;
  margin-bottom: 1.5rem;
  animation: ${fadeIn} 0.3s ease-out;
`;

export const SubmitButton = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 0px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray};
    cursor: not-allowed;
  }
`;