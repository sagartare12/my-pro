import React from 'react';
import Navbar from './Header/Navbar'
import Footer from './Footer/Footer'
import PharmaBookMain from './Components/PharmaBookMain'
import JobContents from './Components/JobsContents'
import {Route ,BrowserRouter as Router, Switch } from 'react-router-dom'
const MainRouter = () => {
    return (
       <Router>
           <Navbar />
           
                <Switch>
                     <Route path="/" exact component={JobContents} />
                    <Route path="/Home" exact component={JobContents} />
                    <Route path="/Pharmacy" exact component={PharmaBookMain} />
                </Switch>
                <Footer />
       </Router>
    );
}

export default MainRouter;
