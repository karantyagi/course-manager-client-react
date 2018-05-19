import React, {Component} from 'react';
import CourseDeck from './CourseDeck'
import CourseEditor from './CourseEditor'

class CourseManager extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                {/*font awesome icon bars*/}

                <br/>
                <nav className="navbar navbar-dark bg-dark">
                    <button className="navbar-toggler" type="button" id={"settings"}>
                        <span className="navbar-toggler-icon" ></span>
                    </button>
                    <h2 className={"text-white "}>Course Manager</h2>
                    <form className="form-inline mt-2 mt-md-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
                        </input>
                            <button className="btn btn-success my-2 my-sm-0" type="button">Search</button>
                    </form>
                </nav>
                <br/>

                <CourseEditor/>
                <hr/>

                {/*Lesson Tabs*/}

                {/*<LessonTabs/>*/}
                {/*<br/>*/}

                {/*<ModuleList/>*/}
                {/*<br/>*/}

                <div className="row">
                    <div className="col-11">
                        <h2>&nbsp;Courses</h2>
                    </div>
                    <div className="col-1">
                        <button className="delete btn btn-outline-danger">
                            <i className="fa fa-plus fa-2x"></i>
                        </button>
                    </div>
                </div>

                <br/>

                {/*Courses Grid*/}
                {/*make a grid here    */}

                <CourseDeck/>
                <br/>
                <CourseDeck/>
                <br/>
                <br/>
            </div>
        )
    }
}

export default CourseManager;
