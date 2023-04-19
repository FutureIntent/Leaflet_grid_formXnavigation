import CryoSanityClient from '@services/sanity/sanity';
import groq from 'groq';

import Groq from '../../../groq';
import { Post, Category } from '../../types/Sanity';

export const POSTS_PER_PAGE = 5;

type FetchPostsProps = {
    category?: string;
    pageNumber?: number;
    pageSize?: number;
    currentPostSlug?: string;
};
export const fetchPosts = async ({
    category,
    pageNumber = 0,
    pageSize = POSTS_PER_PAGE,
    currentPostSlug,
}: FetchPostsProps): Promise<Post[]> => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const fields = groq`
        {
            _id,
            title,
            slug,
            publishedAt,
            mainImage{
                asset->{
                    ...
                }
            },
            postPreview,
            category->{
                title
            }
        }
    `;

    const query = new Groq({ type: 'post', fields });

    if (category) {
        query.filter({
            field: 'category->title',
            params: category,
            operator: '==',
        });
    }

    if (currentPostSlug) {
        query.filter({
            field: 'slug.current',
            params: currentPostSlug,
            operator: '!=',
        });
    }

    if (pageSize) {
        query.setPageSize(pageSize);
    }

    if (pageNumber) {
        query.setPage(pageNumber);
    }

    query.order({ by: 'publishedAt', direction: 'desc' });

    return CryoSanityClient.fetch(query.getQuery(), query.getQueryParams());
};

export const fetchPost = async (params: { slug: string }): Promise<Post> => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const fields = groq`
        {
            title,
            slug,
            previewText,
            body[]{
            ...
            },
            publishedAt,
            mainImage{
                asset->{
                 ...
                }
            },
            category->{
                title
            },
        }
    `;

    const query = new Groq({ type: 'post', fields, isSingle: true });

    if (params.slug) {
        query.filter({ field: 'slug.current', params: params.slug });
    }

    return CryoSanityClient.fetch(query.getQuery(), query.getQueryParams());
};

export const fetchPostCategories = async (): Promise<Category[]> => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const fields = groq`
        {
            title,
        }
    `;

    const query = new Groq({ type: 'category', fields });
    return CryoSanityClient.fetch(query.getQuery(), query.getQueryParams());
};
