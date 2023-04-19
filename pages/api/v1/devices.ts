import { LoremIpsum } from 'lorem-ipsum';
import { nanoid } from 'nanoid';
import { NextApiRequest, NextApiResponse } from 'next';

const therapies = ['Local Therapy', 'Face Therapy', 'Body Therapy', 'Face Therapy', 'Skin Therapy'];

const generateDummyDevices = () => {
    const lorem = new LoremIpsum({
        sentencesPerParagraph: {
            min: 4,
            max: 8,
        },
        wordsPerSentence: {
            min: 1,
            max: 8,
        },
    });

    return therapies.map((therapy) => ({
        uuid: nanoid(),
        poster: 'https://placeimg.com/640/480/any',
        name: lorem.generateWords(),
        therapy,
        description: lorem.generateParagraphs(1),
        prices: {
            planA: 316,
            planB: 560,
            planC: 750,
        },
    }));
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        return res.status(200).json(generateDummyDevices());
    }

    return res.status(404);
}
