import { ReactElement } from 'react';

import Typography, { Variant } from '@components/atoms/Typography';

const styleToTypographyMap: {
    [key: string]: { as: string; variant: Variant; mb: string };
} = {
    normal: {
        as: 'p',
        variant: 'paragraph',
        mb: '2xl',
    },
    h1: {
        as: 'h1',
        variant: 'h1',
        mb: 'md',
    },
    h2: {
        as: 'h2',
        variant: 'h2',
        mb: 'md',
    },
    h3: {
        as: 'h3',
        variant: 'h3',
        mb: 'md',
    },
};

const Block = ({ node, children }: any): ReactElement | null => {
    const { style = '' } = node;
    const typographyProps = styleToTypographyMap[style as string];

    if (typographyProps) {
        return (
            <Typography color="var(--black-brand)" {...typographyProps}>
                {children}
            </Typography>
        );
    }

    if (style === 'blockquote') {
        return (
            <Typography mb="2xl" mt="md" color="var(--grey-dark)" as="blockquote" variant="caption">
                {children}
            </Typography>
        );
    }

    return null;
};

export default Block;
