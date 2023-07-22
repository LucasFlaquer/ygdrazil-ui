import { Check } from 'phosphor-react'
import { CheckboxContaienr, CheckboxIndicator } from './styles'
import { ComponentProps } from 'react'

export interface CheckboxProps
  extends ComponentProps<typeof CheckboxContaienr> {}

export function Checkbox() {
  return (
    <CheckboxContaienr>
      <CheckboxIndicator asChild>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxContaienr>
  )
}

Checkbox.displayName = 'Checkbox'
