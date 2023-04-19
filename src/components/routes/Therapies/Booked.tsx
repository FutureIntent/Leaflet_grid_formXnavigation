import { useTranslation } from 'next-i18next';

import Typography from '@components/atoms/Typography';

import TherapiesWithCalendar from '@components/organisms/TherapiesWithCalendar';

import GridChild from '@components/templates/GridChild';
import GridParent from '@components/templates/GridParent';
import testImg from "@public/images/test.jpg";

const demoBookedCardData = Array(15)
  .fill({
    heading: 'Gain Hard',
    img: testImg,
    place: 'GYM',
    dateTime: new Date(),
    address: 'Lybecksgatan 37, S-252 69. Råå',
    tags: ['Full-Body', 'Local', 'Face'],
  })
  .map((card, index) => ({ ...card, heading: card.heading + index }));

const Booked = () => {
    const { t } = useTranslation('therapies');
    const cards = demoBookedCardData.slice(0, 6);

    return (
        <GridParent>
            <GridChild gridColumn={{ _: 'span 12', laptopS: '3/ span 6' }}>
                <Typography
                    variant="h2"
                    color="var(--black-brand)"
                    transformText="uppercase"
                    mb="1rem"
                >
                    {t('bookedTherapies')}
                </Typography>
            </GridChild>

            <TherapiesWithCalendar therapies={cards} />
        </GridParent>
    );
};

export default Booked;
