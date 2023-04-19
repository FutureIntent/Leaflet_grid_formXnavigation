import styled from 'styled-components';

import colors from '@theme/configs/colors';

import Typography from '@components/atoms/Typography';

const PopupContentDataStatus = styled.div`
    align-items: center;
    display: flex;
    height: 10%;
    justify-content: flex-end;
    width: 100%;
`;
const PopupContentDataStatusWrapper = styled.div<{ closed?: boolean }>`
    align-items: center;
    background-color: ${(props: any) =>
        props.closed ? 'rgba(255, 0, 59, 0.2)' : 'rgba(21, 193, 167, 0.2)'};
    border-radius: 4px;
    display: flex;
    justify-content: center;
    width: 30%;
`;

const PopupStatus = ({ status, width }: { status: boolean; width: number }) => {
    const filialStatusOpen = (
        <PopupContentDataStatusWrapper>
            <Typography
                color={colors.success}
                variant="caption"
                hideOverflow
                fontSize={
                    (width <= 568 && width <= window.innerHeight) ||
                    (width <= 768 && width >= window.innerHeight)
                        ? 12
                        : 14
                }
                lineHeight="1.5em"
                whiteSpace='nowrap'
            >
                Open
            </Typography>
        </PopupContentDataStatusWrapper>
    );

    const filialStatusClosed = (
        <PopupContentDataStatusWrapper closed>
            <Typography
                color={colors.redWarning}
                variant="caption"
                hideOverflow
                fontSize={
                    (width <= 568 && width <= window.innerHeight) ||
                    (width <= 768 && width >= window.innerHeight)
                        ? 12
                        : 14
                }
                lineHeight="1.5em"
            >
                Closed
            </Typography>
        </PopupContentDataStatusWrapper>
    );

    return (
        <PopupContentDataStatus>
            {status ? filialStatusOpen : filialStatusClosed}
        </PopupContentDataStatus>
    );
};

export default PopupStatus;
