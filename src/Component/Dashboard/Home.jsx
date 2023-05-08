import React, {useState} from 'react'
import { AssessmentOutlined, AssignmentOutlined, BorderColorOutlined, Cancel, DashboardOutlined, Menu, Settings, SettingsOutlined } from '@mui/icons-material'
import '../../Style/Home.css'
import profileimage from '../Image/Goodness 1 (1).png'
import Doc_appointment from './AppointDoc/Doc_appointment'
import {useNavigate} from 'react-router-dom'
import PhoneSidebar from './PhoneSidebar'
const Home = () => {
   const navigate = useNavigate();
   const [toggle, setToggle] = useState(true)
  return (
    <div>
        <div className='dashboard-navbar'>
            <div>
                 <h5>FMA</h5>
                 <p>Federal medical appointment</p>
            </div>
            <div>
                <p>Odion Goodnews</p>
                <img src={profileimage} className="profile-image"/>
            </div>    
        </div>
        <div className='phone shadow'>
          <div className='phone-nav-item container'>
          <div>Menu</div>
          <div>{toggle ? <Menu onClick={e =>setToggle(!toggle)}/> : <Cancel onClick={e =>setToggle(!toggle)}/>}</div>
          
          </div>
            <PhoneSidebar toggle={!toggle}/>
        </div>
        
        <div className="row">
           <div className='col-md-3'>
           <div className='sidebar shadow'>
              <div className='side-item m-auto jus' >
               <div className='sidebar-item-icon active' onClick={e => navigate('/dashboard')}>< AssignmentOutlined/> Appoint Doctor</div> 
                <div className='sidebar-item-icon' onClick={e =>navigate("/appoint_reserved")}><BorderColorOutlined/> Appointment Reserved</div>
                <div className='sidebar-item-icon'>< AssessmentOutlined/> Transaction</div>
                <div className='sidebar-item-icon'>< DashboardOutlined/> Result</div>
                <div className='sidebar-item-icon'>< SettingsOutlined/> Setting</div>
              </div>
            </div>
           </div>
           <div className='col-md-9'>
                <div className='container'>
                <div className='left-sector'>
                  <div>
                      <h5>Book Appointment</h5>
                      <p>Follow these instructions: Select your prefer specialist after select the clinical department then, the calendar is going to be enable to select your appointment(the avatar doctor is loading while you select the specialist).</p>
                  </div>
                  <hr/>
                  <Doc_appointment/>
              </div>
                </div>
           </div>
        </div>
    </div>
  )
}

export default Home