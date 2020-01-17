import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Database from './components/Database'
import Create from './components/Create'
import Delete from './components/Delete'
import Update from './components/Update'

const Routes = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Database}/>
            <Route path='/create' component={Create}/>
            <Route path='/delete' component={Delete}/>
            <Route path='/update' component={Update}/>
        </Switch>
    </BrowserRouter>
)

export default Routes