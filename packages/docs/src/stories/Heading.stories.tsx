import { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@gaia/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom Heading',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'Strong Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será um `h2`, mas podemos alterar isso passando o `as`.',
      },
    },
  },
}
