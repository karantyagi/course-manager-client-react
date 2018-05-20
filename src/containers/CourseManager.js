import React, {Component} from 'react';
import CourseGrid from './CourseGrid'
import CourseEditor from './CourseEditor'
import Description from '../components/Description'
import Description2 from '../components/Description2'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'


class CourseManager extends React.Component {



    render() {
        return (
            <Router >
            <div className="container-fluid">
                {/*font awesome icon bars*/}


                <Route path="/home" component={Description}>
                </Route>
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

                <hr/>

                <Route path="/home" component={Description2}>
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
