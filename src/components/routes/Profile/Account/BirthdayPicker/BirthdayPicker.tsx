import DatePickerInput from '@amir04lm26/react-modern-calendar-date-picker';
import '@amir04lm26/react-modern-calendar-date-picker/lib/DatePicker.css';
import { useAppSelector } from '@hooks';
import { selectUser } from '@store/user/selectors';
import { format, formatISO } from 'date-fns';
import { useState } from 'react';
import styled from 'styled-components';

import Input from '@components/atoms/Form/Input';

const calendarFormatToDate = ({ day, month, year }: { day: number; month: number; year: number }) =>
    format(new Date(`${year}/${month}/${day}`), 'dd/MM/yyyy');

const dateToCalendarFormat = (date: string) => {
    const originalDate = new Date(date);

    return {
        day: originalDate.getDate(),
        month: originalDate.getMonth() + 1,
        year: originalDate.getFullYear(),
    };
};

const StyledInput = styled(Input)`
    &:read-only {
        border: 1px solid ${({ theme }) => theme.colors.grey};
    }
`;

const Wrapper = styled.div`
    .DatePicker {
        width: 100%;
    }
`;

const BirthdayPicker = ({ onChange }: { onChange: (val: any) => void }) => {
    const user = useAppSelector(selectUser);
    const today = new Date();
    const maxDate = {
        year: today.getFullYear(),
        month: today.getMonth() + 1,
        day: today.getDate(),
    };
    const [selectedDay, setSelectedDay] = useState(
        dateToCalendarFormat(user?.profile?.birthday || new Date().toDateString()),
    );

    const handleOnChange = (val: any) => {
        const isoFormat = formatISO(new Date(`${val.year}.${val.month}.${val.day}`));

        setSelectedDay(val);
        onChange({ birthday: isoFormat });
    };

    const customInput = ({ ref, ...rest }: any) => (
        <StyledInput
            {...rest}
            name="dateOfBirth"
            value={calendarFormatToDate(selectedDay) || ''}
            readOnly
            label="Date of birth"
            ref={ref}
        />
    );

    return (
        <Wrapper>
            <DatePickerInput
                value={selectedDay}
                onChange={handleOnChange}
                maximumDate={maxDate}
                renderInput={customInput}
                inputPlaceholder="Select a day"
                shouldHighlightWeekends
            />
        </Wrapper>
    );
};

export default BirthdayPicker;
