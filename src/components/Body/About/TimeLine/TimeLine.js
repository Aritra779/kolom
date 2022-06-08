import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './TimeLine.css';
import Icon from './Icon.js';
import { Link } from 'react-router-dom';


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
                        <h3 className="vertical-timeline-element-title col-md-4" style={{zIndex : 5}}>
                            <Link to ={'/archive#edtn6'} style = {{textDecoration : "none"}}>
                            Edition 6</Link>
                            </h3>
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
                        <h3 className="vertical-timeline-element-title col-md-4" style={{zIndex : 5}}>
                            <Link to ={"/archive/edtn5"} style = {{textDecoration : "none"}}>
                            Edition 5</Link>
                            </h3>
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
                        <h3 className="vertical-timeline-element-title col-md-4" style={{zIndex : 5}}>
                            <Link to={"/archive/edtn4"} style = {{textDecoration : "none"}}>Edition 4</Link>
                        </h3>
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
                    <h3 className="vertical-timeline-element-title col-md-4" style={{zIndex : 5}}>
                            <Link to={"/archive/edtn3"} style = {{textDecoration : "none"}}>Edition 3</Link>
                        </h3>
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
                    <h3 className="vertical-timeline-element-title col-md-4" style={{zIndex : 5}}>
                            <Link to={"/archive/edtn2"} style = {{textDecoration : "none"}}>Edition 2</Link>
                        </h3>
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
                    <h3 className="vertical-timeline-element-title col-md-4" style={{zIndex : 5}}>
                            <Link to={"/archive/edtn1"} style = {{textDecoration : "none"}}>Edition 1</Link>
                        </h3>
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