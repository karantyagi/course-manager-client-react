import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

export default class TopicPills
    extends React.Component {
    render() { return(
        <ul class="nav nav-pills">
            <li class="nav-item">
                <a class="nav-link active" href="#">Topic 1</a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="#">Topic 2</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Topic 3</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Topic 4</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Topic 5</a>
            </li>
            <li className="nav-item">
                &nbsp;&nbsp;
            </li>
            <li className="nav-item">
                <span className="float-right">
                    <button className="btn btn-outline-primary"><i className="fa fa-plus"></i></button>
                 </span>
            </li>

        </ul>
    );
    }
}
