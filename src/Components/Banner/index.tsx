import { BannerContainer, DarknessEffect, InfosBanner } from './styles'

const Banner = () => (
  <>
    <BannerContainer>
      <DarknessEffect>
        <InfosBanner className="container">
          <span>Italiana</span>
          <h4>La Dolce Vita Trattoria</h4>
        </InfosBanner>
      </DarknessEffect>
    </BannerContainer>
  </>
)

export default Banner
