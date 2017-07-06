import React from "react";

import EventCalendar from 'react-event-calendar'
import 'style-loader!react-event-calendar/style.css';

// import BigCalendar from 'react-big-calendar';
// import 'style-loader!react-big-calendar/lib/css/react-big-calendar.css';
// import moment from 'moment';
// BigCalendar.momentLocalizer(moment); // or globalizeLocalizer




//import React from 'react';
import ReactDOM from 'react-dom';
//import EventCalendar from '../src/index.js';
import moment from 'moment';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Popover from 'react-bootstrap/lib/PopOver';
import Overlay from 'react-bootstrap/lib/Overlay';
import Modal from 'react-bootstrap/lib/Modal';
//import TestData from './TestData.js';

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', ];

class Calendar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            moment: moment(),
            showPopover: false,
            showModal: false,
            overlayTitle: null,
            overlayContent: null,
            popoverTarget: null,
            getEvents:[
                {
                    start: '2017-07-20',
                    end: '2017-07-20',
                    eventClasses: 'optionalEvent',
                    title: '8hr',
                    description: 'This is a test description of an event',
                }

            ]
        };

        this.handleNextMonth = this.handleNextMonth.bind(this);
        this.handlePreviousMonth = this.handlePreviousMonth.bind(this);
        this.handleToday = this.handleToday.bind(this);
        this.handleEventClick = this.handleEventClick.bind(this);
        this.handleEventMouseOver = this.handleEventMouseOver.bind(this);
        this.handleEventMouseOut = this.handleEventMouseOut.bind(this);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
    }

    handleNextMonth() {
        this.setState({
            moment: this.state.moment.add(1, 'M'),
        });
    }

    handlePreviousMonth() {
        this.setState({
            moment: this.state.moment.subtract(1, 'M'),
        });
    }

    handleToday() {
        this.setState({
            moment: moment(),
        });
    }

    handleEventMouseOver(target, eventData, day) {

        console.log(target);
        console.log(eventData)

        this.setState({
            showPopover: true,
            popoverTarget: () => ReactDOM.findDOMNode(target),
            overlayTitle: eventData.title,
            overlayContent: eventData.description,
        });
    }

    handleEventMouseOut(target, eventData, day) {
        console.log(day);
        this.setState({
            showPopover: false,
        });
    }

    handleEventClick(target, eventData, day) {
        this.setState({
            showPopover: false,
            showModal: true,
            overlayTitle: eventData.title,
            overlayContent: eventData.description,
        });
    }

    handleDayClick(target, day) {
        this.setState({
            showPopover: false,
            showModal: true,
            overlayTitle: this.getMomentFromDay(day).format('Do of MMMM YYYY'),
            overlayContent: 'User clicked day (but not event node).',
        });
    }

    getMomentFromDay(day) {
        return moment().set({
            'year': day.year,
            'month': (day.month + 0) % 12,
            'date': day.day
        });
    }

    handleModalClose() {
        this.setState({
            showModal: false,
        })
    }

    getHumanDate() {
        return [moment.months('MM', this.state.moment.month()), this.state.moment.year(), ].join(' ');
    }

    render() {

        const styles = {
            position: 'relative',
        };

        return (
            <div style={styles}>

                <Overlay
                    show={this.state.showPopover}
                    rootClose
                    onHide = {()=>this.setState({showPopover: false, })}
                    placement="top"
                    container={this}
                    target={this.state.popoverTarget}>
                    <Popover id="event">{this.state.overlayTitle}</Popover>
                </Overlay>

                <Modal show={this.state.showModal} onHide={this.handleModalClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.state.overlayTitle}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.state.overlayContent}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleModalClose}>Close</Button>
                    </Modal.Footer>
                </Modal>

                <Grid>
                    <Row>
                        <Col xs={6}>
                            <ButtonToolbar>
                                <Button onClick={this.handlePreviousMonth}>&lt;</Button>
                                <Button onClick={this.handleNextMonth}>&gt;</Button>
                                <Button onClick={this.handleToday}>Today</Button>
                                <span className="pull-right h2">{this.getHumanDate()}</span>
                            </ButtonToolbar>

                        </Col>
                        {/*<Col xs={3}>*/}
                            {/*<div className="pull-right h2">{this.getHumanDate()}</div>*/}
                        {/*</Col>*/}
                    </Row>
                    <br />
                    <Row>
                        <Col xs={12}>
                            <EventCalendar
                                month={this.state.moment.month()}
                                year={this.state.moment.year()}
                                events={this.state.getEvents}
                                onEventClick={this.handleEventClick}
                                onEventMouseOver={this.handleEventMouseOver}
                                onEventMouseOut={this.handleEventMouseOut}
                                onDayClick={this.handleDayClick}
                                maxEventSlots={1}
                            />
                        </Col>
                    </Row>
                </Grid>

            </div>
        );
    }
}

export default Calendar;

