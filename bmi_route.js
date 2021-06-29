'use strict';


let bmi_execute_v1 = require("./bmi_v1").bmi_execute_v1;

async function routes(fastify, options) {
    fastify.post('/bmi_cal/v1', async (request, reply) => {
        reply.send(bmi_execute_v1(request.body));
    })
}


module.exports = routes