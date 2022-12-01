'use strict';
const Hapi = require('@hapi/hapi');
const joi = require('joi');
const sequelize = require('sequelize');
const Op = sequelize.Op;

const models = require('./models');
const server = new Hapi.Server();

const init = async () => {


    const server = Hapi.server({
        port: 3000,
        host: 'localhost',
        routes: {
          "cors": true
      }
    });
    server.route({
        method: 'POST',
        path: '/getData',
            config:{
              cors: true,
            validate: {
              payload: joi.object().keys({
                firstName: joi.string().allow('', null),
                lastName: joi.string().allow('', null),
                email: joi.string().allow('', null)
              })
            },
            handler: async (req) => {
              try {
                let where = {};
                if(req.payload.email) {
                  where.email = req.payload.email;
                }
                if(req.payload.firstName) {
                  where.firstName = req.payload.firstName;
                }
                if(req.payload.lastName) {
                  where.lastName = req.payload.lastName;
                }
                  return await models.firstmodel.findAndCountAll({
                    where: where
                  });
              } catch (DBException) {
                return DBException
              }
            }
          }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();