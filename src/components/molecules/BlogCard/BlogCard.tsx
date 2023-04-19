import routeMap from '@utils/RouteMap';
import { useTranslation } from 'next-i18next';
import styled from 'styled-components';

import Box from '@components/atoms/Box';
import Card from '@components/atoms/Card';
import { CardLayout, CardSize } from '@components/atoms/Card/Card';
import Heading from '@components/atoms/Card/components/Heading';
import PostCategory from '@components/atoms/Card/components/PostCategory';
import PostPreview from '@components/atoms/Card/components/PostPreview';
import Poster from '@components/atoms/Card/components/Poster';
import Link from '@components/atoms/Link';
import Typography from '@components/atoms/Typography';

import { BlogCardProps } from '@components/molecules/BlogCard/BlogCardInterface';
import ArrowButton from '@components/molecules/Icons/ArrowButton';

const StyledArrowBtn = styled(ArrowButton)`
    margin-left: 0.5rem;
    vertical-align: middle;
`;

const BlogCard = ({
    slug,
    layout = CardLayout.vertical,
    category,
    title,
    postPreview,
    mainImage,
    size = CardSize.small,
    ...posterProps
}: BlogCardProps) => {
    const { t } = useTranslation();

    return (
        <Link href={`${routeMap.blog}/${slug?.current}`}>
            <Card layout={layout} size={size}>
                <Poster
                    layout={layout}
                    img={mainImage?.asset.url}
                    posterAspectRatio={280 / 180}
                    {...posterProps}
                />
                <Box p="15px 25px 40px">
                    <PostCategory category={category?.title} />
                    <Heading heading={title} size={CardSize.large} />
                    <PostPreview postPreview={postPreview} />
                    <Typography variant="accent" color="var(--blue-brand)">
                        {t('ReadMore')} <StyledArrowBtn color="var(--blue-brand)" />
                    </Typography>
                </Box>
            </Card>
        </Link>
    );
};

export default BlogCard;
