import styled from 'styled-components'
import { cores } from '../../styles'

export const CartContainer = styled.aside`
  position: fixed;
  display: none;
  right: 0;
  width: 100vw;
  height: 100vh;
  top: 0;

  &.is-visible {
    display: block;
  }
`
export const Overlay = styled.div`
  position: absolute;
  right: 0px;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`
export const CartDiv = styled.div`
  position: absolute;
  right: 0px;
  top: 0;
  padding: 32px 8px;
  width: 360px;
  height: 100vh;
  background-color: ${cores.rosaForte};

  h6 {
    margin-bottom: 16px;
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
  }

  > p {
    color: white;
    text-align: center;
    font-weight: bold;
  }
`
export const CartItem = styled.div`
  margin-bottom: 16px;
  position: relative;
  display: flex;
  padding: 8px;
  width: 100%;
  height: 100px;
  background-color: ${cores.rosaMedio};

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }
`
export const CartText = styled.div`
  color: ${cores.rosaForte};
  h4 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  }
  span {
    font-size: 14px;
  }
`
export const TrashIcon = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  border: 0;
  padding: 8px;
  background-color: transparent;
  cursor: pointer;

  img {
    height: 16px;
    width: 16px;
    object-fit: cover;
  }
`

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
  color: white;
`

export const Button = styled.button`
  margin-top: 16px;
  width: 100%;
  padding: 6px 4px;
  font-weight: bold;
  font-size: 14px;
  background-color: ${cores.rosaMedio};
  border: none;
  cursor: pointer;
  color: ${cores.rosaForte};
`

export const InputGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  flex: 1;

  &.inputTwo {
    flex: 2;
  }

  label {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 8px;
    color: white;
  }
  input {
    margin-bottom: 8px;
    padding: 8px;
    border: 1px solid transparent;
    width: 100%;
    background-color: ${cores.rosaMedio};
    color: black;

    &.error {
      border: red;
    }
  }
`

export const Row = styled.div`
  max-width: 100%;
  display: flex;
  gap: 34px;
`

export const ThanksParagraph = styled.p`
  font-size: 14px;
  color: ${cores.rosaClaro};
  margin-bottom: 16px;
`
