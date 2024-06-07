import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <hr/>
        <h1>Explore our Services</h1>
        <p className='explore-menu-text'>Indulge in Culinary Excellence: Explore our meticulously crafted menu, from savory starters to divine desserts. Delight in new flavors or savor your favorites, all conveniently delivered to your doorstep.</p>
        <div className='explore-menu-list'>
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt='' />
                        <p>{item.menu_name}</p>
                        </div>
                )
            })}
        </div>
        <hr/>
    </div>
  )
}

export default ExploreMenu
