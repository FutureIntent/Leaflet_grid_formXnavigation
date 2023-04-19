import { StaticImageData } from 'next/image';

import { CardProps } from '@components/atoms/Card/Card';

export interface TherapyCardProps extends CardProps {
    img: StaticImageData | string;
    heading?: string;
    tags?: string[];
    discount?: string;
    place?: string;
    address?: string;
    duration?: string;
    therapyName?: string;
    placesAmount?: string;
    dateTime?: Date;
    price?: number;
    posterAspectRatio?: number;
    devices?: number;
    agents?: number;
}
