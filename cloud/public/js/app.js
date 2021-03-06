'use strict';

/* App Module */

var PARSE_APP_ID = "AppId";
var PARSE_APP_KEY = "AppKey";

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider, $locationProvider, $httpProvider) {
  $routeProvider.
  when('/view1', {
    templateUrl: 'partials/partial1',
    controller: 'MyCtrl1'
  }).
  when('/view2', {
    templateUrl: 'partials/partial2',
    controller: 'MyCtrl2'
  }).
  otherwise({
    redirectTo: '/view1'
  });

  $locationProvider.html5Mode(true);
  //For JS SDK
  Parse.initialize(PARSE_APP_ID, PARSE_APP_KEY);
  //For REST API, which is not in use atm
  $httpProvider.defaults.headers.common = {
    'Content-Type': 'application/json',
    'X-Parse-Application-Id': AV_APP_ID,
    'X-Parse-REST-API-Key': AV_APP_KEY
  }
});