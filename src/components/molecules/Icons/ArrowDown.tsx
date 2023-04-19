import { ReactElement } from 'react';

import Icon, { IconProps } from '@components/atoms/Icon/Icon';

const ArrowDown = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 531.74 460.5" {...rest}>
        <polygon points="530.874,0.5 265.87,459.5 0.866,0.5 " />
    </Icon>
);

export default ArrowDown;
