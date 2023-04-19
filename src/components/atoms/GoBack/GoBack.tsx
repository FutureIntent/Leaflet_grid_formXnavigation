import { useRouter } from 'next/router';

import Arrow from '@components/atoms/Arrow/Arrow';
import Button from '@components/atoms/Button';
import { SizePropsType } from '@components/atoms/Button/Button';

const GoBack = ({ link }: { link: string }) => {
    const router = useRouter();

    const handleGoBack = () => router.push(link);

    return (
        <Button variant="link" onClick={handleGoBack} size={SizePropsType.auto}>
            <Arrow variant="left" color="var(--grey-dark)" size="xl" />
        </Button>
    );
};

export default GoBack;
