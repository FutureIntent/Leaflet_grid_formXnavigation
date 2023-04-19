import Image from 'next/image';
import styled from 'styled-components';

import Box from '@components/atoms/Box';
import { CardLayout, CardSize } from '@components/atoms/Card/Card';
import Typography from '@components/atoms/Typography';

import { TherapyCardProps } from '@components/molecules/TherapyCard/TherapyCardInterface';

const Discount = styled.div`
    background-color: var(--blue-brand);
    border-radius: ${({ theme }) => theme.space['2xs']};
    bottom: 10px;
    opacity: 0.9;
    position: absolute;
    right: 20px;
`;

const Place = styled(Typography)`
    background-color: var(--white);
    border-radius: ${({ theme }) => theme.space['2xs']};
    bottom: 10px;
    left: 25px;
    max-width: calc(100% - 50px);
    position: absolute;
`;

const Poster = ({
    posterAspectRatio = 10 / 4,
    layout,
    img,
    discount,
    place,
    size,
}: Partial<TherapyCardProps>) => (
    <Box
        overflow="hidden"
        position="relative"
        aspectRatio={posterAspectRatio}
        width={layout === CardLayout.horizontal && size === CardSize.small ? '30%' : '100%'}
    >
        {img && <Image className="poster" src={img} layout="fill" objectFit="cover" />}
        {Boolean(discount) && (
            <Discount>
                <Typography variant="h3" color="var(--white)" p="9px 20px">
                    {discount}
                </Typography>
            </Discount>
        )}
        {Boolean(place) && (
            <Place>
                <Typography variant="accent" color="var(--black-brand)" p="6px 15px" whiteSpace='nowrap'>
                    {place}
                </Typography>
            </Place>
        )}
    </Box>
);

export default Poster;
