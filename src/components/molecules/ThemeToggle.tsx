import { useEffect, useState } from 'react';
import styled from 'styled-components';

enum ThemeTypes {
    light = 'light',
    dark = 'dark',
}

const ToggleButton = styled.button`
    --toggle-height: 25px;
    --toggle-padding: 2px;
    --toggle-width: 55px;
    align-items: center;
    background: var(--color-bg-toggle);
    border: 0;
    border-radius: calc(var(--toggle-width) / 2);
    cursor: pointer;
    display: flex;
    font-size: 1.5rem;
    height: var(--toggle-height);
    justify-content: space-around;
    line-height: 1;
    padding: var(--toggle-padding);
    position: relative;
    transition: background 0.25s ease-in-out, box-shadow 0.25s ease-in-out;
    width: var(--toggle-width);

    &:focus {
        outline-offset: 5px;
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }
`;

const ToggleThumb = styled.span<{ activeTheme: ThemeTypes }>`
    background: white;
    border-radius: 50%;
    height: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
    left: var(--toggle-padding);
    position: absolute;
    top: var(--toggle-padding);
    transform: ${(p) =>
        p.activeTheme === ThemeTypes.dark
            ? 'translate3d(calc(var(--toggle-width) - var(--toggle-height)), 0, 0)'
            : 'none'};
    transition: transform 0.25s ease-in-out;
    width: calc(var(--toggle-height) - (var(--toggle-padding) * 2));

    &:before {
        font-size: 14px;
        height: 90%;
        left: 1px;
        position: absolute;
        top: 3px;
        width: 90%;

        ${({ activeTheme }) =>
            activeTheme === ThemeTypes.dark
                ? `
            content: '🌙';
        `
                : `
            content: '☀';
            color: orange;
            `}
    }
`;

const ThemeToggle = () => {
    const [activeTheme, setActiveTheme] = useState<ThemeTypes>(
        (document.body.dataset.theme as ThemeTypes) || ThemeTypes.light,
    );
    const inactiveTheme = activeTheme === ThemeTypes.light ? ThemeTypes.dark : ThemeTypes.light;

    useEffect(() => {
        document.body.dataset.theme = activeTheme;
        window.localStorage.setItem('theme', activeTheme);
    }, [activeTheme]);

    return (
        <ToggleButton type="button" onClick={() => setActiveTheme(inactiveTheme)}>
            <ToggleThumb activeTheme={activeTheme} />
        </ToggleButton>
    );
};

export default ThemeToggle;
