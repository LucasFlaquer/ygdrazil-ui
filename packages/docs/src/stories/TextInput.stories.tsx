import { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@gaia/react'

export default {
  title: 'Form/TextInput',
  component: TextInput,
  args: {},
  decorators: [
    (Story) => (
      <Box css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
        <Text as="label" size="sm">
          Email Address
        </Text>
        {Story()}
      </Box>
    ),
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Placeholder',
  },
}
export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'call.com/',
  },
}
export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}
