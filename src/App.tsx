import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { DownloadCard } from './components/DownloadCard'

import ilustrationApp from './assets/illustration-app.png'

import { AppContainer, MainSectionContainer } from './styles'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <MainSectionContainer>
          <img src={ilustrationApp} alt="Smartphone" />
          <DownloadCard />
        </MainSectionContainer>
        <Footer />
      </AppContainer>
    </ThemeProvider>
  )
}
