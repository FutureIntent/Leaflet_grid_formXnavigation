import { ReactNode } from 'react';
import styled from 'styled-components';

import Typography from '@components/atoms/Typography';

const Item = styled.li`
    padding-left: 25px;
    position: relative;

    &:not(:last-of-type) {
        margin-bottom: 16px;
    }

    &:after {
        color: var(--blue-brand);
        content: '●';
        left: 0;
        position: absolute;
        top: 0;
    }
`;

const ListItem = ({ children }: { children: ReactNode }) => (
    <Item>
        <Typography variant="paragraph" color="var(--black-brand)">
            {children}
        </Typography>
    </Item>
);

export default ListItem;
