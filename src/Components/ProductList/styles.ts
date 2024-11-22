import styled from 'styled-components'
import { PropsCard } from '.'

export const ContainerList = styled.div`
  padding: 80px 0 120px;

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px 48px;

    &.menu {
      grid-template-columns: 1fr 1fr 1fr;
      gap: 32px;
    }
  }
`
