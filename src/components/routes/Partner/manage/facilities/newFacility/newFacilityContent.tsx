import NavigationToggler from "@components/molecules/ViewToggler/navigationToggler/navigationToggler";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { mediaQueriesReversed } from "@theme/configs/mediaQueries";
import { motion } from "framer-motion";
import RevealAnimation from "@components/routes/Partner/animations/reveal";
import BackButton from "./components/backButton";
import Devices from "./devices/devices";
import Gallery from "./gallery/gallery";
import Location from "./location/location";
import Data from "./data/data";
import { FacilityViewDataType, FacilityViewType, HeaderType } from "./newFacilityTypes";
import Schedule from "./schedule/schedule";
import FacilityHeader from "./components/facilityHeader";
import NewFacilityProvider from "./context/newFacilityContext";
import { TogglerDataType } from "@components/molecules/ViewToggler/TogglerTypes/TogglerTypes";

const NewFacilityContainer = styled.div`
align-items: center;
display: flex;
height: calc(100vh - var(--header-height));
justify-content: center;
width: 100%;

${mediaQueriesReversed.tabletL}{
    flex-direction: column;
}
`;

const FacilityHeaderContainer = styled.div`
background-image: url('/images/partner/train.jpg');
background-position: center;
background-repeat: no-repeat;
background-size: cover;
border: none;
height: 100%;
position: relative;
width: 50%;

${mediaQueriesReversed.tabletL}{
    height: 30%;
    width: 100%;
}

${mediaQueriesReversed.mobileL}{
    height: 20%;
}
`;

const HeaderContainerFilter = styled.div`
align-items: center;
background: linear-gradient(180deg, rgba(11, 20, 69, 0.8) 0%, rgba(11, 20, 69, 0.35) 100%);
border: none;
display: flex;
flex-direction: column;
height: 100%;
left: 0;
overflow-y: auto;
position: absolute;
top: 0;
width: 100%;

${mediaQueriesReversed.tabletL}{
    align-items: flex-start;
    flex-direction: row;
    justify-content: space-evenly;
}
`;

const FacilityData = styled.div`
align-items: center;
border: none;
display: flex;
flex-direction: column;
height: 100%;
width: 50%;

${mediaQueriesReversed.tabletL}{
    height: 70%;
    width: 100%;
}

${mediaQueriesReversed.mobileL}{
    height: 80%;
}
`;

const DataContainer = styled.div`
align-items: center;
display: flex;
flex-direction: column;
height: calc(100% - 5rem);
overflow-y: auto;
padding: 5% 0;
width: 100%;

${mediaQueriesReversed.tabletL}{
    padding: 2% 0;
}
`;

const TogglerContainer = styled.div`
align-items: center;
display: flex;
height: 5rem;
justify-content: center;
width: 100%;
`;

const initialView: TogglerDataType = {
    data: true,
    location: false,
    schedule: false,
    gallery: false,
    devices: false
}

const facilityViewData: HeaderType = {
    data: {
        header: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis et mauris a auctor. Donec eget velit feugiat felis fermentum iaculis in non lorem. Fusce et eros ut arcu dapibus tincidunt. Vivamus purus erat, cursus sit amet orci vel, iaculis congue turpis. Nulla tempus ac dolor vel fringilla. Ut eget sagittis mi, vel cursus justo. Vivamus suscipit pulvinar nisl. Morbi sodales elit vitae magna consequat interdum. Nulla elit nunc, vulputate vitae sapien laoreet, rutrum iaculis lectus. Nullam congue tellus ac sagittis bibendum. Proin sed dapibus elit, sodales ultrices metus. Quisque vitae lacus viverra, fringilla enim nec, euismod est. Donec leo odio, pulvinar non sodales quis, tincidunt id libero. Fusce bibendum porta nisi quis elementum. Nullam tincidunt lectus at turpis hendrerit, eget sollicitudin dui mollis. Integer suscipit et nulla et gravida. Pellentesque at commodo ligula. Mauris vel nisi a mi finibus eleifend non quis dolor. Vivamus nec augue malesuada, molestie nulla eu, rhoncus diam. Morbi ut lorem sit amet risus mattis sagittis nec nec dolor. Curabitur vehicula ultricies velit nec vestibulum. Nulla dapibus sodales quam, et fringilla erat sagittis et. Mauris nisl turpis, auctor nec sem vel, consectetur lobortis erat. Ut semper eros non imperdiet suscipit. Etiam ac elit volutpat, imperdiet ex a, ultricies nisi. Praesent sed eros libero. Quisque accumsan massa quis magna posuere efficitur. Morbi sed orci id neque venenatis porttitor sit amet vitae magna. Nam viverra ligula id risus tincidunt sollicitudin. In mollis nibh sed tellus iaculis vulputate. Fusce ligula purus, ullamcorper eget maximus non, consectetur id diam. Donec ac dui aliquet sapien dapibus condimentum. Aliquam efficitur lobortis fermentum. Aenean ac risus ac metus cursus dignissim. Curabitur vel justo turpis. Donec laoreet mi vitae placerat vestibulum. Curabitur cursus ante aliquam, rhoncus nibh id, pulvinar mauris. Vivamus id risus tellus. Vivamus malesuada sapien sit amet sodales cursus. Nunc nec interdum leo, quis aliquet tellus. Aliquam erat volutpat. Proin porttitor diam at ipsum mattis, quis vehicula urna maximus. Etiam id congue urna. Sed venenatis bibendum magna et gravida. Etiam maximus finibus sem, ut tincidunt neque consequat non. Quisque quis turpis magna. Duis accumsan non tellus blandit elementum. Donec a ipsum non sem consectetur viverra vitae non nisi. Duis congue volutpat quam, at tincidunt dui maximus quis. Sed eu volutpat lectus. Morbi commodo lacus quis erat luctus, sed ornare massa faucibus. Aliquam rhoncus eros libero, non blandit leo posuere nec. Nunc sed lacus leo. Vivamus vulputate orci a enim molestie, nec faucibus eros pretium. Fusce lacinia metus nibh, sed maximus ipsum venenatis eu. Nullam sed ante vitae magna aliquam laoreet.",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis et mauris a auctor. Donec eget velit feugiat felis fermentum iaculis in non lorem. Fusce et eros ut arcu dapibus tincidunt. Vivamus purus erat, cursus sit amet orci vel, iaculis congue turpis. Nulla tempus ac dolor vel fringilla. Ut eget sagittis mi, vel cursus justo. Vivamus suscipit pulvinar nisl. Morbi sodales elit vitae magna consequat interdum. Nulla elit nunc, vulputate vitae sapien laoreet, rutrum iaculis lectus. Nullam congue tellus ac sagittis bibendum. Proin sed dapibus elit, sodales ultrices metus. Quisque vitae lacus viverra, fringilla enim nec, euismod est. Donec leo odio, pulvinar non sodales quis, tincidunt id libero. Fusce bibendum porta nisi quis elementum. Nullam tincidunt lectus at turpis hendrerit, eget sollicitudin dui mollis. Integer suscipit et nulla et gravida. Pellentesque at commodo ligula. Mauris vel nisi a mi finibus eleifend non quis dolor. Vivamus nec augue malesuada, molestie nulla eu, rhoncus diam. Morbi ut lorem sit amet risus mattis sagittis nec nec dolor. Curabitur vehicula ultricies velit nec vestibulum. Nulla dapibus sodales quam, et fringilla erat sagittis et. Mauris nisl turpis, auctor nec sem vel, consectetur lobortis erat. Ut semper eros non imperdiet suscipit. Etiam ac elit volutpat, imperdiet ex a, ultricies nisi. Praesent sed eros libero. Quisque accumsan massa quis magna posuere efficitur. Morbi sed orci id neque venenatis porttitor sit amet vitae magna. Nam viverra ligula id risus tincidunt sollicitudin. In mollis nibh sed tellus iaculis vulputate. Fusce ligula purus, ullamcorper eget maximus non, consectetur id diam. Donec ac dui aliquet sapien dapibus condimentum. Aliquam efficitur lobortis fermentum. Aenean ac risus ac metus cursus dignissim. Curabitur vel justo turpis. Donec laoreet mi vitae placerat vestibulum. Curabitur cursus ante aliquam, rhoncus nibh id, pulvinar mauris. Vivamus id risus tellus. Vivamus malesuada sapien sit amet sodales cursus. Nunc nec interdum leo, quis aliquet tellus. Aliquam erat volutpat. Proin porttitor diam at ipsum mattis, quis vehicula urna maximus. Etiam id congue urna. Sed venenatis bibendum magna et gravida. Etiam maximus finibus sem, ut tincidunt neque consequat non. Quisque quis turpis magna. Duis accumsan non tellus blandit elementum. Donec a ipsum non sem consectetur viverra vitae non nisi. Duis congue volutpat quam, at tincidunt dui maximus quis. Sed eu volutpat lectus. Morbi commodo lacus quis erat luctus, sed ornare massa faucibus. Aliquam rhoncus eros libero, non blandit leo posuere nec. Nunc sed lacus leo. Vivamus vulputate orci a enim molestie, nec faucibus eros pretium. Fusce lacinia metus nibh, sed maximus ipsum venenatis eu. Nullam sed ante vitae magna aliquam laoreet."
    },
    location: {
        header: "Select address",
        text: "Either enter it inside the search field or adjust position"
    },
    schedule: {
        header: "Adjust working schedule",
        text: "Adjust working days by setting different cases. Also add manual exclusions. Days of the week that have no dedicared work-time are considered as not-working days."
    },
    gallery: {
        header: "Select photos",
        text: "Upload facility gallery and select one Main image that will appear in the search and will be placed as default on all cards."
    },
    devices: {
        header: "Assign your devices",
        text: "You've already ordered devices that are waiting to be assigned. Choose from the list to assign to this particular facility."
    }
}

const NewFacilityContent = () => {
    const [facilityView, setFacilityView] = useState<TogglerDataType>({...initialView});
    const FacilityContainerRef = useRef<any>(null);

    useEffect(() => {
        const unknownBox = document.getElementById("headersUnknownBox");
        const footer = document.getElementById("footer");

        if(footer) footer.style.display = "none"
        if(unknownBox) unknownBox.style.display = "none";

        return () => {
            if(footer) footer.style.display = "flex";
            if(unknownBox) unknownBox.style.display = "block";
        }

    }, []);
    
    return(
        <NewFacilityProvider>
            <RevealAnimation>
                <NewFacilityContainer ref={FacilityContainerRef} as={motion.div} initial={{opacity: 0, x: -100}} animate={{opacity: 1, x: 0}}>
                    <FacilityHeaderContainer>
                        <HeaderContainerFilter>
                            <BackButton link="/partner/manage/facilities" />
                            <FacilityHeader view={facilityView} viewData={facilityViewData}/>
                        </HeaderContainerFilter>
                    </FacilityHeaderContainer>
                    <FacilityData>
                        <DataContainer>
                            {facilityView.data && <Data />}
                            {facilityView.location && <Location />}
                            {facilityView.schedule && <Schedule />}
                            {facilityView.gallery && <Gallery />}
                            {facilityView.devices && <Devices />}
                        </DataContainer>
                        <TogglerContainer>
                            <NavigationToggler view={facilityView} setView={setFacilityView}/>
                        </TogglerContainer>
                    </FacilityData>
                </NewFacilityContainer>
            </RevealAnimation>
        </NewFacilityProvider>
    );
}

export default NewFacilityContent;