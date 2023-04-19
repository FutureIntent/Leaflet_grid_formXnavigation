import { fontsConfig } from "@components/atoms/Typography";
import colors, { active, regular } from "@theme/configs/colors";
import { mediaQueriesReversed } from "@theme/configs/mediaQueries";
import styled from "styled-components";
import Zoom from "@theme/assets/zoom.svg";
import { useRef, useState } from "react";
import { FacilityInputType } from "../facilityTypes";

const FacilitySearchContainer = styled.form`
align-items: center;
border: 1px solid ${colors.white};
border-radius: 4px;
display: flex;
height: 40px;
padding: 5px;
width: 100%;

${mediaQueriesReversed.tabletL}{
    height: 35px;
}
`;

const FacilityInput = styled.input`
background-color: transparent;
color: ${colors.blackBrand};
${{ ...fontsConfig.paragraph2 }};

&:-webkit-autofill{
    border: none !important;
}

&::placeholder {
    color: ${colors.greyDark};
    opacity: 1;
}
`;

const FacilityButton = styled.button`
align-items: center;
all: unset;
cursor: pointer;
display: flex;
height: 100%;
justify-content: center;

.buttonIcon{
content: url(${Zoom.src});
filter: ${regular};
height: 100%;
}

&:hover{
    .buttonIcon{
        filter: ${active};
    }
}

@media all and (hover: none){
    &:hover{
        .buttonIcon{
            filter: ${regular};
        }
    }

    &:active{
        .buttonIcon{
            filter: ${active};
        }
    }
}
`;

const SearchFacilityInput = ({handleAction, placeHolder = undefined, name}: FacilityInputType) => {

    const [input, setInput] = useState<string>("");
    const inputRef = useRef<any>(null);
    const formRef = useRef<HTMLFormElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleInput = (event: any) => {
        setInput(event.target.value);
    }

    const handleSubmit = (event: any) => {
        handleAction(input);
        const searchField = inputRef.current;
        if(searchField) searchField.blur();
        event.preventDefault();   
    }

    const handleFocus = () => {
        if(formRef.current) formRef.current.style.borderColor = colors.blueBrand;
    }

    const handleBlur = () => {
        if(formRef.current) formRef.current.style.borderColor = colors.white;
    }

    return(
        <FacilitySearchContainer onSubmit={handleSubmit} ref={formRef}>
            <FacilityInput ref={inputRef} type="text" value={input} onChange={handleInput} placeholder={placeHolder} name={name} title="Search" onFocus={handleFocus} onBlur={handleBlur} />
            <FacilityButton type="submit" ref={buttonRef}>
                <img alt="searchIcon" className="buttonIcon" />
            </FacilityButton>            
        </FacilitySearchContainer>
    );
}

export default SearchFacilityInput;