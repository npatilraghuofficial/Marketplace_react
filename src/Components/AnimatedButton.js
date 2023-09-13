import React from 'react'

const AnimatedButton = () => {
  return (
    <div id="container">
    <button className="learn-more">
      <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
      </span>
      <span className="button-text">View More</span>
    </button>
  </div>
  )
}

export default AnimatedButton
