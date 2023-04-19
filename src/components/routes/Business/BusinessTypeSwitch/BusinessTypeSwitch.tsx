import styled from 'styled-components';

import Typography from '@components/atoms/Typography';

import Facility from '@components/molecules/Icons/home/Facility';

import { BusinessType } from '../../../../types/Business';

const Wrapper = styled.div<{ value: BusinessType }>`
    background-color: #10101c;
    border-radius: ${({ theme }) => theme.space['2xs']};
    display: flex;
    overflow: hidden;
    position: relative;
    width: 100%;

    &:after {
        background-color: var(--blue-brand);
        content: '';
        height: 100%;
        left: ${({ value }) => (value === BusinessType.company ? 0 : '50%')};
        opacity: 50%;
        position: absolute;
        top: 0;
        transition: left 0.2s ease-in-out;
        width: 50%;
    }
`;

const Option = styled.div<{ isActive: boolean }>`
    align-items: center;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    justify-content: center;
    overflow: hidden;
    padding: 13px;
    position: relative;
    text-align: center;
    width: 100%;
    z-index: ${({ theme }) => theme.zIndices.stepUp};
`;

const BusinessTypeSwitch = ({
    value,
    handleSwitch,
}: {
    value: BusinessType;
    handleSwitch: (v: BusinessType) => void;
}) => {
    const selectCompanyType = () => {
        if (value === BusinessType.company) return;

        handleSwitch(BusinessType.company);
    };

    const selectIndividualType = () => {
        if (value === BusinessType.individual) return;

        handleSwitch(BusinessType.individual);
    };

    return (
        <Wrapper value={value}>
            <Option isActive={value === BusinessType.company} onClick={selectCompanyType}>
                <Facility size="medium" color="var(--white)" />
                <Typography variant="paragraph" color="var(--white)" ml={13}>
                    Company
                </Typography>
            </Option>
            <Option isActive={value === BusinessType.individual} onClick={selectIndividualType}>
                <Typography variant="paragraph" color="var(--white)">
                    Individual
                </Typography>
            </Option>
        </Wrapper>
    );
};

export default BusinessTypeSwitch;
