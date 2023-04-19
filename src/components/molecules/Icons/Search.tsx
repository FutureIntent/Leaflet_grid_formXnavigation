import { ReactElement } from 'react';

import Icon, { IconProps } from '@components/atoms/Icon/Icon';

const Search = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 24 24" {...rest}>
        <path
            d="M23.7,21.4c0-0.1-0.1-0.1-0.2-0.2h0l-6.1-6.1c3.1-4.3,2.1-10.3-2.3-13.4S4.9-0.3,1.8,4C-1.3,8.4-0.3,14.4,4,17.4
	c3.3,2.4,7.8,2.4,11.1,0l6.1,6.1c0.6,0.7,1.6,0.7,2.3,0.2C24.2,23.1,24.3,22.1,23.7,21.4z M9.6,17.6c-4.4,0-8-3.6-8-8s3.6-8,8-8
	s8,3.6,8,8S14,17.6,9.6,17.6z"
        />
    </Icon>
);

export default Search;
