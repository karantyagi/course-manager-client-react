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
import './sample.jpg'
// import {findAllWidgets} from "../actions/WidgetListEditor";
// import {addWidget} from "../actions/WidgetListEditor";
//  import {headingSizeChanged} from "../actions/WidgetListEditor";
// import {widgetReducer} from "./reducers/widgetReducer"

const stateToPropsMapper = (state) => {
    return (
        { widgets: state.widgets}
    );
}

const dispatcherToPropsMapper =
    (dispatch) =>
        (
            {addWidget: () => addWidget(dispatch),
                findAllWidgets: () => findAllWidgets(dispatch),
                headingSizeChanged: (widgetId, newSize) => headingSizeChanged(dispatch, widgetId, newSize),
                headingTextChanged: (widgetId, newText) => headingTextChanged(dispatch, widgetId, newText),
                headingNameChanged: (widgetId, newName) => headingNameChanged(dispatch, widgetId, newName)
            })

const findAllWidgets = dispatch => {
    fetch('http://localhost:8080/api/widget')
        .then(response => (response.json()))
        .then(widgets => dispatch({
            type: constants.FIND_ALL_WIDGETS,
            widgets: widgets }))
}

const addWidget = dispatch => (dispatch({type: constants.ADD_WIDGET}))

const headingSizeChanged = (dispatch, widgetId, newSize) => (
    dispatch({
        type: constants.HEADING_SIZE_CHANGED,
        id: widgetId,
        size: newSize})
)

const headingTextChanged = (dispatch, widgetId, newText) => (
    dispatch({
        type: constants.HEADING_TEXT_CHANGED,
        id: widgetId,
        text: newText})
)

const headingNameChanged = (dispatch, widgetId, newName) => (
    dispatch({
        type: constants.HEADING_NAME_CHANGED,
        id: widgetId,
        name: newName})
)

const HeadingWidget = ({widget,headingSizeChanged, headingTextChanged, headingNameChanged }) => {
    let selectHeadingSize;
    let inputElem;
    let inputName;
    return (
      <div>
          <div className={'mb-2'}>
              <input type="text" id="headingText" className="form-control"
                     placeholder="Heading Text"
                     onChange={() => headingTextChanged(widget.id, inputElem.value)}
                     value={widget.text}
                     ref={node => inputElem = node}>
              </input>
          </div>
          <div className={'mb-2'}>
              {/*<p> "heading size:" {widget.size} </p>*/}
              <select
                  ref={node => selectHeadingSize  = node}
                  onChange={() => headingSizeChanged(widget.id, selectHeadingSize.value)}
                  className="custom-select">
                  <option disabled>Choose size</option>
                  <option value="1">Heading 1</option>
                  <option value="2">Heading 2</option>
                  <option value="3">Heading 3</option>
              </select>
          </div>
          <div className={'mb-3'}>
              <input type="text" className="form-control"
                     placeholder="Widget Name"
                     onChange={() => headingNameChanged(widget.id, inputName.value)}
                     value={widget.name}
                     ref={node => inputName = node}></input>
          </div>
          {/*<div className={'border rounded border-gray p-1'}> {widget.text}</div>*/}
          {/*<br/>*/}
          <h5 style={{color:"Gray"}}>Preview</h5>
          <div>
              {widget.size == 1 && <h1>{widget.text}</h1>}
              {widget.size == 2 && <h2>{widget.text}</h2>}
              {widget.size == 3 && <h3>{widget.text}</h3>}
          </div>
          {/*<h3> Actual widget displayed as html rendering</h3>*/}
          <hr/>
      </div>
    );
}

const HeadingContainer = connect(stateToPropsMapper,dispatcherToPropsMapper)(HeadingWidget);

const ParagraphWidget = ({widget}) => {
    return (
        <div>
            {/*<h1> PARAGRAPH </h1>*/}
            {/*<div className={'border rounded border-gray p-1'}> {widget.text}</div>*/}
            <div className={'mb-2'}>
            <textarea className="form-control" rows="3" placeholder="lorem ipsum"></textarea>
            </div>
            <div className={'mb-3'}>
                <input type="text" className="form-control"
                       placeholder="Widget Name"></input>
            </div>
            <h5 style={{color:"Gray"}}>Preview</h5>
            <h3> Actual widget displayed as html rendering</h3>
            <hr/>
        </div>
    );
}

const LinkWidget = ({widget}) => {
    return (
        <div>
            <div className={'mb-2'}>
                <input type="text" className="form-control"
                       placeholder="Link URL"></input>
            </div>
            <div className={'mb-3'}>
                <input type="text" className="form-control"
                       placeholder="Link text"></input>
            </div>
            <h5 style={{color:"Gray"}}>Preview</h5>
            <h3> Actual widget displayed as html rendering</h3>
            <hr/>
        </div>
    );
}

const ImageWidget = ({widget}) => {
    return (
        <div>
            <div className={'mb-2'}>
                <input type="text" className="form-control"
                       placeholder="Image URL"></input>
            </div>
            <div className={'mb-3'}>
                <input type="text" className="form-control"
                       placeholder="Widget Name"></input>
            </div>
            <h5 style={{color:"Gray"}}>Preview</h5>
            <img  src={require('./sample.jpg')} alt="imagePreview"/>
            <hr/>
        </div>
    );
}

const ListWidget = ({widget}) => {
    return (
        <div>
            <div className={'mb-2'}>
                <textarea className="form-control" rows="4"
                          placeholder={'Put each\nitem in\na seperate row'}></textarea>
            </div>
            <div className={'mb-2'}>
                <select className="custom-select">
                    <option>Unordered</option>
                    <option>Ordered</option>
                </select>
            </div>
            <div className={'mb-3'}>
                <input type="text" className="form-control"
                       placeholder="Widget Name"></input>
            </div>
            <h5 style={{color:"Gray"}}>Preview</h5>
            <h3> Actual widget displayed as html rendering</h3>
            <hr/>
        </div>
    );
}

let url;
// = window.location.href;
let topicId;
// = url.substring(url.indexOf('topic')+6);

// let initialState =
//     {widgets: [
//             {id: 100, text: "headings.....", name: "**** HEADING ***"},
//             {id: 200, text: "images.....", name: "~~~~~ IMAGE ~~~~~"},
//             {id: 300, text: "links.....", name: "^^^ LINK ^^^"}
//         ]};






// class Widget extends Component{
//     constructor(props){
//         super(props);
//         console.log("props in widget get dispatch: ", this.props);
//     }
//
//     render(){
//             return(
//         <li key={this.props.widget.id*7} className="list-group-item rounded shadow">
//             <div>
//                 <div className={"pull-right p-0"} style={{display:'inline-block'}}>
//                     <button className={' btn btn-warning '}><i className="fa fa-arrow-up fa-1x"></i></button>
//                     &nbsp;
//                     <button className={' btn btn-warning'}><i className="fa fa-arrow-down fa-1x"></i></button>
//                     &nbsp;
//                     <button className={'btn btn-outline-secondary'}> dropdown </button>
//                     &nbsp;
//                     <button className={'btn btn-danger'}
//                             // onClick={e => (this.props.dispatch({type:constants.DELETE_WIDGET}))}
//                     ><i className="fa fa-times fa-1x"></i></button>
//                 </div>
//                 <h3>{this.props.widget.name}</h3>
//             </div>
//             <div className={'border rounded border-gray p-1'}> {this.props.widget.text}</div>
//             <br/>
//             <h5 style={{color:"Gray"}}>Preview</h5>
//             <h3> Actual widget displayed as html rendering</h3>
//             <hr/>
//         </li>
//     );
//     }
// }

const moveUp = widget => {
    return {
        type: constants.MOVE_UP, widget: widget
    }
}

const moveDown = widget => {
    return {
        type: constants.MOVE_DOWN, widget: widget
    }
}


const Widget = ({widget,dispatch}) => {

    let selectElement;

    return(
        <li key={widget.id*7} className="list-group-item rounded shadow">
                <div className={"row mt-2 mb-1 mb-2"}>
                    <div className={'col-7 mr-4 ml-1 pt-1'}>
                        <h4>{widget.widgetOrder} &nbsp;
                            {widget.widgetType} Widget</h4>
                    </div>
                    <div className={'col-auto pl-1 pr-1 '}>
                        <button
                            onClick={() => {dispatch(moveUp(widget))}}
                            className={' btn btn-warning '}><i className="fa fa-arrow-up fa-1x"></i></button>
                        &nbsp;
                        <button
                            onClick={() => {dispatch(moveDown(widget))}}
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
                {widget.widgetType === "Heading" && <HeadingContainer widget={widget}/>}
                {widget.widgetType === "Link" && <LinkWidget widget={widget}/>}
                {widget.widgetType === "Image" && <ImageWidget widget={widget}/>}
                {widget.widgetType === "List" && <ListWidget widget={widget}/>}
                {widget.widgetType === "Paragraph" && <ParagraphWidget widget={widget}/>}
            </div>

            {/*<div className={'border rounded border-gray p-1'}> {widget.text}</div>*/}
            {/*<br/>*/}
            {/*<h5 style={{color:"Gray"}}>Preview</h5>*/}
            {/*<h3> Actual widget displayed as html rendering</h3>*/}
            {/*<hr/>*/}
        </li>
    );
}

const WidgetContainer = connect()(Widget);

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
             <div>
                 <ul className={"list-group"}>
                     {this.props.widgets.map(widget =>
                         <div key={widget.id*23}>
                             <WidgetContainer key={widget.id}
                                              widget={widget}
                             />
                             <br/>
                         </div>)}
                 </ul>

             </div>
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

const reorder = (arr, to ,from) => {
    arr.splice(to, 0, arr.splice(from, 1)[0]);
    return arr;
}
    //
    // = function (from, to) {
    // this.splice(to, 0, this.splice(from, 1)[0]);


const widgetReducer = (state={widgets: []}, action) => {

    let index;
    switch(action.type){

        case constants.MOVE_UP:

            let upOrder = {widgets: [...state.widgets]}
            // console.log(newState);
            // rank = action.widget.widgetOrder
            index = action.widget.widgetOrder - 1;

            console.log("index of ",action.widget.widgetType," : ", index);

            if(index !== 0){

                // console.log("original");
                // console.log("upOrder.widgets[index-1].widgetType :",
                //     upOrder.widgets[index-1].widgetType, upOrder.widgets[index-1].widgetOrder );
                // console.log("upOrder.widgets[index].widgetType :",
                //     upOrder.widgets[index].widgetType , upOrder.widgets[index].widgetOrder);



                // newState.widgets = orderWidgetList(newState.widgets,rank-1, rank-2);
                upOrder.widgets = reorder(upOrder.widgets, index, index - 1);

                upOrder.widgets[index-1].widgetOrder = index;
                upOrder.widgets[index].widgetOrder = index+1;
                // console.log("Move up and re-render widgets");

                // console.log("upDorder.widgets[index-1].widgetType :",
                //     upOrder.widgets[index-1].widgetType, upOrder.widgets[index-1].widgetOrder );
                // console.log("upOrder.widgets[index].widgetType :",
                //     upOrder.widgets[index].widgetType , upOrder.widgets[index].widgetOrder);



                // console.log("NEW : ", upOrder.widgets);
                // console.log("OlD order: ", state.widgets);
                return (JSON.parse(JSON.stringify(upOrder)))
                // return state;
            }

            console.log("NEW WIDGET ORDER : ",state.widgets);

            return (state);

        case constants.MOVE_DOWN:

            let downOrder = {widgets: [...state.widgets]}
            // console.log(newState);
            // rank = action.widget.widgetOrder
            index = action.widget.widgetOrder - 1;

            console.log("index of ",action.widget.widgetType," : ", index);

            if(index !== state.widgets.length-1){

                // console.log("original");
                // console.log("downOrder.widgets[index].widgetType :",
                //     downOrder.widgets[index].widgetType , downOrder.widgets[index].widgetOrder);
                // console.log("downOrder.widgets[index+1].widgetType :",
                //     downOrder.widgets[index+1].widgetType, downOrder.widgets[index+1].widgetOrder );

                downOrder.widgets = reorder(downOrder.widgets, index, index + 1);

                downOrder.widgets[index].widgetOrder = index+1;
                downOrder.widgets[index+1].widgetOrder = index+2;
                // console.log("Move up and re-render widgets");

                // console.log("downOrder.widgets[index].widgetType :",
                //     downOrder.widgets[index].widgetType , downOrder.widgets[index].widgetOrder);
                // console.log("downOrder.widgets[index+1].widgetType :",
                //     downOrder.widgets[index+1].widgetType, downOrder.widgets[index+1].widgetOrder );


                // console.log("NEW ORDER done: ", upOrder.widgets);
                // console.log("OlD order: ", state.widgets);
                // console.log("NEW : ", downOrder.widgets);
                return (JSON.parse(JSON.stringify(downOrder)))
                // return (downOrder);
                // return state;
            }

            console.log("NEW WIDGET ORDER : ",state.widgets);

            return (state);


        case constants.HEADING_SIZE_CHANGED:
            // console.log(action.size);
            // alert(" heading size Changed: "+action.size);
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.size = action.size
                    }
                    return Object.assign({}, widget)
                })
            }

        case constants.HEADING_TEXT_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.text = action.text
                    }
                    return Object.assign({}, widget)
                })
            }

        case constants.HEADING_NAME_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.name = action.name
                    }
                    return Object.assign({}, widget)
                })
            }

        case constants.ADD_WIDGET:
            console.log("Added locally but not saved to DB.")

            // console.log("TOPIC ID: ", topicId);



            return (
                {
                    widgets: [...state.widgets,
                        {
                            id: state.widgets[state.widgets.length -1].id + 10,
                            widgetType: 'Heading',
                            size: '1',
                            text:'',
                            name: '',
                            widgetOrder: state.widgets.length+1,
                            topicId: topicId
                        }]
                }
            );

        case constants.SELECT_WIDGET_TYPE:
            console.log(action);
            let newState = {
                widgets: state.widgets.filter((widget) => {
                    if(widget.id === action.id) {
                        widget.widgetType = action.widgetType
                    }
                    return true;
                })
            }
            return (JSON.parse(JSON.stringify(newState)));

        case constants.SAVE:
            fetch('http://localhost:8080/api/widget/save', {
                method: 'post',
                body: JSON.stringify(state.widgets),
                headers: {
                    'content-type': 'application/json'}
            })


            return (state);


        case constants.FIND_ALL_WIDGETS:
            // console.log("Action widgets: ",action.widgets)
            return ({widgets: action.widgets});


        case constants.DELETE_WIDGET:
            console.log("Deleted locally but not saved to DB.")
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

class WidgetListContainer extends Component{
    constructor(props){
        super(props);
        this.props.findAllWidgets()
        console.log("WidgetListContainer PROPS : ", this.props)
        url = window.location.href;
        // console.log("url:" ,url);
        topicId = url.substring(url.indexOf('topic')+6);
        topicId = topicId.substring(0,topicId.indexOf('/'));
        // console.log("Topic ID: ", topicId);
    }

    render()
    {
        var len = 0;
        if(this.props.widgets !== null){ len = this.props.widgets.length}
        return(
            <div className={"p-1"}>
                <p> Total Widgets :
                    {this.props.widgets.length}
                 </p>
                <div className={'row mb-2 mt-0'}>
                    <div className={'col-8 mr-4'}>
                    </div>
                    <div className={'col-1 ml-1'}>
                        <button
                            // onClick={}
                            className={'btn btn-success'}>
                            Save
                        </button>
                    </div>
                    <div className={'col-auto pt-1 ml-3'}>
                        <label className="switch">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span id={"editWidgets"}
                                                                                                          style={{color:"gray", fontSize:'22px'}}>Preview</span>
                            <input type="checkbox"/>
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
                       // onClick={e => (this.props.dispatch({type:constants.ADD_WIDGET}))}
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
