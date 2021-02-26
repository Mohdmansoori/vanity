import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Footer from './Component/Footer';
import Navbar from './Component/Navbar';
import Kids from './Component/Kids';
import Mens from './Component/Mens';
import Home from './Component/Home';
import Brands from './Component/Brands';
import Contact from './Component/Contact';
import Womens from './Component/Womens'

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Kids" component={Kids} />
        <Route exact path="/Mens" component={Mens} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Brands" component={Brands} />
        <Route exact path="/Womens" component={Womens} />
        <Redirect to="/" />
      </Switch>
      <Footer />
  
    </>
  )
}
export default App;