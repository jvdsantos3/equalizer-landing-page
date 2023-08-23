import { styled } from 'styled-components'

export const FooterContainer = styled.footer`
  padding: 4rem 1.5rem 5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  img {
    width: 9.125rem;
    height: 2rem;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    padding: 11.4375rem 2.25rem 5.3125rem;
  }

  @media (min-width: 769px) {
    max-width: 69.375rem;
    margin: 0 auto;
    padding: 12.625rem 0 5.6875rem;
    flex-direction: row;
    gap: 8.625rem;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media (min-width: 426px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: 769px) {
    flex: 1;
  }
`

export const TextInfos = styled.div`
  max-width: 22.875rem;
`

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  img {
    cursor: pointer;
    width: 1.25rem;
    height: 1.25rem;
  }
`
