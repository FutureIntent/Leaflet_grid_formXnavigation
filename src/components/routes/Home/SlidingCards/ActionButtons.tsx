import Box from '@components/atoms/Box';

import ArrowLeft from '@components/molecules/Icons/ArrowLeft';
import ArrowRight from '@components/molecules/Icons/ArrowRight';

const ActionButtons = ({
    nextSlide,
    prevSlide,
}: {
    nextSlide: () => void;
    prevSlide: () => void;
}) => (
    <>
        <Box
            cursor="pointer"
            display={{ _: 'none', laptopS: 'block' }}
            onClick={prevSlide}
            ml="37px"
            mr="70px"
        >
            <ArrowLeft size="large" color="var(--grey-dark)" />
        </Box>
        <Box cursor="pointer" display={{ _: 'none', laptopS: 'block' }} onClick={nextSlide}>
            <ArrowRight size="large" color="var(--grey-dark)" />
        </Box>
    </>
);

export default ActionButtons;
