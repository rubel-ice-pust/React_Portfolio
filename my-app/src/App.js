import React from 'react';
import './App.css';
// import logo from './logo.svg';
import HomePage from './pages/HomePage';
import TopNavigation from './components/TopNavigation/TopNavigation';
import PageTop from './components/PageTop/PageTop';
import AboutDescription from './components/AboutDescription/AboutDescription';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import Portfolio from './pages/Portfolio';
import ContactSection from './components/ContactSection/ContactSection';



function App() {
  return (
    <div>
      {/* <TopNavigation />
      <PageTop pageTitle="About Me"/>
      <AboutDescription/>
      <HomePage /> */}
      {/* <AboutPage/> */}
      {/* <CoursesPage /> */}
      {/* <Portfolio/> */}
      <ContactSection/>
    </div>
  );
}

export default App;
