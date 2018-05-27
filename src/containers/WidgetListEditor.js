import React, {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import './WidgetListEditor.css'
import TopicPill from "../components/TopicPill";
import TopicService from '../services/TopicService'
import LessonService from "../services/LessonService";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {Provider, connect} from 'react-redux';
import { createStore } from 'redux';
import * as constants from "../constants/WidgetListEditor"
// import {addWidget} from "../actions/WidgetListEditor";
// import {addWidget} from "../actions/WidgetListEditor";
// import {widgetReducer} from "./reducers/widgetReducer"



let url = window.location.href;
let topicId = url.substring(url.indexOf('topic')+6);

class Widget extends  Component{
    constructor(props){
        super(props);
        console.log("in widget: ",this.props);


        url = window.location.href;
        // console.log("url:" ,url);
        topicId = url.substring(url.indexOf('topic')+6);
        topicId = topicId.substring(0,topicId.indexOf('/'));
        // console.log("Topic ID: ", topicId);
    }




    render()
    {
        return (
            <li key='1' className="list-group-item rounded shadow">
                <div>
                    <div className={"pull-right p-0"} style={{display:'inline-block'}}>
                        <button className={' btn btn-warning '}><i className="fa fa-arrow-up fa-1x"></i></button>
                        &nbsp;
                        <button className={' btn btn-warning'}><i className="fa fa-arrow-down fa-1x"></i></button>
                        &nbsp;
                        <button className={'btn btn-outline-secondary'}> dropdown </button>
                        &nbsp;
                        <button className={'btn btn-danger'}
                                onClick={e => {
                                return (
                                    this.props.dispatch({type: constants.DELETE_WIDGET, id: this.props.widget.id})
                                );
                            }}
                        ><i className="fa fa-times fa-1x"></i></button>
                    </div>
                    <h3>{this.props.widget.name}</h3>
                </div>
                <div className={'border rounded border-gray p-1'}> {this.props.widget.text}</div>
                <br/>
                <h5 style={{color:"Gray"}}>Preview</h5>
                <h3> Actual widget displayed as html rendering</h3>
                <hr/>
            </li>

        );

    }
}



const WidgetDisplay = connect(stateToPropsMapper,dispatcherToPropsMapper)(Widget);

const WidgetList = ({widgets}) => {
    console.log("inside widget list: ", typeof(widgets), widgets)
    return(
        <div>
            <ul className={"list-group"}>
                {/*<Widget widget={widgets[0]}/>*/}
                {/*<br/>*/}

                {/*{widgets}*/}
                {widgets.map(widget =>
                    <div key={widget.id*23}>
                        <WidgetDisplay key={widget.id}
                                widget={widget}/>
                    <br/>
                    </div>)}
                {/*{friends.map(p => <li key={p.id}>{p.name}</li>)}*/}
            </ul>

        </div>
    );
}


let initialState =
    {widgets: [
            {id: 100, text: "headings.....", name: "**** HEADING ***"},
            {id: 200, text: "images.....", name: "~~~~~ IMAGE ~~~~~"},
            {id: 300, text: "links.....", name: "^^^ LINK ^^^"}
        ]};


const widgetReducer = (state = initialState, action) => {
    switch (action.type){
        case constants.ADD_WIDGET:
            console.log("add clicked");
            console.log(state.widgets[state.widgets.length-1].id);
            console.log("length: ",state.widgets.length);
            return (
                {
                    widgets: [...state.widgets,
                        {
                            id: parseInt(state.widgets[state.widgets.length-1].id)+10,
                            text:'new widget text... lorem epsum ....', name: 'NEW WIDGET'}]
                }
            );

        case constants.FIND_ALL_WIDGETS:
            console.log("Action widgets: ",action.widgets)
            return ({widgets: action.widgets});

        case constants.DELETE_WIDGET:
            return(
                {widgets: state.widgets.filter(widget => {
                        return (
                            widget.id !== action.id
                        );
                    })}
            );

        default:
            return state;
    }

}

let store = createStore(widgetReducer);



class WidgetContainer extends Component{
    constructor(props){
        super(props);
        console.log("WidgetContainer :: ", this.props)
    }

    render(){
        return(
            <div className={"p-1"}>
                <p> Total Widgets : {this.props.widgets.length} </p>
                {/*{this.props.widgets.map(widget =>*/}
                {/*(*/}
                {/*<WidgetContainer key={widget.id} widget={widget}/>*/}
                {/*))}*/}
                <WidgetList widgets={this.props.widgets}/>
                <div className={"text-right mt-3 mb-3"}>
                    <button
                        // onClick={e => (dispatch({type:constants.ADD_WIDGET}))}
                        onClick={addWidget}
                        className={"btn btn-danger"}>
                        <i className="fa fa-plus-circle fa-1x"></i></button>
                </div>

            </div>
        );
    }
}


const stateToPropsMapper = (state) => {
    return (
        { widgets: state.widgets}
    );
}

const dispatcherToPropsMapper = dispatch =>
    ({  findAllWidgets: () => findAllWidgets(dispatch),
        addWidget: () => addWidget(dispatch)
    })

const findAllWidgets = dispatch => {
    fetch('http://localhost:8080/api/widget')
        .then(response => (response.json()))
        .then(widgets => dispatch({
            type: constants.FIND_ALL_WIDGETS,
            widgets: widgets }))
}


const addWidget = dispatch => { dispatch({type:"some action"});
}

// dispatch({type: constants.ADD_WIDGET});

const WidgetEditor = connect(stateToPropsMapper,dispatcherToPropsMapper)(WidgetContainer);

export default class WidgetListEditor
    extends React.Component {
    render(){
        return(
            <Provider store={store}>
                <div className={'border rounded border-gray shadow p-3 mt-2 mb-3 bg-white'}>
                <WidgetEditor/>
                </div>
            </Provider>
        );
    }

}