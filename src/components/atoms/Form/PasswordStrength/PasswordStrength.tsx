import { camelCase } from 'lodash';
import { useTranslation } from 'next-i18next';
import { FieldError } from 'react-hook-form';
import styled from 'styled-components';
import zxcvbn from 'zxcvbn';

import Typography from '@components/atoms/Typography';

const StrengthColors = [
    'var(--red-warning)',
    'var(--red-warning)',
    'var(--yellow)',
    'var(--blue-brand)',
    'var(--success)',
];

const PasswordStrengthContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const StrengthIndicatorWrapper = styled.div`
    background: var(--grey-dark);
    border-radius: 2px;
    flex-shrink: 0;

    height: 3px;
    margin: 7px 0 7px 7px;
    position: relative;
    width: 30%;

    &:before,
    &:after {
        background: transparent;
        border-color: var(--white);
        border-style: solid;
        border-width: 0 6px 0;
        content: '';
        display: block;
        height: inherit;
        position: absolute;
        width: calc(25% - 6px);
        z-index: 10;
    }

    &:before {
        left: calc(25% - 3px);
    }

    &:after {
        right: calc(25% - 3px);
    }
`;

const StrengthIndicator = styled.div<{ backgroundColor: string }>`
    background-color: ${({ backgroundColor }) => backgroundColor};
    border-radius: inherit;
    height: inherit;
    position: absolute;
    transition: width 0.5s ease-in-out, background 0.25s;
    width: 0;

    &[data-score='1'],
    &[data-score='0'] {
        width: 25%;
    }

    &[data-score='2'] {
        width: 50%;
    }

    &[data-score='3'] {
        width: 75%;
    }

    &[data-score='4'] {
        width: 100%;
    }
`;

const ErrorMsgWrapper = styled.div`
    width: 70%;
    word-break: break-word;
`;

const PasswordStrength = ({
    value = '',
    errorMsg,
}: {
    value: string;
    errorMsg?: FieldError['message'];
}) => {
    const { score, feedback } = zxcvbn(value);
    const { t } = useTranslation('auth');
    const strengthColor = StrengthColors[score];

    return (
        <PasswordStrengthContainer>
            <ErrorMsgWrapper>
                {Boolean(feedback.warning) && (
                    <Typography variant="caption" color={strengthColor}>
                        {t(`passwordFeedback.${camelCase(feedback.warning.replace('"', ''))}`)}
                    </Typography>
                )}
                {Boolean(errorMsg) && (
                    <Typography variant="caption" color={strengthColor}>
                        {t(`passwordFeedback.${errorMsg}`)}
                    </Typography>
                )}
            </ErrorMsgWrapper>
            <StrengthIndicatorWrapper>
                <StrengthIndicator
                    data-score={value.length ? score : -1}
                    backgroundColor={value.length ? strengthColor : 'transparent'}
                />
            </StrengthIndicatorWrapper>
        </PasswordStrengthContainer>
    );
};

export default PasswordStrength;
