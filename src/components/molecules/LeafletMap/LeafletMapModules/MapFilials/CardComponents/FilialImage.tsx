import { mediaQueriesReversed } from "@theme/configs/mediaQueries";
import styled from "styled-components";

const FilialCardImage = styled.img`
border-radius: 4px 0 0 4px;
object-fit: cover;
width: 40%;
${`${mediaQueriesReversed.mobileL} and (orientation: portrait)`} {
    border-radius: 4px 4px 0 0;
    height: 50%;
    width: 100%;
}
`;

const FilialImage = ({imageURL}: {imageURL: string}) => (
    <FilialCardImage src={`${imageURL}`} />
)

export default FilialImage;