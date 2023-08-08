import { StoryObj, Meta } from '@storybook/react'
import { Box, Text, CheckboxProps, Checkbox } from '@ygdrazil-ui/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {},
  decorators: [
    (Story) => (
      <Box css={{ display: 'flex', gap: '$2' }}>
        {Story()}
        <Text as="label" size="sm">
          Email Address
        </Text>
      </Box>
    ),
  ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {
  args: {},
}
export const WithPrefix: StoryObj<CheckboxProps> = {
  args: {},
}
export const Disabled: StoryObj<CheckboxProps> = {
  args: {
    disabled: true,
  },
}
