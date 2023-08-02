import React from 'react'
import ostap from '../../images/podcast-ostap.png'
import { Btn } from '../Btn'

export const Podcast = () => {
  return (
    <div className="podcast">
      <h1 className="header">ПОДКАСТ</h1>
      <p className="podcast__text">
        It&apos;s all about unity of underground music culture.
      </p>
      <div
        style={{
          backgroundImage: ostap
        }}
        className="podcast-card"
      >
      </div>
      <div className="podcast__btn-container">
        <Btn text={'ДИВИТИСЬ  НА YOUTUBE'} arrowDisplayed={true} dark={false} />
        <Btn text={'ПІДТРИМАТИ'} arrowDisplayed={false} dark={true} />
      </div>
    </div>
  )
}

export default Podcast
