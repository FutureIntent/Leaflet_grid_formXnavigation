import { differenceInSeconds, isPast } from 'date-fns';
import { useEffect, useState } from 'react';

const leadingZeroFormatting = (time: number) => {
    if (time < 10 && time > -1) {
        return `0${time}`;
    }

    return time;
};

const CountdownTimer = ({
    timestamp = new Date().getTime(),
    onEnd = () => {},
}: {
    timestamp: number;
    onEnd?: () => void;
}) => {
    const [timeLeft, setTimeLeft] = useState(0);

    useEffect(() => {
        const difference = differenceInSeconds(new Date(timestamp), new Date());

        setTimeLeft(difference);
    }, [timestamp]);

    const tick = () => setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));

    useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);

        if (isPast(timestamp) || timeLeft <= 0) {
            clearInterval(timerId);
            onEnd();
        }

        return () => clearInterval(timerId);
    }, [onEnd, timeLeft, timestamp]);

    const calculateSeconds = () => leadingZeroFormatting(Math.floor(timeLeft % 60));

    const calculateMinutes = () => leadingZeroFormatting(Math.floor(timeLeft / 60));

    if (isPast(timestamp) || timeLeft <= 0) {
        return <>00:00</>;
    }

    return (
        <>
            {calculateMinutes()}:{calculateSeconds()}
        </>
    );
};

export default CountdownTimer;
