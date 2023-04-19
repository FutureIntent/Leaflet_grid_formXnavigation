import styled from 'styled-components';

import mediaQueries from '@theme/configs/mediaQueries';

import AppStores from '@components/organisms/Footer/Blocks/AppStores';
import Contacts from '@components/organisms/Footer/Blocks/Contacts';
import FooterLogo from '@components/organisms/Footer/Blocks/FooterLogo';
import LanguageSelect from '@components/organisms/Footer/Blocks/LanguageSelect';
import Privacy from '@components/organisms/Footer/Blocks/Privacy';
import Socials from '@components/organisms/Footer/Blocks/Socials';

import GridParent from '@components/templates/GridParent';

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    height: var(--footer-height);
    position: relative;
    z-index: ${({ theme }) => theme.zIndices.footer};
`;

const StyledInfoBlock = styled.div`
    background-color: var(--black-brand);
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    padding: 2.25rem 1rem;
    width: 100%;

    ${mediaQueries.tablet} {
        padding: 2.8125rem 2.8125rem 1.25rem;
    }
`;

const Footer = () => (
    <StyledFooter id="footer">
        <StyledInfoBlock>
            <GridParent noGutter>
                <FooterLogo />
                <Contacts />
                <LanguageSelect />
                <AppStores />
                <Socials />
            </GridParent>
        </StyledInfoBlock>
        <Privacy />
    </StyledFooter>
);

export default Footer;
