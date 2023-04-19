import { ReactElement } from 'react';

import Icon, { IconProps } from '@components/atoms/Icon/Icon';

const Facility = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 30 30" {...rest}>
        <g>
            <path d="M22,2v26H8V2H22 M22.6,0H7.4C6.7,0,6,0.6,6,1.4V30h18V1.4C24,0.6,23.3,0,22.6,0L22.6,0z" />
        </g>
        <g>
            <path d="M28,12.2V28h-4V12.2H28 M28.5,10.2H22V30h8V11.7C30,10.9,29.3,10.2,28.5,10.2L28.5,10.2z" />
        </g>
        <g>
            <path d="M6,12.2V28H2V12.2H6 M8,10.2H1.5c-0.8,0-1.5,0.7-1.5,1.5V30h8V10.2L8,10.2z" />
        </g>
        <g>
            <path d="M18.3,6.2v1h-6.5V6.7V6.2H18.3 M20.3,4.2H9.7v2.5v2.5h10.5V4.2L20.3,4.2z" />
        </g>
        <g>
            <path d="M18.3,12.2v1h-6.5v-0.5v-0.5H18.3 M20.3,10.2H9.7v2.5v2.5h10.5V10.2L20.3,10.2z" />
        </g>
        <g>
            <path d="M18.3,18.5v1h-6.5V19v-0.5H18.3 M20.3,16.5H9.7V19v2.5h10.5V16.5L20.3,16.5z" />
        </g>
    </Icon>
);

export default Facility;
