import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from "./Context/AuthContext"
import Login from './Login';
import OTP from './Otp';
import Dashboard from './Dashboard';
import AddAddress from './AddAddress';
import Settings from './Settings';
import AllAddress from './AllAddress';
import Help from './Help';
import States from './States';
import ManageSupervisor from './ManageSupervisor';
import View from './View';

function App() {
  return (
    <Router>
        <AuthContextProvider>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/Otp" element={<OTP />} />
            <Route exact path="/Dashboard" element={<Dashboard />} />
            <Route exact path="/Add" element={<AddAddress />} />
            <Route exact path="/Settings" element={<Settings />} />
            <Route exact path="/Manage" element={<ManageSupervisor />} />
            <Route exact path="/View" element={<View />} />
            <Route exact path="/States" element={<States />} />
            <Route exact path="/All" element={<AllAddress />} />
            <Route exact path="/Help" element={<Help />} />
          </Routes>
        </AuthContextProvider>
    </Router>
  );
}

export default App;