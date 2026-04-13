import BVN from './pages/VerificationProcess'
import Onboard from "./pages/onboard"
import DashboardSection from './pages/Admin/Index'
import DashboardView from './pages/Admin/AdminPages/Dashboard/index'
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Verification from './pages/VerificationProcess/Verified'
import VerificationQueue from './pages/Admin/AdminPages/Verification'
import ClientSection from './pages/Client/ClientDashboard'
import Client from './pages/Client'
import ClientVerification from './pages/Client/ClientVerification'
import Signup from './pages/Auth Page/Signup'
import { ProtectedRoute } from './components/Protected'
import { ToastContainer } from 'react-toastify'
import NotFound from './components/Notfound'
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
        <Route path="*" element={<NotFound />} />
      </Routes>
      </BrowserRouter>
     
  )
}

export default App
