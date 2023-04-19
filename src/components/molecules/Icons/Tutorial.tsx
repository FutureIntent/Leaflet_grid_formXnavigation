import { ReactElement } from 'react';

import Icon, { IconProps } from '@components/atoms/Icon/Icon';

const Tutorial = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 40 32" {...rest}>
        <g>
            <path
                d="M13,22C13,22,13,22,13,22c-0.2,0-0.3,0-0.5,0.1c-0.8,0.3-1.7,0.4-2.6,0.4c-0.9,0-1.7-0.2-2.6-0.4C7.3,22,7.2,22,7,22
		c-3.9,0-7,3.1-7,7c0,0,0,0,0,0c0,1.6,1.4,3,3,3h14c1.6,0,3-1.3,3-3C20,25.2,16.9,22,13,22z"
            />
            <circle cx="10" cy="14" r="6" />
            <path
                d="M37,0H13c-1.7,0-3,1.4-3,3.1V6c1.4,0,2.8,0.4,4,1.1V4h22v18h-4v-4h-8v4h-4.8c1.2,1.1,2.1,2.4,2.5,4H37c1.7,0,3-1.4,3-3.1
		V3.1C40,1.4,38.7,0,37,0z"
            />
        </g>
    </Icon>
);

export default Tutorial;
