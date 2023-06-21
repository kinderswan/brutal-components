import type { Meta, StoryObj } from '@storybook/html';
import { action } from '@storybook/addon-actions';

import { BrutalSelect } from './brutal-select';
import { createElement } from '../../utils/create-element';

const meta: Meta<BrutalSelect> = {
  args: {
    disabled: false,
    multiple: false,
    options: [1, 2, 3, 4, 'fift as as as a a a a a a  a a a aaah'].map(x => ({ value: x, label: x })),
    trackBy: 'key',
    placeholder: 'Select',
  },
  component: args => {
    const el = createElement('brutal-select', args);
    el.addEventListener('valueChanged', action('valueChanged'));
    return el;
  },
};

export default meta;

type Story = StoryObj<BrutalSelect>;

export const Example: Story = {};
