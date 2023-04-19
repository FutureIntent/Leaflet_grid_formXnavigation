import { ReactElement } from 'react';

import Icon, { IconProps } from '@components/atoms/Icon/Icon';

const CreditCards = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 30.722 23.713" {...rest}>
        <g id="credit_card" transform="translate(0 4)">
            <path
                id="Path_36808"
                data-name="Path 36808"
                d="M1615.8-664.476h-24.512a.986.986,0,0,0-.986.986v13.5a.986.986,0,0,0,.986.986H1615.8a.986.986,0,0,0,.986-.986v-13.5A.986.986,0,0,0,1615.8-664.476Z"
                transform="translate(-1586.063 660.476)"
                fill="#5cf4e4"
            />
            <g id="Group_10329" data-name="Group 10329" transform="translate(0 4.237)">
                <rect
                    id="Rectangle_2455"
                    data-name="Rectangle 2455"
                    width="26.485"
                    height="12.118"
                    transform="translate(0 2.005)"
                    fill="#29015c"
                />
                <g id="Group_10328" data-name="Group 10328">
                    <path
                        id="Path_36806"
                        data-name="Path 36806"
                        d="M1548.6-632.6v2.18h26.484v-2.18a.986.986,0,0,0-.986-.986h-24.513A.986.986,0,0,0,1548.6-632.6Z"
                        transform="translate(-1548.601 633.587)"
                        fill="#4473ff"
                    />
                    <path
                        id="Path_36807"
                        data-name="Path 36807"
                        d="M1549.587-565.9H1574.1a.986.986,0,0,0,.986-.986v-8.528H1548.6v8.528A.986.986,0,0,0,1549.587-565.9Zm1.335-4.169a.631.631,0,0,1,.631-.631h2.642a.631.631,0,0,1,.631.631v1.356a.631.631,0,0,1-.631.631h-2.642a.631.631,0,0,1-.631-.631Z"
                        transform="translate(-1548.601 581.375)"
                        fill="#4473ff"
                    />
                </g>
            </g>
        </g>
    </Icon>
);

export default CreditCards;
