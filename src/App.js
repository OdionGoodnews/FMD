import React,  {Suspense, lazy} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Routes, Route } from 'react-router-dom';
import Loading from './Component/Loading';
function App() {
  const Appoint_Reserved = lazy(() =>import('./Component/Dashboard/AppointeReserved/Appoint_Reserved'))
  const Home = lazy(() =>import('./Component/Dashboard/Home'))
  const DoctorView = lazy(() =>import('./Component/Dashboard/DoctorView'))
  const Setting = lazy(() =>import('./Component/Setting/Setting'))
  return (
    <div className="App">
       <Suspense fallback={<Loading/>}>
          <Routes>
            <Route path='/dashboard' element={<Home/>}/>
            <Route path='/appoint_reserved' element={<Appoint_Reserved/>}/>
            <Route path='/View' element={<DoctorView/>}/>
            <Route path='/Setting' element={<Setting/>}/>
          </Routes>
       </Suspense>
    </div>
  );
}

export default App;
