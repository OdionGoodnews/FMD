import React, {useState} from 'react'
import '../../../Style/Doc_appointement.css'
import profileimage from '../../Image/doctor-pic-02.jpg'
import Data from '../../Dummy'
import { HeartBroken, HourglassBottom, MonitorHeartOutlined } from '@mui/icons-material'
import { Link, useNavigate} from 'react-router-dom'
const Doc_appointment = () => {
   const [toggle, setToggle] = useState(true)
    const navigate = useNavigate();
  return (
    <div className='container'>
          <div className='row'>
           <div className='col-md-8'>
           {Data.map(item =>(
               <div className='row'>
                    <div className='col-md-4'>
                  <div>
                       <img src={item.img} className="doctor-profile"/>
                   </div>
                   </div>

                   <div className='col-md-8 doctor-app'>
                  <div className='doct-spec-section'>
                       <h5 className='doc-name'>{item.doctorName}</h5>
                       <hr className="hr-style"/>
                       <p>
                        <span className='spec-sub-text'>specialization</span>
                        <p className='spec-sub-text'>{item.spec}</p>
                        </p>

                       <p className='appointement-price'>
                         <span >amount</span>
                         <p>${item.price}</p>
                       </p>
                       <p className='view-section'>
                         <button className='view-btn' onClick={e =>navigate('/View',
                          {state:{id: item.id, price: item.price, img: item.img, spec:item.spec, doctorName:item.doctorName, qualification: item.qualification}})}>View</button>
                       </p>
                   </div>
                   </div>
               </div>
                   
            ))}
           </div>
           <div className='col-md-4'>

            <div className='card card-app'>
               <div className="card-body">
                  <p><HeartBroken className="icon-section"/></p>
                  <div>
                  <div className="sub-title">Emergency Case</div>
                  <p className='card-sub-text'>If you need a doctor urgently outside of medicenter opening hours,
                      call emergency appointment number for emergency service.</p>
                  </div>
               </div>
            </div>




            <div className='card card-app'>
               <div className="card-body">
                  <p><HourglassBottom className="icon-section"/></p>
                  <div>
                  <div className="sub-title">Working Time</div>
                  <p className='card-sub-text'>
                     Monday to Friday
                    <span>05:00am to 10:00am</span>

                    <span> Weekends </span>
                     09:00am to 12:00pm
                  </p>
                  </div>
               </div>
            </div>


            <div className='card card-app'>
               <div className="card-body">
                  <p><MonitorHeartOutlined className="icon-section"/></p>
                  <div>
                  <div className="sub-title">Medical Services</div>
                  <p className='card-sub-text'>If you need a doctor urgently outside of medicenter opening hours,
                      call emergency appointment number for emergency service.</p>
                  </div>
               </div>
            
            </div>
            
           </div>
          </div>

             
    </div>
  )
}

export default Doc_appointment
