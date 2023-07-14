import { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@gaia/react'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Click me',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    children: 'Create new',
    variant: 'secondary',
    size: 'md',
  },
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    children: 'Cancel',
    variant: 'tertiary',
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Próximo passo <ArrowRight />
      </>
    ),
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}
