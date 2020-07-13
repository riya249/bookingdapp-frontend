import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//Pages
import Homepage from './Containers/HomePage/Index';
import SwapperWallPage from './Containers/SwapperWallPage/SwapperWallPage';
import Footer from './Components/Footer/Footer';



function App() {
  return (
    <div className="App">
    <Router>
        <Switch>
           <Route exact path="/" component={Homepage} />
           <Route exact path="/page" component={SwapperWallPage} />
         </Switch>
     </Router>
    </div>
    
  );
}

export default App;
