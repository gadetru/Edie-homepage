import React from 'react'
import '../../components/team/team.scss'
import persona1 from '../../img/person1.png'
import persona2 from '../../img/person2.png'
import persona3 from '../../img/person3.png'
import boss from '../../img/person4.png'

export const Team = () => {
  return (
    <>
    <div className='team'>
        <div className='team-description'>
            <h2>Meet the team</h2>
            <h3>We are chilled and a laidback team</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='team-photos'>
            <img className='team-avatar-girl' alt='photo1' src={persona3}/>
            <div className='second-group'>
                <img className='team-avatar1' alt='photo1' src={persona1}/>
                <img className='team-avatar2' alt='photo1' src={persona2}/>
            </div>


        </div>


    </div>

    <div className='boss'>
      <p>“Fast and outstanding resutls. Edie understands their customer’s needs. They have a young and talented team.”</p>  
      <div className='boss-box'>
        <img src={boss} alt='boss'/>
        <div>
            <h3>Carlos Tran</h3>
            <p> The Decorate Gatsby </p>
        </div>
      </div>
    </div>

    </>
  )
}
