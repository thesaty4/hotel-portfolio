import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import hotel from './constant/hotel-details'
import Main from './components/Main';
import './assets/css/style.css'
const App: React.FC = () => {
  const handleLogin = () => {
    // Implement your login logic here
    alert('Login clicked!');
  };

  return (
    <div className='main-wrapper'>
      <Header title={hotel.name.toUpperCase()} onLogin={handleLogin} />
      <Main/>
      <Footer socialLinks={hotel.socialLinks} hotelName={hotel.name} year={hotel.copyright.year}/>
    </div>
  );
};

export default App;
