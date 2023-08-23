import { styled } from 'styled-components'

interface TitleProps {
  size?: 's' | 'm' | 'l'
}

const titleSizes = {
  titleFontSizes: {
    s: '2.5rem',
    m: '4rem',
    l: '5.5rem',
  },
  titleLineHeight: {
    s: '3rem',
    m: '4rem',
    l: '5.5rem',
  },
  titleLetterSpacings: {
    s: '-0.455px',
    m: '-0.727px',
    l: '-1px',
  },
}

export const Title = styled.h1<TitleProps>`
  font-weight: 700;
  font-size: ${({ size }) =>
    size ? titleSizes.titleFontSizes[size] : titleSizes.titleFontSizes.s};
  line-height: ${({ size }) =>
    size ? titleSizes.titleLineHeight[size] : titleSizes.titleLineHeight.s};
  letter-spacing: ${({ size }) =>
    size
      ? titleSizes.titleLetterSpacings[size]
      : titleSizes.titleLetterSpacings.s};

  @media (min-width: 426px) and (max-width: 768px) {
    font-size: ${({ size }) =>
      size ? titleSizes.titleFontSizes[size] : titleSizes.titleFontSizes.m};
    line-height: ${({ size }) =>
      size ? titleSizes.titleLineHeight[size] : titleSizes.titleLineHeight.m};
    letter-spacing: ${({ size }) =>
      size
        ? titleSizes.titleLetterSpacings[size]
        : titleSizes.titleLetterSpacings.m};
  }

  @media (min-width: 769px) {
    font-size: ${({ size }) =>
      size ? titleSizes.titleFontSizes[size] : titleSizes.titleFontSizes.l};
    line-height: ${({ size }) =>
      size ? titleSizes.titleLineHeight[size] : titleSizes.titleLineHeight.l};
    letter-spacing: ${({ size }) =>
      size
        ? titleSizes.titleLetterSpacings[size]
        : titleSizes.titleLetterSpacings.l};
  }
`

interface SubtitleProps {
  size?: 's'
}

const subtitleSizes = {
  fontSizes: {
    s: '2rem',
  },
  lineHeights: {
    s: '2.5rem',
  },
}

export const Subtitle = styled.h2<SubtitleProps>`
  font-weight: 700;
  font-size: ${({ size }) =>
    size ? subtitleSizes.fontSizes[size] : subtitleSizes.fontSizes.s};
  line-height: ${({ size }) =>
    size ? subtitleSizes.lineHeights[size] : subtitleSizes.lineHeights.s};
`

interface BodyTextProps {
  size?: 's' | 'm'
}

const bodyTextSizes = {
  fontSizes: {
    s: '1rem',
    m: '1.125rem',
  },
  lineHeights: {
    s: '1.625rem',
    m: '1.75rem',
  },
}

export const BodyText = styled.p<BodyTextProps>`
  font-size: ${({ size }) =>
    size ? bodyTextSizes.fontSizes[size] : bodyTextSizes.fontSizes.s};
  line-height: ${({ size }) =>
    size ? bodyTextSizes.lineHeights[size] : bodyTextSizes.lineHeights.s};

  @media (min-width: 426px) and (max-width: 768px) {
    font-size: ${({ size }) =>
      size ? bodyTextSizes.fontSizes[size] : bodyTextSizes.fontSizes.m};
    line-height: ${({ size }) =>
      size ? bodyTextSizes.lineHeights[size] : bodyTextSizes.lineHeights.m};
  }
`

interface TextProps {
  size?: 's'
}

const textSizes = {
  fontSizes: {
    s: '1.125rem',
  },
  lineHeights: {
    s: '1.75rem',
  },
}

export const Text = styled.p<TextProps>`
  font-size: ${({ size }) =>
    size ? textSizes.fontSizes[size] : textSizes.fontSizes.s};
  line-height: ${({ size }) =>
    size ? textSizes.lineHeights[size] : textSizes.lineHeights.s};
`
