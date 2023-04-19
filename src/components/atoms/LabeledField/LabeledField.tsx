import { ReactNode } from 'react';
import styled from 'styled-components';

import Typography from '@components/atoms/Typography';

const Wrapper = styled.div`
    &:not(:last-of-type) {
        margin-right: 1rem;
    }
`;

const LabeledField = ({ label, value }: { label: string; value: string | ReactNode }) => (
    <Wrapper>
        <Typography variant="caption" color="var(--grey-dark)">
            {label}
        </Typography>
        {typeof value === 'string' ? (
            <Typography variant="paragraph2" color="var(--black-brand)">
                {value}
            </Typography>
        ) : (
            value
        )}
    </Wrapper>
);

export default LabeledField;
