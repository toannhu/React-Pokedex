import React from 'react';
import ReactDOM from 'react-dom';
import { ItemList, Header, Footer } from './components';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
/*import configureStore from './store/configureStore';*/
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import './index.css';

/*const store = configureStore();*/ // You can also pass in an initialState here
/*const history = createHistory();*/

const history = createHistory();

const historyMiddleware = routerMiddleware(history);

const store = createStore(combineReducers({
    ...reducers,
    routing: routerReducer
}), applyMiddleware(thunk, historyMiddleware));

ReactDOM.render(
    <Provider store={store}>
        <div>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route exact path="/" component={ItemList}/>
                    <Route path="/pokemon/:Id" component={ItemList}/>
                    {/*<Route component={NotFound}/>*/}
                </Switch>
            </ConnectedRouter>
            <Footer />
        </div>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
