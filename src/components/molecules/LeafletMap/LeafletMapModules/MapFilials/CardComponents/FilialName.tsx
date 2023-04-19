import Typography from "@components/atoms/Typography";
import colors from "@theme/configs/colors";
import styled from "styled-components";

const FilialCardInfoName = styled.div`
    align-items: center;
    display: flex;
    height: 30%;
    justify-content: flex-start;
    white-space: nowrap;
    width: 100%;
`;

const FilialName = ({width, name}: {width: number, name: string | null}) => (
    <FilialCardInfoName>
        <Typography
            variant="accent"
            color={
            (width <= 1024 && width >= window.innerHeight) ||
            (width <= 568 && width <= window.innerHeight)
                ? colors.blackBrand
                : colors.white
            }
            hideOverflow
            whiteSpace="nowrap"
    >
            {name}
        </Typography>
    </FilialCardInfoName>
)

export default FilialName;