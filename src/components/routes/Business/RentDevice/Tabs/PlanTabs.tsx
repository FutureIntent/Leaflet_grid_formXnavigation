import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TabList, TabPanel, Tabs, Tab } from 'react-tabs';
import styled from 'styled-components';

import mediaQueries from '@theme/configs/mediaQueries';

import Typography from '@components/atoms/Typography';

const StyledTab = styled(Tab)<{ isActive: boolean }>`
    cursor: pointer;
    padding: 0.9rem 0;
    width: 100%;

    p {
        color: var(--grey-dark);
    }

    ${({ isActive }) =>
        isActive &&
        `
        background-color: rgba(0, 127, 255, 1);
        
        ${mediaQueries.tablet} {
    background-color: rgba(0, 127, 255, 0.5);
    }
    
    p {
        color: var(--white);
    }
  `}
`;

const StyledWrapper = styled.div`
    background-color: var(--grey-lt);

    ${mediaQueries.tablet} {
        @supports (backdrop-filter: blur(10px)) {
            & {
                backdrop-filter: blur(10px);
                background-color: rgba(16, 16, 28, 0.5);
            }
        }

        @supports not ((backdrop-filter: blur(10px)) or (-moz-backdrop-filter: blur(10px))) {
            & {
                backdrop-filter: blur(10px);
                background-color: rgba(16, 16, 28, 0.8);
            }
        }
    }
`;

const StyledTabList = styled(TabList)`
    display: flex;
`;

const PlanTabs = ({ prices }: { prices: [number, number, number] }) => {
    const { t } = useTranslation();
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <StyledWrapper>
                <StyledTabList>
                    <StyledTab isActive={tabIndex === 0}>
                        <Typography variant="caption" color="var(--white)" textAlign="center">
                            {t('Plan A')}
                        </Typography>
                    </StyledTab>
                    <StyledTab isActive={tabIndex === 1}>
                        <Typography variant="caption" color="var(--white)" textAlign="center">
                            {t('Plan B')}
                        </Typography>
                    </StyledTab>
                    <StyledTab isActive={tabIndex === 2}>
                        <Typography variant="caption" color="var(--white)" textAlign="center">
                            {t('Plan C')}
                        </Typography>
                    </StyledTab>
                </StyledTabList>
                <TabPanel>
                    <Typography
                        variant="h2"
                        color={{ _: 'var(--black-brand)', tablet: 'var(--white)' }}
                        textAlign="center"
                        mt="0.9rem"
                    >
                        $ {prices[0]}
                        <Typography
                            as="span"
                            variant="paragraph"
                            color={{ _: 'var(--black-brand)', tablet: 'var(--white)' }}
                            verticalAlign="super"
                        >
                            {t('Month')}
                        </Typography>
                    </Typography>
                    <Typography
                        variant="paragraph"
                        color={{ _: 'var(--black-brand)', tablet: 'var(--grey-dark)' }}
                        pb={{ _: '0.4rem', tablet: '1.4rem' }}
                        textAlign="center"
                    >
                        {t('70% Royalty')}
                    </Typography>
                </TabPanel>
                <TabPanel>
                    <Typography
                        variant="h2"
                        color={{ _: 'var(--black-brand)', tablet: 'var(--white)' }}
                        textAlign="center"
                        mt="0.9rem"
                    >
                        $ {prices[1]}
                        <Typography
                            as="span"
                            variant="paragraph"
                            color={{ _: 'var(--black-brand)', tablet: 'var(--white)' }}
                            verticalAlign="super"
                        >
                            {t('Month')}
                        </Typography>
                    </Typography>
                    <Typography
                        variant="paragraph"
                        color={{ _: 'var(--black-brand)', tablet: 'var(--grey-dark)' }}
                        pb={{ _: '0.4rem', tablet: '1.4rem' }}
                        textAlign="center"
                    >
                        {t('70% Royalty')}
                    </Typography>
                </TabPanel>
                <TabPanel>
                    <Typography
                        variant="h2"
                        color={{ _: 'var(--black-brand)', tablet: 'var(--white)' }}
                        textAlign="center"
                        mt="0.9rem"
                    >
                        $ {prices[2]}
                        <Typography
                            as="span"
                            variant="paragraph"
                            color={{ _: 'var(--black-brand)', tablet: 'var(--white)' }}
                            verticalAlign="super"
                        >
                            {t('Month')}
                        </Typography>
                    </Typography>
                    <Typography
                        variant="paragraph"
                        color={{ _: 'var(--black-brand)', tablet: 'var(--grey-dark)' }}
                        pb={{ _: '0.4rem', tablet: '1.4rem' }}
                        textAlign="center"
                    >
                        {t('70% Royalty')}
                    </Typography>
                </TabPanel>
            </StyledWrapper>
        </Tabs>
    );
};

export default PlanTabs;
