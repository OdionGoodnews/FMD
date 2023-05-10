import {Cancel, AssessmentOutlined, AssignmentOutlined, BorderColorOutlined, DashboardOutlined, Menu, Settings, SettingsOutlined} from '@mui/icons-material'
import React, {useState} from 'react'
import { Space, Table, Tag } from 'antd';
import '../../../Style/Setting.css'
import docpic from '../../Image/doctor-pic.jpg'
import profileimage from '../../Image/Goodness 1 (1).png'
import {useNavigate} from 'react-router-dom'
import PhoneSidebar from '../../Dashboard/PhoneSidebar'
import 'antd/dist/antd.css';
import Data from '../../Dummy'
const Transact = (id) => {

   const navigate = useNavigate();
   const [toggle, setToggle] = useState(true)
   const [active, setActive] = useState("profile");
  //  const data = [
  //   {
  //     id: '1',
  //     name: 'John Brown',
  //     age: 32,
  //     address: 'New York No. 1 Lake Park',
  //     tags: ['nice', 'developer'],
  //   },
  //   {
  //     id: '2',
  //     name: 'Jim Green',
  //     age: 42,
  //     address: 'London No. 1 Lake Park',
  //     tags: ['loser'],
  //   },
  //   {
  //     id: '3',
  //     name: 'Joe Black',
  //     age: 32,
  //     address: 'Sydney No. 1 Lake Park',
  //     tags: ['cool', 'teacher'],
  //   },
  // ];
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Image',
      dataIndex: 'img' ,
      key: 'img',
      render: (t, r) => <img src={r.img} height="50px" width={50}/>,
    },

    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (text) => <a>{text}</a>,
    },

    {
      title: 'Spec',
      dataIndex: 'spec',
      key: 'spec',
      render: (text) => <a>{text}</a>,
    },

    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a className="btn btn-info text-white">View {record.name}</a>
          
        </Space>
      ),
    },
  ];
  
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
                <div className='sidebar-item-icon active' onClick={e =>navigate("/transact")}>< AssessmentOutlined/> Transaction</div>
                <div className='sidebar-item-icon' >< DashboardOutlined/> Result</div>
                <div className='sidebar-item-icon' onClick={e =>navigate("/Setting")}>< SettingsOutlined/> Setting</div>
              </div>
            </div>
           </div>
           <div className='col-md-9'>
                <div className='container'>
                <div className='left-sector'>

                <Table columns={columns} dataSource={Data} />
              </div>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Transact;