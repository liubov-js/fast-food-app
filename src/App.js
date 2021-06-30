import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import CategoriesBar from './components/CategoriesBar/CategoriesBar';
import Page from './components/Page';
class App extends Component {
  render () {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            {/* <Route path="/" component={CategoriesBar} exact /> */}
            <Route path="/" component={Page} exact />
            <Route render={() => <h1>Not found</h1>} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;