import React from 'react';
import { render } from '@testing-library/react';

import Button from '../Button';

describe('Button', () => {
  it('should have a test ID', async () => {
    const { getByTestId } = render(<Button testId="the-test-id">Hello World</Button>);
    expect(getByTestId('the-test-id')).toBeTruthy();
  });

  it('should render children', async () => {
    const { container } = render(<Button>Hello World</Button>);
    expect(container.textContent).toEqual('Hello World');
  });
});