import { ReactElement } from 'react';

import Box from '@components/atoms/Box';
import Tag from '@components/atoms/Tag';

import { TherapyCardProps } from '@components/molecules/TherapyCard/TherapyCardInterface';

const Tags = ({ tags = [] }: Pick<TherapyCardProps, 'tags'>): ReactElement | null => {
    if (!tags.length) return null;

    return (
        <Box display="flex" alignContent="center" my={20}>
            {tags.map((tag) => (
                <Tag key={tag} variant="caption" color="var(--blue-brand)">
                    {tag}
                </Tag>
            ))}
        </Box>
    );
};

export default Tags;
