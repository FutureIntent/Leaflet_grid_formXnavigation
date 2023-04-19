import { useEffect, useRef } from "react";
import { SetViewAndPosition } from "../../LeafletMapTypes/LeafletTypes";


const MyGeoLocation = ({setView, setPosition}: SetViewAndPosition) => {
    const inputField: any = useRef(null);

    function showMyLocation(): void {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat: number = position.coords.latitude;
            const lon: number = position.coords.longitude;
            const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`;
            setPosition([lat, lon]);
            setView([lat, lon]);
            fetch(url, {
                method: "GET"
            })
                .then(res => res.json())
                .then(res => {                   
                    inputField.current.value = res.display_name;                 
                })               
                .then(() => {
                    inputField.current.setSelectionRange(0, 0);
                    inputField.current.focus();
                })
                .catch(err => console.log(err))
        });
    }

    useEffect(() => {
        document.querySelector(".reset")?.addEventListener("click", showMyLocation);
        inputField.current = document.querySelector(".glass ");

        return ()=>{
            document.querySelector(".reset")?.removeEventListener("click", showMyLocation);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (null);
}

export default MyGeoLocation;