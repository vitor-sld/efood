import styled from 'styled-components'
import { cores } from '../../styles'

export const ProductContainer = styled.div`
  position: relative;
  height: 100%;
  max-height: 100%;
  border: 1px solid ${cores.rosaForte};
`

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: calc(100% - 217px);
  padding: 8px 10px 0;
  cursor: pointer;
  background-color: #fff;

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
export const TagRow = styled.div`
  display: flex;
  gap: 8px;
  position: absolute;
  top: 16px;
  right: 16px;
`

export const ImageProduct = styled.img`
  display: block;
  object-fit: cover;
  width: 100%;
  max-width: 100%;
  height: 217px;

  &.product {
    height: 167px;
  }
`

export const TitleRate = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 18px;
  margin-bottom: 16px;

  h3 {
    color: ${cores.rosaForte};
  }
  span {
    display: flex;
    align-items: center;
    color: ${cores.rosaForte};
    font-weight: bold;
  }

    img {
      display: block;
      object-fit: cover;
      width: 18px;
      height: 18px;
      margin-left: 8px;
    }
  }
`
