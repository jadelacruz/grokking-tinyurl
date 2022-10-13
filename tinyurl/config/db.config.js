import 'dotenv/config';

const mongoClient = require('mongoose');
const uri     = process.env.MONGODB_URI;
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

if (!uri) {
    throw new Error('Please make sure that the Mongo URI is set.')
}

let clientPromise;

if (process.env['NODE_ENV'] === 'development') {
    if (!global._mongoClientPromise) {
        global._mongoClientPromise = mongoClient.connect(uri, options)
    }
    clientPromise = global._mongoClientPromise;
} else {
    clientPromise = mongoClient.connect(uri, options)
}

export default clientPromise