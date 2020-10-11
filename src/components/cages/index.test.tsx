import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Cages from './index';

describe('Cages', () => {
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

  it('renders message & button when cages array is empty', () => {
    act(() => {
      render(
        <Cages
          cages={[]}
          onAdd={() => null}
          onUpdate={() => null}
        />,
        container,
      );
    });

    expect(container?.querySelector('button')?.textContent).toBe('Add new cage');
    expect(container?.querySelector('h4')?.textContent).toContain('No cages present');
  });

  it('renders button & cages when cages array is not empty', () => {
    act(() => {
      render(
        <Cages
          cages={[{
            id: 'test-id', name: 'test cage', description: 'test description', lastUpdated: 'just now', contents: [],
          }]}
          onAdd={() => null}
          onUpdate={() => null}
        />,
        container,
      );
    });

    expect(container?.querySelector('button')?.textContent).toBe('Add new cage');
    expect(container?.querySelector('h4')).toBeNull();
  });
});
