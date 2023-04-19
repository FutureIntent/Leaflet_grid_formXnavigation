import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';
import FilialWrapper from './FilialWrapper';
import { FilialProps } from '../../LeafletMapTypes/FilialTypes';
import CustomSwipeableDrawer from '../CustomSwipeableDrawer/CustomSwipeableDrawer';

const FilialContainer = styled.div`
    align-items:center;
    bottom: 0;
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
    z-index: 1;
`;

const FilialList = ({filialCollection, setView, width}: FilialProps) => (
    <FilialContainer>
        {
            (width <= 1024 && window.innerWidth >= window.innerHeight || width <= 568 && width <= window.innerHeight) ?          
                <CustomSwipeableDrawer pullerHeight={30}>                                
                    <FilialWrapper filialCollection={filialCollection} width={width} setView={setView}/>
                </CustomSwipeableDrawer>
                : 
                <FilialWrapper filialCollection={filialCollection} width={width} setView={setView}/>
        }
    </FilialContainer>
    );

export default FilialList;