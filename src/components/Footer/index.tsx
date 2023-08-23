import {
  FooterContainer,
  IconsContainer,
  TextContainer,
  TextInfos,
} from './styles'

import logo from '../../assets/logo.svg'
import facebookIcon from '../../assets/icon-facebook.svg'
import instagramIcon from '../../assets/icon-instagram.svg'
import twitterIcon from '../../assets/icon-twitter.svg'
import { BodyText } from '../Typography'

export function Footer() {
  return (
    <FooterContainer>
      <img src={logo} alt="Logo" />
      <TextContainer>
        <TextInfos>
          <BodyText>All rights reserved © Equalizer 2021</BodyText>
          <BodyText>
            Have any problems? Contact us via social media or email us at{' '}
            <strong>equalizer@example.com</strong>
          </BodyText>
        </TextInfos>
        <IconsContainer>
          <img src={facebookIcon} alt="Icone do Facebook" />
          <img src={instagramIcon} alt="Icone do Instagram" />
          <img src={twitterIcon} alt="Icone do Twitter" />
        </IconsContainer>
      </TextContainer>
    </FooterContainer>
  )
}
