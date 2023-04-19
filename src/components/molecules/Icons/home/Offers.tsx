import { ReactElement } from 'react';

import Icon, { IconProps } from '@components/atoms/Icon/Icon';

const Offers = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 25 21.9" {...rest}>
        <g>
            <path
                d="M22.7,0H2.3C1,0,0,1,0,2.3v17.2c0,1.3,1,2.3,2.3,2.3h20.3c1.3,0,2.3-1,2.3-2.3V2.3C25,1,24,0,22.7,0z M10.9,18.8H3.1V6.2
		h7.8V18.8z M14.1,18.8V6.2h7.8l0,12.5H14.1z"
            />
        </g>
    </Icon>
);

export default Offers;
