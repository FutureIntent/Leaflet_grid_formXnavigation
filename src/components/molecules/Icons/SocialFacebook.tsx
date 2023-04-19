import { ReactElement } from 'react';

import Icon, { IconProps } from '@components/atoms/Icon/Icon';

const SocialFacebook = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 56 56" {...rest}>
        <rect width="56" height="56" rx="4" />
        <g transform="translate(9.272 9.272)">
            <path
                d="M18.543,37.086H4.636A4.641,4.641,0,0,1,0,32.45V4.636A4.641,4.641,0,0,1,4.636,0H32.45a4.641,4.641,0,0,1,4.636,4.636V32.45a4.641,4.641,0,0,1-4.636,4.636H25.5V24.338h3.477l2.318-5.795H25.5V13.907a1.342,1.342,0,0,1,.13-.636.8.8,0,0,1,.362-.349,2.84,2.84,0,0,1,1.239-.177h.282l.305,0h2.318V6.954H25.5a7.007,7.007,0,0,0-1.4.141,6.916,6.916,0,0,0-2.487,1.046A6.973,6.973,0,0,0,19.089,11.2a6.917,6.917,0,0,0-.405,1.305,7.006,7.006,0,0,0-.141,1.4v4.636H13.907v5.795h4.636V37.086Z"
                transform="translate(0 0)"
                fill="#0b1445"
            />
        </g>
    </Icon>
);

export default SocialFacebook;
