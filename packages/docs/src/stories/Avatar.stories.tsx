import { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@ygdrazil-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://avatars.githubusercontent.com/u/55965381?v=4',
    alt: 'Avatar Fallback',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
