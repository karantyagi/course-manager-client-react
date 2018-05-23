import React, {Component} from 'react';
import CourseGrid from './CourseGrid'
import CourseEditor from './CourseEditor'
import Description from '../components/Description'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'


class CourseManager extends React.Component {

    constructor()
    {
        super();
        this.searchCourse = this.searchCourse.bind(this);
        this.settings = this.settings.bind(this);
    }

    searchCourse(){
        alert("\nSEARCH coming soon !");
    }

    settings(){
        alert("\nSETTINGS coming soon !");
    }



    render() {
        return (
            <Router >
            <div className="container-fluid">
                {/*font awesome icon bars*/}
                <br/>
                <nav className="navbar navbar-dark bg-dark">
                    <button onClick={this.settings}  className="navbar-toggler" type="button">
                    {/*<span className="navbar-toggler-icon" ></span>*/}
                    <i className="fa fa-cog fa-2x"></i>
                </button>

                    <h2 className={"text-white "}>Course Manager&nbsp;
                        <span style={{fontSize:'28px',color:'gray'}}> (@author)</span></h2>

                    <form className="form-inline mt-2 mt-md-0">
                        <a href="/course/grid/">
                            <i className="fa fa-th fa-2x" aria-hidden="true"></i>
                        </a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
                        </input>
                            <button onClick={this.searchCourse}
                                className="btn btn-success my-2 my-sm-0" type="button">Search</button>

                    </form>

                </nav>

                <hr/>

                <Route path="/home" component={Description}>
                </Route>

                <Route path="/course/grid"
                       component={CourseGrid}>
                </Route>

                <Route path="/course/:courseId/edit"
                       component={CourseEditor}>
                </Route>

                {/*<CourseEditor/>*/}

                {/*Lesson Tabs*/}

                {/*<LessonTabs/>*/}
                {/*<br/>*/}

                {/*<ModuleList/>*/}
                {/*<br/>*/}
                {/*Courses Grid*/}
                {/*make a grid here    */}
                {/*<CourseGrid/>*/}

            </div>
            </Router>
        )
    }
}

export default CourseManager;
