import type { NextApiRequest, NextApiResponse } from 'next';
import { TestData } from 'pages/api/login';

export default (req: NextApiRequest, res: NextApiResponse<TestData>): void => {
    if (req.method === 'POST') {
        res.status(200).json({ messages: ['You have been logged out!'] });
    } else {
        res.status(405).json({ messages: ['Method not allowed'] });
    }
};
