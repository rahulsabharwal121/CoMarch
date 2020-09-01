import React, {useState} from 'react';
import './App.css';
import Header from './Header.js'
import Sidebar from './Sidebar.js'
import Chat from './Chat.js'
import UserAuth from './UserAuth'
import { useStateValue } from './StateProvider'
import { BrowserRouter as Router, Switch,  Route} from 'react-router-dom'

function App() {
  const [{user}, dispatch] = useStateValue();


  return (
    <div className="App">
    <Router>
    {!user?(
      <UserAuth />
      ):(
    <>
      <Header />
      <div className="app__body">
      <Sidebar />

      <Switch>

      <Route path="/room/:roomId">
        <Chat />
      </Route>

      <Route path="/">
      </Route>

      </Switch>
      </div>
    </>
    )}
    </Router>
    </div>
  );
}

export default App;
