import React from 'react';
import './css/Item.css';

const Item = (props) => {
  console.log(props.id);
  return (
    <div data-testid={`cypress-item-${props.id}`} className='item'>
         <img onClick={window.scrollTo(0,0)} src={props.image} alt="" />
    </div>
  )
}

export default Item;