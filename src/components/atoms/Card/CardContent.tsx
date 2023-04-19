import Box from '@components/atoms/Box';
import DateTime from '@components/atoms/Card/components/DateTime';
import Duration from '@components/atoms/Card/components/Duration';
import Heading from '@components/atoms/Card/components/Heading';
import Places from '@components/atoms/Card/components/Places';
import PostCategory from '@components/atoms/Card/components/PostCategory';
import PostPreview from '@components/atoms/Card/components/PostPreview';
import SubTitle from '@components/atoms/Card/components/SubTitle';
import Tags from '@components/atoms/Card/components/Tags';

import { BlogCardProps } from '@components/molecules/BlogCard/BlogCardInterface';
import { TherapyCardProps } from '@components/molecules/TherapyCard/TherapyCardInterface';

const CardContent = ({
    category,
    heading,
    size,
    address,
    therapyName,
    dateTime,
    postPreview,
    tags,
    duration,
    placesAmount,
}: Partial<TherapyCardProps> & Partial<BlogCardProps>) => (
    <Box p="15px 25px">
        <PostCategory category={category?.title} />
        <Heading heading={heading} size={size} />
        <SubTitle subTitle={address || therapyName} size={size} />
        <DateTime dateTime={dateTime} />
        <PostPreview postPreview={postPreview} />
        <Tags tags={tags} />
        {(duration || placesAmount) && (
            <Box display="flex" justifyContent="space-between" my="1rem">
                <Duration duration={duration} />
                <Places placesAmount={placesAmount} />
            </Box>
        )}
    </Box>
);

export default CardContent;
