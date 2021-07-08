'use strict';

const native_mongo = require("./native_mongo");

let bmi_execute_v1 = require("./bmi_v1").bmi_execute_v1;
let bmi_v1_db_opr = require("./bmi_v1_db");

async function routes(fastify, options) {
    fastify.post('/bmi_cal/v1', async (request, reply) => {
        const db = await native_mongo.mongoDBConnection();
        let data = bmi_execute_v1(request.body);
        let resp = await bmi_v1_db_opr.insrt(db, data);
        reply.send(resp.ops[0].d);
    })
}


module.exports = routes