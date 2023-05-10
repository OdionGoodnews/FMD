import { VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material'
import React, {useState} from 'react'
import '../../Style/Login.css'
import loginimage from '../Image/images (1).png'
const Register = () => {
  const [toggle, setToggle] = useState()
   const Handlepasstoggle = (index) =>{
    setToggle(!index)
   }
  return (
    <div className='container'>
         <div className='col-md-10 m-auto'>
             <div className='card'>
                <div className="card-body">
                    <p>Register an account</p>
                <form>
                <div className='form-group'>
                 <input type="text" placeholder='Enter email' className='form-control'/>
                </div>

                <div className='form-group'>
                 <input type="text" placeholder='Enter Full name' className='form-control'/>
                </div>

                <div className='form-group'>
                 <input type="text" placeholder='Enter Telephone' className='form-control'/>
                </div>
                <div className='form-group'>
                  <select className='form-control'>
                     <option disabled={true}>Gender</option>
                     <option>Male</option>
                     <option>Female</option>
                 </select>
                </div>

                <div className='form-group'>
                 <input type="text" placeholder='Enter password' className='form-control'/>
                </div>

                <div className='form-group'>
                 <input type="text" placeholder='Enter Re-password' className='form-control'/>
                </div>

               
                <div className='form-group'>
                  <div>
                  <button className='btn-login'>Create account</button>
                  </div>
                </div>
            </form>
                </div>
            </div>
         </div>
    </div>
  )
}

export default Register