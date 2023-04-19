import { mediaQueriesReversed } from "@theme/configs/mediaQueries";
import styled from "styled-components";

const PopupContentImage = styled.img`
border-top-left-radius: 4px;
height: 50%;
object-fit: cover;
width: 100%;

${`${mediaQueriesReversed.mobileL} and (orientation: portrait)`} {
    height: 100%;
    width: 40%;
}
`;

const PopupImage = ({imageURL}: {imageURL: string}) => (
    <PopupContentImage src={imageURL} />
)

export default PopupImage;