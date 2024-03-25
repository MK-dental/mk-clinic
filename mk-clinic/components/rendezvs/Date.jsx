import React from 'react'

export default function Date({onPrevClick}) {
  return (
    <div> 
        <h1>Date</h1>
        <button onClick={onPrevClick}>previous</button>
    </div>

  )
}
