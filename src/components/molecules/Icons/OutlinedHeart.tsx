import { ReactElement } from 'react';

import Icon, { IconProps } from '@components/atoms/Icon/Icon';

const OutlinedHeart = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 30.6 27" {...rest}>
        <path
            d="M28.2,2.6L28,2.5C26.5,0.9,24.4,0,22.2,0s-4.3,0.8-5.9,2.4l-1,1l-0.8-0.9C12.9,0.9,10.8,0,8.6,0C6.4,0,4.3,0.8,2.7,2.4
	L2.4,2.7c-3,3.2-3.2,8.1-0.4,11.5L3.7,16l10.2,10.4c0.4,0.4,0.9,0.6,1.4,0.6s1-0.2,1.5-0.6L26.9,16l1.7-1.8
	C31.4,10.7,31.2,5.8,28.2,2.6z M27.1,12.8l-1.6,1.8L15.3,25L5.1,14.6l-1.6-1.7c-2.1-2.6-2-6.4,0.3-8.8l0.3-0.3C5.3,2.6,6.8,2,8.5,2
	h0.1c1.7,0,3.3,0.7,4.4,1.9l2.3,2.3l2.4-2.4C18.9,2.6,20.5,2,22.1,2c1.7,0,3.3,0.7,4.4,1.9L26.7,4C29.1,6.5,29.2,10.3,27.1,12.8z"
        />
    </Icon>
);

export default OutlinedHeart;
