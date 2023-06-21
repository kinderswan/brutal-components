import type { Meta, StoryObj } from '@storybook/html';
import { action } from '@storybook/addon-actions';

import { BrutalInput } from './brutal-input';
import { createElement } from '../../utils/create-element';

const meta: Meta<BrutalInput> = {
  args: {
    disabled: false,
    placeholder: '',
    value: '',
  },
  component: args => {
    const el = createElement('brutal-input', args);
    el.addEventListener('valueChanged', action('valueChanged'));
    return el;
  },
};

export default meta;

type Story = StoryObj<BrutalInput>;

export const Example: Story = {};
