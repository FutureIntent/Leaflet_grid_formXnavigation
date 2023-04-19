import { nanoid } from 'nanoid';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    if (req.method === 'GET') {
        return res.status(200).json({
            id: nanoid(),
            avatar: 'https://www.fillmurray.com/200/300',
            firstName: 'Fill',
            lastName: 'Murray',
            language: 'en',
            balance: 394.56,
            phoneNumber: '+141 894328551',
            email: 'test@dummyData.io',
            googleAccount: '',
            locations: {
                location: 'Wiesenweg 9, 38154 Königslutter am Elm',
                coordinates: {
                    lat: 52.25649487066168,
                    lon: 10.843706750471943,
                },
            },
            isPartner: false,
        });
    }

    return res.status(404);
}
