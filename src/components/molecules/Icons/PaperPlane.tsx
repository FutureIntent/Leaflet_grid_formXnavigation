import { ReactElement } from 'react';

import Icon, { IconProps } from '@components/atoms/Icon/Icon';

const PaperPlane = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} {...rest}>
        <g>
            <path d="M8.8,22.2c0,0.4,0.3,0.7,0.8,0.7c0.2,0,0.5-0.1,0.6-0.3l2.7-3.7l-4.1-1.4V22.2z" />
            <path
                d="M23.7,0.1C23.5,0,23.2,0,22.9,0.1L0.4,11.8c-0.4,0.2-0.5,0.6-0.3,1c0.1,0.2,0.2,0.3,0.4,0.4l6.3,2.1L20.1,4L9.8,16.4
		L20.3,20c0.1,0,0.2,0,0.2,0c0.4,0,0.7-0.3,0.7-0.6L24,0.9C24,0.6,23.9,0.3,23.7,0.1z"
            />
        </g>
    </Icon>
);

export default PaperPlane;
