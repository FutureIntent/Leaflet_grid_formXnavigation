import Block from '@components/routes/Business/HowItWorks/shared/Block';
import MarketsImg from '@public/images/business/markets.jpg';
import Image from 'next/image';

import Box from '@components/atoms/Box';
import Typography from '@components/atoms/Typography';

const Markets = () => (
    <Block id="markets">
        <Typography variant="h2" color="var(--black-brand)" mb={24} transformText="uppercase">
            Markets
        </Typography>
        <Box position="relative" width="100%" aspectRatio={590 / 350}>
            <Image placeholder="blur" layout="fill" src={MarketsImg} quality={100} />
        </Box>
        <Typography variant="h3" color="var(--black-brand)" my={24}>
            We operate Worldwide
        </Typography>
        <Typography variant="paragraph" color="var(--black-brand)" mb={20}>
            The X°Cryo is designed and manufactured in Finland. Our nordic location makes delivery
            and installation quick and easy all over the nordics.
        </Typography>
        <Typography variant="paragraph" color="var(--black-brand)">
            We also deliver Worldwide right to your doorstep. For deliveries in Finland, contact us.
        </Typography>
    </Block>
);

export default Markets;
