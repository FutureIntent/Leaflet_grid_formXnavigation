import Block from '@components/routes/Business/HowItWorks/shared/Block';
import routeMap from '@utils/RouteMap';

import LinkWithArrow from '@components/atoms/LinkWithArrow';
import Typography from '@components/atoms/Typography';

const Pricing = () => (
    <Block id="pricing">
        <Typography variant="h2" color="var(--black-brand)" mb={24} transformText="uppercase">
            Pricing
        </Typography>
        <Typography variant="paragraph" color="var(--black-brand)" mb={21}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
            sanctus est Lorem ipsum dolor sit amet.
        </Typography>
        <LinkWithArrow to={routeMap.business} label="View prices & plans" />
    </Block>
);

export default Pricing;
