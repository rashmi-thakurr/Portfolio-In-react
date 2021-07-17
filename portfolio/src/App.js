import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Poems from './components/Poems'
import Poem from './components/Poem';
import Projects from './components/Projects';
import Skills  from './components/Skills';


const App = () => {
  return (
    <>
    
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/contact' component={Contact}/>
      <Route path='/poems' component={Poems}/>
      <Route path='/projects' component={Projects}/>
      <Route path='/skills' component={Skills}/>
      <Route path='/poem/:id' render = {props =>(
        <Poem {...props}/>
      )}/>
      <Route  component={Error}/>
    </Switch>
      
    </>
  )
}

export default App;
