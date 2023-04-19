import { ReactElement } from 'react';

import Icon, { IconProps } from '@components/atoms/Icon/Icon';

const Manual = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 37.5 50" {...rest}>
        <g>
            <path d="M36.8,10.3l-9.6-9.6c-0.4-0.4-1-0.7-1.7-0.7H25v12.5h12.5v-0.6C37.5,11.3,37.3,10.7,36.8,10.3z" />
            <path
                d="M21.9,13.3V0H2.3C1.1,0,0,1,0,2.3c0,0,0,0,0,0v45.3C0,48.9,1,50,2.3,50c0,0,0,0,0,0h32.8c1.3,0,2.3-1,2.3-2.3c0,0,0,0,0,0
		v-32H24.2C22.9,15.6,21.9,14.6,21.9,13.3z M28.1,36.3c0,0.6-0.5,1.2-1.2,1.2H10.5c-0.6,0-1.2-0.5-1.2-1.2v-0.8
		c0-0.6,0.5-1.2,1.2-1.2H27c0.6,0,1.2,0.5,1.2,1.2V36.3z M28.1,30.1c0,0.6-0.5,1.2-1.2,1.2H10.5c-0.6,0-1.2-0.5-1.2-1.2v-0.8
		c0-0.6,0.5-1.2,1.2-1.2H27c0.6,0,1.2,0.5,1.2,1.2V30.1z M28.1,23v0.8c0,0.6-0.5,1.2-1.2,1.2H10.5c-0.6,0-1.2-0.5-1.2-1.2V23
		c0-0.6,0.5-1.2,1.2-1.2H27C27.6,21.9,28.1,22.4,28.1,23z"
            />
        </g>
    </Icon>
);

export default Manual;
