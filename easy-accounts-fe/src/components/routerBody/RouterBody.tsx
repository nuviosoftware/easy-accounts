import * as React from 'react';
import './RouterBody.css';
import BalanceView from '../balance/view/BalanceView';
import NotFoundView from '../notFound/NotFoundView';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

class RouterBody extends React.Component {
  render() {
    return (
      <div className="RouterBody-component">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={BalanceView} />
            <Route component={NotFoundView} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default RouterBody;
