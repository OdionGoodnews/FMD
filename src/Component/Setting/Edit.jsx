import React from 'react'
import '../../Style/Setting.css'
const Edit = () => {
  return (
    <div>
         <div>
            <form>
              <div className='form-group'>
              <input type="text" className='form-control' placeholder='Enter Name'/>
              </div>

              <div className='form-group'>
              <input type="text" className='form-control' placeholder='Enter email'/>
              </div>

              <div className='form-group'>
              <input type="text" className='form-control' placeholder='Enter telephone'/>
              </div>

              <div className='form-group'>
               <select className='form-control'>
                  <option>Male</option>
                  <option>Female</option>
               </select>
              </div>

              <div className='form-group'>
              <input type="text" className='form-control' placeholder='Enter age'/>
              </div>

              <div className='form-group'>
                <button className='btn btn-primary'>Update</button>
              </div>


            </form>
         </div>
    </div>
  )
}

export default Edit