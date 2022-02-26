import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import RecipeDetail from './components/RecipeDetail';
import Profile from './pages/Profile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import LogInButton from './components/LogInButton';
function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/recipeDetail" element={<RecipeDetail />} />
          {/* <Route path="/" element={<Home />} /> */}
        </Routes>
        <ToastContainer />
      </Router>
    </>
  );
}

export default App;
