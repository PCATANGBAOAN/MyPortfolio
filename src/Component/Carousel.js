import React from 'react';
import CoverFlow from 'react-coverflow';
import Lees from "../assets/img/projects/leesystems.PNG";
import CBC from "../assets/img/projects/Chinabank.PNG";
import ATO from "../assets/img/projects/ATO.PNG";
import CBS from "../assets/img/projects/CBS.PNG";
import INSPIRETEC from "../assets/img/projects/INSPIRETEC.PNG";


function Carousel() {

    return (
        <div id="myprojects">
            <CoverFlow
                width={960}
                height={490}
                displayQuantityOfSide={2}
                navigation={true}
                clickable={false}
                enableScroll={true}
            >
                <img src={Lees}
                    alt=''
                    style={{ display: 'block', width: '100%' }}
                    Data-action="/" />
                <img src={CBC}
                    alt=''
                    data-action="/" />
                <img src={ATO}
                    alt=''
                    data-action="/" />
                <img src={CBS}
                    alt=''
                    data-action="/" />
                <img src={INSPIRETEC}
                    alt=''
                    data-action="/" />
            </CoverFlow>
        </div>
    )
}

export default Carousel
