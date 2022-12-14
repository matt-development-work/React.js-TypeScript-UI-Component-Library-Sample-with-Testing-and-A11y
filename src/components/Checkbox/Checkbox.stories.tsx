import React, { useState } from 'react';
import { Args, Meta, Story } from '@storybook/react';
import { Checkbox, Props } from './Checkbox';
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const meta: Meta<Args> = {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {},
};

export default meta;

const Template: Story<Props> = (args: Props) => {
  const [checked, setChecked] = useState<boolean>(false);
  args = {
    ...args,
    checked: checked,
    onChange: (): void => {
      setChecked(!checked);
    },
  };
  return <Checkbox {...args} />;
};

export const Default: Story<Props> = Template.bind({});

Default.args = {
  label: 'Default',
};

const CheckedTemplate: Story<Props> = (args: Props) => <Checkbox {...args} />;

export const Checked: Story<Props> = CheckedTemplate.bind({});

Checked.args = {
  checked: true,
  label: 'Checked',
};

export const Disabled: Story<Props> = Template.bind({});

Disabled.args = {
  disabled: true,
  label: 'Disabled',
};

export const Indeterminate: Story<Props> = Template.bind({});

Indeterminate.args = {
  indeterminate: true,
  label: 'Indeterminate',
};

export const Error: Story<Props> = CheckedTemplate.bind({});

Error.args = {
  checked: true,
  error: true,
  label: 'Error',
};

const CustomTemplate: Story<Props> = (args: Props) => {
  const [checked, setChecked] = useState<boolean>(false);
  args = {
    ...args,
    checked: checked,
    onChange: (): void => {
      setChecked(!checked);
    },
  };
  return <Checkbox {...args} />;
};

export const Custom: Story<Props> = CustomTemplate.bind({});

Custom.args = {
  icon: {
    checked: faSolidHeart as IconProp,
    className: 'text-pink-400',
    unChecked: faRegularHeart as IconProp,
  },
  label: 'Love',
};
