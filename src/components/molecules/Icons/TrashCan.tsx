import { ReactElement } from 'react';

import Icon, { IconProps } from '@components/atoms/Icon/Icon';

const TrashCan = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 14 18" {...rest}>
        <g>
            <polygon points="10.5,1 9.5,0 4.5,0 3.5,1 0,1 0,3 14,3 14,1 	" />
            <path
                d="M1,16c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V4H1V16z M4.9,7.5L7,9.6l2.1-2.1l1.4,1.4L8.4,11l2.1,2.1l-1.4,1.4L7,12.4l-2.1,2.1
		l-1.4-1.4L5.6,11L3.5,8.9L4.9,7.5z"
            />
        </g>
    </Icon>
);

export default TrashCan;
