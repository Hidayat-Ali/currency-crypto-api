import React from 'react'

const Coin = ({name,image,symbol ,price,volume}) => {
  return (
    <div className='coin-container container '>
        <div className='coin-row row conatiner '> 
        <div className='coin col-8'>
            <img src={image} alt='crypto currency coin'  width={50}/>
            <h1 className='coin-name'>{name??"name"}</h1>
            <p className='coin-symbol'>{symbol ?? "new symbol"}</p>

        </div>


        <div className='coin-data col-4'>
            <p>${price ??  "new price"}</p>
            <p className='coin-volume'> $ {volume??"new volume"}</p>

        </div>

        </div>
      
    </div>
   
  )
}

export default Coin
