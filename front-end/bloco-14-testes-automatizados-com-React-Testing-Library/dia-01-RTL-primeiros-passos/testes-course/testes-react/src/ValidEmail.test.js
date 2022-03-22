import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './ValidEmail';

test('Testando se o componente tem um texto verde, caso seja válido', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Válido');
  expect(isValid).toBeInTheDocument();
  expect(isValid).toHaveClass('green-text');
});

test('Testando se o componente tem um texto vermelho, caso seja válido', () => {
  const EMAIL_USER = 'emailerrado';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Inválido');
  expect(isValid).toBeInTheDocument();
  expect(isValid).toHaveAttribute('class', 'red-text');
});

test('Testando um componente, caso o email ainda não tenha sido enviado', () => {
  render(<ValidEmail email="" />);
  const emptyEmail = screen.queryByTestId("email-empty");
  expect(emptyEmail).not.toBeInTheDocument();
});