'use strict';
const mockDBCalls = require('../database/index.js');

const getListOfAgesOfUsersWithHandler = async (request, response) => {
    const itemToLookup = request.params.item;
    let data;
    try {
        data = await mockDBCalls.getListOfAgesOfUsersWith(itemToLookup);
        console.log(data);
    } catch (error) {
        return response.status(500).JSON({ error: error.toString() });
    }
    return response.status(200).send(JSON.stringify(data));
};

module.exports = (app) => {
    app.get('/users/age/:item', getListOfAgesOfUsersWithHandler);
};
