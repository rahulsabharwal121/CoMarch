import React, {useState} from 'react';
import './App.css';
import Header from './components/Header.js'
import Sidebar from './components/Sidebar.js'
import Chat from './components/Chat.js'
import UserAuth from './components/UserAuth'
import { useStateValue } from './StateProvider'
import { BrowserRouter as Router, Switch,  Route} from 'react-router-dom'
import StartChat from './components/StartChat'

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
        <StartChat />
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
