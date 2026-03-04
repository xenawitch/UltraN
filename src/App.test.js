// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NFTLink title', () => {
    render(<App />);
    const titleElement = screen.getByText(/NFTLink/i);
    expect(titleElement).toBeInTheDocument();
});
