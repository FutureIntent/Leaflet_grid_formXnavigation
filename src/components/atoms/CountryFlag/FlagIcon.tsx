import Flags from 'country-flag-icons/react/3x2';

interface FlagIconProps {
    countryCode: string;
}

const FlagIcon = ({ countryCode }: FlagIconProps) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const Flag = Flags[countryCode as any];

    return <Flag title={countryCode} />;
};

export default FlagIcon;
