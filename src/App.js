import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Footer from './Component/Footer';
import Navbar from './Component/Navbar';
import Vanity from './Component/Vanity';
import Womens from './Component/Womens';
import Kids from './Component/Kids';
import Mens from './Component/Mens';
import Home from './Component/Home';

const App = () => {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Kids" component={Kids} />
      <Route exact path="/Mens" component={Mens} />
      <Route exact path="/Womens" component={Womens} />
      <Redirect to="/" />
    </Switch>
    <Footer />
    </>
  )
}
  export default App;