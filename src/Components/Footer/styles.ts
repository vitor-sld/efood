import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.footer`
  width: 100vw;
  background-color: ${cores.rosaMedio};
  padding: 40px 0;

  > div {
    width: 100%;
    h2 {
      text-align: center;
      margin-bottom: 19px;
    }
    p {
      width: 100%;
      max-width: 480px;
      text-align: center;
      margin: auto;
      word-wrap: break-word;
      font-size: 10px;
      color: ${cores.rosaForte};
    }
  }
`

export const MenuLinks = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;

  button {
    height: 24px;
    width: 24px;
    border: none;

    &.btnMargin {
      margin: 0 8px;
    }

    img {
      object-fit: cover;
      width: 100%;
    }
  }
`
