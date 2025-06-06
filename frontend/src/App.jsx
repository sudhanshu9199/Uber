import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import Start from './pages/Start'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import Home from './pages/Home'
import { UserDataContext } from './context/UserContext'
import UserProtectWrapper from './pages/UserProtectWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'
import CaptainLogout from './pages/CaptainLogout'
import Riding from './pages/Riding'
import CaptainRiding from './pages/CaptainRiding'
import RideInProgress from './pages/RideInProgress';
import RideCompleted from './pages/RideCompleted';

const App = () => {
  return (
    <div className='text-black'>
      <Routes>
        <Route path='/' element={<Start />}/>
        <Route path='/login' element={<UserLogin />}/>
        <Route path='/signup' element={<UserSignup/>} />
        <Route path='/riding' element={<Riding />} />
        <Route path='/captain-riding' element={<CaptainRiding />}/>
        <Route path='/captain-login' element={<CaptainLogin />}/>
        <Route path='/captain-signup' element={<CaptainSignup />}/>
        <Route path='/ride-in-progress' element={<RideInProgress />}/>
        <Route path='/ride-completed' element={<RideCompleted />} />
        <Route path='/home' element={
          <UserProtectWrapper>
            <Home />
          </UserProtectWrapper>
        }/>
        <Route path='/user/logout' element={<UserProtectWrapper>
          <UserLogout />
        </UserProtectWrapper>} />
        <Route path='/captain-home' element={
          <CaptainProtectWrapper>
            <CaptainHome />
          </CaptainProtectWrapper>
        } />

        <Route path='/captain/logout' element={
          <CaptainProtectWrapper>
            <CaptainLogout />
          </CaptainProtectWrapper>
        } />

      </Routes>
    </div>
  )
}

export default App