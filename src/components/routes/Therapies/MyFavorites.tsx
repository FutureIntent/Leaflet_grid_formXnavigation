import SlidingCards from '@components/routes/Home/SlidingCards';
import testImg from '@public/images/test.jpg';
import { useTranslation } from 'next-i18next';

import Heart from '@components/molecules/Icons/Heart';

const demoSalesCardData = Array(5).fill({
    heading: 'Gain Hard',
    img: testImg,
    place: 'GYM',
    discount: '-20%',
    address: 'Lybecksgatan 37, S-252 69. Råå',
    tags: ['Full-body', 'Local', 'Face'],
});

const MyFavorites = () => {
    const { t } = useTranslation('therapies');

    return (
        <SlidingCards
            cards={demoSalesCardData}
            blockTitle={t('MyFavorites')}
            icon={<Heart size="large" color="var(--red-warning)" />}
            type="showAll"
            narrow
        />
    );
};

export default MyFavorites;
