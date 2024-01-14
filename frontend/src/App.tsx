import { Route, Routes } from 'react-router-dom'

import Login from './components/login'
import Dashboard from './pages/dashboard'
import Auth from './components/auth'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Student from './pages/student'

function App() {

  return (
    <>
       <Routes>
          <Route path="/" element={<Login />} />
         
          <Route path="/dashboard" element={
            <Auth>
                <Dashboard />
            </Auth>
          } />
          <Route path="/user/student" element={
            <Auth>
                <Student/>
            </Auth>
          } />
          <Route path="/user/faculty?page=1" element={
            <Auth>
                <Dashboard />
            </Auth>
          } />
       </Routes>
    </>

  
  )
}

export default App
