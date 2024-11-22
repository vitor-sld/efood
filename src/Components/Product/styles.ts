import styled from 'styled-components'
import { cores } from '../../styles'

export const ProductContainer = styled.div`
  height: 100%;
  background-color: aqua;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding: 8px 10px 0;
  border-top: 0;
  height: 100%;
  max-height: 100%;

  &.colored {
    background-color: ${cores.rosaForte};
    color: ${cores.rosaMedio};
    p {
      color: ${cores.rosaMedio};
    }
    button {
      width: 100%;
      background-color: ${cores.rosaMedio};
      color: ${cores.rosaForte};
    }
  }
`
export const ImageProduct = styled.img`
  display: block;
  object-fit: cover;
  width: 100%;
  max-width: 100%;
  height: 217px;
  margin-bottom: 8px;

  &.product {
    height: 167px;
  }
`

export const TextContainer = styled.div`
  p {
    margin-bottom: 16px;
    line-height: 22px;
    color: ${cores.rosaClaro};
  }
  h3 {
    color: ${cores.rosaClaro};
  }
`
export const ButtonInfos = styled.button`
  margin-bottom: 8px;
  width: 82px;
  padding: 6px 4px;
  font-weight: bold;
  font-size: 14px;
  background-color: ${cores.rosaForte};
  border: none;
  cursor: pointer;
  color: white;
`
