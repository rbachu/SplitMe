import React from 'react';
import {Provider} from 'react-redux';
import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import {syncHistory} from 'redux-simple-router';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import {createMemoryHistory} from 'history';
import {RoutingContext} from 'react-router';

import locale from 'locale';
import reducers from 'redux/reducers';

const history = createMemoryHistory();

// Sync dispatched route actions to the history
const reduxRouterMiddleware = syncHistory(history);

const middleware = applyMiddleware(
  promiseMiddleware,
  thunk,
  reduxRouterMiddleware,
);

const store = compose(
  middleware,
)(createStore)(reducers);

class Root extends React.Component {
  componentWillMount() {
    locale.setCurrent(this.props.locale);
  }

  render() {
    return (
      <Provider store={store}>
        <RoutingContext {...this.props.router} />
      </Provider>
    );
  }
}

Root.propTypes = {
  locale: React.PropTypes.string,
  router: React.PropTypes.object,
};

export default Root;