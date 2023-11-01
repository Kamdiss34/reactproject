import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

import React from 'react'
class HelloWorld extends React.Component {
render() {
return <h1>Hello, World!</h1>
}
}
export default HelloWorld
