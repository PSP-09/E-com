import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className='item'>

      <div className="img-div">
        <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" className='item-img'/></Link>
      </div>

      <p>{props.name}</p>

      <div className="item-prices">
          <div className="item-price-new">
              ${props.new_price}
          </div>
          <div className="iten-price-old">
              ${props.old_price}
          </div>
      </div>

    </div>
  );
}

export default Item;