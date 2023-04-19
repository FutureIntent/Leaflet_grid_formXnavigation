import { ReactElement } from 'react';

import Icon, { IconProps } from '@components/atoms/Icon/Icon';

const YouTube = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 56 56" {...rest}>
        <g transform="translate(0.371)">
            <rect width="56" height="56" rx="4" transform="translate(-0.371)" />
            <g transform="translate(9.272 14.834)">
                <path
                    d="M18.543,25.966c-.029,0-2.932,0-6.156-.1-1.894-.058-3.525-.137-4.851-.236a21.537,21.537,0,0,1-3.5-.459A4.648,4.648,0,0,1,.764,21.9,18.461,18.461,0,0,1,.322,19.3c-.1-.859-.171-1.846-.227-2.932C0,14.517,0,13,0,12.983s0-1.526.1-3.372c.055-1.084.132-2.07.227-2.93A18.828,18.828,0,0,1,.764,4.063a4.7,4.7,0,0,1,1.21-2.085A4.648,4.648,0,0,1,4.032.764,22.025,22.025,0,0,1,7.524.322C8.848.227,10.48.151,12.376.1,15.6,0,18.514,0,18.543,0s2.939,0,6.167.1c1.9.058,3.528.137,4.852.236a21.232,21.232,0,0,1,3.492.459,4.646,4.646,0,0,1,3.269,3.269,17.813,17.813,0,0,1,.455,2.623c.1.863.172,1.852.225,2.941.09,1.846.084,3.372.084,3.387s0,1.526-.1,3.372c-.055,1.084-.132,2.07-.227,2.93a18.827,18.827,0,0,1-.442,2.618A4.646,4.646,0,0,1,33.053,25.2a22.024,22.024,0,0,1-3.492.442c-1.324.1-2.956.171-4.852.227C21.482,25.965,18.572,25.966,18.543,25.966Zm-3.7-18.543v11.12l9.653-5.56-9.653-5.56Z"
                    transform="translate(0 0)"
                    fill="#0b1445"
                />
            </g>
        </g>
    </Icon>
);

export default YouTube;