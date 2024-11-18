import { createGlobalStyle } from 'styled-components'

export const cores = {
  rosaForte: 'rgba(230, 103, 103, 1);',
  rosaMedio: 'rgba(255, 235, 217, 1);',
  rosaClaro: 'rgba(255, 248, 242, 1)'
}

const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
padding: 0;
box-sizing: border-box;
text-decoration: none;

}
body{
  font-family: "Roboto", sans-serif;
}

.container{
  width: 100%;
  max-width: 1024px;
  margin: auto;
}
`
export default GlobalStyles
