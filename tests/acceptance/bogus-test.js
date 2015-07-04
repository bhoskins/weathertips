import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'weathertips/tests/helpers/start-app';

var application;

module('Acceptance | bogus', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /bogus', function(assert) {
  visit('/bogus');

  andThen(function() {
    assert.equal(currentURL(), '/bogus');
  });
});
