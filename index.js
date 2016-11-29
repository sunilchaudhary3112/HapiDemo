'use strict';

exports.register = function (server, options, next) {
    require('./endpoints/Customer.js')(server,options);
    next();
};

exports.register.attributes = {
    pkg: {
        'name': 'Customer Api',
        'version': '1.0.0',
        'description': 'Endpoints for opertains on Customer Account',
        'main': 'index.js'
    }
};