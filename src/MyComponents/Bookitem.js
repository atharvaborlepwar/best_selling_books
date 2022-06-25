import React from 'react'


export const Bookitem = (props) => {
  return (
    <div>Bookitem
        <h4>{props.Book['title']}</h4>
        <h5>{props.Book['author']}</h5>
        <button className='btn btn-sm btn-danger'>Delete</button>
    
    </div>
  )
}
