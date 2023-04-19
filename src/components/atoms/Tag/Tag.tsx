import styled from 'styled-components';

import Typography, { TypographyProps } from '@components/atoms/Typography';

interface TagProps extends TypographyProps {
    backgroundColor?: string;
}
const Tag = styled(Typography).attrs((props: TagProps) => ({
    backgroundColor: props.backgroundColor || 'rgba(0, 127, 255, 0.05)',
}))<TagProps>`
    background-color: ${({ backgroundColor }) => backgroundColor};
    border-radius: ${({ theme }) => theme.space['2xs']};
    padding: 6px 15px;
    white-space: nowrap;

    &:not(:last-of-type) {
        margin-right: 5px;
    }
`;

export default Tag;
