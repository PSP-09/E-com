import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import {ShopContext} from '../Context/ShopContext';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const {all_products} = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img src={props.banner} alt="" className='shopcategory-banner'/>
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-10</span> out of 25 products
        </p>
        <div className="shopcategory-sort">
          <p>dropdown</p>
        </div>
      </div>
      <div className="shopcategory-products">
        {
          all_products.map((item,i) => {
            if(props.category===item.category)
            {
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            }
            else
            {
              return null;
            }
          })
        }
      </div>
    </div>
  );
}

export default ShopCategory;