import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  rosaForte: 'rgba(230, 103, 103, 1);',
  rosaMedio: 'rgba(255, 235, 217, 1);',
  rosaClaro: 'rgba(255, 248, 242, 1)',
  fonteBranca: 'rgba(255, 255, 255, 1)'
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
a{
  text-decoration: none;
}

.container{
  width: 100%;
  max-width: 1024px;
  margin: auto;
}
`
export const ButtonInfos = styled.button`
  margin-bottom: 8px;
  width: 82px;
  padding: 6px 4px;
  font-weight: bold;
  font-size: 14px;
  background-color: ${cores.rosaClaro};
  border: none;
  cursor: pointer;
  color: white;
`

export default GlobalStyles
