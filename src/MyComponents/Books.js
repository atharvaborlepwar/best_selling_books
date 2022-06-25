import React from 'react'
import {Bookitem} from "./Bookitem";

export const Books = (props) => {
  return (
    <div className='container'>
      <h3 className='text-center my-3'>Books List</h3>
       <Bookitem Book={props.Books[0]}/>
      
    </div>
 )
}
