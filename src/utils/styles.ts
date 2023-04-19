import type { Device } from '@theme/configs/breakpoints';
import { deviceList } from '@theme/configs/breakpoints';
import mediaQueries from '@theme/configs/mediaQueries';

type ResponsiveValue = string | number | null;

export const mediaQuery = (device: Device): string => mediaQueries?.[device] || mediaQueries.mobile;

export const responsiveStyleFactory = (
    breakpointsValue: { _: ResponsiveValue } & { [key in Device]?: ResponsiveValue },
): ResponsiveValue[] => {
    const styles = [breakpointsValue._];

    deviceList.forEach((device: Device) => {
        const value: ResponsiveValue = breakpointsValue[device] || null;
        styles.push(value);
    });

    return styles;
};
