import React from 'react';
import ModuleListItem from '../components/ModuleListItem';
import ModuleService from '../services/ModuleService'

    export default class ModuleList
        extends React.Component {
    constructor(props) {
        console.log("c")
        super(props);
        this.state = {
            courseId: '',
            module: { title: '' },
            modules: []
        };

        this.deleteModule = this.deleteModule.bind(this);
        this.updateModule = this.updateModule.bind(this);
        this.createModule = this.createModule.bind(this);

        //this.updateModule = this.updateModule.bind(this);
        this.titleChanged = this.titleChanged.bind(this);

        this.setCourseId =
            this.setCourseId.bind(this);

        this.moduleService = ModuleService.instance;
    }
    setModules(modules) {
        this.setState({modules: modules})

    }
    findAllModulesForCourse(courseId) {
        this.moduleService
            .findAllModulesForCourse(courseId)
            .then((modules) => {this.setModules(modules)});
    }

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }
    componentDidMount() {
        this.setCourseId(this.props.courseId);
    }
    componentWillReceiveProps(newProps){
        this.setCourseId(newProps.courseId);
        this.findAllModulesForCourse(newProps.courseId)
    }

    createModule() {
        if(this.state.module.title == '')
        {
            alert("\nType a name for the Module which you want to add.");
        }
        else {
            console.log("ADD Module: ", this.state.module);
            this.moduleService
                .createModule(this.props.courseId, this.state.module)
                .then(() => { this.findAllModulesForCourse(this.props.courseId); });
        }
    }

        deleteModule(moduleId) {
            console.log('delete ',moduleId);
            var result = window.confirm("\n Do you really want to delete this course ?");
            if (!result) {
                console.log("ok");
            }
            else{
                this.moduleService
                    .deleteModule(this.props.courseId,  moduleId)
                    .then(() => {
                        this.findAllModulesForCourse(this.props.courseId);
                        //alert("\n" + "");
                        console.log("Module:",moduleId," Deleted.");
                    });
            }

        }

        updateModule(moduleId) {
            console.log('update ',moduleId);
            alert("\nUpdate Module ID: "+moduleId+"\n\Update functionality coming soon !")
        }


    titleChanged(event) {
       // console.log(event.target.value);
        this.setState({module: {title: event.target.value}});
    }
    renderListOfModules() {
        let modules = null;
        if(this.state.modules.length != 0 && this.moduleService!=null){
            modules = this.state.modules.map(function(module){
                return <ModuleListItem module={module}
                                       key={module.id}/>
            });

            modules = this.state.modules.map((module) => {
                return <ModuleListItem module={module}
                                       key={module.id}
                                        delete={this.deleteModule}
                                       update = {this.updateModule}/>
            });

        }
        return modules;
    }

        render() {

        return (
            <div>

                <h3>&nbsp;Modules</h3>
                {/*<p>&nbsp;[course ID: {this.state.courseId}] </p>*/}
                <div>

                {/*<li className="list-group-item">*/}
                <div className="row pb-0 mb-2">
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
            </div>
        );
    }



}