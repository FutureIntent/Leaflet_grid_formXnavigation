import { ReactElement } from 'react';

import Icon, { IconProps } from '@components/atoms/Icon/Icon';

const ArrowButton = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 29.5 13.8" {...rest}>
        <path
            d="M29.4,7.3c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-5.5-5.5c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l3.8,3.8H1
	c-0.6,0-1,0.4-1,1s0.4,1,1,1h25.1l-3.8,3.8c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l5.5-5.5v0
	C29.3,7.5,29.4,7.4,29.4,7.3z"
        />
    </Icon>
);

export default ArrowButton;
