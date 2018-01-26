import React from 'react'
import ToDoApp from '../components/TodoApp'
import PageNotFound from '../components/PageNotFound'
import Navigation from '../components/Navigation'
import Portfolio from '../components/Portfolio'
import PortfolioEdit from '../components/PortfolioEdit'
import Home from '../components/Home'
import {BrowserRouter, Route, Switch} from 'react-router-dom';




const AppRouter =()=>(
            <BrowserRouter>
                <div>
                    <Navigation />
                    <Switch>
                        <Route path='/' component={Home} exact={true} />
                        <Route path='/todoApp' component={ToDoApp} />
                        <Route path='/portfolio' component={Portfolio} exact={true}/>
                        <Route path='/portfolio/:id' component={PortfolioEdit} />
                        <Route component={PageNotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        )

export default AppRouter