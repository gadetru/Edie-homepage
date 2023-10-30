import React from 'react'
import './offer.scss'
import  lapiz from '../../img/lapiz.png'
import  codigo from '../../img/codificacion.png'
import  datos from '../../img/nube.png'
import  fullStack from '../../img/smarthome.jpg'
import  board from '../../img/onboard.png'
import  booking from '../../img/booking.png'
import  juice from '../../img/juice-product.png'
import  flecha from '../../img/flecha-derecha.png'

export const Offer = () => {
  return (
    <>
    
        <h2 className='offer-tittle'> We offer high demand services</h2>
            <div className='offer-container'>
            
                <div className='products'>
                    <img className='product-logo' alt='logo' src={lapiz}/>
                    <h3 className='product-name'>UI/UX Design</h3>
                    <p className='product-description'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.</p>
                    <a className='product-link' href='https://beamish-starlight-4723bc.netlify.app/'>Get started</a>
                    
                </div>
                <div className='products'>
                    <img className='product-logo' alt='logo' src={codigo}/>
                    <h3 className='product-name'>Front End</h3>
                    <p className='product-description'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.</p>
                    <a className='product-link' href='https://www.linkedin.com/in/gadetru'>Get started</a>
                    
                </div>
                <div className='products'>
                    <img className='product-logo' alt='logo' src={datos}/>
                    <h3 className='product-name'>Back End</h3>
                    <p className='product-description'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.</p>
                    <a className='product-link' href='https://legacy.devchallenges.io/'>Get started</a>
                    
                </div>
            </div>

            <h2 className='propaganda-tittle'> Good design means good business</h2>
            <div className='propaganda'>
                <div className='margin-top'>
                    <img alt='fullstack' src={fullStack}/>
                    <p className='materia'>Full stack application</p>
                    <p className='eslogan'>Smart home dashboard</p>
                </div>
                <div>
                    <img alt='fullstack' src={board}/>
                    <p className='materia'>UX/UI design</p>
                    <p className='eslogan'>Onboard application</p>
                </div>
                <div className='margin-top'>
                    <img alt='fullstack' src={booking}/>
                    <p className='materia'>Mobile application</p>
                    <p className='eslogan'>Booking system</p>
                </div>
                <div>
                    <img alt='fullstack' src={juice}/>
                    <p className='materia'>Front End application</p>
                    <p className='eslogan'>Juice product homepage</p>
                    <div className='see-more' >
                        <a href='https://github.com/gadetru'>see more  <img className='flecha' alt='flecha' src={flecha}/></a>
                        
                    </div>
                    
                    
                </div>
            </div>

    </>
  )
}
