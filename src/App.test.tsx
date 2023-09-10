import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Blackjack', () => {
  render(<App />);
  const linkElement = screen.getByText(/Blackjack/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Stats', () => {
  render(<App />);
  const linkElement = screen.getByText(/Stats/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Player Actions', () => {
  render(<App />);
  const linkElement = screen.getByText(/Player Actions/i);
  expect(linkElement).toBeInTheDocument();
});
