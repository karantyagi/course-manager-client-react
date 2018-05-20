import React from 'react'
import ModuleList from './ModuleList'
import LessonTabs from './LessonTabs'

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
        <div>
            {/*<h2>Editing course ID : {this.state.courseId}</h2>*/}
            <div className="alert alert-info" role="alert ">
                <h3 className="alert-heading">Editing course ID : <strong> {this.state.courseId}</strong> </h3>
            </div>
            <div className="row">
                <div className="col-4">
                    <ModuleList courseId={this.state.courseId}/>
                </div>
                <div className="col-8">
                    <h3>&nbsp;Lessons</h3>

                    <LessonTabs/>
                </div>
            </div>
        </div>
    );
    }
}

