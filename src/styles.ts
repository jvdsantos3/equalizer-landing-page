import { styled } from 'styled-components'

import bgPattern2 from './assets/bg-pattern-2.svg'

export const AppContainer = styled.main``

export const MainSectionContainer = styled.section`
  background: ${({ theme }) => theme.colors.dark};
  background-image: url(${bgPattern2});
  background-repeat: no-repeat;
  background-size: 17.5rem auto;
  background-position: center top;
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 426px) {
    margin: 0 2.25rem;
    padding: 0 3.8125rem;
    flex-direction: row;
    height: 37.5rem;
    background-position: right 11.6875rem top -1.9375rem;

    > div {
      margin-left: -5.9375rem;
      margin-bottom: -5rem;
      align-self: flex-end;
    }
  }

  @media (min-width: 769px) {
    margin: 0 auto;
    padding: 0 6.125rem;
    max-width: 69.375rem;
    justify-content: space-between;
    background-size: 19.5rem 29.25rem;
    background-position: left 21rem top -2.5rem;

    > div {
      margin-left: 0;
      margin-bottom: -7.1875rem;
      align-self: flex-end;
    }
  }

  > img {
    width: 13.0625rem;
    height: 26.875rem;
    margin-top: -6.125rem;

    @media (min-width: 426px) {
      width: 16.875rem;
      height: 34.75rem;
      margin-top: -8.625rem;
      align-self: flex-start;
    }

    @media (min-width: 769px) {
      width: 19.5rem;
      height: 40.125rem;
      margin-top: -13.3125rem;
    }
  }
`
