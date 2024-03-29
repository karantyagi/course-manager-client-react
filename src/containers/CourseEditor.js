import React from 'react'
import ModuleList from './ModuleList'
import ModuleEditor from './ModuleEditor'
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
                 <div>
                     <ModuleList courseId={this.state.courseId}/>
                 </div>

    );
    }


}

