import React from 'react'
import './assets/coin.css'
const Coin = ({name,image,symbol ,price,volume}) => {
  return (
    <div className='coin-container '>
        <div className='coin-row '> 
        <div className='coin '>
            <img src={image} alt='crypto currency coin'  />
            <h1 className='coin-name'>{name??"name"}</h1>
            <p className='coin-symbol'>{symbol ?? "new symbol"}</p>

        </div>


        <div className='coin-data '>
            <p className='coin-price'>${price ??  "new price"}</p>
            <p className='coin-volume'> $ {volume??"new volume"}</p>

        </div>

        </div>
      
    </div>
   
  )
}

export default Coin
