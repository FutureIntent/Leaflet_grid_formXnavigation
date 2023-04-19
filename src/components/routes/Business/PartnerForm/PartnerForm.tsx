import Business from '@components/routes/Business/PartnerForm/Business';
import Location from '@components/routes/Business/PartnerForm/Location';
import MainInfo from '@components/routes/Business/PartnerForm/MainInfo';
import Success from '@components/routes/Business/PartnerForm/Success';
import {
    Step,
    Stepper,
    StepButton,
    StepConnector,
    stepConnectorClasses,
    StepLabel,
} from '@mui/material';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import styled from 'styled-components';

import Box from '@components/atoms/Box';
import Button from '@components/atoms/Button';
import { SizePropsType } from '@components/atoms/Button/Button';
import Typography from '@components/atoms/Typography';

import { BusinessType } from '../../../../types/Business';

const CIRCLE_SIZE = 15;
const LINE_SIZE = 3;

const StepperConnector = styled(StepConnector)<{ allStepsCompleted: boolean }>`
    &.${stepConnectorClasses.alternativeLabel} {
        background-color: ${({ allStepsCompleted }) =>
            allStepsCompleted ? 'var(--success)' : 'var(--grey)'};
        left: calc(-50% + 7.5px);
        right: calc(50% + 7.5px);
        top: ${(CIRCLE_SIZE - LINE_SIZE) / 2}px;
    }

    &.${stepConnectorClasses.active} {
        & .${stepConnectorClasses.line} {
            border-color: ${({ allStepsCompleted }) =>
                allStepsCompleted ? 'var(--success)' : 'var(--blue-brand)'};
        }
    }

    &.${stepConnectorClasses.completed} {
        & .${stepConnectorClasses.line} {
            border-color: ${({ allStepsCompleted }) =>
                allStepsCompleted ? 'var(--success)' : 'var(--blue-brand)'};
        }
    }

    & .${stepConnectorClasses.line} {
        border-color: #eaeaf0;
        border-radius: 1px;
        border-top-width: ${LINE_SIZE}px;
        transition: background-color 0.2s ease-in-out, border 0.4s ease-in-out;
    }
`;

const StepCircle = styled.div<{
    active?: boolean;
    completed?: boolean;
    allStepsCompleted: boolean;
}>`
    align-items: center;
    background-color: var(--grey);
    border-radius: 50%;
    display: flex;
    height: ${CIRCLE_SIZE}px;
    transition: background-color 0.2s ease-in-out, border 0.2s ease-in-out;
    width: ${CIRCLE_SIZE}px;

    ${({ active }) =>
        active &&
        `
        background-color: white;
        border: 1px solid var(--blue-brand);
    `}

    ${({ completed }) =>
        completed &&
        `
        background-color: var(--blue-brand);
    `}
    
    ${({ allStepsCompleted }) =>
        allStepsCompleted &&
        `
        background-color: var(--success);
        border: 0;
    `}
`;

const PartnerForm = ({ businessType }: { businessType: BusinessType }) => {
    const { t } = useTranslation();
    const steps: string[] = [t('Main Info'), t('Location'), t('Business'), t('Success')];
    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState<{ [k: number]: boolean }>({ 0: true, 1: true });

    const totalSteps = () => steps.length;
    const completedSteps = () => Object.keys(completed).length;
    const isLastStep = () => activeStep === totalSteps() - 1;
    const allStepsCompleted = () => completedSteps() === totalSteps() - 1;

    const handleBack = () => setActiveStep((prev) => prev - 1);
    const handleStep = (step: number) => () => setActiveStep(step);
    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
    };

    const handleRevertComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = false;
        setCompleted(newCompleted);
        handleBack();
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? steps.findIndex((_, i) => !(i in completed))
                : activeStep + 1;
        handleComplete();
        setActiveStep(newActiveStep);
    };

    return (
        <Box width="100%">
            <Stepper
                nonLinear
                activeStep={activeStep}
                alternativeLabel
                connector={<StepperConnector allStepsCompleted={allStepsCompleted()} />}
            >
                {steps.map((label, index) => (
                    <Step
                        key={label}
                        completed={completed[index]}
                        active={activeStep >= index}
                        disabled={index === 3 && !allStepsCompleted()}
                    >
                        <StepButton color="inherit" onClick={handleStep(index)}>
                            <StepLabel
                                StepIconProps={{
                                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                    // @ts-ignore
                                    allStepsCompleted: allStepsCompleted(),
                                }}
                                StepIconComponent={StepCircle}
                            >
                                {label}
                            </StepLabel>
                        </StepButton>
                    </Step>
                ))}
            </Stepper>

            <Box pb={20}>
                <form>
                    {activeStep === 0 && <MainInfo businessType={businessType} />}
                    {activeStep === 1 && <Location />}
                    {activeStep === 2 && <Business />}
                    {activeStep === 3 && <Success />}
                </form>
            </Box>
            {activeStep === 0 && (
                <Typography variant="caption" color="var(--black-brand)" textAlign="center">
                    <Typography as="span" variant="caption" color="var(--blue-brand)">
                        Note:{' '}
                    </Typography>
                    You can use either same Phone Number / Email from sign in or add new. Contacts
                    from this application are used for Cryo˚Business activity only.
                </Typography>
            )}
            {activeStep !== steps.length - 1 && (
                <Box
                    mt={13}
                    mb={30}
                    display="grid"
                    gridTemplateColumns="repeat(auto-fit,minMax(40%, 1fr))"
                    gridGap={20}
                >
                    {activeStep !== 0 && (
                        <Button
                            size={SizePropsType.fullWidth}
                            variant="link"
                            onClick={handleRevertComplete}
                        >
                            <Box width="100%" display="flex" justifyContent="center">
                                <Typography
                                    textAlign="center"
                                    variant="accent"
                                    color="var(--grey-dark)"
                                >
                                    Back
                                </Typography>
                            </Box>
                        </Button>
                    )}
                    <Button
                        size={SizePropsType.fullWidth}
                        onClick={handleNext}
                        disabled={activeStep === 2 && !allStepsCompleted()}
                    >
                        <Typography variant="accent" color="var(--white)">
                            Next
                        </Typography>
                    </Button>
                </Box>
            )}
        </Box>
    );
};

export default PartnerForm;
