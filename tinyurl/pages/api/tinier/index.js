import initMiddleware from '../../../lib/init.middleware';
import validateMiddleware from '../../../lib/validate.middleware';
import { check, validationResult } from 'express-validator';
require('../../../config/db.config');


const shortId      = require('shortid');
const Url          = require('../../../models/Url');
const validateBody = initMiddleware(
    validateMiddleware([
        check('firstName').isLength({ min: 1, max: 5 })
    ], validationResult)
);

export default async function handler(req, res) {
    const { userUrl }  = req.body;

    if (req.method !== 'POST') {
         res.status(405)
            .json({ error: 'Method Not Allowed.' });
    }

    let url = await Url.findOne({ longUrl: userUrl });

    if (url) {
        return res.json(url);
    }
    
    const urlCode  = shortId.generate();
    const baseUrl  = 'http://localhost:8000/';
    const longUrl  = userUrl;
    const shortUrl = baseUrl
    url = new Url({
        longUrl,
        shortUrl,
        urlCode,
        date: new Date()
    });

    await url.save();
    return res.json(url);

    // await validateBody(req, res);
    // res.status(200)
    //    .json({ result: 'OK '});
};