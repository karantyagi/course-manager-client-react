import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import LessonService from '../services/LessonService'
import TopicPills from '../components/TopicPills'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import CourseEditor from "./CourseEditor";
import ModuleService from "../services/ModuleService";
import LessonTabItem from "../components/LessonTabItem";

export default class LessonTabs
    extends React.Component {

    constructor(props) {
        super(props);
        console.log("1 props:", props);
        this.state = {
            courseId: '',
            moduleId: '',
            lesson: { title: '' },
            lessons: []
        };

        // bind all functions
        this.setModuleId = this.setModuleId.bind(this);
        this.setCourseId = this.setCourseId.bind(this);

        this.lessonService = LessonService.instance;

    }

    setModuleId(moduleId) {
        this.setState({moduleId: moduleId});
    }

    setLessons(lessons) {
        this.setState({lessons: lessons})

    }

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    findAllLessonsForModule(courseId,moduleId) {

        var LESSON_API_URL =
            'http://localhost:8080/api/course/CID/module/MID/lesson';
        console.log("Fetchh ...... ",LESSON_API_URL.replace('CID', courseId).replace('MID', moduleId));
        // console.log()
        this.lessonService
            .findAllLessonsForModule(courseId,moduleId)
            .then((lessons) => {this.setLessons(lessons)});
    }


        //console.log("State", this.state);

    componentDidMount() {


            console.log("Lesson tabs mounted");
        console.log("props: ",this.props);

            var url = window.location.href;
        console.log("url:" ,url);
            var stop = url.lastIndexOf('edit')-1;
            var start = url.indexOf('module')+ 7;
            var mId = url.substring(start,stop);
            this.setModuleId(mId);
             console.log("mID: ", mId);
            var cId = url.substring(url.indexOf('course')+7,url.indexOf('module')-6);
            this.setCourseId(cId);
            console.log("cId: ",cId );
            if(mId != '' && cId != ''){
                this.findAllLessonsForModule(cId,mId);
                console.log(this.state.lessons);
            }

        console.log("exit components mounted");
    }

    componentWillReceiveProps(newProps)
    {
        console.log("Lesson tabs reloading");
        // console.log("cID: ",this.state.courseId );
        var url = window.location.href;
        var stop = url.lastIndexOf('edit')-1;
        var start = url.indexOf('module')+ 7;
        var mId = url.substring(start,stop);
        this.setModuleId(mId);
        // console.log("mID: ", this.state.moduleId);
        var cId = url.substring(url.indexOf('course')+7,url.indexOf('module')-6);
        this.setCourseId(cId);
        console.log("cId: ",this.state.courseId );
        if(cId != '' && mId != ''){
            this.findAllLessonsForModule(cId,mId);
            console.log(this.state.lessons);
        }
        console.log("exit reloading");
    }

    renderListOfLessons(cId, mId) {
        if(cId != '' && mId != '') {
           // this.findAllLessonsForModule(cId, mId);
        }
            console.log("renderLessons -> ", this.state.lessons);

        let lessons = null;
        if(this.state.lessons.length != 0 && this.lessonService!=null){

            lessons = this.state.lessons.map((lesson) => {
                return <LessonTabItem course = {this.state.courseId}
                                       module={this.state.moduleId}
                                       lesson={lesson}
                                       key={lesson.id}
                                       // delete={this.deleteLesson}
                                       // update = {this.updateLesson}
                />
            });

        }
        return lessons;
    }






    render() {

        return(
        <div>
            <div className="alert alert-danger p-1 pt-2" role="alert ">
                <h5 className="alert-heading text-center">Editing Lessons for ModuleID : <strong> {this.state.moduleId}</strong> </h5>
            </div>
            {/*<h3>&nbsp;Lessons</h3>*/}
            <div>
                <div className="row pb-0 mb-2 mr-0">
                    <div className=" pr-0 mr-0 pb-0 mb-0" style={{width:"52.5%"}}>
                    </div>
                    <div className="col-5 pr-0 mr-0 pb-0 mb-0">
                        <input onChange={this.titleChanged}
                               className="form-control" placeholder="Add new lessons for this module"/>
                    </div>
                    <div className="  ml-0 pl-2  pb-0 mr-0 pr-0 mb-0">
                        <button onClick={this.createModule}  className="btn btn-outline-info">
                            <i className="fa fa-plus"></i></button>
                    </div>

                </div>
                <ul className="nav nav-tabs">
                    {/*<li className="nav-item"><a className="nav-link active"*/}
                                                {/*href="#">Active Lesson</a></li>*/}
                    {this.renderListOfLessons(this.state.courseId, this.state.moduleId)}

                    <li className="nav-item">&nbsp;&nbsp;&nbsp;</li>
                </ul>
                <br/>
                <h3>Topic Pills Coming up !</h3>
                {/*<TopicPills/>*/}
        </div>
        </div>

    );}}
