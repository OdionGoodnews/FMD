import {Cancel, AssessmentOutlined, AssignmentOutlined, BorderColorOutlined, DashboardOutlined, Menu, Settings, SettingsOutlined} from '@mui/icons-material'
import React, {useState} from 'react'
import '../../Style/Setting.css'
import docpic from '../Image/doctor-pic.jpg'
import profileimage from '../Image/Goodness 1 (1).png'
import {useNavigate} from 'react-router-dom'
import PhoneSidebar from '../Dashboard/PhoneSidebar'
import Profile from './Profile'
import Edit from './Edit'
import Security from './Security'
const Setting = (id) => {
   const navigate = useNavigate();
   const [toggle, setToggle] = useState(true)
   const [active, setActive] = useState("profile");
  
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
              <div className='side-item m-auto jus'>
               <div className='sidebar-item-icon' onClick={e => navigate('/dashboard')}>< AssignmentOutlined/> Appoint Doctor</div> 
                <div className='sidebar-item-icon' onClick={e =>navigate("/appoint_reserved")}><BorderColorOutlined/> Appointment Reserved</div>
                <div className='sidebar-item-icon'>< AssessmentOutlined/> Transaction</div>
                <div className='sidebar-item-icon'>< DashboardOutlined/> Result</div>
                <div className='sidebar-item-icon active' onClick={e =>navigate("/Setting")}>< SettingsOutlined/> Setting</div>
              </div>
            </div>
           </div>
           <div className='col-md-9'>
                <div className='container'>
                <div className='left-sector'>

                  <div className='card col-md-7 m-auto card-setting' >
                   <div className='card-text'>
                     <div className=" m-auto">
                        <div className="setting-section">
                             <div className={active === "profile" ? "active-setting" :  null} onClick={e =>setActive("profile")} >Profile</div>
                             <div  onClick={e =>setActive("edit")} className={active === "edit" ? "active-setting" :  null}>Edit</div>
                             <div   onClick={e =>setActive("security")} className={active === "security" ? "active-setting" :  null}>Security</div>
                        </div>  
                        <div className='profile-setting-items'>
                           {active === "profile" && <Profile/>}
                           {active === "edit" && <Edit/>}
                           {active === "security" && (<Security/>)}
                        </div> 
                     </div>
                                           
                   </div>
                  </div>

         
                  
                  
              </div>
                </div>
           </div>
        </div>


    </div>
  )
}

export default Setting;