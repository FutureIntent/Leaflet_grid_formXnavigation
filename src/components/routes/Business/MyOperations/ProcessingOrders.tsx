import Products from '@components/routes/Business/MyOperations/Products';
import { useTranslation } from 'next-i18next';
import styled from 'styled-components';

import Box from '@components/atoms/Box';
import Button from '@components/atoms/Button/Button';
import LabeledField from '@components/atoms/LabeledField';
import Link from '@components/atoms/Link';
import Typography from '@components/atoms/Typography';

import CogWheel from '@components/molecules/Icons/CogWheel';
import PaperPlane from '@components/molecules/Icons/PaperPlane';

import GridChild from '@components/templates/GridChild';
import GridParent from '@components/templates/GridParent';

export enum OrderStatus {
    default = 'default',
    notSigned = 'non-signed',
    signedConfirmed = 'signed-confirmed',
    notSignedConfirmed = 'non-signed-confirmed',
}

const FieldSet = styled.div`
    border: 1px solid var(--grey);
    border-radius: ${({ theme }) => theme.space['2xs']};
    height: 100%;
    padding: 25px 40px;

    & > div:not(:last-of-type) {
        margin-bottom: 20px;
    }
`;

const OrderStatusField = ({ status }: { status: OrderStatus }) => {
    let color = 'var(--blue-brand)';
    let msg = 'Order review (may take several hours)';

    switch (status) {
        case OrderStatus.notSigned:
            msg = 'Waiting for document to reach us';
            break;
        case OrderStatus.signedConfirmed:
            color = 'var(--success)';
            msg = 'Order reviewed. Devices sent to your address';
            break;
        case OrderStatus.notSignedConfirmed:
            color = 'var(--success)';
            msg = 'Documents received! Devices sent to your adress';
            break;
        default:
            break;
    }

    return (
        <Typography variant="paragraph2" color={color}>
            {msg}
        </Typography>
    );
};

const ProcessingOrders = () => {
    const { t } = useTranslation();

    return (
        <Box as="section" id="processing">
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={30}>
                <Typography variant="h2" color="var(--black-brand)" transformText="uppercase">
                    {t('Processing orders')}
                </Typography>

                <Box display="flex">
                    <Link href="/#">
                        <Typography variant="accent" color="var(--blue-brand)" mr={10}>
                            {t('Edit Partner Data')}
                        </Typography>
                        <CogWheel size="medium2" color="var(--blue-brand)" />
                    </Link>
                    <Button variant="secondary" ml={30}>
                        <Typography variant="accent" color="var(--blue-brand)" mr={10}>
                            {t('Contact agent')}
                        </Typography>
                        <PaperPlane size="medium2" color="var(--blue-brand)" />
                    </Button>
                </Box>
            </Box>

            <GridParent gridTemplateColumns="repeat(8, 1fr)" noGutter gridGap={30}>
                <GridChild gridColumn="span 5">
                    <FieldSet>
                        <LabeledField
                            label={t('Your delivery address')}
                            value="458 Oxford St, London"
                        />
                        <LabeledField
                            label={t('Credit card payment')}
                            value="•••• •••• •••• 0197"
                        />
                        <LabeledField
                            label={t('Status')}
                            value={<OrderStatusField status={OrderStatus.notSignedConfirmed} />}
                        />
                        <LabeledField label={t('Approximate delivery date')} value="26.11.2021" />
                    </FieldSet>
                </GridChild>
                <GridChild gridColumn="6 / span 3">
                    <Products />
                </GridChild>
            </GridParent>
        </Box>
    );
};

export default ProcessingOrders;
