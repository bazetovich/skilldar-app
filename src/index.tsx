import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { reducer } from './store/store';
import { SkillsView } from './views';
import './styles/default.css';

export const store = createStore(reducer, applyMiddleware(thunkMiddleware));

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SkillsView} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
