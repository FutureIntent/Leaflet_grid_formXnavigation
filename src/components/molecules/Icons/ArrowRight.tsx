import { ReactElement } from 'react';

import Icon, { IconProps } from '@components/atoms/Icon/Icon';

const ArrowRight = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 22.1 41.4" {...rest}>
        <polygon points="1.4,0 0,1.4 19.3,20.7 0,40 1.4,41.4 22.1,20.7 " />
    </Icon>
);

export default ArrowRight;
