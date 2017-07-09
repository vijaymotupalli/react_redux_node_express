import React from "react"
import About from './about'
import Signup from './signup'
import Navbar from './navbar'
import Calendar from './calendar'
import Home from './home'
import {Route, Link ,Switch} from 'react-router-dom';

import './styles.css';

class Menu extends React.Component{

    render(){
        return (
                <div className="vertical-menu" style={{position:"relative",width:"100%"}}>
                    <Link to="/" >Home</Link>
                    <Link to="/about" >About</Link>
                    <Link to="/timetracker" >Time Tracking</Link>
                    <Link to="/signup" >Signup</Link>
                </div>

        )
    }

}
export default Menu