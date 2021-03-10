import React from 'react'

const TooltipVideo = ({ number, embedId }) => {
  return (
    <div className="video-responsive">
      <iframe style={{borderRadius: '10px'}}
        width="220"
        height="180"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
    />
  </div>
  )
}

export default TooltipVideo
