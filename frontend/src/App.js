import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.css"
import Dashboard from './pages/Dashboard';
import Files from './pages/Files';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Todo from './pages/Todo';
import StudentsAdd from './pages/StudentsAdd';
import StudentsList from './pages/StudentsList';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/files" component={Files} />
          <Route path="/todo" component={Todo} />
          <Route path="/profile" component={Profile} />
          <Route path="/addstudent" component={StudentsAdd} />
          <Route path="/students" component={StudentsList} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
