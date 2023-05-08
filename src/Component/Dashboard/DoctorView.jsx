import {Cancel, AssessmentOutlined, AssignmentOutlined, BorderColorOutlined, DashboardOutlined, Menu, Settings, SettingsOutlined } from '@mui/icons-material'
import React, {useState} from 'react'
import '../../Style/Appoint_Reserved.css'
import docpic from '../Image/doctor-pic.jpg'
import profileimage from '../Image/Goodness 1 (1).png'
import {useNavigate} from 'react-router-dom'
import PhoneSidebar from './PhoneSidebar'
import {useLocation} from 'react-router-dom'
const Appint_Reserved = () => {
   const navigate = useNavigate();
   const [toggle, setToggle] = useState(true)
   const location = useLocation();
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

           <div className='col-md-12'>
                <div className='container'>
                <div className='left-sector'>
                  <div className='card'>
                   <div className='card-text'>
                     <div className="doctor-info-section">
                         <div className="row">
                             <div className="col-md-5">
                             <div className='doctor-profle-book'>
                            <img src={location.state.img} className="doctorprofileimage" alt="image" />
                         </div>
                        </div>


                        <div className="col-md-7">
                           <div className='doct-info'>
                              <div className='doc-id'>
                                   <div>Doctor ID</div>
                                   <div>{location.state.id}</div>
                              </div>
                              <hr className="hr-style"/>


                              <div className='doc-id'>
                                   <div>Doctor Name</div>
                                   <div>{location.state.doctorName}</div>
                              </div>
                              <hr className="hr-style"/>

                              <div className='Datetime'>
                                   <div>Specialization:</div>
                                   <div>{location.state.spec}</div>
                              </div>
                              <hr className="hr-style"/>

                              <div className='Datetime'>
                                   <div>Qualification:</div>
                                   <div>{location.state.qualification}</div>
                              </div>
                              <hr className="hr-style"/>


                              <div className='Datetime'>
                                   <div>Datetime:</div>
                                   <div>September 15, 2017 at 10:00am</div>
                              </div>
                              <hr className="hr-style"/>



                              <div className='doc-id'>
                                   <div>Type Of Appointment:</div>
                                   <div>General Medical Assistance</div>
                              </div>
                              <hr className="hr-style"/>

                              <div className='doc-id'>
                                   <div>Amount:</div>
                                   <div>${location.state.price}</div>
                              </div>
                              <hr className="hr-style"/>

                              <div className='doc-id'>
                                   <div>Doctor's Office:</div>
                                   <div>202</div>
                              </div>
                              <hr className="hr-style"/>
                                <div className='doctor-btn'>
                                     <div>Book Now</div>
                                     
                                </div>
                           </div>

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

export default Appint_Reserved;