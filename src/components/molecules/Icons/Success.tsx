import { ReactElement } from 'react';

import Icon, { IconProps } from '@components/atoms/Icon/Icon';

const Success = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 150 150" {...rest}>
        <g>
            <path d="M0,75c0,41.4,33.6,75,75,75C33.6,150,0,116.4,0,75z" />
            <path d="M75,0C33.6,0,0,33.6,0,75C0,33.6,33.6,0,75,0z" />
            <path d="M75,150c41.4,0,75-33.6,75-75C150,116.4,116.4,150,75,150z" />
            <path d="M150,75c0-41.4-33.6-75-75-75C116.4,0,150,33.6,150,75z" />
            <path
                d="M150,75c0-41.4-33.6-75-75-75C33.6,0,0,33.6,0,75c0,41.4,33.6,75,75,75C116.4,150,150,116.4,150,75z M75,145
		c-38.6,0-70-31.4-70-70C5,36.4,36.4,5,75,5c38.6,0,70,31.4,70,70C145,113.6,113.6,145,75,145z"
            />
            <path
                d="M117.8,49.8l-52.8,52.8L37.7,75.5c-1-1-2.6-1-3.5,0c-1,1-1,2.6,0,3.5l29.1,28.8c0.5,0.5,1.1,0.7,1.8,0.7
		c0.6,0,1.3-0.2,1.8-0.7l54.5-54.5c1-1,1-2.6,0-3.5C120.4,48.8,118.8,48.8,117.8,49.8z"
            />
        </g>
    </Icon>
);

export default Success;
