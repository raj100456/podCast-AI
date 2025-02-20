import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home';
import ProjectPage from './pages/ProjectPage';
import Login from './pages/Signin';
import PrivateRoute from './Components/PrivateRoute';
import { AuthProvider } from './contexts/AuthContext';
import AddYourPodcasts from './Components/Layout/project/AddYourPocasts/AddYourPodcasts';
import Transcript from './Components/Layout/project/AddYourPocasts/Transcript';
import AccountSetting from './Components/Layout/project/AccountSettings/AccountSetting';
import ComingSoon from "./Components/Layout/project/ComingSoon";
import Register from "./pages/Register";


function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path="/accountSetting" element={<PrivateRoute><AccountSetting /></PrivateRoute>} />
            <Route path="/projects/:projectId" element={<PrivateRoute><ProjectPage /></PrivateRoute>}>
              <Route index element={<AddYourPodcasts />} />
              <Route path="file/:fileId" element={<Transcript />} />
              <Route path="accountSetting" element={<AccountSetting />} />
              <Route path="comingSoon" element={<ComingSoon />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}
export default App;