import Ember from 'ember';

export function initialize(/* container, application */) {
  // application.inject('route', 'foo', 'service:foo');
  Ember.$.ajaxSetup({
    headers: {
      "APIKEY": "8b998d2998299c74dac89a3e4d264972"
    }
  });
}

export default {
  name: 'forecast-token',
  initialize: initialize
};
