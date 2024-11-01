import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Home from '../components/Home'

function Homepage() {
  const navigate = useNavigate();

  useEffect(() => {
      const token = localStorage.getItem('token');

      // ถ้าไม่มี token นำทางไปยังหน้า Login
      if (!token) {
          navigate('/');
      }
  }, [navigate]);
  return (
    <>
    <Nav/>
    <Home/>
    <Footer/>
    </>
  )
}

export default Homepage