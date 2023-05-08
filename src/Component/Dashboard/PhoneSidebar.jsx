import { AssessmentOutlined, AssignmentOutlined, BorderColorOutlined, DashboardOutlined, SettingsOutlined } from '@mui/icons-material'
import React from 'react'
import '../../Style/Phone_Nav.css'
import {useNavigate} from 'react-router-dom'
const PhoneSidebar = ({toggle}) => {
    const navigate = useNavigate();
  return (
    <div>
         {toggle && (
            <div className='col-md-6 m-auto'>
                  <div className='minphonenav'>
                <div className={toggle === "active" ? 'sidebar-item-icon' : null } onClick={e => navigate('/dashboard')}>< AssignmentOutlined/> Appoint Doctor</div> 
                <div className={toggle === "active" ? "sidebar-item-icon" : null} onClick={e =>navigate("/appoint_reserved")}><BorderColorOutlined/> Appointment Reserved</div>
                <div className='sidebar-item-icon'>< AssessmentOutlined/> Transaction</div>
                <div className='sidebar-item-icon'>< DashboardOutlined/> Result</div>
                <div className='sidebar-item-icon'>< SettingsOutlined/> Setting</div>
            </div>
            </div>
         )}
    </div>
  )
}

export default PhoneSidebar