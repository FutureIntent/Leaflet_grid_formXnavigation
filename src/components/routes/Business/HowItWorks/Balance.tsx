import Block from '@components/routes/Business/HowItWorks/shared/Block';
import List from '@components/routes/Business/HowItWorks/shared/List';
import ListItem from '@components/routes/Business/HowItWorks/shared/ListItem';
import BalanceImg from '@public/images/business/balance.jpg';
import routeMap from '@utils/RouteMap';
import Image from 'next/image';

import Box from '@components/atoms/Box';
import LinkWithArrow from '@components/atoms/LinkWithArrow';
import Typography from '@components/atoms/Typography';

const Balance = () => (
    <Block id="cryoBalance">
        <Typography variant="h2" color="var(--black-brand)" mb={24} transformText="uppercase">
            Cryo˚Balance
        </Typography>
        <Box position="relative" width="100%" aspectRatio={590 / 350}>
            <Image placeholder="blur" layout="fill" src={BalanceImg} quality={100} />
        </Box>
        <Typography variant="paragraph" color="var(--black-brand)" mt={32}>
            Nachos can be jumbled with sour watermelon, also try seasoning the loaf with honey.
            sweet, diced pudding is best tossed with fluffy white wine.
        </Typography>
        <List>
            <ListItem>
                The mast drinks with beauty, blow the fortress before it stutters. the sailor
                endures with treasure, loot the galley before it hobbles. The fish hoists with
                faith, fear the captain&apos;s quarters before it waves. the tuna trades with
                desolation, sail the brig before it hobbles.
            </ListItem>
            <ListItem>
                Red alert, ancient history! The moon is more nanomachine now than astronaut.
                sub-light and proudly unrelated. Space suits malfunction with tragedy at the
                galactic center!
            </ListItem>
        </List>
        <LinkWithArrow to={routeMap.business} label="Go to Cryo˚Coin page" />
    </Block>
);

export default Balance;
