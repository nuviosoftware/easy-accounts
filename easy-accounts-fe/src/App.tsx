import * as React from 'react';
import './App.css';
import Header from './components/header/Header';
import Body from './components/body/Body';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
