import { ReactElement } from 'react';

import Icon, { IconProps } from '@components/atoms/Icon/Icon';

const BurgerMenu = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 60 37" {...rest}>
        <g>
            <rect width="60" height="5" />
            <rect x="10" y="16" width="50" height="5" />
            <rect x="20" y="32" width="40" height="5" />
        </g>
    </Icon>
);

export default BurgerMenu;
