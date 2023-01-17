import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite300',
  borderRadius: '$md',
  padding: '$2 $4',
  height: '$12',
})

export function App() {
  return <Button>click</Button>
}
