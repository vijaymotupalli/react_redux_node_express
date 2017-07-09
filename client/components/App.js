/**
 * Created by DEEPU on 02-Jul-17.
 */

import React from 'react'
import About from './about'
import Signup from './signup'
import Navbar from './navbar'
import Calendar from './calendar'
import Home from './home'
import Menu from './menu'
import {Route, Link ,Switch} from 'react-router-dom';



class App extends React.Component {
    render(){
        return(
            <div >
                <div style={ {
                    margin:"1%",
                    minHeight:578,
                    marginRight:0,
                    height: "100%",
                    backgroundColor:"#151414",
                    width: "17%",
                    color: "white",
                    float: "left",
                }}>
                    <Menu/>

                </div>

                <div style={{
                margin:"1%",
                float: "left",
                height:"auto",
                width: "80%",
                padding: 15
            }}>
                   <Route exact path="/timetracker" component={Calendar}  />
                   <Route exact path="/home" component={Home}  />
                   <Route exact path="/about" component={About}  />
                   <Route exact path="/signup" component={Signup}  />

                </div>

           </div>
        )
    }
}

export default App