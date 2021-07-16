import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Poems from './components/Poems'
import Poem from './components/Poem';


const App = () => {
  return (
    <>
    
    <Switch>
      <Route exact path='/' component={Navbar}/>
      <Route path='/about' component={About}/>
      <Route path='/contact' component={Contact}/>
      <Route path='/poems' component={Poems}/>
      <Route path='/poem/:id' render = {props =>(
        <Poem {...props}/>
      )}/>
      <Route  component={Error}/>
    </Switch>
      
    </>
  )
}

export default App;
