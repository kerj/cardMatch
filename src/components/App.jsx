import React from 'react';
import { Switch, Route } from "react-router-dom";
import Welcome from './Welcome';
import GameControl from './GameControl';

function App() {
  return (
    <div className="App">
     <Switch>
       <Route exact path='/' component={Welcome}/>
       <Route exact path='/game' component={GameControl}/>
     </Switch>
    </div>
  );
}

export default App;
