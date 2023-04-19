import { responsiveStyleFactory } from '@utils/styles';
import styled from 'styled-components';
import { variant as styledVariant } from 'styled-system';

import Typography from '@components/atoms/Typography';

interface ProcedureTagProps {
    label: string;
    size: 'small' | 'medium';
    variant: 'neutral' | 'active' | 'disabled';
}

const sizeVariant = styledVariant({
    prop: 'size',
    variants: {
        small: {
            padding: responsiveStyleFactory({ _: '3px 10px', tablet: '6px 15px' }),
        },
        medium: {
            padding: '12px 30px',
        },
    },
});

const tagVariants = styledVariant({
    prop: 'variant',
    variants: {
        neutral: {
            backgroundColor: 'var(--grey-cyan)',
        },
        active: {
            backgroundColor: 'var(--blue-brand)',
        },
        disabled: {
            backgroundColor: 'var(--grey-lt)',
        },
    },
});

const colors = {
    neutral: 'var(--blue-brand)',
    active: 'var(--white)',
    disabled: 'var(--grey-dark)',
};

const ProcedureTagWrapper = styled.div<Pick<ProcedureTagProps, 'size' | 'variant'>>`
    border-radius: ${({ theme }) => theme.space['2xs']};
    display: inline-block;
    z-index: 2;

    ${sizeVariant};
    ${tagVariants};
`;

const ProcedureTag = ({ label, size, variant }: ProcedureTagProps) => (
    <ProcedureTagWrapper size={size} variant={variant}>
        <Typography variant="caption" color={colors[variant]}>
            {label}
        </Typography>
    </ProcedureTagWrapper>
);

export default ProcedureTag;
