import React, { useState } from 'react';
import './css/Home.css';
import NavBar from './NavBar';
import Content from './pages/Content';
import Services from './pages/Services';
import Rooms from './pages/Rooms';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';


const Home = () => {
  const [selectedComponent, setSelectedComponent] = useState('home');

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'services':
        return <Services />;
      case 'rooms':
        return <Rooms />;
      case 'contact':
        return <Contact />;
      case 'gallery':
        return <Gallery />
      default:
        return <Content  setSelectedComponent={setSelectedComponent}/>;
    }
  };
 

  return (
    <div className='container'>
      <NavBar selectedComponent={selectedComponent}  setSelectedComponent={setSelectedComponent} />
      {renderComponent()}
     
    </div>
  );
};

export default Home;
