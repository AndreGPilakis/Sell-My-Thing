import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/layout/Header'


class App extends Component {


state = {

}


render(){
  return(
    <div className="App">
      <div className="container">
      <Header />
    </div>  
    </div>
  );
}
}


export default App;
