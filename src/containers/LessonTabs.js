import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import TopicPills from '../components/TopicPills'
import CourseEditor from "./CourseEditor";
import Lessons from './Lessons'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

export default class LessonTabs
    extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            moduleId: '1',
            lesson: {title: ''},
            lessons: []
        };
    }



    render() { return(
        <div>
            <br/>
            <Lessons/>
            </div>

    );}}
