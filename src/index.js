import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom';

import store from './redux/store';
import Comment from "./views/comment/comment";
import Login from "./views/login/login";
import Home from "./views/home/home";
import UserDetail from './views/users/user-detail'
import Forget from "./views/users/forget";
import Agreement from "./views/users/agreement";

ReactDOM.render(<Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path='/login' exact component={Login}/>
                <Route path='/forget' exact component={Forget}/>
                <Route path='/agreement' exact component={Agreement}/>
                <Route path='/home' exact component={Home}/>
                <Route path='/comment' exact component={Comment}/>
                <Route path='/my' exact component={UserDetail}/>
                <Redirect to='/home'/>
            </Switch>
         </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

