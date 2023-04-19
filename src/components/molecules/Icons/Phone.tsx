import { ReactElement } from 'react';

import Icon, { IconProps } from '@components/atoms/Icon/Icon';

const Phone = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} {...rest}>
        <g transform="translate(-183 -62)">
            <g transform="translate(183 62)">
                <path
                    d="M201.4,75.128a11.355,11.355,0,0,1-3.566-.568,1.63,1.63,0,0,0-1.585.334l-2.249,1.7a12.428,12.428,0,0,1-5.588-5.586l1.648-2.19a1.617,1.617,0,0,0,.4-1.638,11.373,11.373,0,0,1-.57-3.572,1.607,1.607,0,0,0-1.6-1.6H184.6a1.607,1.607,0,0,0-1.6,1.6A18.416,18.416,0,0,0,201.4,82a1.607,1.607,0,0,0,1.6-1.6V76.732A1.607,1.607,0,0,0,201.4,75.128Z"
                    transform="translate(-183 -62)"
                />
            </g>
        </g>
    </Icon>
);

export default Phone;
