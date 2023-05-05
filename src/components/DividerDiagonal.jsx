import React from 'react'
import '../css/dividerDiagonal.css'

const DividerDiagonal = () => {
  return (
    <div className="section-one">
      <div className="separator">
        <svg
          className="separator__svg"
          width="100%"
          height="350"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="#ff9800"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M 100 100 V 10 L 0 100" />
          <path d="M 30 73 L 100 18 V 10 Z" fill="#ff6a3d" strokeWidth="0" />
        </svg>
      </div>
    </div>
  )
}

export default DividerDiagonal
