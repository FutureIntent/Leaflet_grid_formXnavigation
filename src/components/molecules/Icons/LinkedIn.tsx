import { ReactElement } from 'react';

import Icon, { IconProps } from '@components/atoms/Icon/Icon';

const LinkedIn = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 56 56" {...rest}>
        <g id="social_linkedin" transform="translate(0.053)">
            <rect
                id="Rectangle_1948"
                data-name="Rectangle 1948"
                width="56"
                height="56"
                rx="4"
                transform="translate(-0.053)"
                fill="#fff"
                opacity="0.5"
            />
            <path
                id="linkedin"
                d="M33.731,0H3.355A3.355,3.355,0,0,0,0,3.355V33.731a3.355,3.355,0,0,0,3.355,3.355H33.731a3.355,3.355,0,0,0,3.355-3.355V3.355A3.355,3.355,0,0,0,33.731,0ZM11.476,32.023A.976.976,0,0,1,10.5,33H6.344a.976.976,0,0,1-.976-.976V14.6a.976.976,0,0,1,.976-.976H10.5a.976.976,0,0,1,.976.976ZM8.422,11.983A3.948,3.948,0,1,1,12.37,8.035,3.948,3.948,0,0,1,8.422,11.983ZM33.194,32.1a.9.9,0,0,1-.9.9H27.837a.9.9,0,0,1-.9-.9V23.93c0-1.219.358-5.342-3.186-5.342-2.748,0-3.306,2.822-3.418,4.088V32.1a.9.9,0,0,1-.9.9H15.125a.9.9,0,0,1-.9-.9V14.523a.9.9,0,0,1,.9-.9h4.313a.9.9,0,0,1,.9.9v1.52c1.019-1.529,2.534-2.71,5.758-2.71,7.141,0,7.1,6.671,7.1,10.337V32.1Z"
                transform="translate(9.272 9.272)"
                fill="#0b1445"
            />
        </g>
    </Icon>
);

export default LinkedIn;
