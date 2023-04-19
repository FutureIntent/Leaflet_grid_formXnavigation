import { ReactElement } from 'react';

import Icon, { IconProps } from '@components/atoms/Icon/Icon';

const Facebook = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 40 40" {...rest}>
        <path
            id="Path_73"
            d="M35,0H5C2.2,0,0,2.2,0,5v30c0,2.8,2.2,5,5,5h30c2.8,0,5-2.2,5-5V5C40,2.2,37.8,0,35,0z"
        />
        <path
            id="Path_74"
            fill="#FAFAFA"
            d="M33.7,20.1h-6.2v-5c0-1.4,1.1-1.2,2.5-1.2h2.5V7.6h-5c-4.1,0-7.5,3.3-7.5,7.5c0,0,0,0,0,0v5h-5
	v6.2h5V40h7.5V26.3h3.7L33.7,20.1z"
        />
    </Icon>
);

export default Facebook;
