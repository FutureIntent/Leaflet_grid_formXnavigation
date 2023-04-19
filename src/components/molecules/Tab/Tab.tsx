import { props } from '@styled-system/should-forward-prop';
import { ReactChild, ReactElement } from 'react';
import { Tab as ReactTab } from 'react-tabs';
import styled from 'styled-components';

import mediaQueries from '@theme/configs/mediaQueries';

import Box from '@components/atoms/Box';
import Typography from '@components/atoms/Typography';

interface TabProps {
    children?: ReactChild;
    title: string;
    caption?: string;
    isActive?: boolean;
    handleClick?: () => void;
}

const StyledTab = styled(ReactTab).withConfig({
    shouldForwardProp: (prop) => ![...props, 'isActive'].includes(String(prop)),
})<{
    isActive: boolean;
}>`
    padding: 0;
    cursor: pointer;
    position: relative;

    ${({ isActive }) =>
        isActive &&
        `
        cursor: default;
        
        &:after {
              content: '';
              position: absolute;
              left: 0;
              bottom:0;
              background-color: var(--blue-brand);
              width: 100%;
              height: 4px;
        }
        
        ${mediaQueries.laptop} {
            background-color: var(--grey-cyan);
        
            &:after {
              right: 0;
              top:0;
              left: unset;
              bottom: unset;
              background-color: var(--blue-brand);
              width: 4px;
              height: 100%;
            }
        }
  `}
    }
`;

const Tab = ({
    children,
    title,
    caption,
    isActive = false,
    handleClick,
}: TabProps): ReactElement => (
    <StyledTab isActive={isActive} onClick={handleClick}>
        <Box display="flex">
            <Box
                display={{ _: 'none', laptopS: 'block' }}
                mx="1rem"
                position="relative"
                width="30%"
            >
                {children}
            </Box>
            <Box display="flex" flexDirection="column" justifyContent="center">
                <Typography variant="accent">{title}</Typography>
                {caption && <Typography variant="caption">{caption}</Typography>}
            </Box>
        </Box>
    </StyledTab>
);

Tab.tabsRole = 'Tab';

export default Tab;
