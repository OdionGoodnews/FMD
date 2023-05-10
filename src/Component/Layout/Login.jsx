import React, {useState} from 'react'
import '../../Style/Login.css'
import ControlLogin from './ControlLogin'
import Register from './Register';
const Login = () => {
  const [toggle, setToggle] = useState();
  function HandleToggle(index){
   setToggle(!index)
  }
  return (
    <div>
         <div className='row'>
            <div className="col-md-6">
               <div className="login-sidebar">
                 <div className="login-sidebar-section">
                  <h4>FMD</h4>
                  <p>Federal medical appointment</p>
                  <button onClick={e =>HandleToggle(toggle)}>{!toggle ? "Create account" : "Login account"}</button>
                 </div>
                 
               </div>
            </div>
            <div className="col-md-6">
               <div className="login-section">
                 {!toggle ?  <ControlLogin/> : <Register/>}
               </div>
            </div>
         </div>
    </div>
  )
}

export default Login