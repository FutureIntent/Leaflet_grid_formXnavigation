import type { Theme as StyledSystemTheme } from 'styled-system';

import breakpoints from './breakpoints';
import colors from './colors';
import mediaQueries from './mediaQueries';
import shadows from './shadows';
import space from './space';
import zIndices from './zIndices';

export interface Theme extends StyledSystemTheme {
    colors: typeof colors;
    zIndices: typeof zIndices;
    space: typeof space;
    mediaQueries: typeof mediaQueries;
    shadows: typeof shadows;
}

const theme: Theme = {
    colors,
    breakpoints,
    space,
    mediaQueries,
    zIndices,
    shadows,
};

export default theme;
