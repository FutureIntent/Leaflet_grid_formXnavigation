import { ReactElement } from 'react';

import Icon, { IconProps } from '@components/atoms/Icon/Icon';

const Play = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 30 30" {...rest}>
        <path
            d="M25.6,4.4C22.8,1.6,19,0,15,0C11,0,7.2,1.6,4.4,4.4C1.6,7.2,0,11,0,15c0,4,1.6,7.8,4.4,10.6C7.2,28.4,11,30,15,30
	c4,0,7.8-1.6,10.6-4.4C28.4,22.8,30,19,30,15C30,11,28.4,7.2,25.6,4.4z M12.4,20V10l7.6,5L12.4,20z"
        />
    </Icon>
);

export default Play;
