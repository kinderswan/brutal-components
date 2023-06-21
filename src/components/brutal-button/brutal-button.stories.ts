// export default {
//   title: 'Components/BrutalButton',
// };

import type { Meta, StoryObj } from '@storybook/html';
import { action } from '@storybook/addon-actions';

import { BrutalButton } from './brutal-button';
import { createElement } from '../../utils/create-element';

const meta: Meta<BrutalButton> = {
  args: {
    color: 'primary',
    size: 'lg',
    autofocus: true,
    name: 'Button Name',
    disabled: false,
  },
  component: args => {
    const el = createElement('brutal-button', args);
    el.innerHTML = 'Value';
    el.addEventListener('clicked', action('clicked'));
    return el;
  },
};

export default meta;

type Story = StoryObj<BrutalButton>;

export const Example: Story = {};
