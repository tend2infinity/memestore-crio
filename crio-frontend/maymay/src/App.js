import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import MemeCard from './components/MemeCard'
import MemeEdit from './components/MemeEdit'
import Form from './components/Form'
import "./App.css"

function App() {
  return (
    
    <div classname="outer">
      <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Form />
        </Route>
        <Route exact path="/memes">
          <MemeCard />
        </Route>
        <Route exact path="/memeedit">
          <MemeEdit />
        </Route>
      </Switch>
      </BrowserRouter>
      
      

      </div>

  );
}

export default App;
