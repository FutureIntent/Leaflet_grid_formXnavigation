import Typography from "@components/atoms/Typography";
import colors from "@theme/configs/colors";
import { mediaQueriesReversed } from "@theme/configs/mediaQueries";
import { nanoid } from "nanoid";
import styled from "styled-components";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FilialProps } from "../../LeafletMapTypes/FilialTypes";
import FilialCard from "./FilialCard";

const FilialWrapperJSX = styled.div`
        -webkit-backdrop-filter: blur(10px);
        align-items: center;
        backdrop-filter: blur(10px);
        background-color: rgba(0,0,0,0.4);
        border-radius: 4px 4px 0 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 95%;
        @supports not ((backdrop-filter: blur(10px)) or (-moz-backdrop-filter: blur(10px))) {
            & {
                background-color: rgba(16, 16, 28, 0.8);
            }
        }
       ${`${mediaQueriesReversed.tabletL} and (orientation: landscape)`}{
         background-color: ${colors.white};
         border-radius: 0;
         width: 100%;
      }
       ${`${mediaQueriesReversed.tabletL} and (orientation: portrait)`}{
            width: 100%;
       }
       ${`${mediaQueriesReversed.mobileL} and (orientation: portrait)`}{
         background-color: ${colors.white};
         border-radius: 0;
         width: 100%;
      }
`;
const FilialListContent = styled.div`
       align-items: center;
       display: flex;
       justify-content: center;
       padding: 1% 2%;
       width: 100%; 
       ${`${mediaQueriesReversed.tabletL} and (orientation: portrait)`}{
            align-items: flex-start; 
            padding: 2% 2%;
       }
      ${`${mediaQueriesReversed.mobileL} and (orientation: landscape)`}{
            padding: 2% 0% 2% 2%;
      }
      ${`${mediaQueriesReversed.mobileL} and (orientation: portrait)`}{
            align-items: center;
            padding: 2% 0% 2% 2%;
      }
       .swiper{
         display: flex;
         flex-direction: column-reverse;
         padding: 1px;
         width: 100%;
       }
       .swiper-slide{
        height: unset;
       }
       .swiper-button-prev{
         color: ${colors.greyDark};
         left: 95%;
         top: 10%;
         transform: scale(0.7);
          ${mediaQueriesReversed.desktopM}{
              left: 94.5%;
              top: 11%;
          }
           ${mediaQueriesReversed.desktop}{
               left: 94%;
               top: 12%;
           }
           ${mediaQueriesReversed.laptop}{
               left: 92%;
               top: 15%
           }
            ${`${mediaQueriesReversed.tabletL} and (orientation: landscape)`}{
              display: none;
            }
           ${`${mediaQueriesReversed.tabletL} and (orientation: portrait)`}{
            left: 88%;
            top: 13%;
         }
         ${`${mediaQueriesReversed.mobileL} and (orientation: portrait)`}{
            display: none;
         }
       }
       .swiper-button-next{
         color: ${colors.greyDark};
         right: 0;
         top: 10%;
         transform: scale(0.7);   
         ${mediaQueriesReversed.desktopM}{
            top: 11%;
         }
         ${mediaQueriesReversed.desktop}{
            top: 12%;
         }
         ${mediaQueriesReversed.laptop}{
            top: 15%;
         }
         ${`${mediaQueriesReversed.tabletL} and (orientation: landscape)`}{
            display: none;
        }
         ${`${mediaQueriesReversed.tabletL} and (orientation: portrait)`}{
            top: 13%;
         }
         ${`${mediaQueriesReversed.mobileL} and (orientation: portrait)`}{
            display: none;
         }
       }
`;
const FilialNavigation = styled.div`
        align-items: center;
        display: flex;
        justify-content: flex-start;
        padding-bottom: 1%;
        width: 100%;
        ${`${mediaQueriesReversed.tabletL} and (orientation: portrait)`}{
            padding-bottom: 2%;
       }
`;

const FilialWrapper = ({filialCollection, width, setView}: FilialProps) => (
    <FilialWrapperJSX>
        <FilialListContent>
            <Swiper
                spaceBetween={20}
                slidesPerView={5}
                modules={[Navigation]}
                navigation
                breakpoints={{
                   0: {
                       slidesPerView: 1.5
                   },
                   568: {
                       slidesPerView: 2
                   },
                   1140: {
                       slidesPerView: 3
                   },
                   1600: {
                       slidesPerView: 4
                   },
                   1920: {
                       slidesPerView: 5
                   }
                }}
            >
                <FilialNavigation>
                    <Typography transformText={(width <= 568 && width <= window.innerHeight) ? "uppercase" : "none"} variant="h2" color={(width <= 1024 && width >= window.innerHeight || width <= 568 && width <= window.innerHeight) ? colors.blackBrand : colors.white}>
                        Near location:
                    </Typography>
                </FilialNavigation>
                {filialCollection.map((item) => <SwiperSlide key={nanoid()}>
                    <FilialCard filial={item} setView={setView} width={ width } />
                </SwiperSlide>)}
            </Swiper>
        </FilialListContent>
    </FilialWrapperJSX>
    )

export default FilialWrapper;