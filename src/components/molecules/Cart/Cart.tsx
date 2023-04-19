import { ReactNode } from 'react';
import styled from 'styled-components';

import CartRow from '@components/molecules/Cart/CartRow';

import Box from '@components/atoms/Box';
import Card from '@components/atoms/Card';
import { CardElevation } from '@components/atoms/Card/Card';
import Dropdown from '@components/atoms/Form/Dropdown';
import Typography from '@components/atoms/Typography';

const StyledText = styled(Typography)`
    white-space: nowrap;
`;

const options = [
    { value: 'a', label: 'Plan A' },
    { value: 'b', label: 'Plan B' },
    { value: 'c', label: 'Plan C' },
];

const Cart = ({ children }: { children: ReactNode }) => (
    <Card p={{ _: '15px', laptopS: '20px 30px' }} elevation={CardElevation.medium}>
        <Box display="flex" flexDirection="column" height="100%">
            {children}
        </Box>
    </Card>
);

Cart.Header = ({ title }: { title: string }) => (
    <Typography variant="h3" color="var(--black-brand)">
        {title}
    </Typography>
);

interface CartRowProps {
    productName: string;
    editable: boolean;
    handleTariffSelect?: () => void;
    tariff: string;
    price: number;
}

Cart.Item = ({ productName, editable, handleTariffSelect, tariff, price }: CartRowProps) => (
    <CartRow>
        <Box flex={6}>
            <Typography variant="paragraph2" color="var(--black-brand)">
                {productName}
            </Typography>
        </Box>
        <Box flex={1}>
            {editable ? (
                <Dropdown
                    selectedPadding="0"
                    size="small"
                    hasBorder={false}
                    onChange={handleTariffSelect}
                    color="var(--blue-brand)"
                    selected={options.find((option) => option.label === tariff) || null}
                    options={options}
                    defaultValue={options[0]}
                    placeholder="Select plan"
                />
            ) : (
                <StyledText variant="paragraph2" color="var(--grey-dark)">
                    {tariff}
                </StyledText>
            )}
        </Box>
        <Typography variant="accent" color="var(--black-brand)" px={15}>
            {price} $
        </Typography>
    </CartRow>
);

Cart.Footer = ({ children }: { children: ReactNode }) => (
    <Box flex={1} mb={30}>
        {children}
    </Box>
);

export default Cart;
