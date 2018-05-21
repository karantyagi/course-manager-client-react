import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom'

export default class ModuleListItem
    extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <li className="list-group-item pt-2 pb-1 text-white mt-1 mb-1 pr-1 pl-3 rounded bg-dark">
                {/*<Link to=*/}
                          {/*{`/course/module/${this.props.module.id}/edit`}>*/}
                {/*{this.props.module.title}*/}
                {/*</Link>*/}

                <Link to=
                          {`/course/${this.props.module.id}/edit/module/${this.props.module.id}/edit`}>

                    {/*/course/:courseId/module/1/edit*/}
                    {this.props.module.title}
                </Link>

                <span className="float-right">
                    <button
                        onClick={() =>
                        {this.props.update(this.props.module.id)}}
                        className="edit btn btn-outline-secondary pr-1 pl-1 pt-0 pb-0" style={{border:'0px solid transparent'}}>
                        <i className="fa fa-pencil fa-2x"></i></button>
                    &nbsp;
                    {/*<a href="#"><i className="fa fa-times"></i></a>*/}
                    <button
                        onClick={() =>
                        {this.props.delete(this.props.module.id)}}
                        className="delete btn btn-outline-secondary pr-1 pl-1 pt-0 pb-0" style={{border:'0px solid transparent'}}>
                        <i className="fa fa-times fa-2x"></i></button>
                 </span>
            </li>
        );
    }
}