import React from 'react';
import './css/Item.css';

const Item = (props) => {
  console.log(props);
  return (
    <div className='item'>

         <img onClick={window.scrollTo(0,0)} src={props.image} alt="" />
    </div>
  )
}

export default Item