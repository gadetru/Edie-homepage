import React from 'react'
import './footer.scss'
import instagram from '../../img/instagram.svg'
import linkedin from '../../img/linkedin.svg'
import twitter from '../../img/twitter.svg'

export const Footer = () => {
  return (
    <>
    <div className='contenedor-footer'>

        <div className='footer'>
            <div className='nav'>
                <a href='https://www.google.com/?hl=es'>Home</a>
                <a href='https://remarkable-choux-fabfb7.netlify.app/'>Services</a>
                <a href='https://regal-rolypoly-eef4e7.netlify.app/'>Our Works</a>
                <a href='https://my-cantabria-gallery.netlify.app/'>Clients</a>
                <a href='https://noloencuentro.netlify.app/'>Contact</a>
            </div>

            <div className='redes-sociales'>
                <h3>Edie</h3>
                <div>
                    <img alt='IG' src={instagram}/>
                    <img alt='in' src={linkedin}/>
                    <img alt='tw' src={twitter}/>
                </div>

            </div>

            <div className='contact-mail'>
            <form className='email'>
            <label className='message' for="email">Want us to contact you?</label>
            <div  >
                <input className='email-input' type="email" id="email" name="email" placeholder='Email'/>
                <input className='email-submit' type="submit" value="Join"/>  
            </div>
            </form>
            </div>
        </div>

        <p className='creador'>
            created by Gabriel - devChallenges.io
        </p>
    </div>
    </>

  )
}
