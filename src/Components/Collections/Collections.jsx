import React from 'react';
import './Collections.css';
import cols from '../Assets/cols';
import Item from '../Item/Item';

const Collections = () => {
  return (
    <div className="new-cols">
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collections">
            {cols.map((item, i) => {
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  );
}

export default Collections;