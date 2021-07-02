import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';

import Button from '../src/components/Button';

describe('Button', () => {
  it('should have a test ID', async () => {
    const { getByTestId } = render(<Button testId="the-test-id">Hello World</Button>);
    expect(getByTestId('the-test-id')).to.not.equal(null)
  });

  it('should render children', async () => {
    const { container } = render(<Button>Hello World</Button>);
    expect(container.textContent).to.equal('Hello World');
  });
});