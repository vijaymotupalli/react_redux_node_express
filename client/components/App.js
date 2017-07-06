/**
 * Created by DEEPU on 02-Jul-17.
 */

import React from 'react'
import About from './about'
import Signup from './signup'
import Navbar from './navbar'
import Calendar from './calendar'
import Home from './home'
import {Route, Link ,Switch} from 'react-router-dom';



class App extends React.Component {
    render(){
        return(
            <div className="container">
                <Navbar />
                <div>
                    <Switch>
                        <Route exact path="/about" component={About} />
                        <Route exact path="/" component={Home} />
                        <Route exact path="/signup" component={Signup} />
                        <Route exact path="/timetracker" component={Calendar} />
                    </Switch>
                </div>
            </div>

        )
    }
}

export default App