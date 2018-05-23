import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import TopicPill from "../components/TopicPill";
import TopicService from '../services/TopicService'
import LessonService from "../services/LessonService";


export default class TopicEditor
    extends React.Component {

    constructor(props) {
        super(props);
        //console.log("1 props:", props);
        this.state = {
            courseId: '',
            moduleId: '',
            lessonId: '',
            topic: {title: ''},
            topics: []
        };

        // bind all functions

        this.setLessonId = this.setLessonId.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
        this.setCourseId = this.setCourseId.bind(this);

        this.deleteTopic = this.deleteTopic.bind(this);
        this.updateTopic = this.updateTopic.bind(this);
        this.createTopic = this.createTopic.bind(this);
        this.titleChanged = this.titleChanged.bind(this);

        this.topicService = TopicService.instance;
    }

    setLessonId(lessonId) {
        this.setState({lessonId: lessonId});
    }

    setModuleId(moduleId) {
        this.setState({moduleId: moduleId});
    }

    setTopics(topics) {
        this.setState({topics: topics})

    }

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    findAllTopicsForLesson(courseId,moduleId,lessonId) {

        var TOPIC_API_URL =
            'http://localhost:8080/api/course/CID/module/MID/lesson/LID/topic';
        // console.log("Fetchh ...... ",TOPIC_API_URL.replace('CID', courseId)
        // .replace('MID', moduleId).replace('LID', lessonId));
        // console.log()
        this.topicService
            .findAllTopicsForLesson(courseId,moduleId,lessonId)
            .then((topics) => {
                this.setTopics(topics)});
    }

    componentDidMount() {
        // console.log("Lesson tabs mounted");
        // console.log("props: ",this.props);

        var url = window.location.href;
        console.log("url:" ,url);
        var lId = url.substring(url.indexOf('lesson')+7);
        lId = lId.substring(0,lId.indexOf('/'));
        this.setLessonId(lId);
        console.log("lID: ", lId);

        var mId = url.substring(url.indexOf('module')+7,url.indexOf('lesson'));
        mId = mId.substring(0,mId.indexOf('/'));
        this.setModuleId(mId);
        console.log("mID: ", mId);

        var cId = url.substring(url.indexOf('course')+7,url.indexOf('module')-6);
        this.setCourseId(cId);
        console.log("cId: ",cId );

        if(mId != '' && cId != '' && lId != ''){
            this.findAllTopicsForLesson(cId,mId,lId);
            //console.log(this.state.lessons);
        }
        // console.log("exit components mounted");
    }

    componentWillReceiveProps(newProps)
    {
        //console.log("Lesson tabs reloading");
        // console.log("cID: ",this.state.courseId );

        var url = window.location.href;
        console.log("url:" ,url);
        var lId = url.substring(url.indexOf('lesson')+7);
        lId = lId.substring(0,lId.indexOf('/'));
        this.setLessonId(lId);
        console.log("lID: ", lId);

        var mId = url.substring(url.indexOf('module')+7,url.indexOf('lesson'));
        mId = mId.substring(0,mId.indexOf('/'));
        this.setModuleId(mId);
        console.log("mID: ", mId);

        var cId = url.substring(url.indexOf('course')+7,url.indexOf('module')-6);
        this.setCourseId(cId);
        console.log("cId: ",cId );


        if(cId != '' && mId != '' && lId != ''){
            this.findAllTopicsForLesson(cId,mId,lId);
            //console.log(this.state.lessons);
        }
        // console.log("exit reloading");
    }

    titleChanged(event) {
        //console.log("state: ", this.state);
        this.setState({topic: {title: event.target.value}});
    }

    createTopic() {
        if(this.state.topic.title == '')
        {
            alert("\nType a name for the topic that you want to add.");
        }
        else {
            console.log("ADD topic: ", this.state.topic);
            this.topicService
                .createTopic(this.state.courseId, this.state.moduleId, this.state.lessonId, this.state.topic)
                .then(() => {
                    this.findAllTopicsForLesson(this.state.courseId, this.state.moduleId, this.state.lessonId);
                });
        }
    }

    deleteTopic(topicId) {
        var result = window.confirm("\n Do you really want to delete this topic ?");
        if (!result) {
            console.log("ok");

        }
        else{
            //console.log("Delete Topic: ", topicId);
            this.topicService
                .deleteTopic(this.state.courseId, this.state.moduleId,this.state.lessonId, topicId)
                .then(() => {
                    console.log("Reload =>", "/course/"+this.state.courseId+"/edit/"
                        +this.state.moduleId+"/edit/lesson/"+this.state.lessonId+"/edit/");
                    this.findAllTopicsForLesson(this.state.courseId, this.state.moduleId, this.state.lessonId);
                    window.location.href = "/course/"+this.state.courseId+"/edit/module/"+this.state.moduleId+"/edit/lesson/"
                    +this.state.lessonId+"/edit/";
                    console.log("Topic:",topicId," Deleted.");
                });
        }
    }



    updateTopic(topicId) {
        console.log('update ',topicId);
        this.findAllTopicsForLesson(this.state.courseId, this.state.moduleId, this.state.lessonId);
        alert("\nUpdate Topic ID: "+topicId+"\n\Update functionality coming soon !")
    }

    renderListOfTopics(cId, mId, lId) {
        // if(cId != '' && mId != '') {
        //    // this.findAllLessonsForModule(cId, mId);
        // }
        // console.log("renderLessons -> ", this.state.lessons);

        let topics = null;
        if(this.state.topics.length != 0 && this.topicService!=null){

            topics = this.state.topics.map((topic) => {
                return <TopicPill course = {this.state.courseId}
                                      module={this.state.moduleId}
                                      lesson = {this.state.lessonId}
                                      topic={topic}
                                      key={topic.id}
                                      delete={this.deleteTopic}
                                      update ={this.updateTopic}
                />
            });

        }
        return topics;
    }



    render() { return(

        <div>
            <div className="alert alert-secondary p-1 pt-2" role="alert ">
                <h5 className="alert-heading text-center">Editing Topics for LessonID : <strong> {this.state.lessonId} </strong> </h5>
            </div>

            <div className="row pb-0 mb-2 mr-0">
                <div className="pr-0 mr-0 pb-0 mb-0" style={{width:"60.36%"}}>
                </div>
                <div className="col-4 pr-0 mr-0 pb-0 mb-0">
                    <input
                        onChange={this.titleChanged}
                           className="form-control" placeholder="Add new topics for this lesson"/>
                </div>
                <div className=" ml-0 pl-2  pb-0 mr-0 pr-0 mb-0">
                    <button
                        onClick={this.createTopic}
                        className="btn btn-outline-info">
                        <i className="fa fa-plus"></i></button>
                </div>

            </div>

            <div>
                <ul className="nav nav-pills">
                    {/*<TopicPill/>*/}
                    {/*<TopicPill/>*/}
                    {this.renderListOfTopics(this.state.courseId, this.state.moduleId,this.state.lessonId)}

                </ul>
            </div>
        </div>

        //     <li className="nav-item">
        //         <a className="nav-link active" href="#">Topic 1</a>
        //     </li>
        //
        //     <li className="nav-item">
        //         <a className="nav-link" href="#">Topic 2</a>
        //     </li>
        //     <li className="nav-item">
        //         <a className="nav-link" href="#">Topic 3</a>
        //     </li>
        //     <li className="nav-item">
        //         <a className="nav-link" href="#">Topic 4</a>
        //     </li>
        //     <li className="nav-item">
        //         <a className="nav-link" href="#">Topic 5</a>
        //     </li>
        //     <li className="nav-item">
        //         &nbsp;&nbsp;
        //     </li>
        //     <li className="nav-item">
        //         <span className="float-right">
        //             <button className="btn btn-outline-primary"><i className="fa fa-plus"></i></button>
        //          </span>
        //     </li>
        //
        // </ul>
    );
    }
}
