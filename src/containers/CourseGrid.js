import React, {Component} from 'react';
import CourseDeck from './CourseDeck'

export default
class CourseGrid extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <CourseDeck/>
                <br/>
                {/*<CourseDeck/>*/}
                {/*<br/>*/}
            </div>
        )
    }
}
