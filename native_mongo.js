const { MongoClient } = require('mongodb');
const config = require('config');

// const username = encodeURIComponent(config.mongo_db1.user);
// const password = encodeURIComponent(config.mongo_db1.pass);
// const dbHost = config.mongo_db1.host;
// const authMechanism = 'DEFAULT';
// const qString = `retryWrites=true&w=majority&authMechanism=${authMechanism}`;

// const uri = `mongodb+srv://${username}:${password}@${dbHost}/?${qString}`;

const uri = `mongodb://${config.get("db_url")}:${config.get("db_port")}`;

const mongoOptions = {
    poolSize: 100,
    wtimeout: 2500,
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const client = new MongoClient(uri, mongoOptions);

let _db;

client.on('serverClosed', (event) => {
    // eslint-disable-next-line no-console
    console.log('received serverClosed');
    // eslint-disable-next-line no-console
    console.log(JSON.stringify(event, null, 2));

    // should i call mongoDBConnection() here if connection lost while app running?
});

const mongoDBConnection = async (app) => {
    try {
        if (client.isConnected()) {
            _db = client.db(config.db_name);
            return client.db(config.db_name);
        }

        await client.connect();
        if (app) app.use(passport.initialize());
        _db = client.db(config.db_name);
        return client.db(config.db_name);
    } catch (error) {
        return Promise.reject(error);
    }
};

const dbObj = () => _db;

module.exports = {
    mongoDBConnection,
    dbObj,
};