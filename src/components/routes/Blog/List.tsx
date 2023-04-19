import { useInfinitePosts } from '@services/posts/hooks';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Masonry from 'react-masonry-css';
import { InfiniteData } from 'react-query';
import { useMediaQuery } from 'react-responsive';
import { PulseLoader } from 'react-spinners';
import styled from 'styled-components';

import { mediaSizes } from '@theme/configs/mediaQueries';

import BlogCard from '@components/molecules/BlogCard';

import Box from '@components/atoms/Box';
import { CardLayout, CardSize } from '@components/atoms/Card/Card';

import { Post } from '../../../types/Sanity';

const StyledMasonry = styled(Masonry)`
    display: flex;
    margin-left: -30px;
    margin-top: 30px;
    width: auto;

    .my-masonry-grid_column {
        background-clip: padding-box; /* gutter size */
        padding-left: 30px;
    }

    .my-masonry-grid_column > a {
        margin-bottom: 30px;
    }
`;

const breakpointColumnsObj = {
    default: 4,
    2400: 3,
    1820: 2,
    1140: 3,
    960: 2,
    620: 1,
};

const List = ({ initialPosts, category }: { initialPosts: Post[]; category: string }) => {
    const isWiderThenTablet = useMediaQuery({ query: mediaSizes.tablet });
    let bigPost: Post | null = null;
    let smallPosts: Post[] = [];
    const initialData: InfiniteData<Post[]> = {
        pages: [initialPosts],
        pageParams: [],
    };

    const { ref, inView } = useInView();

    const response = useInfinitePosts(category, {
        ...(category === 'all' && { initialData: () => initialData }),
    });
    const posts = response.data?.pages || [];

    useEffect(() => {
        if (inView && response.hasNextPage) {
            response.fetchNextPage();
        }
    }, [inView, response]);

    if (posts.length && isWiderThenTablet) {
        [bigPost, ...smallPosts] = posts.flat();
    } else {
        smallPosts = posts.flat();
    }

    return (
        <>
            {bigPost && (
                <BlogCard
                    {...bigPost}
                    posterAspectRatio={435 / 360}
                    size={CardSize.large}
                    layout={CardLayout.horizontal}
                />
            )}
            <StyledMasonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {smallPosts.flat().map((post) => (
                    <BlogCard key={post.title} {...post} />
                ))}
            </StyledMasonry>
            <Box display="flex" justifyContent="center" width="100%" ref={ref} py={40}>
                <PulseLoader color="var(--blue-brand)" loading={response.isFetching} />
            </Box>
        </>
    );
};

export default List;
