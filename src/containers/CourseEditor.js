import React from 'react'
import ModuleList from './ModuleList'
import LessonTabs from './LessonTabs'

export default class CourseEditor
    extends React.Component {
    render() { return(
        <div>
            <div className="row">
                <div className="col-4">
                <h3>&nbsp;Modules</h3>
                    <ModuleList/>
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

