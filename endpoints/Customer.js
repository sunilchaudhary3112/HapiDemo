
var Joi = require('joi');
var uuid = require('node-uuid');
var UserModel = require('../models/user');
var customer_helper = require('../helper/customer_helper.js');

module.exports = function (server, options) {

    //Create customer
    server.route({
        method: 'POST', path: '/api/customer', config: {
            tags: ['api'],
            description: 'Save Customer data',
            notes: 'Save Customer data',
            validate: {
                payload: {
                    name: Joi.string().required(),
                    age: Joi.number().required(),
                    name: Joi.string().required(),
                    email_id: Joi.string().required(),
                    referral_id: Joi.string().required(),
                    payback: Joi.number().required(),
                    isAmbassador: Joi.boolean().default(false, 'isAmbassador flag'),
                    joiningDate: Joi.date().optional(),
                    lastUpdated: Joi.date().optional(),
                }
            }
        }, handler: function (request, reply) {
            var userObj = request.payload;
            return customer_helper.saveNewCustomer(request.payload).then(function (data) {
                return reply(data);
            });
        }
    });

    //Get customer by id
    server.route({
        method: 'GET',
        path: '/api/customer/{id}',
        config: {
            tags: ['api'],
            description: 'Get All Customer data',
            notes: 'Get All Customer data',
            validate: {
                params: {
                    id: Joi.string().required()
                }
            }
        },
        handler: function (request, reply) {
            return customer_helper.getCustomerById(request.params.id).then(function (data) {
                return reply(data);
            })
        }
    });

    // //Get All customer
    // server.route({
    //     method: 'GET',
    //     path: '/api/customer',
    //     config: {
    //         tags: ['api'],
    //         description: 'Get All Customer data',
    //         notes: 'Get All Customer data'
    //     },
    //     handler: function (request, reply) {
    //         UserModel.find({}, function (error, data) {
    //             if (error) {
    //                 reply({
    //                     statusCode: 503,
    //                     message: 'Failed to get data',
    //                     data: error
    //                 });
    //             } else {
    //                 reply({
    //                     statusCode: 200,
    //                     message: 'Customer Data Successfully Fetched',
    //                     data: data
    //                 });
    //             }
    //         });
    //     }
    // });

    // //Update customer
    // server.route({
    //     method: 'PUT',
    //     path: '/api/customer/{id}',
    //     config: {
    //         tags: ['api'],
    //         description: 'Update specific customer data',
    //         notes: 'Update specific customer data',
    //         validate: {
    //             params: {
    //                 id: Joi.string().required()
    //             },
    //             payload: {
    //                 name: Joi.string(), age: Joi.number()
    //             }
    //         }
    //     },
    //     handler: function (request, reply) {
    //         UserModel.findOneAndUpdate({ _id: request.params.id },
    //             request.payload, function (error, data) {
    //                 if (error) {
    //                     reply({
    //                         statusCode: 503,
    //                         message: 'Failed to get data',
    //                         data: error
    //                     });
    //                 } else {
    //                     reply({
    //                         statusCode: 200,
    //                         message: 'Customer Updated Successfully',
    //                         data: data
    //                     });
    //                 }
    //             });
    //     }
    // });

    // //Delete customer by id
    // server.route({
    //     method: 'DELETE',
    //     path: '/api/customer/{id}',
    //     config: {
    //         tags: ['api'],
    //         description: 'Remove specific customer data',
    //         notes: 'Remove specific customer data',
    //         validate: {
    //             params: {
    //                 id: Joi.string().required()
    //             }
    //         }
    //     },
    //     handler: function (request, reply) {
    //         UserModel.findOneAndRemove({ _id: request.params.id }, function (error, data) {
    //             if (error) {
    //                 reply({
    //                     statusCode: 503,
    //                     message: 'Error in removing customer',
    //                     data: error
    //                 });
    //             } else {
    //                 reply({
    //                     statusCode: 200,
    //                     message: 'Customer Deleted Successfully'
    //                 });
    //             }
    //         });
    //     }
    // });
}