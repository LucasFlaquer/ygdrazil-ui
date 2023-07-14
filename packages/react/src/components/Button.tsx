import { ComponentProps } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 2,
  cursor: 'pointer',
  padding: '0 $4',

  '&:disabled': {
    cursor: 'not-allowed',
  },

  svg: {
    width: '$4',
    height: '$4',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        backgroundColor: '$ignite500',
        '&:disabled': {
          backgroundColor: '$gray200',
        },
        '&:not(:disabled):hover': {
          background: '$ignite300',
        },
      },
      secondary: {
        color: '$ignite300',
        border: '2px solid $ignite500',
        '&:disabled': {
          borderColor: '$gray200',
          color: '$gray200',
        },
        '&:not(:disabled):hover': {
          color: '$white',
          background: '$ignite500',
        },
      },
      tertiary: {
        color: '$gray100',
        '&:disabled': {
          borderColor: '$gray200',
          color: '$gray600',
        },
        '&:not(:disabled):hover': {
          color: '$white',
        },
      },
    },
    size: {
      sm: {
        height: 38,
      },
      md: {
        height: 46,
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {}
