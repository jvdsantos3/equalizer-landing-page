import { styled } from 'styled-components'

import bgMobile from '../../assets/bg-main-mobile.png'
import bgTablet from '../../assets/bg-main-tablet.png'
import bgPattern1 from '../../assets/bg-pattern-1.svg'

export const HeaderContainer = styled.header`
  background-image: url(${bgMobile});
  background-repeat: no-repeat;
  background-size: auto;
  background-position: right -12.5rem top -15.0625rem;
  padding-bottom: 10.375rem;

  @media (min-width: 426px) {
    background-image: url(${bgPattern1}), url(${bgTablet});
    background-repeat: no-repeat;
    background-size:
      16.6875rem 25rem,
      61.4375rem 50.5rem;
    background-position:
      right -8% top -12%,
      top left -13rem;
    padding-bottom: 15.625rem;
  }

  @media (min-width: 769px) {
    margin-bottom: 7.9375rem;
    background-size:
      19.5rem 29.25rem,
      cover;
    background-position:
      right top -12%,
      center top -45rem;
  }
`

export const HeaderContent = styled.div`
  padding: 1.5rem 1.5rem 0;

  @media (min-width: 426px) and (max-width: 768px) {
    padding: 3.875rem 2.4375rem 0;
  }

  @media (min-width: 769px) {
    max-width: 90rem;
    margin: 0 auto;
    padding: 3.875rem 10.3125rem;
  }

  img {
    margin-bottom: 4rem;

    @media (min-width: 426px) and (max-width: 768px) {
      margin-bottom: 5.9375rem;
    }

    @media (min-width: 769px) {
      margin-bottom: 7.9375rem;
    }
  }
`

export const HeaderTexts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;

  @media (min-width: 426px) {
    max-width: 32.5rem;
    gap: 1.75rem;
  }

  @media (min-width: 769px) {
    max-width: 52.75rem;

    > div {
      max-width: 51.5625rem;
    }
  }
`
