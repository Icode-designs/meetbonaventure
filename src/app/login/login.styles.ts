"use client";
import styled from "styled-components";

export const LoginWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 16px;
  background-color: var(--body-color);
  background: radial-gradient(circle at 50% -20%, rgba(0, 103, 221, 0.15), rgba(0, 0, 0, 0) 60%);
`;

export const LoginCard = styled.div`
  width: 100%;
  max-width: 440px;
  padding: 48px 32px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 24px;
  backdrop-filter: blur(16px);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 32px;

  h1 {
    font-size: 32px;
    font-weight: 700;
    text-align: center;
    color: var(--white);
    margin: 0;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-size: 14px;
    color: #cccccc;
    font-weight: 500;
    margin-left: 4px;
  }

  input {
    width: 100%;
    padding: 14px 16px;
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    color: var(--white);
    font-size: 16px;
    transition: all 0.2s ease;
    outline: none;

    &:focus {
      border-color: var(--highlight);
      background: rgba(0, 0, 0, 0.4);
      box-shadow: 0 0 0 4px rgba(0, 103, 221, 0.1);
    }
    
    &::placeholder {
      color: #666;
    }
  }
`;

export const ErrorMessage = styled.div`
  color: #ff4d4d;
  background: rgba(255, 77, 77, 0.1);
  padding: 12px;
  border-radius: 8px;
  font-size: 14px;
  text-align: center;
  border: 1px solid rgba(255, 77, 77, 0.2);
`;

export const SuccessMessage = styled.div`
  color: #4CAF50;
  background: rgba(76, 175, 80, 0.1);
  padding: 12px;
  border-radius: 8px;
  font-size: 14px;
  text-align: center;
  border: 1px solid rgba(76, 175, 80, 0.2);
`;
