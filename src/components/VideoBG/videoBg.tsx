import React from 'react'
import * as S from './styles'

const VideoBg = ({ video = '/img/video-bg.mp4' }) => {
  return (
    <S.Footage autoPlay muted playsInline loop>
      <source src={video} type="video/mp4" />
      Your browser does not support HTML5 video.
    </S.Footage>
  )
}

export default VideoBg
