import { ReactElement } from 'react';

import Icon, { IconProps } from '../../atoms/Icon';

const Address = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 29.7 39" {...rest}>
        <path
            d="M23.5,2.7C20.9,1,17.9,0,14.9,0C6.7,0,0,6.7,0,14.9c0,3.2,1,6.3,3,8.9l11,14.8c0,0,0.1,0,0.1,0.1c0.4,0.5,1.1,0.5,1.6,0.1
	c0.1-0.1,0.1-0.1,0.2-0.2c3.2-4.2,9-12.1,11.2-15.1l0,0C31.7,16.8,30.1,7.5,23.5,2.7z M14.9,22.9c-4.4,0-8-3.6-8-8s3.6-8,8-8
	s8,3.6,8,8C22.9,19.3,19.3,22.9,14.9,22.9z"
        />
    </Icon>
);

export default Address;
