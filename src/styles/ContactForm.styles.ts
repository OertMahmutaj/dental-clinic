import styled from 'styled-components';

export const FormContainer = styled.form`
  width: 100%;
  /* No fixed max-width here so it fills the "form-frame" grid area */
  padding: 0;
  background-color: transparent;
  border: none;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  color: white; /* White text because this form sits on a deep blue background */
  margin-bottom: 8px;
`;

export const Input = styled.input<{ className?: string }>`
  width: 100%;
  padding: 12px 16px;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
  border-radius: 8px;
  outline: none;
  transition: all 0.2s ease;

  &:focus {
    background-color: rgba(255, 255, 255, 0.2);
    border-color: var(--accent-blue) !important;
  }
`;

export const Textarea = styled.textarea<{ className?: string }>`
  width: 100%;
  padding: 12px 16px;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
  border-radius: 8px;
  outline: none;
  resize: vertical;
  min-height: 120px;
  transition: all 0.2s ease;

  &:focus {
    background-color: rgba(255, 255, 255, 0.2);
    border-color: var(--accent-blue) !important;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 14px 24px;
  background-color: var(--accent-blue);
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    filter: brightness(1.1);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.span`
  color: #fbbf24; /* Soft yellow for error readability on dark blue */
  font-size: 0.8rem;
  margin-top: 4px;
`;

export const SuccessMessage = styled.div`
  background-color: #059669; /* Success green */
  color: white;
  padding: 16px;
  border-radius: 8px;
  text-align: center;
  margin-bottom: 20px;
`;