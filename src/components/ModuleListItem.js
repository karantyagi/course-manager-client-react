import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom'
import ModuleService from "../services/ModuleService";


export default class ModuleListItem
    extends React.Component {

    constructor(props) {
        super(props);
       // console.log("Course ", this.props);
    }



    render() {
        return (
            <li className="list-group-item pt-1 pb-1 text-white mt-1 mb-1 pr-1 pl-2 rounded bg-dark">
                {/*<Link to=*/}
                          {/*{`/course/module/${this.props.module.id}/edit`}>*/}
                {/*{this.props.module.title}*/}
                {/*</Link>*/}

                <Link to=
                          {`/course/${this.props.course}/edit/module/${this.props.module.id}/edit`}
                      >
                    {this.props.module.title}
                    {/*&nbsp; {this.props.module.id}*/}
                    {/*COURSE: {this.props.course}*/}

                </Link>

                <span className="float-right">
                    <button
                        onClick={() =>
                        {this.props.update(this.props.module.id)}}
                        className="edit btn btn-outline-secondary pr-0 pl-0 pt-0 pb-0" style={{border:'0px solid transparent'}}>
                        <i className="fa fa-pencil fa-1x"></i></button>
                    &nbsp;
                    {/*<a href="#"><i className="fa fa-times"></i></a>*/}
                    <button
                        onClick={() =>
                        {this.props.delete(this.props.module.id)}}
                        className="delete btn btn-outline-secondary pr-0 pl-0 pt-0 pb-0 " style={{border:'0px solid transparent'}}>
                        <i className="fa fa-times"></i></button>
                 </span>
            </li>
        );
    }
}