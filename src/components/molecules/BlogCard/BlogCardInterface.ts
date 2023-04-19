import { CardProps } from '@components/atoms/Card/Card';

import { Post } from '../../../types/Sanity';

export interface BlogCardProps extends CardProps, Partial<Post> {
    posterAspectRatio?: number;
}
