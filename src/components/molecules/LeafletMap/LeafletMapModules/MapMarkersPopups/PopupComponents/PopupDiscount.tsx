import Typography from "@components/atoms/Typography";
import colors from "@theme/configs/colors";
import styled from "styled-components";

const PopupContentDiscount = styled.div`
    align-items: center;
    background-color: ${colors.blueBrand};
    border-radius: 4px 0;
    display: flex;
    height: 25%;
    justify-content: center;
    left: 0;
    position: absolute;
    top: 0;
    width: 20%;
`;

const PopupDiscount = ({discount}: {discount: number | null}) => (
    <PopupContentDiscount>
        <Typography variant="accent" color={colors.white} hideOverflow whiteSpace="nowrap">
            -{discount}%
        </Typography>
    </PopupContentDiscount>
)

export default PopupDiscount;