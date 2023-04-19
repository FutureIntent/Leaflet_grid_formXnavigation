import Typography from "@components/atoms/Typography";
import colors from "@theme/configs/colors";
import styled from "styled-components";
import Clock from "@theme/assets/clock.svg";
import { FilialCardInfoDetailsTime, FilialCardInfoDetailsTimeSVG } from "../FilialCard";

const FilialCardInfoDetails = styled.div`
    align-items: center;
    display: flex;
    height: 30%;
    justify-content: space-between;
    width: 100%;
`;
const FilialCardInfoDetailsDistance = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 30%;
`;

const FilialDetails = ({workHours, distance}: {workHours: string | null, distance: number}) => {
    const opens: string | undefined = workHours?.split('-')[0].trim();
    const closes: string | undefined = workHours?.split('-')[1].trim();

return(
    <FilialCardInfoDetails>
        <FilialCardInfoDetailsTime>
            <FilialCardInfoDetailsTimeSVG src={`${Clock.src}`} />
            <Typography
                marginLeft="2%"
                variant="caption"
                color={colors.greyDark}
                hideOverflow
                fontSize={14}
                lineHeight="1.5em"
                whiteSpace="nowrap"      
                >
                {`${opens} - ${closes}`}
            </Typography>
        </FilialCardInfoDetailsTime>
        <FilialCardInfoDetailsDistance>
            <Typography
                variant="caption"
                color={colors.greyDark}
                hideOverflow
                fontSize={14}
                lineHeight="1.5em"
                whiteSpace="nowrap"
                >
                {distance}km
            </Typography>
        </FilialCardInfoDetailsDistance>
    </FilialCardInfoDetails>
);
}

export default FilialDetails;