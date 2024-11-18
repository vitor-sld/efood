import styled from 'styled-components'

import fundo from '../../Assets/img/fundo.png'
import { cores } from '../../styles'
import { Props } from '.'

export const HeaderContainer = styled.header<Props>`
  height: ${(props) => (props.size == 'big' ? '360px' : '163px')};
  width: 100vw;
  background-image: url(${fundo});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h1 {
    width: 125px;
    height: 57.5px;
  }

  h5 {
    display: none;
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 36px;
    text-align: center;
    color: ${cores.rosaForte};

    &.is-visible {
      display: block;
    }
  }
`
export const MenuResponsive = styled.div<Props>`
  width: inherit;
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.size == 'big' ? 'center' : 'space-between'};
  height: ${(props) => (props.size == 'big' ? 'auto' : '100%')};

  h1 {
    text-align: center;
  }

  a,
  span {
    display: ${(props) => (props.size == 'big' ? 'none' : 'block')};
    font-size: 18px;
    font-weight: bold;
    color: ${cores.rosaForte};
  }
`
