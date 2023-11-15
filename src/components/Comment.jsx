/* eslint-disable react/prop-types */
import React from 'react'

function Comment({author, content}) {
  return (
    <div className='commentDiv'>
        <h4>{author}</h4>
        <p>{content}</p>
    </div>
  )
}

export default Comment