import { cleanup, render, screen } from '@testing-library/react';

import Box from './Box';

describe('<Box />', () => {
    afterEach(() => {
        cleanup();
    });

    it('should render without crashing', () => {
        expect.assertions(1);

        render(<Box>Test</Box>);

        expect(screen.getByText('Test')).toBeInTheDocument();
    });
});
