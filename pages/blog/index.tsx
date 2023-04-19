import List from '@components/routes/Blog/List';
import { fetchPostCategories, fetchPosts } from '@services/posts/requests';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ReactElement, useState } from 'react';

import GridChild from '@components/templates/GridChild';
import GridParent from '@components/templates/GridParent';

import ArrowDown from '@components/molecules/Icons/ArrowDown';

import Box from '@components/atoms/Box';
import Dropdown, { DropdownItemProps } from '@components/atoms/Form/Dropdown/Dropdown';
import Typography from '@components/atoms/Typography';

import i18nextConfig from '../../next-i18next.config';
import { Category, Post } from '../../src/types/Sanity';

const ArrowIcon = (): ReactElement => <ArrowDown size="micro" color="inherit" />;

type BlogProps = {
    initialPosts: Post[];
    initialCategories: Category[];
};

const Blog = ({ initialPosts, initialCategories }: BlogProps) => {
    const { t } = useTranslation();
    const postCategories: DropdownItemProps[] = [
        { label: 'All', value: 'all' },
        ...initialCategories.map((category) => ({ label: category.title, value: category.title })),
    ];
    const [selectedCategory, setSelectedCategory] = useState<DropdownItemProps>(postCategories[0]);

    const handleCategorySelect = (category: DropdownItemProps | null) => {
        if (!category) return;

        setSelectedCategory(category);
    };

    return (
        <GridParent>
            <GridChild gridColumn={{ _: 'span 12', laptopS: '4/span 6' }}>
                <Box
                    display="flex"
                    flexDirection={{ _: 'column', laptopS: 'row' }}
                    justifyContent="space-between"
                    mt={96}
                    mb={50}
                >
                    <Typography variant="h2" color="var(--black-brand)">
                        {t('CRYO BLOGS')}
                    </Typography>
                    <Box width="50%">
                        <Dropdown
                            hasBorder
                            onChange={handleCategorySelect}
                            options={postCategories}
                            selected={selectedCategory}
                            label="Select category"
                            name="category"
                            components={{
                                DropdownIndicator: ArrowIcon,
                            }}
                        />
                    </Box>
                </Box>
                <List initialPosts={initialPosts} category={selectedCategory.value} />
            </GridChild>
        </GridParent>
    );
};

export default Blog;

export const getStaticProps = async ({ locale = 'en' }: { locale: string }) => {
    let posts: Post[];
    let categories: Category[];

    try {
        categories = await fetchPostCategories();
        posts = await fetchPosts({});
    } catch (e) {
        posts = [];
        categories = [];
    }

    return {
        props: {
            initialPosts: posts,
            initialCategories: categories,
            ...(await serverSideTranslations(locale, ['common', 'auth'], i18nextConfig)),
        },
    };
};
