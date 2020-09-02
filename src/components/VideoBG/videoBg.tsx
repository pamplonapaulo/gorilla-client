import React from 'react'
import styled from 'styled-components'

const VideoBg = ({ video = '/img/video-bg.mp4' }) => {
  return (
    <Footage autoPlay muted loop>
      <source src={video} type="video/mp4" />
      Your browser does not support HTML5 video.
    </Footage>
  )
}

const Footage = styled.video`
  position: absolute;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: -1;

  @media (min-aspect-ratio: 16/9) {
    width: 100%;
    height: auto;
  }
  @media (max-aspect-ratio: 16/9) {
    width: auto;
    height: 100%;
  }
`

export default VideoBg
