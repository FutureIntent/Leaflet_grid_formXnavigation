import { ReactElement } from 'react';

import Icon, { IconProps } from '@components/atoms/Icon/Icon';

const SliderResizeArrows = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 20 10" {...rest}>
        <g>
            <polygon points="15,0 15,10 20,5 	" />
            <polygon points="5,10 5,0 0,5 	" />
        </g>
    </Icon>
);

export default SliderResizeArrows;
