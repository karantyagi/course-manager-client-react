import React from 'react';
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
// import {widgetReducer} from "./reducers/widgetReducer"


const Widget = ({widget,dispatch}) => {
    return (
        <li key='1' className="list-group-item rounded">
            <div>
            <div className={"pull-right p-0"} style={{display:'inline-block'}}>
                <button className={' btn btn-warning '}><i className="fa fa-arrow-up fa-1x"></i></button>
                &nbsp;
                <button className={' btn btn-warning'}><i className="fa fa-arrow-down fa-1x"></i></button>
                &nbsp;
                <button className={'btn btn-outline-secondary'}> dropdown </button>
                &nbsp;
                <button className={'btn btn-danger'}
                    //     onClick={e => {
                    //     return (
                    //         dispatch({type: 'DELETE_WIDGET', id: widget.id})
                    //     );
                    // }}
                ><i className="fa fa-times fa-1x"></i></button>
            </div>
            <h3>widget.name</h3>
            </div>
            <div className={'border rounded border-gray p-1'}> widget.text</div>
            <br/>
            <h5 style={{color:"Gray"}}>Preview</h5>
            <h3> Actual widget displayed as html rendering</h3>
            <hr/>
        </li>

    );
}


const WidgetList = () => {
    return(
        <div>
           <ul className={"list-group"}>
               <Widget/>
               <br/>
               <Widget/>
           </ul>
        </div>
    );
}

const WidgetContainer = connect()(Widget)


export default class WidgetListEditor
    extends React.Component {

    constructor(props) {
        super(props);
        console.log("Widget Editor ke props: ", this.props)
        //this.props.findAllWidgets()
    }


    render(){
        return(
            <div className={"p-1"}>
                <p> Widget List Size : this.props.widgets.length </p>
                    {/*{this.props.widgets.map(widget =>*/}
                        {/*(*/}
                            {/*<WidgetContainer key={widget.id} widget={widget}/>*/}
                        {/*))}*/}
                    <WidgetList/>
                <div className={"text-right mt-3 mb-3"}>
                    <button className={"btn btn-danger"}>
                        <i className="fa fa-plus-circle fa-1x"></i></button>
                </div>

            </div>
        );
    }

}