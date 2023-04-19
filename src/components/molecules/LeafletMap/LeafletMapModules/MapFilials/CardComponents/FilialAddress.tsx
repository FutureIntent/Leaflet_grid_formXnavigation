import Typography from "@components/atoms/Typography";
import colors from "@theme/configs/colors";
import styled from "styled-components";

const FilialCardInfoAddress = styled.div`
align-items: center;
display: flex;
height: 30%;
justify-content: flex-start;
white-space: nowrap;
width: 100%;
`;

const FilialAddress = ({address, width}:{address: string | null, width: number}) => (
    <FilialCardInfoAddress>
        <Typography
            variant="caption"
            color={
                    (width <= 1024 && width >= window.innerHeight) ||
                    (width <= 568 && width <= window.innerHeight)
                        ? colors.blackBrand
                        : colors.greyDark
                        }
            hideOverflow
            fontSize={14}
            lineHeight="1.5em"
            whiteSpace="nowrap"
            >
            {address}
        </Typography>
    </FilialCardInfoAddress>
)

export default FilialAddress;