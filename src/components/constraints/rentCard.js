import bg from '../../images/png/bg-record-studio.png'
import studioColored from '../../images/png/studio-colored.png'
import djPlace from '../../images/png/dj_place.png'

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
