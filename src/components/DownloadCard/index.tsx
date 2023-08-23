import { Button } from '../Button'
import { Subtitle, Text } from '../Typography'
import { DownloadCardContent, MainSectionInfoButtons, Price } from './styles'

export function DownloadCard() {
  return (
    <DownloadCardContent>
      <Subtitle>Premium EQ</Subtitle>
      <Text>
        Get expert-level control with a robust equalizer, volume mixer, and
        spatial audio. Take your listening experience to a whole new level and
        access all our incredible features!
      </Text>

      <Price>
        <strong>$4</strong> /month
      </Price>

      <MainSectionInfoButtons>
        <Button variant="ios" />
        <Button variant="android" />
      </MainSectionInfoButtons>
    </DownloadCardContent>
  )
}
