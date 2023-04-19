import { ReactElement } from 'react';

import Icon, { IconProps } from '@components/atoms/Icon/Icon';

const PasswordEye = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 24 24" {...rest}>
        <g>
            <path d="M12,9c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S13.7,9,12,9z M12,13c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S12.6,13,12,13z" />
            <path
                d="M12,4C7.6,4,4,6.5,1.1,11.5c-0.2,0.3-0.2,0.7,0,1C4,17.5,7.6,20,12,20c4.4,0,8-2.5,10.9-7.5c0.2-0.3,0.2-0.7,0-1
		C20,6.5,16.4,4,12,4z M12,18c-3.5,0-6.4-2-8.8-6C5.6,8,8.5,6,12,6c3.5,0,6.4,2,8.8,6C18.4,16,15.5,18,12,18z"
            />
        </g>
    </Icon>
);

export default PasswordEye;
