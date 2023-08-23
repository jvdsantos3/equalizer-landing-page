import ios from '../../assets/icon-apple.svg'
import android from '../../assets/icon-android.svg'
import { ButtonContainer } from './styles'

interface ButtonProps {
  variant: 'ios' | 'android'
}

export function Button({ variant }: ButtonProps) {
  return (
    <>
      {variant === 'ios' ? (
        <ButtonContainer variant="ios">
          <img src={ios} alt="Logo da Apple" />
          iOS Download
        </ButtonContainer>
      ) : (
        <ButtonContainer variant="android">
          <img src={android} alt="Logo do Android" />
          Android Download
        </ButtonContainer>
      )}
    </>
  )
}
