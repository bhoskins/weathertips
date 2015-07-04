/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'weathertips',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',

    forecastKeys: {
      apikey: "8b998d2998299c74dac89a3e4d264972"
    },

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      //parse keys
      applicationId: 'SjkY6GSUQfAhwyMrzJxpbEGtdk9SLuYI549Jq05t',
      restApiId: 'bOilP84PiqPuMQvIJgAeEJ7QYrD2g8mNsVBtZPoP'
    },

    contentSecurityPolicy: {
      'connect-src': "'self' https://api.forecast.io",
      'default-src': "'none'",
      'script-src': "'self' https://api.forecast.io",
      'font-src': "'self' fonts.gstatic.com",
      'connect-src': "'self' api/parse.com https://api.forecast.io",
      'img-src': "'self'",
      'style-src': "'self' 'unsafe-inline' fonts.googleapis.com",
      'media-src': "'self'"
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
