import React from 'react'
import './presentation.scss'
import portada from '../../img/heroImage.jpg'

export const Presentation = () => {
  return (
    <div className='join-box'>

        <h2 className='padding-right'>Unhappy with your website? </h2>
        <p className='descripcion'>We create beautiful and fast web services</p>
        <img className='reunion' alt='presentacion ' src={portada}  />
        <p className='descripcion padding-right'>Story, emotion and purpose</p>
        <p className='primer-texto padding-right'>We help transform your ideas into real world applications that will outperform your toughest competition and help you achieve your strategic goals in short period of time.</p>

        <form className='join-form padding-right'>
          <label className='join-text' for="email">Want us to contact you?</label>
          <div  >
            <input className='join-input' type="email" id="email" name="email" placeholder='Email'/>
            <input className='join-submit' type="submit" value="Join"/>  
          </div>
        </form>
       
    </div>
  )
}
