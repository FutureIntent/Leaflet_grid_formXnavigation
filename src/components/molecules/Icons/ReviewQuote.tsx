import { ReactElement } from 'react';

import Icon, { IconProps } from '@components/atoms/Icon/Icon';

const ReviewQuote = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 105 75" {...rest}>
        <g transform="translate(0 -42.667)">
            <g transform="translate(0 42.667)">
                <g>
                    <path
                        d="M0,87.667H22.5l-15,30H30l15-30v-45H0Z"
                        transform="translate(0 -42.667)"
                    />
                    <path
                        d="M170.667,42.667v45h22.5l-15,30h22.5l15-30v-45Z"
                        transform="translate(-110.667 -42.667)"
                    />
                </g>
            </g>
        </g>
    </Icon>
);

export default ReviewQuote;
