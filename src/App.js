import React, { useState } from 'react';
import './App.css';
import Home from './Home'
import QuizPage from './QuizPage';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import quizzes from './quizzes'
import {AppBar, Paper, Toolbar, Typography} from '@material-ui/core'

function App() {
  

  const quizArr = Object.keys(quizzes)

  const quizPageList = quizArr.map((name)=> 
    <Route path={`/${name}`} >
      <QuizPage quizName={name}/>
    </Route >
  )

  return (
    <Router >
      <div className="App" style={{backgroundColor: 'teal', backgroundImage: 'url("https://www.transparenttextures.com/patterns/brilliant.png")'}}>
        <AppBar position="static">
          <Toolbar>
            
            <Link to='/' style={{ color: '#FFF' }}>
              <Typography  variant="h6">
                Doc-Quizzer
              </Typography>
            </Link>    

          </Toolbar>
        </AppBar>

        <Switch>
          <Route path='/' exact>
            <Home/>
          </Route>
          {quizPageList}
        </Switch>

      </div>
    </Router>
  );
}

export default App;
