import { SanityKeyedReference } from 'sanity-codegen';

import { Category } from './Sanity';

export type BlogPost = {
    heading: string;
    img: string | null;
    description: string;
    postPreview: string;
    category: SanityKeyedReference<Category> | null;
    slug: string | null;
};
