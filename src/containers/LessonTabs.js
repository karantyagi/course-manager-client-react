import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import TopicPills from '../components/TopicPills'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import CourseEditor from "./CourseEditor";

export default class LessonTabs
    extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            moduleId: '',
            lesson: {title: ''},
            lessons: []
        };

        this.setModuleId =
            this.setModuleId.bind(this);
    }

    setModuleId(moduleId) {
        this.setState({moduleId: moduleId});
    }

    componentWillReceiveProps(newProps)
    {
        console.log("new lesson tabs reloaded");
        var url = window.location.href;
        var stop = url.lastIndexOf('edit')-1;
        var start = url.indexOf('module')+ 7;
        var mId = url.substring(start,stop);
        this.setModuleId(mId);
    }
    
    render() { return(
        <div>
            <div className="alert alert-danger p-2" role="alert ">
                <h4 className="alert-heading">Editing Module ID : <strong> {this.state.moduleId}</strong> </h4>
            </div>
            {/*<h3>&nbsp;Lessons</h3>*/}
            <div>
                <ul className="nav nav-tabs">
                    <li className="nav-item"><a className="nav-link active"
                                                href="#">Active Lesson</a></li>
                    <li className="nav-item"><a className="nav-link"
                                                href="#">Another Lesson</a></li>
                    <li className="nav-item"><a className="nav-link"
                                                href="#">Lesson 2</a></li>
                    <li className="nav-item"><a className="nav-link"
                                                href="#">Lesson 3</a></li>
                    <li className="nav-item"><a className="nav-link"
                                                href="#">Lesson 4</a></li>
                    <li className="nav-item"><a className="nav-link"
                                                href="#">Lesson 5</a></li>
                    <li className="nav-item"><a className="nav-link"
                                                href="#">Lesson 6</a></li>
                    <li className="nav-item"><a className="nav-link"
                                                href="#">Lesson 7</a></li>
                    <li className="nav-item"><a className="nav-link"
                                                href="#">Lesson 8</a></li>
                    <li className="nav-item">&nbsp;&nbsp;&nbsp;</li>
                    <li className="nav-item"><button className="delete btn btn-outline-info">
                        <i className="fa fa-plus fa-1x"></i>
                    </button></li>
                </ul>
                <hr/>
                <p> Topic Pills Coming up !</p>
                {/*<TopicPills/>*/}
        </div>
        </div>

    );}}
