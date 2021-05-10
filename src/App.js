import React from 'react';
import './App.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Content from './Components/Content'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
