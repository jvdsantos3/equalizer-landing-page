import { HeaderContainer, HeaderContent, HeaderTexts } from './styles'

import logo from '../../assets/logo.svg'
import { BodyText, Title } from '../Typography'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="Logo da equalizer" />

        <HeaderTexts>
          <Title>We make your music sound extraordinary.</Title>
          <div>
            <BodyText>
              A system audio equalizer specifically designed for Android and
              iOS. Freely tune the way your music sounds with a professional
              grade parametric EQ & volume mixer. Control bass, mids, treble,
              gain control, reverb, and more!
            </BodyText>
          </div>
        </HeaderTexts>
      </HeaderContent>
    </HeaderContainer>
  )
}
