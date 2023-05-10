import { VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material'
import React, {useState} from 'react'
import '../../Style/Login.css'
import loginimage from '../Image/images (1).png'
import {useNavigate} from 'react-router-dom'
const ControlLogin = () => {
  const [toggle, setToggle] = useState()
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
   const Handlepasstoggle = (index) =>{
    setToggle(!index)
   }
   const HandleLogin = (e) =>{
    e.preventDefault();
    setLoading(true)
     setTimeout(() => {
       navigate('/dashboard')
      setLoading(false)
     }, 2000);
   }
  return (
    <div className='container'>
         <div className='col-md-10 m-auto'>
             <div className='card'>
                <div className="card-body">
                <form>
                   <div className='m-auto text-center'>
                     <img src={loginimage} className="loginimage"/>
                   </div>
                <p>welcome Back</p>
                <div className='form-group'>
                 <input type="text" placeholder='Enter email' className='form-control'/>
                </div>

                <div className='form-group'>
                 <input type={!toggle ? "password" : "text"} placeholder='Enter password' className='form-control'/>
                 <p className="login-input-icon" onClick={e =>Handlepasstoggle(toggle)}>{!toggle ? <VisibilityOffOutlined className="main-icon"/> : <VisibilityOutlined className="main-icon"/>}</p>
                </div>
                <div className='form-group'>
                  <div>
                  <button className='btn-login' onClick={HandleLogin}>{!loading ? "access" : "Loading..."}</button>
                  </div>
                </div>
            </form>
                </div>
            </div>
         </div>
    </div>
  )
}

export default ControlLogin