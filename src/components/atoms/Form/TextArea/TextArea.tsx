
import styled from 'styled-components';

import mediaQueries from '@theme/configs/mediaQueries';

import Box from '@components/atoms/Box';
import { StyledLabel, StyledLabelText } from '@components/atoms/Form/Label';
import { FONT_FAMILY, FONT_REGULAR } from '@components/atoms/Typography/Typography';
import { useRef } from 'react';
import colors from '@theme/configs/colors';

const CustomBox = styled.div`
border: 1px solid ${colors.white};
border-radius: 4px;
display: flex;
flex-direction: column;
margin-top: 2%;
position: relative;
width: 100%;
`;

const StyledTextArea: any = styled.textarea`
    background-color: transparent;
    border: 1px solid var(--grey);
    border-radius: ${({ theme }) => theme.space['2xs']};
    font-family: ${FONT_FAMILY};
    font-size: 12px;
    font-weight: ${FONT_REGULAR};
    line-height: 15px;
    margin-top: 21px;
    max-width: ${(props: any) => props.maxWidth || "unset"};
    min-height: 100px;
    min-width: ${(props: any) => props.minWidth || "unset"};
    padding: 0 12px 0 12px;
    resize: vertical;

    ${mediaQueries.tablet} {
        font-size: 17px;
        line-height: 21px;
    }

    &:focus
        ~ ${StyledLabel}
        ${StyledLabelText},
        &:not(:placeholder-shown)
        ~ ${StyledLabel}
        ${StyledLabelText} {
        font-size: 12px;
        transform: translateY(4px);
    }
`

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    name: string;
    ref?: React.RefObject<HTMLTextAreaElement>;
    width?: string;
    minWidth?: string;
    maxWidth?: string;
}

const TextArea = ({
    label,
    name,
    ref,
    width,
    ...props
}: TextAreaProps) => {
    const boxRef = useRef<HTMLDivElement>(null);

    const handleFocus = () => {
        if(boxRef.current) boxRef.current.style.borderColor = colors.blueBrand;
    }

    const handleBlur = () => {
        if(boxRef.current) boxRef.current.style.borderColor = colors.white;
    }

    return(
        <CustomBox ref={boxRef}>
            <StyledTextArea placeholder=" " name={name} ref={ref} rows={3} {...props} onFocus={handleFocus} onBlur={handleBlur} />
            <StyledLabel htmlFor={name}>
                <StyledLabelText variant="paragraph2" color="var(--grey-dark)" paddingTop='5px'>
                    {label}
                </StyledLabelText>
            </StyledLabel>
        </CustomBox>
    );
};

export default TextArea;
