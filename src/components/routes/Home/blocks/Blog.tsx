import BlockHeading from '@components/routes/Home/blocks/BlockHeading';
import routeMap from '@utils/RouteMap';
import { useTranslation } from 'next-i18next';

import Box from '@components/atoms/Box';
import { CardSize } from '@components/atoms/Card/Card';
import LinkWithArrow from '@components/atoms/LinkWithArrow';

import BlogCard from '@components/molecules/BlogCard';

import GridChild from '@components/templates/GridChild';
import GridParent from '@components/templates/GridParent';

import { Post } from '../../../../types/Sanity';

const Blog = ({ posts }: { posts: Post[] }) => {
    const { t } = useTranslation();

    return (
        <GridParent>
            <GridChild gridColumn={{ _: 'span 12', laptopS: '2/ span 10' }}>
                <Box
                    display="flex"
                    flexDirection={{ _: 'column', laptopS: 'row' }}
                    justifyContent="space-between"
                    alignItems={{ _: 'flex-start', laptopS: 'center' }}
                    flexWrap="wrap"
                >
                    <BlockHeading>{t('CRYO˚BLOGS')}</BlockHeading>
                    <LinkWithArrow label={t('View blogs')} to={routeMap.blog} />
                </Box>
            </GridChild>

            <GridChild gridColumn={{ _: 'span 12', laptopS: '2/ span 10' }}>
                <Box
                    display="flex"
                    gridGap={30}
                    padding={{ _: '1rem 0', tablet: '1.25rem 1.25rem 1.25rem 0' }}
                    overflowX="auto"
                >
                    {posts.map((item: any) => (
                        <BlogCard
                            key={item.slug.current}
                            posterAspectRatio={280 / 180}
                            size={CardSize.small}
                            {...item}
                        />
                    ))}
                </Box>
            </GridChild>
        </GridParent>
    );
};

export default Blog;
