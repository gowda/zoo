import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Button from './index';

describe('Greeting', () => {
  let container: Element | null = null;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);

    act(() => {
      render(
        <Button label="test label" title="test modal title">
          <span>test child content</span>
        </Button>,
        container,
      );
    });
  });

  afterEach(() => {
    unmountComponentAtNode(container!);
    container!.remove();
    container = null;
  });

  it('opens modal dialog on click', () => {
    const button = container?.querySelector('button');
    expect(button?.textContent).toContain('test label');

    let modal = container?.querySelector('div.modal.show.fade');
    expect(modal).toBeNull();

    act(() => {
      button?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    modal = container?.querySelector('div.modal.show.fade');
    expect(modal?.textContent).toContain('test child content');
  });

  it('close button', () => {
    act(() => {
      const button = container?.querySelector('button');
      button?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    let modal = container?.querySelector('div.modal.show.fade');
    expect(modal?.textContent).toContain('test child content');

    act(() => {
      const closeButton = container?.querySelector('button.close');
      closeButton?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    modal = container?.querySelector('div.modal.show.fade');
    expect(modal).toBeNull();
  });
});
