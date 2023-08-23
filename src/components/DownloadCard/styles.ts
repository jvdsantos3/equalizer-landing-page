import { styled } from 'styled-components'

export const DownloadCardContent = styled.div`
  margin-top: 3rem;
  background: ${({ theme }) => theme.colors.orange};
  border-radius: 12px;
  padding: 3rem 2.25rem;
  color: ${({ theme }) => theme.colors.light};

  @media (min-width: 769px) {
    max-width: 27.875rem;
  }

  p {
    margin: 0.75rem 0 2.25rem;
  }
`

export const Price = styled.span`
  font-size: 1.25rem;
  line-height: 2rem;
  letter-spacing: -0.2px;

  display: flex;
  align-items: center;
  gap: 1rem;

  strong {
    font-size: 4.0625rem;
    line-height: 3.25rem;
  }
`

export const MainSectionInfoButtons = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
