import React, { useState } from 'react';
import './css/Home.css';
import NavBar from './NavBar';
import Content from './pages/Content';
import Services from './pages/Services';
import Rooms from './pages/Rooms';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Home = () => {
  const [selectedComponent, setSelectedComponent] = useState('home');

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'services':
        return <Services />;
      case 'rooms':
        return <Rooms />;
      case 'gallery':
        return <Gallery />;
      default:
        return <Content setSelectedComponent={setSelectedComponent} />;
    }
  };

  return (
    <div className='container'>
      <NavBar selectedComponent={selectedComponent} setSelectedComponent={setSelectedComponent} />
      <TransitionGroup>
        <CSSTransition key={selectedComponent} timeout={300} classNames="zoom">
          <div>{renderComponent()}</div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default Home;
