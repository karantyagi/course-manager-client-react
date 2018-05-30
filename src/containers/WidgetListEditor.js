import React, {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import './WidgetListEditor.css'

import {Provider, connect} from 'react-redux';
import { createStore } from 'redux';
import * as constants from "../constants/WidgetListEditor"
import * as actions from "../actions/WidgetListEditor";
import './sample.jpg'

import {HeadingContainer} from "../containers/HeadingContainer";
import {ParagraphContainer} from "../containers/ParagraphContainer"
import {LinkContainer} from "../containers/LinkContainer"
import {ImageContainer} from "../containers/ImageContainer"
import {ListContainer} from "../containers/ListContainer"

import {stateToPropsMapper, dispatcherToPropsMapper} from "../mappers/widgetMappers";

import {widgetReducer} from "../reducers/widgetReducers";


let url = window.location.href;
let topicId = url.substring(url.indexOf('topic')+6);

const initialState =
    {
        widgets: [],
        preview: false,
        topicId: topicId.substring(0,topicId.indexOf('/'))
    }


const Widget = ({widget,preview,dispatch}) => {

    let selectElement;
    // console.log("preview inside Widget: ", preview);

    return(
        <li key={widget.id*7} className="list-group-item rounded shadow">
                <div className={"row mt-2 mb-1 mb-2"} hidden={preview}>
                    <div className={'col-7 mr-4 ml-1 pt-1'}>
                        <h4>{widget.widgetOrder} &nbsp;
                            {widget.widgetType} Widget</h4>
                    </div>
                    <div className={'col-auto pl-1 pr-1 '}>
                        <button
                            onClick={() => {dispatch(actions.moveUp(widget))}}
                            className={' btn btn-warning '}><i className="fa fa-arrow-up fa-1x"></i></button>
                        &nbsp;
                        <button
                            onClick={() => {dispatch(actions.moveDown(widget))}}
                            className={' btn btn-warning'}><i className="fa fa-arrow-down fa-1x"></i></button>
                    </div>
                    <div className={'col-2 pr-1 pl-0'}>
                        <select
                            value={widget.widgetType}
                            onChange={e => dispatch(
                                {type: constants.SELECT_WIDGET_TYPE,
                                 id: widget.id,
                                    widgetType: selectElement.value})}
                            ref={node => selectElement = node}
                            className="custom-select">
                            {/*<option selected disabled> Choose...</option>*/}
                            <option>Heading</option>
                            <option>List</option>
                            <option>Image</option>
                            <option>Link</option>
                            <option>Paragraph</option>
                        </select>
                    </div>
                    <div className={'col-auto pr-0 pl-0 mr-0 ml-0'}>
                        <button className={'btn btn-danger'}
                            // onClick={deleteWidget}
                                onClick={e => (dispatch({type:constants.DELETE_WIDGET , id: widget.id}))}
                        ><i className="fa fa-times fa-1x"></i></button>
                    </div>
                </div>
            <div>
                {widget.widgetType === "Heading" && <HeadingContainer widget={widget} preview={preview}/>}
                {widget.widgetType === "Link" && <LinkContainer widget={widget} preview={preview}/>}
                {widget.widgetType === "Image" && <ImageContainer widget={widget} preview={preview}/>}
                {widget.widgetType === "List" && <ListContainer widget={widget} preview={preview}/>}
                {widget.widgetType === "Paragraph" && <ParagraphContainer widget={widget} preview={preview}/>}
            </div>

            {/*<div className={'border rounded border-gray p-1'}> {widget.text}</div>*/}
            {/*<br/>*/}
            {/*<h5 style={{color:"Gray"}}>Preview</h5>*/}
            {/*<h3> Actual widget displayed as html rendering</h3>*/}
            {/*<hr/>*/}
        </li>
    );
}

const WidgetContainer = connect(stateToPropsMapper)(Widget);

//
// const WidgetList = ({widgets, dispatch}) => {
//     console.log("inside widget list: ", typeof(widgets), widgets)
//     return(
//         <div>
//             <ul className={"list-group"}>
//                 {widgets.map(widget =>
//                     <div key={widget.id*23}>
//                         <WidgetContainer key={widget.id}
//                                  widget={widget}
//                         />
//                         <br/>
//                     </div>)}
//             </ul>
//
//         </div>
//     );
// }


class WidgetList extends Component
 {
     constructor(props){
         super(props);
         console.log("WidgetList PROPS : ", this.props)
     }

     render(){
         return(
                 <ul className={"list-group"}>
                     {this.props.widgets.map(widget =>
                         <div key={widget.id*23}>
                             <WidgetContainer key={widget.id}
                                              widget={widget}
                                              preview={this.props.preview}
                             />
                             <br/>
                         </div>)}
                 </ul>
         );
     }

}

// const orderWidgetList = (arr, from, to) =>  {
//     console.log("array before reordering : ", arr);
//     arr.splice(to, 0, arr.splice(from, 1)[0]);
//     console.log("array after reordering : ", arr);
//     return(
//        arr);
// }




let store = createStore(widgetReducer,initialState);

class WidgetListContainer extends Component{
    constructor(props){
        super(props);

        console.log("WidgetListContainer PROPS : ", this.props)
        url = window.location.href;
        topicId = url.substring(url.indexOf('topic')+6);
        topicId = topicId.substring(0,topicId.indexOf('/'));

        this.props.findAllWidgetsByTopic('https://kt-course-manager-server.herokuapp.com/api/topic/'+topicId.toString()+'/widget')

        // delete all WIDGETS for this topic from DB
        console.log("Starting expunge");
        for(var c=0; c < this.props.widgets.length; c++){
            console.log("Deleting id: ", this.props.widgets[c].id)
                fetch('https://kt-course-manager-server.herokuapp.com/api/widget/delete', {
                    method: 'delete',
                    body: JSON.stringify(this.props.widgets[c]),
                    headers: {
                        'content-type': 'application/json'}
                })
                    .then(function (response) {
                        console.log("deleted\n");
                    });
        }
        console.log("Expunge complete");





        // console.log("url:" ,url);
        // console.log("Topic ID: ", topicId);
    }

    componentWillUnmount(){
        console.log(" navigating away")
        // alert("\nnavigating away");
    }

    componentWillUpdate(nextProps, nextState){
        console.log(" Widgets Updating")
    }

    render()
    {
        var len = 0;
        if(this.props.widgets !== null){ len = this.props.widgets.length}
        return(
            <div className={"p-1"}>

                <div className={'row mb-2 mt-0'}>
                    <div className={'col-8 mr-4'}>
                        <p hidden={this.props.preview}>&nbsp;&nbsp;Total Widgets :&nbsp;
                            {this.props.widgets.length}
                        </p>
                    </div>
                    <div className={'col-1 ml-1'}>
                        <button
                            hidden={this.props.preview}
                            onClick={this.props.saveWidgetList}
                            className={'btn btn-success'}>
                            Save
                        </button>
                    </div>
                    <div className={'col-auto pt-1 ml-3'}>
                        <label className="switch">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span id={"editWidgets"}
                                                                                                          style={{color:"gray", fontSize:'22px'}}>Preview</span>
                            <input type="checkbox"
                                   onChange={this.props.previewWidgetList}/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                </div>

                {/*{this.props.widgets.map(widget =>*/}
                {/*(*/}
                {/*<WidgetContainer key={widget.id} widget={widget}/>*/}
                {/*))}*/}
                <WidgetList widgets={this.props.widgets}/>
                <div className={"text-right mt-3 mb-3"}>
                    <button
                        onClick={this.props.addWidget}
                        className={"btn btn-danger"}>
                        <i className="fa fa-plus-circle fa-1x"></i></button>
                </div>

            </div>
        );
    }
}


const WidgetEditor
    = connect(stateToPropsMapper,dispatcherToPropsMapper)(WidgetListContainer);

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
