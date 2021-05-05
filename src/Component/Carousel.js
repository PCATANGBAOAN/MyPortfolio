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
                    // alt='Lee System Venture'
                    style={{ display: 'block', width: '100%' }}
                    Data-action="/" />
                <img src={CBC}
                    // alt='China Bank Online'
                    data-action="/" />
                <img src={ATO}
                    // alt='Australian Government Taxation - Single Touch Payroll'
                    data-action="/" />
                <img src={CBS}
                    // alt='China Bank Savings Online'
                    data-action="/" />
                <img src={INSPIRETEC}
                    // alt='Inspiretec'
                    data-action="/" />
            </CoverFlow>
        </div>
    )
}

export default Carousel
