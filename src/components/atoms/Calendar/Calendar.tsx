import { Calendar as ModernCalendar } from '@amir04lm26/react-modern-calendar-date-picker';
import '@amir04lm26/react-modern-calendar-date-picker/lib/DatePicker.css';
import { useState } from 'react';
import styled from 'styled-components';

const CalendarContainer = styled.div`
    max-width: 350px;
    min-width: 280px;

    > * {
        font-family: 'Manrope', sans-serif;
    }
    .Calendar__monthText,
    .Calendar__yearText {
        font-weight: 700;
    }

    .Calendar__day,
    .Calendar__weekDays {
        margin: 0;
    }

    .Calendar {
        --cl-color-black: var(--black-brand);
        --cl-color-disabled: var(--grey-dark);
        background: var(--grey-cyan);
        border-radius: ${({ theme }) => theme.space['2xs']};
        box-shadow: ${({ theme }) => theme.shadows.card};
        min-height: unset;
        padding-top: 0;
        width: unset;
    }

    .Calendar__header,
    .Calendar__weekDays,
    .Calendar__section {
        padding: 8px 26px 0;
    }

    .-selected {
        background: transparent;
        border: 1px solid var(--blue-brand);
        color: var(--cl-color-black);
    }

    .Calendar__day {
        border-radius: ${({ theme }) => theme.space['2xs']};
        margin: 2.5px;
        min-height: 30px;
        width: calc((100% - 35px) / 7);
    }

    .Calendar__sectionWrapper {
        min-height: 230px;
    }

    .-today {
        color: var(--blue-brand) !important;
        font-weight: 900 !important;

        &::after {
            content: unset !important;
        }
    }

    .Calendar__day:not(.-blank):not(.-selectedStart):not(.-selectedEnd):not(.-selectedBetween):hover {
        background: var(--blue-brand) !important;
        border-radius: ${({ theme }) => theme.space['2xs']}!important;
        color: var(--white) !important;
    }
`;

const Calendar = () => {
    const today = new Date();
    const minDay = {
        year: today.getFullYear(),
        month: today.getMonth() + 1,
        day: today.getDate(),
    };
    const preselectedDays = [
        {
            year: 2021,
            month: 12,
            day: 5,
        },
    ];

    const [bookedDays] = useState(preselectedDays);

    return (
        <CalendarContainer>
            <ModernCalendar
                colorPrimary="var(--blue-brand)"
                minimumDate={minDay}
                value={bookedDays}
            />
        </CalendarContainer>
    );
};

export default Calendar;
