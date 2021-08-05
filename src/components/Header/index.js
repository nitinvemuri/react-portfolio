import React, {Component} from 'react';
import Nav from '../../components/Nav'
import {Route, Redirect, Router} from 'react-router-dom'
import About from '../About';
import Icon from  '../../assets/icons/icons8-pokemon-48.png'
//import Resume from '../../components/Resume';
//import Portfolio from '../../components/Portfolio';
//import Contact from '../../components/Contact';

class Header extends Component {
    render() {
        return(
            <Router>
                <div className = "reset" id="resetHeader">
                    <a src ={Icon} href="www.google.com"  alt="myName" class="icon" id="myNameRest"></a>
                    <Nav/>
                </div>
                <div>
                    <div className="content">
                        <Route exact path="/" render={() => (<Redirect to="About"/>)}/>
                        <Route path="About" component={About}/>

                    </div>

                </div>
            </Router>

        )
    }
}

export default Header;