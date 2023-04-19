import { ReactElement } from 'react';

import Icon, { IconProps } from '@components/atoms/Icon/Icon';

const Heart = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 80 70" {...rest}>
        <path
            d="M74,6.6l-0.4-0.4c-7.9-8.1-20.9-8.2-28.9-0.3c0,0,0,0,0,0c-0.1,0.1-0.2,0.2-0.3,0.3L40,10.6l-4.4-4.5
	C27.8-1.9,14.8-2.1,6.7,5.8c0,0,0,0,0,0C6.6,5.9,6.5,6.1,6.4,6.2L6,6.6C-1.5,14.4-2,26.6,4.8,35l4.6,5L38,69.2
	c1.1,1.1,2.8,1.1,3.9,0.1c0,0,0.1-0.1,0.1-0.1L70.5,40l4.6-5C82,26.6,81.5,14.4,74,6.6z"
        />
    </Icon>
);

export default Heart;
