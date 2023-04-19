import { ReactElement } from 'react';

import Typography from '@components/atoms/Typography';

import { BlogCardProps } from '@components/molecules/BlogCard/BlogCardInterface';

const PostPreview = ({ postPreview }: Pick<BlogCardProps, 'postPreview'>): ReactElement | null => {
    if (!postPreview) return null;

    return (
        <Typography variant="caption" color="var(--black-brand)" mb="16px" mt={13}>
            {postPreview}
        </Typography>
    );
};

export default PostPreview;
