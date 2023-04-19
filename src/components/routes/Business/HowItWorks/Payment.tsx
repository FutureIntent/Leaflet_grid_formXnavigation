import Block from '@components/routes/Business/HowItWorks/shared/Block';
import IconCard from '@components/routes/Business/HowItWorks/shared/IconCard';

import Box from '@components/atoms/Box';
import { CardElevation } from '@components/atoms/Card/Card';
import Typography from '@components/atoms/Typography';

import Balance from '@components/molecules/Icons/Balance';
import CreditCards from '@components/molecules/Icons/CreditCards';

const Payment = () => (
    <Block id="payment">
        <Typography variant="h2" color="var(--black-brand)" mb={24} transformText="uppercase">
            Payment
        </Typography>
        <Box
            display="grid"
            gridTemplateColumns="repeat(auto-fit, minMax(200px, 1fr))"
            gridGap={30}
            mb={43}
        >
            <IconCard
                elevation={CardElevation.medium}
                alignCenter
                icon={<Balance size="large2" color="var(--blue-brand)" />}
                label="Cryo˚Coin"
            />
            <IconCard
                elevation={CardElevation.medium}
                alignCenter
                icon={<CreditCards size="large2" />}
                label="Credit Card"
            />
        </Box>
        <Typography variant="paragraph" color="var(--black-brand)">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
            sanctus est Lorem ipsum dolor sit amet.
        </Typography>
    </Block>
);

export default Payment;
