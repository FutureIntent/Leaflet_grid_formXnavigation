import Typography from "@components/atoms/Typography";
import colors from "@theme/configs/colors";
import { mediaQueriesReversed } from "@theme/configs/mediaQueries";
import styled from "styled-components";

const FilialCardDiscount = styled.div`
align-items: center;
background: #007fff;
border-radius: 4px 0;
display: flex;
height: 25%;
justify-content: center;
left: 0;
position: absolute;
top: 0;
width: 20%;
${`${mediaQueriesReversed.mobileL} and (orientation: portrait)`} {
    border-radius: 4px 0;
    height: 12%;
    width: 30%;
}
`;

const FilialDiscount = ({discount}: {discount: number | null}) => (
    <FilialCardDiscount>
        <Typography variant="accent" color={colors.white}>
            {`-${discount}%`}
        </Typography>
    </FilialCardDiscount>
)

export default FilialDiscount;