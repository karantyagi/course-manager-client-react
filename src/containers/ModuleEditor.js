import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import TopicPills from '../components/TopicPills'
import CourseEditor from "./CourseEditor";
import LessonTabs from './LessonTabs'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

export default class ModuleEditor
    extends React.Component {

    constructor(props) {
        super(props);
        console.log("Props in module editor : ",this.props.module);
    }



    render() { return(
        <div>
            {/*<div className="alert alert-danger p-2" role="alert ">*/}
                {/*<h4 className="alert-heading">Editing Module ID : <strong> </strong> </h4>*/}
            {/*</div>*/}
            <LessonTabs/>
            </div>

    );}}
