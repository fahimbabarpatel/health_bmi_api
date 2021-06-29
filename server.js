'use strict';


const fastify = require('fastify')({
    logger: true
})
const config = require("config");
const port = config.get("port")

fastify.register(require('./bmi_route'))

fastify.listen(port, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    fastify.log.info(`server listening on ${address}`)
})
