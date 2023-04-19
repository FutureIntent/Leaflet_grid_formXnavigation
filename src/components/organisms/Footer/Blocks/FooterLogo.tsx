import routeMap from '@utils/RouteMap';
import Link from 'next/link';

import { CenterAlign } from '@components/atoms/CenterAlign';

import CryoLogoTherapiesWhite from '@components/molecules/Icons/home/CryoLogoTherapiesWhite';

import GridChild from '@components/templates/GridChild';

const FooterLogo = () => (
    <GridChild gridColumn={{ _: 'span 6', tablet: 'span 7', laptopS: '2/ span 2' }} gridRow={1}>
        <Link href={routeMap.home}>
            <CenterAlign maxWidth="240px">
                <CryoLogoTherapiesWhite width="240px" />
            </CenterAlign>
        </Link>
    </GridChild>
);

export default FooterLogo;
