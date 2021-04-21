import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

// import the Upload file
import Upload from '../components/Upload'

// import the ResultForm file
import Aadhaar from '../components/Aadhaar'

import DrivingLicense from '../components/DrivingLicense'

// route for the app

const Router = () => {
    return (
        <div>

            <BrowserRouter>
            
                <Switch>

                    <Route path='/' component={Upload} exact={true} />
                    <Route path='/aadhaar/data' component={Aadhaar} />
                    <Route path='/driving/data' component={DrivingLicense} />

                </Switch>

            </BrowserRouter>

        </div>
    );
}



export default Router