import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './TimeLine.css';
import Icon from './Icon.js';


const TimeLine = () => {
    return (
        <div id="TimeLine">  
            <VerticalTimeline>
                <VerticalTimelineElement
                    id = "Six"
                    className="vertical-timeline-element--mag1"
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2021 October"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<Icon.BookIcon />}
                >
                    <div className="wrapper">
                        <div className="wave"></div>
                    </div>                    
                    <div className="row">
                        <h3 className="vertical-timeline-element-title col-md-4">Edition 6</h3>
                        <div className="d-none d-md-block col-md-8">
                            <div className="background-img"></div>
                        </div>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    id = "Five"
                    className="vertical-timeline-element--mag2"
                    date="2021 May"
                    contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<Icon.BookIcon />}
                >
                    <div className="wrapper">
                        <div className="wave"></div>
                    </div>
                    <div className="row">
                        <h3 className="vertical-timeline-element-title col-md-4">Edition 5</h3>
                        <div className="d-none d-md-block col-md-8">
                            <div className="background-img"></div>
                        </div>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    id = "Four"
                    className="vertical-timeline-element--mag1"
                    date="2020 October"
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<Icon.BookIcon />}
                >
                    <div className="wrapper">
                        <div className="wave"></div>
                    </div>
                    <div className="row">
                        <h3 className="vertical-timeline-element-title col-md-4">Edition 4</h3>
                        <div className="d-none d-md-block col-md-8">
                            <div className="background-img"></div>
                        </div>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    id = "Three"
                    className="vertical-timeline-element--mag2"
                    date="2019 October"
                    contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<Icon.BookIcon />}
                >
                    <div className="wrapper">
                        <div className="wave"></div>
                    </div>
                    <div className="row">
                        <h3 className="vertical-timeline-element-title col-md-4">Edition 3</h3>
                        <div className="d-none d-md-block col-md-8">
                            <div className="background-img"></div>
                        </div>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    id = "Two"
                    className="vertical-timeline-element--mag1"
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2018 October"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<Icon.BookIcon />}
                >
                    <div className="wrapper">
                        <div className="wave"></div>
                    </div>
                    <div className="row">
                        <h3 className="vertical-timeline-element-title col-md-4">Edition 2</h3>
                        <div className="d-none d-md-block col-md-8">
                            <div className="background-img"></div>
                        </div>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    id = "One"
                    className="vertical-timeline-element--mag2"
                    date="2017 september"
                    contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<Icon.BookIcon />}
                >
                    <div className="wrapper">
                        <div className="wave"></div>
                    </div>
                    <div className="row">
                        <h3 className="vertical-timeline-element-title col-md-4">Edition 1</h3>
                        <div className="d-none d-md-block col-md-8">
                            <div className="background-img"></div>
                        </div>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    icon={<Icon.StarIcon />}
                />
            </VerticalTimeline>
        </div>
        );
}

export default TimeLine;