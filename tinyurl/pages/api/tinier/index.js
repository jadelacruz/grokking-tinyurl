import initMiddleware from '../../../lib/init-middleware';
import validateMiddleware from '../../../lib/validate-middleware';
import { check, validationResult } from 'express-validator';

const validateBody = initMiddleware(
    validateMiddleware([
        check('first_name').isLength({ min: 1, max: 5 })
    ], validationResult)
);

export default async function handler(req, res) {
    // if (req.method !== 'POST') {
    //     return res
    //             .status(405)
    //             .json({ error: 'Method Not Allowed.' });
    // }

    await validateBody(req, res);
    const errors = validationResult(req);
};