import styled from 'styled-components';

export enum SpinnerBoldnessTypes {
    thin = 'thin',
    regular = 'regular',
}

const spinnerBoldness = {
    thin: '4px',
    regular: '10px',
};

export const Spinner = styled.div.attrs(({ boldness }: { boldness: SpinnerBoldnessTypes }) => ({
    boldness: boldness || SpinnerBoldnessTypes.regular,
}))<{ boldness?: SpinnerBoldnessTypes }>`
    animation: spin 1s linear infinite;
    border: ${({ boldness }) => spinnerBoldness[boldness]} solid #f3f3f3;
    border-radius: 50%;
    border-top: ${({ boldness }) => spinnerBoldness[boldness]} solid #3498db;
    height: 100%;
    width: 100%;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
