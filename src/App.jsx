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
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Onboard />} />
        <Route path="/verification/:step" element={<BVN />} />
        <Route path="/verification-successful" element={<Verification />} />
        <Route path="/dashboard" element={<DashboardSection />}>
          <Route index element={<DashboardView />} />
          <Route path='v-queue' element={<VerificationQueue/>}/>
        </Route>
        <Route path='/client-dashboard' element={<Client/>}>
           <Route index element={<ClientSection/>}/>
        </Route>
      </Routes>
     
    </BrowserRouter>
  )
}

export default App
