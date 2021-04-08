import {Login, Profil, SignUp, Products, ProductDetails, ForgotPassword, Homepage} from '../../pages'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import React from 'react'

function Routers() {
    return (
        <Router>
            <Switch>
                <Route path='/Home' component={Homepage} />
                <Route path='/user/ProfilPage' component={Profil} />
                <Route path='/user/Login' component={Login} />
                <Route path='/user/SignUp' component={SignUp} />
                <Route path='/user/ForgotPassword' component={ForgotPassword} />
                <Route path='/Products' component={Products} />
                <Route path='/ProductDetails' component={ProductDetails} />
            </Switch>
        </Router>
    )
}

export default Routers
