import { cleanup, render, screen } from '@testing-library/react';
import Icon from './Icon';

describe('<Icon />', () => {
    afterEach(() => {
        cleanup();
    });

    it('should render without crashing', () => {
        expect.assertions(1);

        render(<Icon />);
        expect(screen.getByRole('svg')).toBeInTheDocument();
    });
});
