import React from 'react';
import ModuleListItem from '../components/ModuleListItem';

export default class ModuleList
    extends React.Component {
    render() {
        return (
            <ul className="list-group">
                <li className="list-group-item">
                <div class="row">
                    <div className="col-10">
                        <input id="newModule" className="form-control" placeholder="Add new module" value=""/>
                    </div>
                    <div className="col-1">
                        <button className="btn btn-outline-dark"><i className="fa fa-plus"></i></button>
                    </div>
                </div>

                </li>
                <ModuleListItem/>
                <ModuleListItem/>
                <ModuleListItem/>
                <ModuleListItem/>
            </ul>
        );
    }
}