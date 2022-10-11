const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/tinyurl');
mongoose.connection.on('open', r => {
    console.log('open');
});
mongoose.connection.on('error', r => {
    console.log('err');
});

const URLSchema = new mongoose.Schema({
    test: String
});

module.exports = mongoose.model('Url', URLSchema);