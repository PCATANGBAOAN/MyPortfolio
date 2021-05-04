import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React from 'react';
import data from '../ProjectData';


import {ReactComponent as WorkIcon} from '../assets/img/projects/work.svg';
import  {ReactComponent as SchoolIcon} from '../assets/img/projects/school.svg';


function Project() {
    let workIconStyles = { background: "#ee550e" };
    let schoolIconStyles = { background: "#ee550e" };

    return (
        <div id="Project">
            <VerticalTimeline>
                {data.map((element) => {
                    let isWorkIcon = element.icon === "work";
                    let showButton = element.buttonText !== undefined && element.buttonText !== null && element.buttonText !== "";
                    return (
                        <VerticalTimelineElement
                            key={element.key}
                            date={element.date}
                            dateClassName="date-class"
                            iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(164, 170, 175)' }}
                             icon= { isWorkIcon ? <WorkIcon/> : <SchoolIcon/> }
                        >
                            <h3 className="vertical-timeline-element-title">{element.title}</h3>
                            <h5 className="vertical-timeline-element-subtitle">{element.location}</h5>
                            <p id="description">{element.description}</p>
                            {showButton && (<a className={`viewdemo ${
                                isWorkIcon ? "workButton": "schooButton"}`} href="/">{element.buttonText}</a>)}
                        </VerticalTimelineElement>
                    );
                })}
            </VerticalTimeline>
        </div>
    )


}

export default Project

