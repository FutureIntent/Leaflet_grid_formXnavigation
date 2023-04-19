import therapiesImg3 from '@public/images/home/body@2x.png';
import therapiesImg2 from '@public/images/home/face@2x.png';
import therapiesImg4 from '@public/images/home/full-body@2x.png';
import therapiesImg1 from '@public/images/home/local@2x.png';
import testImg from '@public/images/test.jpg';

export const dummyTherapy = {
    heading: 'Gain hard',
    img: therapiesImg1,
    address: '458 Oxford St, London',
    dateTime: new Date(),
    tags: ['Full-Body', 'Local', 'Face'],
    price: '35.99 £',
    place: 'Gym',
};

export const demoBookedCardData = Array(15)
    .fill({
        heading: 'Gain Hard',
        img: testImg,
        place: 'GYM',
        dateTime: new Date(),
        address: 'Lybecksgatan 37, S-252 69. Råå',
        tags: ['Full-Body', 'Local', 'Face'],
    })
    .map((card, index) => ({ ...card, heading: card.heading + index }));

export const demoHistoryTherapies = Array(10)
    .fill(dummyTherapy)
    .map((card, index) => ({ ...card, heading: card.heading + index }));

export const demoNearYouCardData = Array(10)
    .fill({
        heading: 'Gain Hard',
        img: testImg,
        place: 'GYM',
        address: 'Lybecksgatan 37, S-252 69. Råå',
        tags: ['Full-Body', 'Local', 'Face'],
    })
    .map((card, index) => ({ ...card, heading: card.heading + index }));

export const demoTherapiesCardData = [
    {
        heading: 'Local',
        img: therapiesImg1,
        duration: '5-15 min.',
        therapyName: 'X˚Cryo Original',
        placesAmount: '15 places',
    },
    {
        heading: 'Face',
        img: therapiesImg2,
        duration: '5-15 min.',
        therapyName: 'X˚Cryo Mask',
        placesAmount: '15 places',
    },
    {
        heading: 'Body',
        img: therapiesImg3,
        duration: '5-15 min.',
        therapyName: 'X˚Tone',
        placesAmount: '15 places',
    },
    {
        heading: 'Whole-body',
        img: therapiesImg4,
        duration: '5-15 min.',
        therapyName: 'Cryo˚Cabin',
        placesAmount: '15 places',
    },
];

export const demoSalesCardData = Array(5)
    .fill({
        heading: 'Gain Hard',
        img: testImg,
        place: 'GYM',
        discount: '-20%',
        address: 'Lybecksgatan 37, S-252 69. Råå',
        tags: ['Full-Body', 'Local', 'Face'],
    })
    .map((card, index) => ({ ...card, heading: card.heading + index }));

export const dummyProducts = [
    { productName: 'X˚Cryo Original', price: 316, tariff: 'Plan A' },
    { productName: 'X˚Cryo Tone', price: 412, tariff: 'Plan B' },
    { productName: 'X˚Cryo Original', price: 465, tariff: 'Plan C' },
    { productName: 'X˚Cryo Mask', price: 296, tariff: 'Plan A' },
];
