import styled from 'styled-components'
import salmao from '../../Assets/img/Rectangle.png'

export const BannerContainer = styled.div`
  background-image: url(${salmao});
  width: 100vw;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
`
export const DarknessEffect = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`

export const InfosBanner = styled.div`
  width: inherit;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
  padding: 24px 0 32px;

  span {
    font-size: 32px;
    color: #fff;
  }
  h4 {
    font-size: 33px;
    color: #fff;
  }
`
