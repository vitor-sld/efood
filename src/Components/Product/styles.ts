import styled from 'styled-components'
import { cores } from '../../styles'

export const ProductContainer = styled.div`
  position: relative;
`

export const Card = styled.div`
  width: 100%;
  padding: 8px 10px 0;
  cursor: pointer;
  border: 1px solid ${cores.rosaForte};
  border-top: 0;

  p {
    margin-bottom: 16px;
    line-height: 22px;
    color: ${cores.rosaForte};
  }
  button {
    margin-bottom: 8px;
    width: 82px;
    padding: 6px 4px;
    font-weight: bold;
    font-size: 14px;
    background-color: ${cores.rosaForte};
    border: none;
    cursor: pointer;
    color: white;
  }
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

export const TagsContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: aliceblue;
`

export const TitleRate = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  font-size: 18px;
  margin-bottom: 16px;

  span {
    display: flex;
    align-items: center;

    img {
      display: block;
      object-fit: cover;
      width: 18px;
      height: 18px;
      margin-left: 8px;
    }
  }
`
