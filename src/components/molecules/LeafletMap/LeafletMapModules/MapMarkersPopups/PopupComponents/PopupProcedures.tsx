import Typography from "@components/atoms/Typography";
import colors from "@theme/configs/colors";
import { nanoid } from "nanoid";
import styled from "styled-components";

const PopupContentDataProcedures = styled.div`
    align-items: center;
    display: flex;
    height: 30%;
    justify-content: flex-start;
    width: 100%;
`;
const ProcedureWrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    
    &:nth-child(n + 2){
        margin-left: 5%;
    }
`;

const PopupProcedures = ({width, procedures}: {width: number, procedures: string[]}) => (
    <PopupContentDataProcedures>
        {procedures.map((item: string) => (
            <ProcedureWrapper key={nanoid()}>
                <Typography                               
                    variant="caption"
                    hideOverflow
                    color={colors.blueBrand}
                    fontSize={width <= 768 && width >= window.innerHeight ? 12 : 14}
                    whiteSpace='nowrap'
                >
                    {item}
                </Typography>
            </ProcedureWrapper>
                        ))}
    </PopupContentDataProcedures>
)

export default PopupProcedures;