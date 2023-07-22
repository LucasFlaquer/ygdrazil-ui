import { StoryObj, Meta } from '@storybook/react'
import { Box, MultiStepProps, MultiStep } from '@gaia/react'

export default {
  title: 'Form/MultiStep',
  component: MultiStep,
  args: {
    currentStep: 1,
    size: 4,
  },
  decorators: [
    (Story) => (
      <Box css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
        {Story()}
      </Box>
    ),
  ],
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {
  args: {},
}

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
}
