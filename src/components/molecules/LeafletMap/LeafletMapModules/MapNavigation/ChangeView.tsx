import { useMap } from "react-leaflet";
import { ChangeViewProps } from "../../LeafletMapTypes/LeafletTypes";

const ChangeView = ({
   view,
   zoom
}: ChangeViewProps) =>{
    const map = useMap();
    map.setView(view, zoom);
    return null;
}

export default ChangeView;