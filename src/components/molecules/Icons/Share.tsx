import { ReactElement } from 'react';

import Icon, { IconProps } from '@components/atoms/Icon/Icon';

const Share = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 30.6 27.1" {...rest}>
        <path
            d="M30,9.3c-0.1-0.1-0.2-0.2-0.3-0.3l-9.8-8.5c-0.4-0.3-1-0.5-1.7-0.5c-0.6,0-1.2,0.3-1.6,0.8c-0.4,0.4-0.6,1-0.6,1.5v3.5
	C8.4,6.1,0,7.7,0,17.3c0.2,3.7,2,7.1,5,9.3C5.4,26.9,5.8,27,6.3,27c0.6,0,1.2-0.3,1.6-0.8c0.4-0.5,0.5-1.1,0.3-1.8
	c-1-3.1-1-5.3,0-6.6c1.1-1.5,3.5-2.3,7.9-2.4v3.9c0,0.6,0.2,1.2,0.7,1.7c0.4,0.4,1,0.7,1.7,0.7c0.6,0,1.1-0.2,1.5-0.6l9.8-8.5
	C30.7,11.8,30.9,10.3,30,9.3z M28.5,11.1l-9.8,8.5c-0.1,0.1-0.1,0.1-0.2,0.1s-0.2-0.1-0.2-0.1s-0.1-0.1-0.1-0.2v-5.9h-1
	c-5.8,0.1-8.9,1.1-10.5,3.3c-1.4,1.9-1.5,4.6-0.3,8.3c-2.5-1.9-4.1-4.7-4.2-7.8C2,10.7,6.4,8,17.1,7.8h1V2.4c0-0.1,0-0.2,0.1-0.2
	c0-0.1,0.1-0.2,0.2-0.2c0.1,0,0.1,0,0.2,0.1l9.8,8.5C28.6,10.8,28.6,11,28.5,11.1z"
        />
    </Icon>
);

export default Share;
