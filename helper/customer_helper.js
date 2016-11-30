'use strict';

var Promise = require('bluebird');
var uuid = require('node-uuid');
var UserModel = require('../models/user');

function saveCustomer(customerData) {
    //Check whether the new customer has referral id for existing customer
    //check referral id exist
    //If id exist update the payback for that id
    //else simply save the new customer
};

function saveNewCustomer(customerData) {
    var response = {};

    customerData.customer_id = uuid.v1();
    var user = new UserModel(customerData);
    return new Promise(function (resolve, reject) {
        user.save(function (error) {
            if (error) {
                response.statusCode = 503;
                response.message = error
                resolve(response);
            } else {
                response.statusCode = 201;
                response.message = "Customer Saved Successfully"
                resolve(response);
            }

        });
    });

};

function getCustomerById(customer_id) {
    var response = {};
    return new Promise(function (resolve, reject) {
        UserModel.find({ customer_id: customer_id }, function (error, data) {
            if (error) {
                response = {
                    statusCode: 503,
                    message: 'Failed to get data',
                    data: error
                };
                resolve(response);
            } else {
                if (data.length === 0) {
                    response = {
                        statusCode: 200,
                        message: 'Customer Not Found',
                        data: data
                    };
                    resolve(response);

                } else {
                    response = {
                        statusCode: 200,
                        message: 'Customer Data Successfully Fetched',
                        data: data
                    };
                    resolve(response);
                }
            }
        });
    });

}
module.exports = {
    saveNewCustomer: saveNewCustomer,
    saveCustomer: saveCustomer,
    getCustomerById: getCustomerById,
};