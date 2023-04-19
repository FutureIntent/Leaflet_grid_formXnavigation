import { cleanup, render, screen } from '@testing-library/react';
import Button from './Button';

describe('<Button />', () => {
    afterEach(() => {
        cleanup();
    });

    it('should render with default props', () => {
        expect.assertions(1);

        render(<Button />);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });
});
