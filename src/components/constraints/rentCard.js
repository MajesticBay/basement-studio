import studioColored from '../../images/png/studio-colored.png'
import djPlace from '../../images/png/dj_place.png'
import studioColoredWebp from '../../images/webp/studio-colored.webp'
import djPlaceWebp from '../../images/webp/dj_place.webp'

export const bgOverlayStyle = {
  background: 'rgba(7, 7, 7, 0.6)',
  backdropFilter: 'blur(10px)'
}

export const cardStructures = [
  {
    image: djPlace,
    imageWebp: djPlaceWebp,
    titleKey: 'DJ PLACE',
    listKeys: ['rentCardOne.p1', 'rentCardOne.p2', 'rentCardOne.p3']
  },
  {
    image: studioColored,
    imageWebp: studioColoredWebp,
    titleKey: 'PRODUCTION PLACE',
    listKeys: ['rentCardTwo.p1', 'rentCardTwo.p2', 'rentCardTwo.p3']
  }
]
