import { IAuthEmailResponse } from '@services/auth/types';
import { nanoid } from 'nanoid';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse<IAuthEmailResponse>) {
    if (req.method === 'POST') {
        return res.status(200).json({
            data: {
                token: nanoid(),
                refreshToken: nanoid(),
            },
        });
    }

    return res.status(404);
}
