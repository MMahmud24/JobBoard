import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import Login from './pages/Login';
import JobList from './pages/JobList';
import ResumeGen from './pages/ResumeGen';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/generate-resume" element={<ResumeGen />} />
      </Routes>
    </>
  );
}

export default App;
