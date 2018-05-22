import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom'
import ModuleService from "../services/ModuleService";


export default class LessonTabItem
    extends React.Component {

    constructor(props) {
        super(props);
        // console.log("! TAB Properties: ", this.props);
    }



    render() {
        return (

            <li className="nav-item">

                <a className="nav-link bg-light border-info
                 pt-2 pb-2 pr-0 pl-2 mr-1 ml-0 mb-2 mt-1"
                                        href="#">
                    {this.props.lesson.title}
                    <span className="ml-3">
                    <button
                        className="edit btn btn-outline-success pt-0 pb-0 pr-0 pl-0" style={{border:'0px solid transparent'}}>
                        <i className="fa fa-pencil fa-1x"></i></button>
                        &nbsp;
                        {/*<a href="#"><i className="fa fa-times"></i></a>*/}
                        <button
                            className="delete btn btn-outline-danger pr-0 pl-0 pt-0 pb-0 mr-2" style={{border:'0px solid transparent'}}>
                        <i className="fa fa-times"></i></button>
                 </span>
                </a>


            </li>
            // <li className="list-group-item pt-1 pb-1 text-white mt-1 mb-1 pr-1 pl-2 rounded bg-dark">


        );
    }
}