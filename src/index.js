import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom';

import store from './redux/store';
import Comment from "./views/comment/comment";
import Home from "./views/home/home";
import UserDetail from './views/users/user-detail'


ReactDOM.render(<Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path='/home' exact component={Home}/>
                <Route path='/comment' exact component={Comment}/>
                <Route path='/my' exact component={UserDetail}/>
                <Redirect to='/home'/>
            </Switch>
         </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

