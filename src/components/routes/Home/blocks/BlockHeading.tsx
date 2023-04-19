import styled from 'styled-components';

import Typography from '@components/atoms/Typography';

const BlockHeading = styled(Typography).attrs({ variant: 'h2' })`
    color: var(--black-brand);
    line-height: 47px;
    margin-right: 10px;
`;

export default BlockHeading;
