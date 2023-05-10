import React,  {Suspense, lazy} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Routes, Route } from 'react-router-dom';
import Loading from './Component/Loading';
function App() {
  const Appoint_Reserved = lazy(() =>import('./Component/Dashboard/AppointeReserved/Appoint_Reserved'))
  const Home = lazy(() =>import('./Component/Dashboard/Home'))
  const DoctorView = lazy(() =>import('./Component/Dashboard/DoctorView'))
  const Setting = lazy(() =>import('./Component/Setting/Setting'))
  const Transact = lazy(() =>import('./Component/Dashboard/Transaction/Transact'))
  const Login = lazy(() =>import('./Component/Layout/Login'));
  return (
    <div className="App">
       <Suspense fallback={<Loading/>}>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path='/dashboard' element={<Home/>}/>
            <Route path='/appoint_reserved' element={<Appoint_Reserved/>}/>
            <Route path='/View' element={<DoctorView/>}/>
            <Route path='/Setting' element={<Setting/>}/>
            <Route path='/transact' element={<Transact/>}/>
            
          </Routes>
       </Suspense>
    </div>
  );
}

export default App;
