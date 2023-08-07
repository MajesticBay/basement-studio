// import { useTranslation } from 'react-i18next'
import bg from '../../images/bg-record-studio.png'
import studioColored from '../../images/studio-colored.png'
import djPlace from '../../images/dj_place.png'

export const bgStyle = {
  backgroundImage: `url(${bg})`
}

export const bgOverlayStyle = {
  background: 'rgba(7, 7, 7, 0.6)',
  backdropFilter: 'blur(10px)'
}

export const cardStructures = [
  {
    image: djPlace,
    titleKey: 'DJ PLACE',
    listKeys: ['rentCardOne.p1', 'rentCardOne.p2', 'rentCardOne.p3']
  },
  {
    image: studioColored,
    titleKey: 'PRODUCTION PLACE',
    listKeys: ['rentCardTwo.p1', 'rentCardTwo.p2', 'rentCardTwo.p3']
  }
]
