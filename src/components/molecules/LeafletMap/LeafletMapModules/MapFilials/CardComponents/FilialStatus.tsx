import Typography from "@components/atoms/Typography";
import colors from "@theme/configs/colors";
import styled from "styled-components";

const FilialCardInfoStatus = styled.div`
    align-items: center;
    display: flex;
    height: 10%;
    justify-content: flex-end;
    width: 100%;
`;
const FilialCardInfoStatusWrapper = styled.div`
    align-items: center;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    display: flex;
    justify-content: center;
    width: 30%;
`;

const filialStatusOpen = <FilialCardInfoStatusWrapper>
    <Typography variant="caption" color={colors.success} fontSize={14} lineHeight="1.5em">
        Open
    </Typography>
</FilialCardInfoStatusWrapper>

const filialStatusClosed = <FilialCardInfoStatusWrapper>
    <Typography
        variant="caption"
        color={colors.redWarning}
        fontSize={14}
        lineHeight="1.5em"
>
        Closed
    </Typography>
</FilialCardInfoStatusWrapper>

const FilialStatus = ({status}:{status: boolean}) => (
    <FilialCardInfoStatus>
        {status ? filialStatusOpen : filialStatusClosed}
    </FilialCardInfoStatus>
)

export default FilialStatus;