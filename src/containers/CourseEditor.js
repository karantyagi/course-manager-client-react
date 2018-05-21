import React from 'react'
import ModuleList from './ModuleList'
import LessonTabs from './LessonTabs'
import Description from "../components/Description";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'


export default class CourseEditor
    extends React.Component {

    constructor(props) {
        super(props)
        this.state = {courseId: ''};
        this.selectCourse = this.selectCourse.bind(this);
    }

    componentDidMount() {
        this.selectCourse
        (this.props.match.params.courseId);
    }

    selectCourse(courseId) {
        this.setState({courseId: courseId});
    }




    render() { return(
        <Router>
        <div>
            <div className="alert alert-info p-3" role="alert ">
                <h3 className="alert-heading">Editing course ID : <strong> {this.state.courseId}</strong> </h3>
            </div>
            <div className="row">
                <div className="col-4">
                    <ModuleList courseId={this.state.courseId}/>
                </div>
                <div className="col-8">

                    <Route path="/course/2/edit/module/2/edit"
                           component={LessonTabs}>
                    </Route>
                    {/*<LessonTabs/>*/}
                </div>
            </div>
        </div>
        </Router>
    );
    }
}

