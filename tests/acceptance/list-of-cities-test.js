import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'weathertips/tests/helpers/start-app';

var application;

module('Acceptance | list of cities', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

//default thinks it has its own route, but this is for index route
test('visiting index lists the cities I have saved', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal($('.city').length, 2);
  });
});


