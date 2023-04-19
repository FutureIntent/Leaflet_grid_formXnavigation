import BlockContent from '@sanity/block-content-to-react';
import sanity from '@services/sanity/sanity';
import routeMap from '@utils/RouteMap';
import { useTranslation } from 'next-i18next';

import Box from '@components/atoms/Box';
import LinkWithArrow from '@components/atoms/LinkWithArrow';

import GridChild from '@components/templates/GridChild';
import GridParent from '@components/templates/GridParent';
import ImageRender from '@components/templates/SanityRenderer/ImageRender';
import Block from '@components/templates/SanityRenderer/SanityTypographyMap';

const Content = ({ body }: { body: any | any[] }) => {
    const { t } = useTranslation();

    return (
        <GridParent>
            <GridChild gridColumn={{ _: 'span 12', laptopS: '4/ span 6' }}>
                <BlockContent
                    blocks={body}
                    serializers={{
                        types: {
                            block: Block,
                            image: ImageRender,
                        },
                    }}
                    {...sanity.config()}
                />
                <Box display="flex" justifyContent="center" mt={65}>
                    <LinkWithArrow label={t('Go back to blogs')} to={routeMap.blog} isBackBtn />
                </Box>
            </GridChild>
        </GridParent>
    );
};

export default Content;
