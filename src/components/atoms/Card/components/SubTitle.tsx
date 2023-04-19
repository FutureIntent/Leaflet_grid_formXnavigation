import { CardSize } from '@components/atoms/Card/Card';
import Typography from '@components/atoms/Typography';

import { TherapyCardProps } from '@components/molecules/TherapyCard/TherapyCardInterface';

const SubTitle = ({
    subTitle,
    size,
}: Pick<TherapyCardProps, 'size'> & { subTitle: string | undefined }) => {
    if (!subTitle) return null;

    return (
        <Typography
            variant={size === CardSize.small ? 'caption' : 'paragraph'}
            color={size === CardSize.small ? 'var(--black-brand)' : 'var(--grey-dark)'}
            whiteSpace='nowrap'
        >
            {subTitle}
        </Typography>
    );
};

export default SubTitle;
