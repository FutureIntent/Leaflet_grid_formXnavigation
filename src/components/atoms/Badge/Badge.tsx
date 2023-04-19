import styled from 'styled-components';

import Typography from '@components/atoms/Typography';

const Badge = styled(Typography)`
    background-color: var(--blue-brand);
    border-radius: ${({ theme }) => theme.space['2xs']};
    display: inline-block;
    padding: 6px 15px;
`;

export default Badge;
