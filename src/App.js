import React, { Component } from 'react';
import './App.css';
import userData from './userData'

class App extends Component {
  render() {
    console.log('userData', userData)
    return (
      <div className="App">
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          {userData.userData.map((user) => {
            return (
              <div style = {{height: '250px', width: '275px', backgroundColor: 'blue', color: 'white', display: 'flex', flexDirection: 'column', alignContent: 'center', justifyItems: 'center', margin: '10px', flexWrap: 'wrap'}}>
                <h1>{user.name}</h1>
                <h3>{user.age}</h3>
                <h3>{user.email}</h3>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
