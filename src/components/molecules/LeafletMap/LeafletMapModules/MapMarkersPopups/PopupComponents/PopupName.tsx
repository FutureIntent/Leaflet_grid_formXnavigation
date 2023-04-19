import Typography from "@components/atoms/Typography";
import colors from "@theme/configs/colors";
import styled from "styled-components";

const PopupContentDataHeader = styled.div`
align-items: center;
display: flex;
height: 30%;
justify-content: space-between;
white-space: nowrap;
width: 100%;
`;

const PopupName = ({name}: {name: string | null}) => (
    <PopupContentDataHeader>
        <Typography color={colors.blackBrand} hideOverflow variant="accent" whiteSpace="nowrap">
            {name}
        </Typography>
    </PopupContentDataHeader>
)

export default PopupName;