import { ReactElement } from 'react';

import Icon, { IconProps } from '@components/atoms/Icon/Icon';

const CloseBtn = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 28 28" {...rest}>
        <path
            d="M16.1,14L26.9,3.2c0.6-0.6,0.6-1.5,0-2.1c-0.6-0.6-1.5-0.6-2.1,0L14,11.9L3.2,1.1c-0.6-0.6-1.5-0.6-2.1,0
	c-0.6,0.6-0.6,1.5,0,2.1L11.9,14L1.1,24.8c-0.6,0.6-0.6,1.5,0,2.1c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4L14,16.1l10.8,10.8
	c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4c0.6-0.6,0.6-1.5,0-2.1L16.1,14z"
        />
    </Icon>
);

export default CloseBtn;
