import { styled } from 'styled-components'

interface ButtonContainerProps {
  variant: 'ios' | 'android'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  padding: 0.875rem;
  color: ${({ theme, variant }) =>
    variant === 'ios' ? theme.colors.light : theme.colors.dark};
  background: ${({ theme, variant }) =>
    variant === 'ios' ? theme.colors.dark : theme.colors.light};
  border: 0;
  border-radius: 12px;
  font-size: 1.125rem;
  line-height: 1.4375rem;
  font-weight: 700;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  img {
    width: 1.0625rem;
    height: 1.25rem;
  }

  &:hover {
    background: ${({ theme, variant }) =>
      variant === 'ios' ? theme.colors.cyan : theme.colors.yellow};
  }
`
