import breakpoints from './breakpoints';

export const mediaSizes = {
    mobile: `(min-width: ${breakpoints.mobile})`,
    mobileM: `(min-width: ${breakpoints.mobileM})`,
    mobileL: `(min-width: ${breakpoints.mobileL})`,
    tablet: `(min-width: ${breakpoints.tablet})`,
    tabletL: `(min-width: ${breakpoints.tabletL})`,
    laptopS: `(min-width: ${breakpoints.laptopS})`,
    laptop: `(min-width: ${breakpoints.laptop})`,
    desktop: `(min-width: ${breakpoints.desktop})`,
    desktopM: `(min-width: ${breakpoints.desktopM})`
};

const mediaQueries = {
    mobile: `@media all and (min-width: ${breakpoints.mobile})`,
    mobileM: `@media all and (min-width: ${breakpoints.mobileM})`,
    mobileL: `@media all and (min-width: ${breakpoints.mobileL})`,
    tablet: `@media all and (min-width: ${breakpoints.tablet})`,
    tabletL: `@media all and (min-width: ${breakpoints.tabletL})`,
    laptopS: `@media all and (min-width: ${breakpoints.laptopS})`,
    laptop: `@media all and (min-width: ${breakpoints.laptop})`,
    desktop: `@media all and (min-width: ${breakpoints.desktop})`,
    desktopM: `@media all and (min-width: ${breakpoints.desktopM})`
};

export const mediaQueriesReversed = {
    mobile: `@media all and (max-width: ${breakpoints.mobile})`,
    mobileM: `@media all and (max-width: ${breakpoints.mobileM})`,
    mobileL: `@media all and (max-width: ${breakpoints.mobileL})`,
    tablet: `@media all and (max-width: ${breakpoints.tablet})`,
    tabletL: `@media all and (max-width: ${breakpoints.tabletL})`,
    laptopS: `@media all and (max-width: ${breakpoints.laptopS})`,
    laptop: `@media all and (max-width: ${breakpoints.laptop})`,
    desktop: `@media all and (max-width: ${breakpoints.desktop})`,
    desktopM: `@media all and (max-width: ${breakpoints.desktopM})`
};

export default mediaQueries;
