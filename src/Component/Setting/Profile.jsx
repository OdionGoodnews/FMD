import React from 'react'
import imageprofile from '../Image/Goodness 1 (1).png'
import '../../Style/Setting.css'
const Profile = () => {
  return (
    <div>
         <div className='form'>
              <div>
                 <img src={imageprofile} className="image-prof"/>
              </div>
              <div  className='profile-details-section'>
             <div className='profile-details'>
                 <div>Name</div>
                 <div>Odion Goodnews</div>
            </div> 
            <hr className="hr-style"/>     
            <div className='profile-details'>
                 <div>Email</div>
                 <div>odionosaze564@gmail.com</div>
            </div> 
            <hr className="hr-style"/> 

            <div className='profile-details'>
                 <div>Telephone</div>
                 <div>08147364485</div>
            </div> 
            <hr className="hr-style"/> 
            <div className='profile-details'>
                 <div>Gender</div>
                 <div>Male</div>
            </div> 
            <hr className="hr-style"/> 
            <div className='profile-details'>
                 <div>Age</div>
                 <div>25</div>
            </div>
            <hr className="hr-style"/> 
            </div>
         </div>
    </div>
  )
}

export default Profile