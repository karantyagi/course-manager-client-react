import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import TopicPill from "../components/TopicPill";
import TopicService from '../services/TopicService'


export default class TopicManager
    extends React.Component {






    render() { return(

        <div>
            <div className="alert alert-secondary p-1 pt-2" role="alert ">
                <h5 className="alert-heading text-center">Editing Topics for LessonID : <strong> ? ? ? </strong> </h5>
            </div>

            <div className="row pb-0 mb-2 mr-0">
                <div className="pr-0 mr-0 pb-0 mb-0" style={{width:"60.36%"}}>
                </div>
                <div className="col-4 pr-0 mr-0 pb-0 mb-0">
                    <input
                        // onChange={this.titleChanged}
                           className="form-control" placeholder="Add new topics for this lesson"/>
                </div>
                <div className=" ml-0 pl-2  pb-0 mr-0 pr-0 mb-0">
                    <button
                        // onClick={this.createLesson}
                        className="btn btn-outline-info">
                        <i className="fa fa-plus"></i></button>
                </div>

            </div>

            <div>
                <ul className="nav nav-pills">
                    <TopicPill/>
                    <TopicPill/>
                    {/*{this.renderListOfLessons(this.state.courseId, this.state.moduleId,this.state.lessonId)}*/}

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
