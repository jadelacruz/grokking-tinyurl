require('../config/db.config');
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const URLSchema = new Schema({
    urlCode: String,
    longUrl: String,
    shortUrl: String,
    date: { type: String, default: Date.now }
});

module.exports = mongoose.models.Url || mongoose.model('Url', URLSchema);