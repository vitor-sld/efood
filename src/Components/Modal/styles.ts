import styled from 'styled-components'
import { cores } from '../../styles'

export const ModalContainer = styled.div`
  display: none;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 1;

  &.isOpen {
    display: block;
  }
`

export const ModalProduct = styled.div`
  position: absolute;
  top: calc(50vh - 344px / 2);
  left: calc(50vw - 1024px / 2);
  display: flex;
  width: 1024px;
  max-width: 100%;
  height: 344px;
  background-color: ${cores.rosaForte};
  z-index: 1;
  padding: 32px;

  img {
    height: 280px;
    width: 280px;
    object-fit: cover;
    margin-right: 24px;
  }


    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
`
export const Infos = styled.div`
  height: 100%;
  color: ${cores.fonteBranca};
  h4 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
    line-height: 22px;
  }
  p {
    margin-bottom: 16px;
  }
  > span {
    display: block;
    margin-bottom: 16px;
  }
`

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
`

export const ButtonModal = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 7px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  color: ${cores.rosaForte};

  > span {
    margin-left: 3px;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  width: 16px;
  height: 16px;
  right: 8px;
  top: 8px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`
