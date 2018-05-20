import React from 'react';
import ModuleListItem from '../components/ModuleListItem';
import ModuleList2 from './/ModuleList2';
// import styles from '../style/vertical.css';

export default class ModuleList
    extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            courseId: '',
            module: {title: ''},
            modules: [
                {title: 'Module 1 - jQuery', id: 123},
                {title: 'Module 2 - React', id: 234},
                {title: 'Module 3 - Redux', id: 345},
                {title: 'Module 4 - Angular', id: 456},
                {title: 'Module 5 - Node.js', id: 567},
                {title: 'Module 6 - MongoDB', id: 678}
            ]
        };

        this.titleChanged = this.titleChanged.bind(this);
        this.createModule = this.createModule.bind(this);
    }

        titleChanged(event) {
            // console.log(event.target.value);
            this.setState({module: {title: event.target.value}});
        }

        createModule() {
            console.log(this.state.module);
        }

        renderListOfModules() {
            let modules = this.state.modules
                .map(function(module){
                    return <ModuleListItem
                        title={module.title} key={module.id}/>
                });
            return modules;}



        render() {
        return (
            <div>



                {/*<li className="list-group-item">*/}
                <div class="row pb-0 mb-2">
                    <div className="col-10 pr-0 mr-0 pb-0 mb-0">
                        <input onChange={this.titleChanged} id="newModule" className="form-control" placeholder="Add new module"/>
                    </div>
                    <div className="col-1 ml-0 pl-2 pb-0 mb-0">
                        <button onClick={this.createModule}  className="btn btn-outline-dark">
                            <i className="fa fa-plus"></i></button>
                    </div>

                </div>
                {/*TO DO : make list scrollable   */}
                <ul className="list-group">
                {/*</li>*/}
                {this.renderListOfModules()}
                {/*<ModuleListItem title={"Javascript Module"}/>*/}
                {/*<ModuleListItem title={"jQuery Module"}/>*/}
                {/*<ModuleListItem title={"React Module"}/>*/}
                {/*<ModuleListItem title={"Node Module"}/>*/}
                {/*<ModuleListItem title={"Angular Module"}/>*/}
            </ul>
            </div>
        );
    }



}