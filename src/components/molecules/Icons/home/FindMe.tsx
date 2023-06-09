import { ReactElement } from 'react';

import Icon, { IconProps } from '@components/atoms/Icon/Icon';

const FindMe = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 25 25" {...rest}>
        <g>
            <path
                d="M20.7,11.5h1.1c-0.5-4.4-3.9-7.9-8.3-8.3v1.1h-2V3.2c-4.4,0.5-7.9,3.9-8.3,8.3h1.1v2H3.2c0.5,4.4,3.9,7.9,8.3,8.3v-1.1h2
		v1.1c4.4-0.5,7.9-3.9,8.3-8.3h-1.1V11.5z M12.5,19.9c-4.1,0-7.4-3.3-7.4-7.4s3.3-7.4,7.4-7.4s7.4,3.3,7.4,7.4S16.6,19.9,12.5,19.9z
		"
            />
            <path d="M13.5,3.2V0h-2v3.2c0.3,0,0.7-0.1,1-0.1S13.2,3.1,13.5,3.2z" />
            <path d="M12.5,3.1c-0.3,0-0.7,0-1,0.1v0C11.8,3.1,12.2,3.1,12.5,3.1z" />
            <path d="M13.5,3.2L13.5,3.2c-0.3,0-0.7-0.1-1-0.1C12.8,3.1,13.2,3.1,13.5,3.2z" />
            <path d="M13.5,4.3V3.2c-0.3,0-0.7-0.1-1-0.1s-0.7,0-1,0.1v1.1H13.5z" />
            <path d="M11.5,21.8V25h2v-3.2c-0.3,0-0.7,0.1-1,0.1S11.8,21.9,11.5,21.8z" />
            <path d="M11.5,21.8L11.5,21.8c0.3,0,0.7,0.1,1,0.1C12.2,21.9,11.8,21.9,11.5,21.8z" />
            <path d="M12.5,21.9c0.3,0,0.7,0,1-0.1v0C13.2,21.9,12.8,21.9,12.5,21.9z" />
            <path d="M11.5,20.7v1.1c0.3,0,0.7,0.1,1,0.1s0.7,0,1-0.1v-1.1H11.5z" />
            <path d="M3.2,11.5H0v2h3.2c0-0.3-0.1-0.7-0.1-1S3.1,11.8,3.2,11.5z" />
            <path d="M3.1,12.5c0,0.3,0,0.7,0.1,1h0C3.1,13.2,3.1,12.8,3.1,12.5z" />
            <path d="M3.2,11.5L3.2,11.5c0,0.3-0.1,0.7-0.1,1C3.1,12.2,3.1,11.8,3.2,11.5z" />
            <path d="M4.3,11.5H3.2c0,0.3-0.1,0.7-0.1,1s0,0.7,0.1,1h1.1V11.5z" />
            <path d="M25,11.5h-3.2c0,0.3,0.1,0.7,0.1,1s0,0.7-0.1,1H25V11.5z" />
            <path d="M21.9,12.5c0-0.3,0-0.7-0.1-1h0C21.9,11.8,21.9,12.2,21.9,12.5z" />
            <path d="M21.8,13.5L21.8,13.5c0-0.3,0.1-0.7,0.1-1C21.9,12.8,21.9,13.2,21.8,13.5z" />
            <path d="M20.7,11.5v2h1.1c0-0.3,0.1-0.7,0.1-1s0-0.7-0.1-1H20.7z" />
            <circle cx="12.5" cy="12.5" r="4.5" />
        </g>
    </Icon>
);

export default FindMe;
