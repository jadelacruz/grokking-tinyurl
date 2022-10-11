const DB_URI   = process.env.DB_URI;
const mongoose = require('mongoose');

mongoose.connect(DB_URI, {
    useNewUrlParser   : true,
    useUnifiedTopology: true 
});

const Connection = mongoose.connection;

export default Connection