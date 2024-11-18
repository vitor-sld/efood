import styled from 'styled-components'
import { PropsCard } from '.'

export const ContainerList = styled.div<PropsCard>`
  padding: 80px 0 120px;

  > div {
    display: grid;
    grid-template-columns: ${(props) =>
      props.type == 'cardRestaurant' ? '1fr 1fr' : '1fr 1fr 1fr'};
    gap: ${(props) => (props.type == 'cardRestaurant' ? '80px 48px' : '32px')};
  }
`
