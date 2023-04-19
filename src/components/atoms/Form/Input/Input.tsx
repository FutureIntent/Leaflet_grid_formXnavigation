import {
    ComponentPropsWithRef,
    ForwardedRef,
    forwardRef,
    ReactNode,
    useEffect,
    useRef,
    useState,
} from 'react';
import styled from 'styled-components';

import mediaQueries from '@theme/configs/mediaQueries';

import Box from '@components/atoms/Box';
import { StyledLabel, StyledLabelText } from '@components/atoms/Form/Label';
import { fontsConfig } from '@components/atoms/Typography/Typography';
import colors from '@theme/configs/colors';

const StyledInputElement = styled.input<{ actionOffset: number }>`
    background-color: transparent;
    border: 1px solid var(--grey);
    border-radius: ${({ theme }) => theme.space['2xs']};
    ${{ ...fontsConfig.paragraph2 }};
    height: 100%;
    min-height: 40px;
    padding: 12px ${({ actionOffset }) => actionOffset}px 0 10px;

    ${mediaQueries.tablet} {
        min-height: 45px;
    }

    &:focus:not(:read-only)
        ~ ${StyledLabel}
        ${StyledLabelText},
        &:not(:placeholder-shown)
        ~ ${StyledLabel}
        ${StyledLabelText} {
        ${{ ...fontsConfig.caption }};
        transform: translateY(6px);
    }

    &:focus{
        border-color: ${colors.blueBrand};
    }

    &:-webkit-autofill:focus{
        border: 1px solid ${colors.blueBrand} !important;
    }

    &:read-only {
        background-color: ${({ theme }) => theme.colors.greyLt};
        border: 1px solid ${({ theme }) => theme.colors.greyLt};
    }
`;

interface InputProps extends Omit<ComponentPropsWithRef<'input'>, 'placeholder'> {
    label?: string;
    name: string;
    type?: 'text' | 'number' | 'password' | 'email' | 'tel';
    icon?: ReactNode;
    width?: string;
    clearIcon?: {
        icon: ReactNode,
        handleClear: (inputName: string) => void
    }
}

const Input = (
    { label, name, type = 'text', icon, width, clearIcon, ...rest }: InputProps,
    ref: ForwardedRef<HTMLInputElement>,
) => {
    const [actionOffset, setActionOffset] = useState(60);
    const actionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (actionRef?.current) {
            setActionOffset(actionRef.current.offsetWidth);
        }
    }, [actionRef.current]);

    return (
        <Box display="flex" flexDirection="column" position="relative" flex={1} height="100%" width={width} marginTop="2%">
            <StyledInputElement
                actionOffset={actionOffset}
                type={type}
                placeholder=" "
                name={name}
                ref={ref}
                {...rest}
            />
            {label && (
                <StyledLabel htmlFor={name}>
                    <StyledLabelText variant="paragraph2" color="var(--grey-dark)">
                        {label}
                    </StyledLabelText>
                </StyledLabel>
            )}

            {clearIcon && <Box
                position="absolute"
                height="100%"
                right={1}
                ref={actionRef}
                display="flex"
                alignItems="center"
                onClick={() => {clearIcon.handleClear(name)}}
                cursor='pointer'
                >
                {clearIcon.icon}
            </Box>}
                
            {icon && (
                <Box
                    position="absolute"
                    height="100%"
                    right={0}
                    ref={actionRef}
                    display="flex"
                    alignItems="center"
                >
                    {icon}
                </Box>
            )}
        </Box>
    );
};

export default forwardRef(Input);
