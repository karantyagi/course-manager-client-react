import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

export default class ModuleListItem
    extends React.Component {

    constructor(props) {
        super(props);
        console.log("module title :",this.props.module.title );
        this.deleteModuleClicked = this.deleteModuleClicked.bind(this);
    }

    deleteModuleClicked(){
        //console.log("Deleting module ID: ",this.props.module.id);
        this.props.delete(this.props.module.id);
    }

    render() {
        return (
            <li className="list-group-item pt-2 pb-1 text-white mt-1 mb-1 pr-1 pl-3 rounded bg-dark">
                {this.props.module.title}

                <span className="float-right">
                    <button className="edit btn btn-outline-secondary pr-1 pl-1 pt-0 pb-0" style={{border:'0px solid transparent'}}>
                        <i className="fa fa-pencil fa-2x"></i></button>
                    &nbsp;
                    {/*<a href="#"><i className="fa fa-times"></i></a>*/}
                    <button
                        onClick={this.deleteModuleClicked}
                        className="delete btn btn-outline-secondary pr-1 pl-1 pt-0 pb-0" style={{border:'0px solid transparent'}}>
                        <i className="fa fa-times fa-2x"></i></button>
                 </span>
            </li>
        );
    }
}