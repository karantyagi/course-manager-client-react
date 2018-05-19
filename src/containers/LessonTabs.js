import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import TopicPills from '../components/TopicPills'

export default class LessonTabs
    extends React.Component {
    render() { return(
        <div>
        <ul class="nav nav-tabs">
            <li class="nav-item"><a class="nav-link active"
                                    href="#">Active Lesson</a></li>
            <li class="nav-item"><a class="nav-link"
                                    href="#">Another Lesson</a></li>
            <li className="nav-item"><a className="nav-link"
                                        href="#">Lesson 2</a></li>
            <li className="nav-item"><a className="nav-link"
                                        href="#">Lesson 3</a></li>
            <li className="nav-item"><a className="nav-link"
                                        href="#">Lesson 4</a></li>
            <li className="nav-item"><a className="nav-link"
                                        href="#">Lesson 5</a></li>
            <li className="nav-item"><a className="nav-link"
                                        href="#">Lesson 6</a></li>
            <li className="nav-item"><a className="nav-link"
                                        href="#">Lesson 7</a></li>
            <li className="nav-item"><a className="nav-link"
                                        href="#">Lesson 8</a></li>
            <li className="nav-item">&nbsp;&nbsp;&nbsp;</li>
            <li className="nav-item"><button className="delete btn btn-outline-info">
                <i className="fa fa-plus fa-1x"></i>
            </button></li>
        </ul>
            <hr/>
            <TopicPills/>
        </div>

    );}}
