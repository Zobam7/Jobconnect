import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Newnavbar from './newnavbar';
import Footer from "./Footer"
import Login from "./login"
import Main from './Main';
import Register from "./register"
import Profile from './account';
import Alljobs from './browsejobs';
import Addjobs from './addjobs';
import Manageresume from './manageresume';
import Createresume from './addresume';
import Managejobs from './managejobs';
import Resume from './resume';
import Jobdescpri from './jobdetail';
import Profilenav from './profilenav';



class Newhome extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Newnavbar />
          <Switch>
            <Route exact path="/" component={() => <Main props={this.state} />} />
            <Route exact path="/login" component={() => <Login props={this.state} />} />
            <Route exact path="/register" component={() => <Register props={this.state} />} />
            <Route exact path="/account" component={() => <Profile props={this.state} />} />
            <Route exact path="/browsejobs" component={() => <Alljobs props={this.state} />} />
            <Route exact path="/addjobs" component={() => <Addjobs props={this.state} />} />
            <Route exact path="/manageresume" component={() => <Manageresume props={this.state} />} />
            <Route exact path="/addresume" component={() => <Createresume props={this.state} />} />
            <Route exact path="/managejobs" component={() => <Managejobs props={this.state} />} />
            <Route exact path="/jobdetail" component={() => <Jobdescpri props={this.state} />} />
            <Route exact path="/profilenav" component={() => <Profilenav props={this.state} />} />
            <Route exact path="/resume" component={() => <Resume props={this.state} />} />
            
          </Switch>
          <Footer />
        </BrowserRouter>

      </React.Fragment>
    );
  }
}

export default Newhome;

