import { ReactElement } from 'react';
import { useMediaQuery } from 'react-responsive';

import breakpoints, { Device } from '@theme/configs/breakpoints';

export type UseActiveViewportSizeReturn = Device | '_';

const stripPxFromBreakpoint = ({ breakpoint }: { breakpoint: string }) =>
    breakpoint.substring(0, breakpoint.length - 2);

const mediaQueryFactory =
    ({ breakpoint, type }: { breakpoint: string; type: string }) =>
    ({ children }: { children: ReactElement }) => {
        const offset = type === 'maxWidth' ? 1 : 0;
        const isMatched = useMediaQuery({
            [type]: parseInt(stripPxFromBreakpoint({ breakpoint }), 10) - offset,
        });

        return isMatched ? children : null;
    };

export const TillMobile = mediaQueryFactory({ breakpoint: breakpoints.mobile, type: 'maxWidth' });
export const FromMobile = mediaQueryFactory({ breakpoint: breakpoints.mobile, type: 'minWidth' });

export const TillMobileM = mediaQueryFactory({ breakpoint: breakpoints.mobileM, type: 'maxWidth' });
export const FromMobileM = mediaQueryFactory({ breakpoint: breakpoints.mobileM, type: 'minWidth' });

export const TillMobileL = mediaQueryFactory({ breakpoint: breakpoints.mobileL, type: 'maxWidth' });
export const FromMobileL = mediaQueryFactory({ breakpoint: breakpoints.mobileL, type: 'minWidth' });

export const TillTablet = mediaQueryFactory({ breakpoint: breakpoints.tablet, type: 'maxWidth' });
export const FromTablet = mediaQueryFactory({ breakpoint: breakpoints.tablet, type: 'minWidth' });

export const TillTabletL = mediaQueryFactory({ breakpoint: breakpoints.tabletL, type: 'maxWidth' });
export const FromTabletL = mediaQueryFactory({ breakpoint: breakpoints.tabletL, type: 'minWidth' });

export const TillLaptopS = mediaQueryFactory({ breakpoint: breakpoints.laptopS, type: 'maxWidth' });
export const FromLaptopS = mediaQueryFactory({ breakpoint: breakpoints.laptopS, type: 'minWidth' });

export const TillLaptop = mediaQueryFactory({ breakpoint: breakpoints.laptop, type: 'maxWidth' });
export const FromLaptop = mediaQueryFactory({ breakpoint: breakpoints.laptop, type: 'minWidth' });

export const TillDesktop = mediaQueryFactory({ breakpoint: breakpoints.desktop, type: 'maxWidth' });
export const FromDesktop = mediaQueryFactory({ breakpoint: breakpoints.desktop, type: 'minWidth' });

export const useActiveViewportSize = (): UseActiveViewportSizeReturn => {
    const isWiderThanMobile = useMediaQuery({ query: `(min-width: ${breakpoints.mobile})` });
    const isWiderThanMobileM = useMediaQuery({ query: `(min-width: ${breakpoints.mobileM})` });
    const isWiderThanMobileL = useMediaQuery({ query: `(min-width: ${breakpoints.mobileL})` });
    const isWiderThanTablet = useMediaQuery({ query: `(min-width: ${breakpoints.tablet})` });
    const isWiderThanTabletL = useMediaQuery({ query: `(min-width: ${breakpoints.tabletL})` });
    const isWiderThanLaptop = useMediaQuery({ query: `(min-width: ${breakpoints.laptop})` });
    const isWiderThanLaptopS = useMediaQuery({ query: `(min-width: ${breakpoints.laptopS})` });
    const isWiderThanDesktop = useMediaQuery({ query: `(min-width: ${breakpoints.desktop})` });
    const isWiderThanDesktopM = useMediaQuery({ query: `(min-width: ${breakpoints.desktopM})` });

    const breakpointsMap: { [key in Device]: boolean } = {
        mobile: isWiderThanMobile,
        mobileM: isWiderThanMobileM,
        mobileL: isWiderThanMobileL,
        tablet: isWiderThanTablet,
        tabletL: isWiderThanTabletL,
        laptopS: isWiderThanLaptopS,
        laptop: isWiderThanLaptop,
        desktop: isWiderThanDesktop,
        desktopM: isWiderThanDesktopM,
    } as const;

    let deviceType: UseActiveViewportSizeReturn = '_';

    // Return the largest device name that is of value true
    Object.entries(breakpointsMap).forEach(([key, value]) => {
        if (value) {
            deviceType = key as Device;
        }
    });

    return deviceType;
};
