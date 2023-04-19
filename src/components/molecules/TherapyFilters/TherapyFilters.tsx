import { useTranslation } from 'next-i18next';
import styled from 'styled-components';

import Box from '@components/atoms/Box';
import Tag from '@components/atoms/Tag';

export type TherapyType = 'Full-Body' | 'Local' | 'Face' | 'Body';

const FilterTag = styled(Tag)<{ isActive: boolean }>`
    background-color: ${({ isActive }) => (isActive ? 'var(--blue-brand)' : 'var(--grey-cyan)')};
    color: ${({ isActive }) => (isActive ? 'var(--white)' : 'var(--black-brand)')};
    cursor: pointer;
`;

const TherapyFilters = ({
    activeFilters = [],
    handleFilterClick = () => {},
}: {
    activeFilters: TherapyType[];
    handleFilterClick: (filter: TherapyType | 'All') => void;
}) => {
    const { t } = useTranslation();

    const therapies = [
        { label: t('Body'), value: 'Body' },
        { label: t('Face'), value: 'Face' },
        { label: t('Local'), value: 'Local' },
        { label: t('Full-Body'), value: 'Full-Body' },
    ];

    return (
        <Box display="flex">
            <Box onClick={() => handleFilterClick('All')}>
                <FilterTag variant="caption" isActive={!activeFilters.length}>
                    {t('All')}
                </FilterTag>
            </Box>
            {therapies.map((therapy) => (
                <Box
                    key={therapy.value}
                    onClick={() => handleFilterClick(therapy.label as TherapyType)}
                    ml={7}
                >
                    <FilterTag
                        variant="caption"
                        isActive={activeFilters.includes(therapy.value as TherapyType)}
                    >
                        {therapy.label}
                    </FilterTag>
                </Box>
            ))}
        </Box>
    );
};

export default TherapyFilters;
