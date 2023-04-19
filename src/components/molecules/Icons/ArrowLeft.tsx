import { ReactElement } from 'react';

import Icon, { IconProps } from '@components/atoms/Icon/Icon';

const ArrowLeft = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 22.1 41.4" {...rest}>
        <polygon points="22.1,1.4 20.7,0 0,20.7 20.7,41.4 22.1,40 2.8,20.7 " />
    </Icon>
);

export default ArrowLeft;
