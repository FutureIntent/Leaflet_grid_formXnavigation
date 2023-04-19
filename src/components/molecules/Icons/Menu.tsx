import { ReactElement } from 'react';

import Icon, { IconProps } from '@components/atoms/Icon/Icon';

const Menu = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 20 20" {...rest}>
        <g>
            <circle cx="18" cy="2" r="2" />
            <circle cx="10" cy="2" r="2" />
            <circle cx="2" cy="2" r="2" />
            <circle cx="18" cy="10" r="2" />
            <circle cx="10" cy="10" r="2" />
            <circle cx="2" cy="10" r="2" />
            <circle cx="18" cy="18" r="2" />
            <circle cx="10" cy="18" r="2" />
            <circle cx="2" cy="18" r="2" />
        </g>
    </Icon>
);

export default Menu;
