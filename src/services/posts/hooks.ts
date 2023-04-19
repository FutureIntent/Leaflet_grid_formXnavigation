import {
    fetchPost,
    fetchPostCategories,
    fetchPosts,
    POSTS_PER_PAGE,
} from '@services/posts/requests';
import {
    QueryOptions,
    useInfiniteQuery,
    UseInfiniteQueryOptions,
    UseInfiniteQueryResult,
    useQuery,
    UseQueryResult,
} from 'react-query';

import { Category, Post } from '../../types/Sanity';

interface UsePostsProps {
    category?: string | null;
    itemsPerPage?: number;
}

export const usePosts = ({
    category,
    itemsPerPage,
}: UsePostsProps): UseQueryResult<Post[], Error> => {
    const postsPerPage = itemsPerPage || POSTS_PER_PAGE;

    return useQuery('posts', () =>
        fetchPosts({
            ...(category && { categories: [{ title: category }] }),
            pageSize: postsPerPage,
        }),
    );
};

export const useInfinitePosts = (
    category: string | null,
    options: UseInfiniteQueryOptions<Post[], Error>,
    itemsPerPage?: number,
): UseInfiniteQueryResult<Post[], Error> => {
    const postsPerPage = itemsPerPage || POSTS_PER_PAGE;

    return useInfiniteQuery<Post[], Error>(
        ['posts', category],
        ({ pageParam = 0 }) =>
            fetchPosts({
                category: category ?? undefined,
                pageNumber: pageParam,
                pageSize: postsPerPage,
            }),
        {
            ...options,
            getNextPageParam: (lastPage, allPages) => {
                if (!lastPage || lastPage.length < postsPerPage) {
                    return undefined;
                }

                return allPages.length;
            },
        },
    );
};

export const usePost = (
    slug: string,
    options: QueryOptions<Post, Error>,
): UseQueryResult<Post, Error> =>
    useQuery<Post, Error>(['post', slug], () => fetchPost({ slug }), options);

export const usePostCategories = (
    options: QueryOptions<Category[], Error>,
): UseQueryResult<Category[], Error> =>
    useQuery<Category[], Error>('postCategories', fetchPostCategories, options);
