/**
 * Created by DEEPU on 02-Jul-17.
 */

import React from 'react'
import About from './about'
import Signup from './signup'
import Navbar from './navbar'
import {Route, Link ,Switch} from 'react-router-dom';


class App extends React.Component {
    render(){
        return(
            <div className="container">
                <Navbar />
                <Switch>
                    <Route exact path="/about" component={About} />
                    <Route exact path="/signup" component={Signup} />
                </Switch>
            </div>

        )
    }
}

export default App