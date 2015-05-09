'use strict';

var dispatcher = require('./dispatcher');

var pageAction = {
  navigateHome: function() {
    dispatcher.dispatch({
      actionType: 'NAVIGATE_HOME',
    });
  },
  navigateSettings: function() {
    dispatcher.dispatch({
      actionType: 'NAVIGATE_SETTINGS',
    });
  },
  navigateBack: function() {
    dispatcher.dispatch({
      actionType: 'NAVIGATE_BACK',
    });
  },
  showDialog: function(name) {
    dispatcher.dispatch({
      actionType: 'SHOW_DIALOG',
      name: name,
    });
  },
  dismissDialog: function() {
    dispatcher.dispatch({
      actionType: 'DISMISS_DIALOG',
    });
  },
};

module.exports = pageAction;