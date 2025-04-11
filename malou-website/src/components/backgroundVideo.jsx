import React from 'react'
import videoBack from '../assets/test.mov'

const backgroundVideo = () => {
  return (
    <div>
        {/*<div className='absolute w-full h-full top-0 left-0 bg-black/50'></div>*/}
        <video className="w-full bg-cover object-contain" src={videoBack} autoPlay loop muted playsInline />
    </div>
  )
}

export default backgroundVideo