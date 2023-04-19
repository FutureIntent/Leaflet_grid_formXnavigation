import Typography from "@components/atoms/Typography";
import styled from "styled-components";
import Clock from '@theme/assets/clock.svg';
import colors from "@theme/configs/colors";
import { FilialCardInfoDetailsTime, FilialCardInfoDetailsTimeSVG } from "../../MapFilials/FilialCard";

const PopupContentDataTime = styled.div`
    align-items: center;
    display: flex;
    justify-content: flex-start;
    width: 100%;
`;

const PopupTime = ({workHours}: {workHours: string | null}) => {
    const opens: string | undefined = workHours?.split('-')[0].trim();
    const closes: string | undefined = workHours?.split('-')[1].trim();

return(
    <PopupContentDataTime>
        <FilialCardInfoDetailsTime>
            <FilialCardInfoDetailsTimeSVG
                style={{ width: '15%' }}
                src={`${Clock.src}`}
            />
            <Typography
                paddingLeft="2%"
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
    </PopupContentDataTime>
);
}

export default PopupTime;