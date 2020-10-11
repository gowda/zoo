import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Greeting from './greeting';

describe('Greeting', () => {
  let container: Element | null = null;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container!);
    container!.remove();
    container = null;
  });

  it('renders greeting message', () => {
    act(() => {
      render(<Greeting />, container);
    });

    expect(container?.textContent).toContain('Hello, world!');
  });
});
