import * as React from 'react';
import './App.css';
import Header from './components/header/Header';
import RouterBody from './components/routerBody/RouterBody';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <RouterBody/>
      </div>
    );
  }
}

export default App;
