import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import LessonService from '../services/LessonService'
import TopicEditor from './TopicEditor'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import LessonTabItem from "../components/LessonTabItem";

export default class LessonEditor
    extends React.Component {

    constructor(props) {
        super(props);
        //console.log("1 props:", props);
        this.state = {
            courseId: '',
            moduleId: '',
            lesson: { title: '' },
            lessons: []
        };

        // bind all functions
        this.setModuleId = this.setModuleId.bind(this);
        this.setCourseId = this.setCourseId.bind(this);

        this.deleteLesson = this.deleteLesson.bind(this);
        this.updateLesson = this.updateLesson.bind(this);
        this.createLesson = this.createLesson.bind(this);
        this.titleChanged = this.titleChanged.bind(this);

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
       // console.log("Fetchh ...... ",LESSON_API_URL.replace('CID', courseId).replace('MID', moduleId));
        // console.log()
        this.lessonService
            .findAllLessonsForModule(courseId,moduleId)
            .then((lessons) => {this.setLessons(lessons)});
    }
     //console.log("State", this.state);

    componentDidMount() {
           // console.log("Lesson tabs mounted");
           // console.log("props: ",this.props);

            var url = window.location.href;
           // console.log("url:" ,url);
            var mId = url.substring(url.indexOf('module')+7);
            mId = mId.substring(0,mId.indexOf('/'));
            this.setModuleId(mId);
             //console.log("mID: ", mId);
            var cId = url.substring(url.indexOf('course')+7,url.indexOf('module')-6);
            this.setCourseId(cId);
            //console.log("cId: ",cId );
            if(mId != '' && cId != ''){
                this.findAllLessonsForModule(cId,mId);
                //console.log(this.state.lessons);
            }
           // console.log("exit components mounted");
    }

    componentWillReceiveProps(newProps)
    {
        //console.log("Lesson tabs reloading");
        // console.log("cID: ",this.state.courseId );
        var url = window.location.href;
        var mId = url.substring(url.indexOf('module')+7);
        mId = mId.substring(0,mId.indexOf('/'));
        this.setModuleId(mId);
        // console.log("mID: ", this.state.moduleId);
        var cId = url.substring(url.indexOf('course')+7,url.indexOf('module')-6);
        this.setCourseId(cId);
       // console.log("cId: ",this.state.courseId );
        if(cId != '' && mId != ''){
            this.findAllLessonsForModule(cId,mId);
            //console.log(this.state.lessons);
        }
       // console.log("exit reloading");
    }


    renderListOfLessons(cId, mId) {
        // if(cId != '' && mId != '') {
        //    // this.findAllLessonsForModule(cId, mId);
        // }
           // console.log("renderLessons -> ", this.state.lessons);

        let lessons = null;
        if(this.state.lessons.length != 0 && this.lessonService!=null){

            lessons = this.state.lessons.map((lesson) => {
                return <LessonTabItem course = {this.state.courseId}
                                       module={this.state.moduleId}
                                       lesson={lesson}
                                       key={lesson.id}
                                       delete={this.deleteLesson}
                                       update ={this.updateLesson}
                />
            });

        }
        return lessons;
    }


    titleChanged(event) {
        //console.log("state: ", this.state);
        this.setState({lesson: {title: event.target.value}});
    }

    createLesson() {
        if(this.state.lesson.title == '')
        {
            alert("\nType a name for the Lesson which you want to add.");
        }
        else {
            console.log("ADD Lesson: ", this.state.lesson);
            this.lessonService
                .createLesson(this.state.courseId, this.state.moduleId, this.state.lesson)
                .then(() => {
                    this.findAllLessonsForModule(this.state.courseId, this.state.moduleId);
                });
        }
    }

    deleteLesson(lessonId) {
        var result = window.confirm("\n Do you really want to delete this lesson ?");
        if (!result) {
            console.log("ok");

        }
        else{
            //console.log("Delete Lesson: ", lessonId);
            this.lessonService
                .deleteLesson(this.state.courseId, this.state.moduleId,  lessonId)
                .then(() => {
                    console.log("Reload =>", "/course/"+this.state.courseId+"/edit/"
                        +this.state.moduleId+"/edit/");
                    this.findAllLessonsForModule(this.state.courseId, this.state.moduleId);
                    window.location.href = "/course/"+this.state.courseId+"/edit/module/"+this.state.moduleId+"/edit/";
                    console.log("Lesson:",lessonId," Deleted.");
                });
        }
    }



    updateLesson(lessonId) {
        console.log('update ',lessonId);
        alert("\nUpdate Lesson ID: "+lessonId+"\n\Update functionality coming soon !")
    }



    render() {

        return(
            <Router>
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
                        <button onClick={this.createLesson}  className="btn btn-outline-danger">
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
                <div className="rounded pt-3 pr-3 pl-3 pb-3"
                     style={{backgroundColor:'rgba(2,255,255,0.1)'}}>
                <h3>&nbsp;Topics</h3>
                <Route path="/course/:courseID/edit/module/:moduleID/edit/lesson/:lessonID/edit" component={TopicEditor}>

                </Route>
                {/*<TopicPills/>*/}
                </div>
        </div>
        </div>
            </Router>
    );}}
