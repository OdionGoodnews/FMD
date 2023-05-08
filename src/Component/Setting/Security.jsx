import React from 'react'

const Security = () => {
  return (
    <div>
           <div className='form-group'>
              <input type="text" className='form-control' placeholder='current password'/>
              </div>

              <div className='form-group'>
              <input type="text" className='form-control' placeholder='new password'/>
              </div>

              <div className='form-group'>
              <input type="text" className='form-control' placeholder='Re enter password'/>
            </div>
            <div className='form-group'>
             <button className='password-btn'>Update password</button>
            </div>
            
    </div>
  )
}

export default Security