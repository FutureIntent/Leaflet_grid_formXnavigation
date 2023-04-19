import routeMap from '@utils/RouteMap';
import debounce from 'lodash/debounce';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ChangeEvent, useEffect, useState } from 'react';

import Box from '@components/atoms/Box';
import GoBack from '@components/atoms/GoBack';
import Typography from '@components/atoms/Typography';

import SearchInput from '@components/molecules/SearchInput';
import TherapyFilters from '@components/molecules/TherapyFilters';
import { TherapyType } from '@components/molecules/TherapyFilters/TherapyFilters';

import TherapiesWithCalendar from '@components/organisms/TherapiesWithCalendar';

import GridChild from '@components/templates/GridChild';
import GridParent from '@components/templates/GridParent';

import testImg from "@public/images/test.jpg";
import i18nextConfig from '../../../next-i18next.config';

const demoBookedCardData = Array(15)
  .fill({
      heading: 'Gain Hard',
      img: testImg,
      place: 'GYM',
      dateTime: new Date(),
      address: 'Lybecksgatan 37, S-252 69. Råå',
      tags: ['Full-Body', 'Local', 'Face'],
  })
  .map((card, index) => ({ ...card, heading: card.heading + index }));

const cards = demoBookedCardData;

const BookingList = () => {
    const { t } = useTranslation();
    const [filteredResult, setFilteredResult] = useState<any[]>([]);
    const [activeFilters, setActiveFilters] = useState<TherapyType[]>([]);
    const [searchText, setSearchText] = useState<string | undefined>();

    useEffect(() => {
        let filtered = cards;

        if (activeFilters.length > 0) {
            filtered = filtered.filter((card) =>
                card.tags.some((tag: TherapyType) => activeFilters.includes(tag)),
            );
        }

        if (searchText) {
            filtered = filtered.filter(
                (card) =>
                    card.heading.toLowerCase().includes(searchText.toLowerCase()) ||
                    card.address.toLowerCase().includes(searchText.toLowerCase()) ||
                    card.place.toLowerCase().includes(searchText.toLowerCase()),
            );
        }

        setFilteredResult(filtered);
    }, [activeFilters, searchText]);

    const handleFilterClick = (filter: TherapyType | 'All') => {
        if (filter === 'All') {
            setActiveFilters([]);
            return;
        }

        if (activeFilters.includes(filter)) {
            setActiveFilters(activeFilters.filter((activeFilter) => activeFilter !== filter));
        } else {
            setActiveFilters((prev) => [...prev, filter]);
        }
    };

    const searchItems = debounce((e: ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    }, 400);

    return (
        <Box mt={26} mb={200}>
            <GridParent gridGap={30}>
                <GridChild gridColumn={{ _: 'span 12', laptopS: '3/ span 8' }} mb={45}>
                    <Box
                        display="flex"
                        flexDirection={{ _: 'column', laptopS: 'row' }}
                        flexWrap="wrap"
                        justifyContent="space-between"
                        mt={40}
                        mb={16}
                        gridGap={10}
                    >
                        <Box display="flex" alignItems="center">
                            <GoBack link={routeMap.therapies} />
                            <Typography variant="h2" color="var(--black-brand)" ml={16}>
                                {t('BOOKED THERAPIES')}
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" gridGap={23} flexWrap="wrap">
                            <TherapyFilters
                                activeFilters={activeFilters}
                                handleFilterClick={handleFilterClick}
                            />
                            <SearchInput handleOnChange={searchItems} />
                        </Box>
                    </Box>
                </GridChild>
                <TherapiesWithCalendar therapies={filteredResult} />
            </GridParent>
        </Box>
    );
};

export default BookingList;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['therapies', 'auth'], i18nextConfig)),
    },
});
