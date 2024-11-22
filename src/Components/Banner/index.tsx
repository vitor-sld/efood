import { BannerContainer, DarknessEffect, InfosBanner } from './styles'

export type Props = {
  imageLink: string
  type: string
  title: string
}

const Banner = ({ imageLink, type, title }: Props) => (
  <>
    <BannerContainer imageLink={imageLink}>
      <DarknessEffect>
        <InfosBanner className="container">
          <span>{type}</span>
          <h4>{title}</h4>
        </InfosBanner>
      </DarknessEffect>
    </BannerContainer>
  </>
)

export default Banner
