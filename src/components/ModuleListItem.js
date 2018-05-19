import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

export default class ModuleListItem
    extends React.Component {
    render() {
        return (
            <li className="list-group-item">
                Module 1
                <span className="float-right">
                    <button className="edit btn btn-outline-secondary"><i className="fa fa-pencil"></i></button>
                    &nbsp;
                    <button className="delete btn btn-outline-secondary"><i className="fa fa-trash"></i></button>
                 </span>
            </li>
        );
    }
}