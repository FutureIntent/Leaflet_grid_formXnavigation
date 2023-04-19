import { ReactElement } from 'react';

import Icon, { IconProps } from '@components/atoms/Icon/Icon';

const Checkmark = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 13.6 12.2" {...rest}>
        <polygon points="12.1,0 4.8,9 1.6,5 0,6.3 4.8,12.2 13.6,1.3 " />
    </Icon>
);

export default Checkmark;
