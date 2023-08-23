import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.light};
    color: ${({ theme }) => theme.colors.dark};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 26px;
  }
`
