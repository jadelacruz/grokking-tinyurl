require('../../config/db.config');
const Url = require('../../models/Url');

export default async function handler(req, res) {
    const { code }    = req.query;
    const { longUrl } = await Url.findOne({ urlCode: code });
    res.redirect(longUrl);
}