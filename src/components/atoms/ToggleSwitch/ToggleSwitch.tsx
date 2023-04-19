import { ChangeEvent, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

// Defaults
const THUMB_SIZE = 16;
const INNER_SPACING = 2;
const WRAPPER_WIDTH = 45;

const Label = styled.label`
    border-radius: 10px;
    cursor: pointer;
    display: block;
    margin: 0;
    overflow: hidden;
`;

const SwitchInner = styled.span<Pick<ToggleSwitchProps, 'labelOn' | 'labelOff' | 'innerSpacing'>>`
    background-color: var(--grey-dark);
    display: block;
    margin-left: -100%;
    transition: background-color 0.25s ease-in 0s;
    width: 200%;

    &:before,
    &:after {
        box-sizing: border-box;
        color: var(--white);
        display: inline-block;
        font-size: 14px;
        height: ${({ innerSpacing = INNER_SPACING }) => 20 - innerSpacing * 2}px;
        line-height: 20px;
        padding: 0;
        text-transform: uppercase;
        width: 50%;
        transition: color 0.5s ease-in-out;
    }
    &:before {
        color: transparent;
        content: '${({ labelOn }) => labelOn}';
        padding-left: 10px;
    }
    &:after {
        color: var(--white);
        content: '${({ labelOff }) => labelOff}';
        padding-right: 10px;
        text-align: right;
    }
`;

const SwitchThumb = styled.span.attrs((props: ThumbProps & { rightOffset: number }) => ({
    innerSpacing: props.innerSpacing || INNER_SPACING,
    size: props.size || THUMB_SIZE,
}))<ThumbProps & { rightOffset: number }>`
    background: var(--white);
    border-radius: 24px;
    bottom: 0;
    display: block;
    margin: ${({ innerSpacing }) => innerSpacing}px;
    position: absolute;
    right: ${({ rightOffset, innerSpacing, size }) => rightOffset - innerSpacing * 2 - size}px;
    top: 0;
    transition: all 0.3s ease-in 0s;
    width: ${({ size = WRAPPER_WIDTH }) => size}px;
`;

const Wrapper = styled.div<{ activeColor: string }>`
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    display: inline-block;
    min-width: ${WRAPPER_WIDTH}px;
    position: relative;
    text-align: left;
    vertical-align: middle;

    input {
        display: none;
    }

    input:checked + ${Label} {
        ${SwitchInner} {
            background-color: ${({ activeColor }) => activeColor};
            margin-left: 0;

            &:before {
                color: var(--white);
            }
            &:after {
                color: transparent;
            }
        }

        ${SwitchThumb} {
            right: 0;
        }
    }
`;

interface ThumbProps {
    size?: number;
    innerSpacing?: number;
}

interface ToggleSwitchProps extends ThumbProps {
    name: string;
    checked: boolean;
    onChange: (value: boolean) => void;
    labelOn?: string;
    labelOff?: string;
    activeColor?: string;
}

const ToggleSwitch = ({
    name,
    checked,
    onChange = () => {},
    labelOn = '',
    labelOff = '',
    activeColor = 'var(--blue-brand)',
    size,
    innerSpacing,
}: ToggleSwitchProps) => {
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const [wrapperWidth, setWrapperWidth] = useState<number | null>(null);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.checked);

    useEffect(() => {
        if (wrapperRef.current !== null) {
            setWrapperWidth(wrapperRef.current.clientWidth);
        }
    }, [wrapperRef.current?.clientWidth]);

    return (
        <Wrapper ref={wrapperRef} activeColor={activeColor}>
            <input
                type="checkbox"
                name={name}
                id={name}
                checked={checked}
                onChange={handleChange}
            />
            <Label htmlFor={name}>
                <SwitchInner labelOn={labelOn} labelOff={labelOff} />
                {wrapperWidth && (
                    <SwitchThumb
                        size={size}
                        innerSpacing={innerSpacing}
                        rightOffset={wrapperWidth}
                    />
                )}
            </Label>
        </Wrapper>
    );
};

export default ToggleSwitch;
