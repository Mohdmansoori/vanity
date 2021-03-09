import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Footer from './Component/Footer';
import Navbar from './Component/Navbar';
import Kids from './Component/Module/Kids';
import Mens from './Component/Module/Mens';
import Home from './Component/Module/Home';
import Brands from './Component/Module/Brands';
import Contact from './Component/Module/Contact';
import Womens from './Component/Module/Womens';
import About from './Component/Module/About';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Womens} />
        <Route exact path="/Kids" component={Kids} />
        <Route exact path="/Mens" component={Mens} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Brands" component={Brands} />
        <Route exact path="/Womens" component={Womens} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Home" component={Home} />
        <Redirect to="/" />
      </Switch>
      <Footer />
  
    </>
  )
}
export default App;