import React,{useContext} from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
const FoodItem = ({id,name,price,description,image}) => {

const{cartItems,addToCart,removeFromCart} = useContext(StoreContext)

  return (
    <div className='food-item'>
      <div className='food-item-img-container'>
            <img className='food-item-image' src={image} alt="" />
            {!cartItems[id]
            ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon} alt="" />
            :<div className='food-item-counter'>
                <img onClick={()=>removeFromCart(id)} src={assets.remove_icon} alt="" />
                <p>{cartItems[id]}</p>
                <img onClick={()=>addToCart(id)} src={assets.add_icon_black} alt="" />
                </div>
            }
      </div>
      <div className="food-iteminfo">
        <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.stars} alt="" />
        </div>
        <p className="food-item-desc">
            {description}
        </p>
        <p className="food-item-price">
            ${price}
        </p>
      </div>
    </div>
  )
}

export default FoodItem
