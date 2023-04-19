import { ReactElement } from 'react';

import Box from '@components/atoms/Box';

const Container = ({ children }: { children: ReactElement }) => (
    <Box p={{ _: '5px 15px', tablet: '10px 45px' }}>{children}</Box>
);

export default Container;
