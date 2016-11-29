var Hapi = require('hapi');
var server = new Hapi.Server();
var mongoose = require('mongoose');
var UserModel = require('./models/user');
var Joi = require('joi');
var HTTPrequest = require('request');
var Promise = require('bluebird');
//var Client = require('node-rest-client').Client;
 var index = require('./index.js');
//var client = new Client();
//var _ = require('lodash');
mongoose.connect('mongodb://localhost/restdemo');

server.connection({ port: 7002 });

server.register([{
    register: require('hapi-swagger'),
    options: {
        apiVersion: "0.0.1"
    }
},{
    register: index
}], function (err) {
    if (err) {
        server.log(['error'], 'hapi-swagger load error: ' + err)
    } else {
        server.log(['start'], 'hapi-swagger interface loaded')
    }
});
server.start(function () {
    console.log('Server running at:', server.info.uri);
});

