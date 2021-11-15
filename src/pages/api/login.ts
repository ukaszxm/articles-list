import type { NextApiRequest, NextApiResponse } from 'next';

export type TestData = {
    messages?: string[];
    email?: string;
};

export default (req: NextApiRequest, res: NextApiResponse<TestData>): void => {
    if (req.method === 'POST') {
        const { email, password } = req.body;

        if (email !== 'admin@admin.com' || password !== 'admin123') {
            res.status(400).json({
                messages: ['You have entered a wrong username or password, please try again.'],
            });
        } else {
            res.status(200).json({ messages: ['Login successful!'], email });
        }
    } else {
        res.status(405).json({ messages: ['Method not allowed'] });
    }
};
