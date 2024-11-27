import logo from '../../Assets/img/logo.png'
import { FooterContainer, MenuLinks } from './styles'
import instagram from '../../Assets/img/instagramRosa.png'
import facebook from '../../Assets/img/facebook.png'
import twitter from '../../Assets/img/twitter.png'
import { Link } from 'react-router-dom'

const Footer = () => (
  <>
    <FooterContainer>
      <div className="container">
        <h2>
          <Link to="/">
            <img src={logo} alt="Efood" />
          </Link>
        </h2>
        <MenuLinks>
          <button>
            <img
              src={instagram}
              alt="link rede social instagram"
              title="inativo"
            />
          </button>
          <button className="btnMargin">
            <img
              src={facebook}
              alt="link button rede social facebook"
              title="inativo"
            />
          </button>
          <button>
            <img
              src={twitter}
              alt="link rede social X(Twitter)"
              title="inativo"
            />
          </button>
        </MenuLinks>
        <p>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.{' '}
        </p>
      </div>
    </FooterContainer>
  </>
)

export default Footer
