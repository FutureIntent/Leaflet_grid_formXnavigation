import { cleanup, render, screen } from '@testing-library/react';

import Typography from './Typography';

describe('<Typography />', () => {
    afterEach(() => {
        cleanup();
    });

    it('should render without crashing', () => {
        expect.assertions(1);

        render(
            <Typography variant="caption" textAlign="right" as="span">
                Typography
            </Typography>,
        );
        expect(screen.getByText('Typography')).toBeInTheDocument();
    });

    it('should render with variant prop as string', () => {
        expect.assertions(1);

        render(
            <Typography variant="caption" textAlign="right" as="span">
                Typography
            </Typography>,
        );

        expect(
            screen.getByText(
                (content, element) =>
                    element?.tagName.toLowerCase() === 'span' && content.startsWith('Typography'),
            ),
        ).toBeInTheDocument();
    });

    it('should render with variant prop as object', () => {
        expect.assertions(1);

        render(
            <Typography variant={{ _: 'caption', laptop: 'paragraph' }} textAlign="right" as="h1">
                Test content
            </Typography>,
        );
        expect(
            screen.getByText(
                (content, element) =>
                    element?.tagName.toLowerCase() === 'h1' && content.startsWith('Test content'),
            ),
        ).toBeInTheDocument();
    });
});
