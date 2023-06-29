import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Watches!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem 
                src="/images/prx.jpg"
                text="Explore the swiss movement of the Tissot PRX"
                lable="Tissot"
                path="/services"
                />
                <CardItem 
                src="/images/prx.jpg"
                text="Explore the swiss movement of the Tissot PRX"
                lable="Tissot"
                path="/services"
                />
            </ul>
            <ul className='cards__items'>
                <CardItem 
                src="/images/prx.jpg"
                text="Explore the swiss movement of the Tissot PRX"
                lable="Tissot"
                path="/products"
                />
                <CardItem 
                src="/images/prx.jpg"
                text="Explore the swiss movement of the Tissot PRX"
                lable="Tissot"
                path="/products"
                />
                <CardItem 
                src="/images/prx.jpg"
                text="Explore the swiss movement of the Tissot PRX"
                lable="Tissot"
                path="/products"
                />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
