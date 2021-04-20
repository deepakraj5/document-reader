import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

// import the Upload file
import Upload from '../components/Upload'

// route for the app

const Router = () => {
    return (
        <div>

            <BrowserRouter>
            
                <Switch>

                    <Route path='/' component={Upload} exact={true} />

                </Switch>

            </BrowserRouter>

        </div>
    );
}



export default Router