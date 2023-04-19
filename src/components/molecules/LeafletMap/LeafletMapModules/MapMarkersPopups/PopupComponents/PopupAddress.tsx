import Typography from "@components/atoms/Typography";
import colors from "@theme/configs/colors";
import { mediaQueriesReversed } from "@theme/configs/mediaQueries";
import styled from "styled-components";

const PopupContentDataAdress = styled.div`
    align-items: flex-start;
    display: flex;
    height: 30%;
    justify-content: flex-start;
    overflow: auto;
    padding-right: 2%;
    width: 100%;

    &::-webkit-scrollbar {
        width: 0.5em;
    }
    &::-webkit-scrollbar-track {
        background: ${colors.greyDark};
    }
    &::-webkit-scrollbar-thumb {
        background: ${colors.blackBrand};
    }
    ${mediaQueriesReversed.mobileL} and (orientation: portrait){
        padding-right: 4%;
    }
`;

const PopupAddress = ({address}: {address: string | null}) => (
    <PopupContentDataAdress>
        <Typography color={colors.blackBrand} variant="paragraph" hideOverflow whiteSpace="nowrap">
            {address}
        </Typography>
    </PopupContentDataAdress>
)

export default PopupAddress;