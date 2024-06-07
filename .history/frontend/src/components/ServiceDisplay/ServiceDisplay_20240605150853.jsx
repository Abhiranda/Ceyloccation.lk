import React, { useContext } from 'react'
import './ServiceDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import ServiceItem from '../ServiceItem/FoodItem'

const ServiceDisplay = ({category}) => {
    const{service_list}=useContext(StoreContext)
  return (
    <div className='service-display' id='service-display'>
      <h2>Top dishes near you</h2>
      <div className="service-display-list">
        {service_list.map((item,index)=>{
            if(category==="All" || category===item.category){
                return <ServiceItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
            }
            
        })}
      </div>
    </div>
  )
}

export default ServiceDisplay;
