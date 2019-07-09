import React from 'react';
import LandingTemplate from './LandingTemplate'
import EmailTemplate from './FormTemplate';
import {Route,Switch,NavLink} from 'react-router-dom';

function App() {
  return (
    <div> 
      <nav>
    <div class="nav-wrapper blue">
      <a href="#!" class="brand-logo">Logo</a>
      <ul class="right hide-on-med-and-down">
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='composemail'>Write an Email</NavLink></li>
      </ul>
    </div>
  </nav>  
    
    <Switch>
    <Route exact path='/' component={LandingTemplate} />
    <Route exact path='/composemail' component={EmailTemplate} />
    </Switch>
    </div>

  );
}

export default App;
