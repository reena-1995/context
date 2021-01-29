import React, { Component,useContext } from 'react'
import {BrowserRouter as Router,Switch,Route, Redirect} from 'react-router-dom'
import {ThemeContext} from './Context/ThemeContext';
import Login from './Components/Pages/Login';
import Dashboard from '../src/Components/Pages/Dashboard'
const AppRoute=(Props)=>{
 
    const context = useContext(ThemeContext);
    const FullPage=context.fullPage
    const NavPage=context.navPage
    const Component=Props.component
    return (
        <>
        <Route path={Props.path}>
        {Props.full_layout?
         <FullPage>
            <Component/>
         </FullPage>:<NavPage>
             <Component/>
        </NavPage>}
        </Route>
        </>
    )
   
}

export const Routers = () => {
    return (
        <Router>
            <Switch>
              <AppRoute exact full_layout path="/" component={Login}/>
              <AppRoute exact  path="/dashboard" component={Dashboard}/>
            </Switch>
        </Router>
   
    )
}
