import initMiddleware from '../../../lib/init-middleware';
import validateMiddleware from '../../../lib/validate-middleware';
import { check, validationResult } from 'express-validator';

const validateBody = initMiddleware(
    validateMiddleware([
        check('firstName').isLength({ min: 1, max: 5 })
    ], validationResult)
);

export default async function handler(req, res) {
    console.log(req.body);
    if (req.method !== 'POST') {
         res.status(405)
            .json({ error: 'Method Not Allowed.' });
    }

    await validateBody(req, res);
    res.status(200)
       .json({ result: 'OK '});
};