import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@gaia/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iste voluptas voluptatum consequatur, nam quo illum a? Excepturi ad reprehenderit labore quia, nesciunt accusantium commodi eaque ratione inventore eum dolor quaerat iste est consequatur magni distinctio deleniti possimus hic dolore molestias? Laborum, optio ducimus. Iusto sequi et doloremque corrupti ut.',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
