import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ScrollToTop from './utils/scroll-to-top';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Homepage from './pages/home/home';
import MenuPage from './pages/menuPage/menuPage';
import Contact from './pages/contact/contact';
import SignIn from './pages/sign-in/sign-in';
import './App.scss';

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <ScrollToTop />
          <Route exact path="/" component={Homepage} />
          <Route path="/menu" component={MenuPage} />
          <Route path="/contact" component={Contact} />
          <Route path="/sign-in" component={SignIn} />
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
