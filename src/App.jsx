import BVN from './pages/BVN'
import Onboard from "./pages/onboard"
import Sidebar from './components/Sidebar'
import DashboardSection from './pages/Admin/Index'
import DashboardView from './pages/Dashboard/index'
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Verification from './pages/Verified'
import VerificationQueue from './pages/Verification'
import ClientSection from './pages/ClientDashboard'
import Client from './pages/Client'
import ClientVerification from './pages/ClientVerification'
import Signup from './pages/Signup'
import { ProtectedRoute } from './components/Protected'
import { ToastContainer } from 'react-toastify'

function App() {
  
  return (
    
    <BrowserRouter>
      <ToastContainer position="top-center" autoClose={2000}/>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/onboarding" element={<Onboard/>}/>
        <Route path="/verification/:step" element={<BVN />} />
        <Route path="/verification-successful" element={<Verification />} />
        <Route element={<ProtectedRoute allowedRoles={['category_a']} />}>
        <Route path="/admin-dashboard" element={<DashboardSection />}>
          <Route index element={<DashboardView />} />
          <Route path='v-queue' element={<VerificationQueue/>}/>
        </Route>
        </Route>
        <Route element={<ProtectedRoute allowedRoles={['category_b']}/>}>
        <Route path='/dashboard' element={<Client/>}>
          <Route index element={<ClientSection />} />
          <Route path='c-v-queue' element={<ClientVerification/>}/>
          </Route>
          </Route>
      </Routes>
      </BrowserRouter>
     
  )
}

export default App
