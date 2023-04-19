import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

import mediaQueries from '@theme/configs/mediaQueries';

import Box from '@components/atoms/Box';
import Button from '@components/atoms/Button';
import Typography from '@components/atoms/Typography';

const Wrapper = styled.div`
    margin-top: 5rem;
    position: relative;
`;

const StyledLinearProgress = styled(LinearProgress)`
    &.${linearProgressClasses.colorPrimary} {
        height: 4px;
        background-color: var(--grey);
    }
    & .${linearProgressClasses.barColorPrimary} {
        background-color: var(--blue-brand);
    }
`;

const Step = styled.div<{ isCurrentStep: boolean; isPastStep: boolean }>`
    background-color: var(--grey);
    border: 1px solid var(--grey);
    border-radius: 50%;
    bottom: 0;
    height: 16px;
    margin-bottom: -6px;
    width: 16px;
    z-index: 1;

    ${({ isCurrentStep }) =>
        isCurrentStep &&
        `
    background-color: var(--white);
    border: 1px solid var(--blue-brand);
  `}

    ${({ isPastStep }) =>
        isPastStep &&
        `
    background-color: var(--blue-brand);
    border: 1px solid var(--blue-brand);
  `}
`;

const DotLabel = styled.div<{ labelOffset: string }>`
    left: ${({ labelOffset }) => `calc(${labelOffset} + 8px)`};
    position: relative;
    top: -1.5rem;
    white-space: nowrap;
`;

const StatusDot = ({
    label,
    dotOffset,
    labelOffset,
    isCurrentStep = false,
    isPastStep = false,
}: {
    label: string;
    dotOffset: string;
    labelOffset: string;
    isCurrentStep: boolean;
    isPastStep: boolean;
}) => (
    <Box
        display="inline-flex"
        flexDirection="column"
        justifyContent="center"
        left={`calc(${dotOffset} - 16px)`}
        bottom="0"
        position="absolute"
    >
        <DotLabel labelOffset={labelOffset}>
            <Typography
                variant="caption"
                color={isCurrentStep || isPastStep ? 'var(--blue-brand)' : 'var(--black-brand)'}
            >
                {label}
            </Typography>
        </DotLabel>
        <Step isCurrentStep={isCurrentStep} isPastStep={isPastStep} />
    </Box>
);

enum Steps {
    'busy' = 0,
    'preparing' = 33,
    'waitingForConfirmation' = 66,
    'startingUp' = 100,
}

const StepNames = ['busy', 'preparing', 'waitingForConfirmation', 'startingUp'];

const StatusLine = () => {
    const { t } = useTranslation('therapies');
    const [currentStep, setCurrentStep] = useState<number>(0);
    const isWiderThenLaptopS = useMediaQuery({ query: mediaQueries.laptopS });

    const handleRandomStep = () => {
        const random = Math.floor(Math.random() * 4);
        const currentStepName = StepNames[random];
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const randomStep: number = Steps[currentStepName];

        setCurrentStep(randomStep);
    };

    return (
        <>
            <Button onClick={handleRandomStep}>Random step</Button>
            <Wrapper>
                <StatusDot
                    label={t('statuses.busy')}
                    labelOffset="0"
                    dotOffset="0"
                    isCurrentStep={currentStep === Steps.busy}
                    isPastStep={currentStep > Steps.busy}
                />
                <StatusDot
                    label={t('statuses.preparing')}
                    labelOffset="-50%"
                    dotOffset="33%"
                    isCurrentStep={currentStep === Steps.preparing}
                    isPastStep={currentStep > Steps.preparing}
                />
                <StatusDot
                    label={
                        isWiderThenLaptopS
                            ? t('statuses.waitingForConfirmation')
                            : t('statuses.waitingForConfirmationMob')
                    }
                    dotOffset="66%"
                    labelOffset="-50%"
                    isCurrentStep={currentStep === Steps.waitingForConfirmation}
                    isPastStep={currentStep > Steps.waitingForConfirmation}
                />
                <StatusDot
                    label={t('statuses.startingUp')}
                    labelOffset="-90%"
                    dotOffset="100%"
                    isCurrentStep={currentStep === Steps.startingUp}
                    isPastStep={currentStep > Steps.startingUp}
                />
                <StyledLinearProgress variant="determinate" value={currentStep} />
            </Wrapper>
        </>
    );
};

export default StatusLine;
