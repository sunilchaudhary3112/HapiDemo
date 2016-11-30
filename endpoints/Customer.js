
var Joi = require('joi');
var UserModel = require('../models/user');
module.exports = function (server, options) {

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
                    joiningDate: Joi.string().optional(),
                    lastUpdated: Joi.string().optional(),
                }
            }
        }, handler: function (request, reply) {
            var user = new UserModel(request.payload);
            user.save(function (error) {
                if (error) {
                    reply(
                        {
                            statusCode: 503,
                            message: error
                        });
                } else {
                    reply(
                        {
                            statusCode: 201,
                            message: 'Customer Saved Successfully'
                        });
                }
            });
        }
    });

    // //Get customer by id
    // server.route({
    //     method: 'GET',
    //     path: '/api/customer/{id}',
    //     config: {
    //         tags: ['api'],
    //         description: 'Get All Customer data',
    //         notes: 'Get All Customer data',
    //         validate: {
    //             params: {
    //                 id: Joi.string().required()
    //             }
    //         }
    //     },
    //     handler: function (request, reply) {
    //         UserModel.find({ _id: request.params.id }, function (error, data) {
    //             if (error) {
    //                 reply({
    //                     statusCode: 503,
    //                     message: 'Failed to get data',
    //                     data: error
    //                 });
    //             } else {
    //                 if (data.length === 0) {
    //                     reply({
    //                         statusCode: 200,
    //                         message: 'Customer Not Found',
    //                         data: data
    //                     });
    //                 } else {
    //                     reply({
    //                         statusCode: 200,
    //                         message: 'Customer Data Successfully Fetched',
    //                         data: data
    //                     });
    //                 }
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