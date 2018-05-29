import * as constants from "../constants/WidgetListEditor"
import {getTopicId} from "../containers/WidgetListEditor"

const reorder = (arr, to ,from) => {
    arr.splice(to, 0, arr.splice(from, 1)[0]);
    return arr;
}
//
// = function (from, to) {
// this.splice(to, 0, this.splice(from, 1)[0]);

var addIds = [];
var deleteIds = [];
var updateIds = [];
var widgetURL;
var topicId = getTopicId;

export const widgetReducer = (state = {widgets: [], preview: false}, action) => {

    let index;
    switch(action.type){

        case constants.PREVIEW:
            // console.log("preview fired ! awesome");
            return {
                widgets: state.widgets,
                preview: !state.preview
            }

        case constants.WIDGET_DROPPED:
            console.log(" WIDGET DROPPED: ", action.id, action.name);
            return state;

        case constants.MOVE_UP:

            let upOrder = {widgets: [...state.widgets], preview: state.preview}
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

                updateIds.push(upOrder.widgets[index-1].id);
                updateIds.push(upOrder.widgets[index].id);
                console.log("Move Up - added to updateIds");

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

            let downOrder = {widgets: [...state.widgets], preview: state.preview}
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

                updateIds.push(downOrder.widgets[index].id);
                updateIds.push(downOrder.widgets[index+1].id);
                console.log("Move Down - added to updateIds")

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
            updateIds.push(action.id);
            console.log("Heading Size changed - added to updateIds");

            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.size = action.size
                    }
                    return Object.assign({}, widget)
                }),
                preview: state.preview
            }

        case constants.HEADING_TEXT_CHANGED:
            updateIds.push(action.id);
            console.log("Heading Text changed - added to updateIds");
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.text = action.text
                    }
                    return Object.assign({}, widget)
                }),
                preview: state.preview
            }

        case constants.HEADING_NAME_CHANGED:
            updateIds.push(action.id);
            console.log("Heading Name changed - added to updateIds");
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.name = action.name
                    }
                    return Object.assign({}, widget)
                }),
                preview: state.preview
            }

        case constants.ADD_WIDGET:


            // console.log("TOPIC ID: ", topicId);
            addIds.push(state.widgets[state.widgets.length -1].id + 8231);
            console.log("Added locally but not saved to DB - added to addIds")

            return (
                {
                    widgets: [...state.widgets,
                        {
                            id: state.widgets[state.widgets.length -1].id + 8231,
                            widgetType: 'Heading',
                            size: '1',
                            text:'',
                            name: '',
                            href: '',
                            src: '',
                            height: '500',
                            width: '500',
                            listType: 'Unordered',
                            listItems: '',
                            widgetOrder: state.widgets.length+1,
                            topicId: topicId
                        }],
                    preview: state.preview
                }
            );

        case constants.SELECT_WIDGET_TYPE:
            updateIds.push(action.id);
            console.log("Heading Name changed - added to updateIds");
            console.log("WIDGET TYPE CHANGED:  ", action.widgetType);
            let newState = {
                widgets: state.widgets.filter((widget) => {
                    if(widget.id === action.id) {
                        widget.widgetType = action.widgetType
                    }
                    return true;}),
                preview: state.preview
            }
            return (JSON.parse(JSON.stringify(newState)));



        case constants.SAVE:

            console.log("save fired !");

            widgetURL = 'http://localhost:8080/api/widget/'+state.widgets[0].id.toString()+'/save';
            console.log(widgetURL)
            fetch(widgetURL,
                {
                method: 'put',
                body: JSON.stringify(state.widgets[0]),
                headers: {
                    'content-type': 'application/json'}
                }).then(function(response){
                    // console.log(response);
                alert("All widgets saved !")
                    return response.json();
                });



            // let widgetURL;
            // for(var i=0; i < state.widgets.length; i++) {
            //     widgetURL = 'http://localhost:8080/api/widget/'+state.widgets[i].id.toString()+'/save';
            //     console.log(widgetURL)
            //     fetch(widgetURL,
            //         {
            //             method: 'put',
            //             body: JSON.stringify(state.widgets[i]),
            //             headers: {
            //                 'content-type': 'application/json'}
            //         }).then(function(response){
            //         console.log(response);
            //         // return response.json();
            //     });
            // }

            // for(var j=0; j < deletePending.widgets.length; j++) {
            //     widgetURL = 'http://localhost:8080/api/widget/'+ deletePending.widgets[i].id.toString();
            //     console.log("deleting extra");
            //
            //     fetch(widgetURL, {
            //         method: 'delete'
            //     }).then(function(response){
            //         console.log(response);
            //         // return response.json();
            //     });
            // }


            // for(var k=0; k < addPending.widgets.length; k++) {
            //     widgetURL = 'http://localhost:8080/api/topic/'+ topicId.toString() + '/widget';
            //     console.log("adding to DB - pending ones");
            //
            //     fetch(widgetURL, {
            //             method: 'post',
            //             body: JSON.stringify(addPending.widgets[k]),
            //             headers: {
            //                 'content-type': 'application/json'
            //             }
            //         }
            //     ).then(function(response){
            //         console.log(response);
            //         // return response.json();
            //     });
            // }





            //
            // console.log("Add IDs from Add Queue: ", addIds);
            // console.log("Delete IDs from Delete Queue: ", deleteIds);
            // console.log("Update IDs from Update Queue: ", updateIds);
            alert("All widgets saved !");

            return state;

        // function updateUser(userId, user) {
        //     return fetch(self.url + '/' + userId, {
        //         method: 'put',
        //         body: JSON.stringify(user),
        //         headers: {
        //             'content-type': 'application/json'
        //         }
        //     })
        //         .then(function(response){
        //             console.log(response);
        //             return response.json();
        //         });
        // }


        case constants.FIND_ALL_WIDGETS:
            // console.log("Action widgets: ",action.widgets)
            // return ({widgets: action.widgets});
            let newState1;
            newState1 = Object.assign({}, state)
            newState1.widgets = action.widgets
            return newState1;


        case constants.DELETE_WIDGET:
            console.log("Deleted locally but not saved to DB.")

            deleteIds.push(action.id);
            return(
                {widgets: state.widgets.filter(widget => {
                        return (
                            widget.id !== action.id
                        );
                    }),
                    preview: state.preview}
            );


        case constants.PARAGRAPH_TEXT_CHANGED:

            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.text = action.text
                    }
                    return Object.assign({}, widget)
                }),
                preview: state.preview
            }

        case constants.PARAGRAPH_NAME_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.name = action.name
                    }
                    return Object.assign({}, widget)
                }),
                preview: state.preview
            }

        case constants.LIST_ITEMS_CHANGED:
            // console.log("ACTION TEXT: ", action.text)
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.listItems = action.listItems
                    }
                    return Object.assign({}, widget)
                }),
                preview: state.preview
            }

        case constants.LIST_NAME_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.name = action.name
                    }
                    return Object.assign({}, widget)
                }),
                preview: state.preview
            }

        case constants.LIST_TYPE_CHANGED:

            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.listType = action.listType
                    }
                    return Object.assign({}, widget)
                }),
                preview: state.preview
            }


        case constants.LINK_HREF_CHANGED:

            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.href = action.href
                    }
                    return Object.assign({}, widget)
                }),
                preview: state.preview
            }

        case constants.LINK_TEXT_CHANGED:
            // console.log("ACTION TEXT: ", action.text)
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.text = action.text
                    }
                    return Object.assign({}, widget)
                }),
                preview: state.preview
            }

        case constants.LINK_NAME_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.name = action.name
                    }
                    return Object.assign({}, widget)
                }),
                preview: state.preview
            }

        case constants.IMAGE_NAME_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.name = action.name
                    }
                    return Object.assign({}, widget)
                }),
                preview: state.preview
            }

        case constants.IMAGE_SRC_CHANGED:

            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.src = action.src
                    }
                    return Object.assign({}, widget)
                }),
                preview: state.preview
            }



        default:
            return state;
    }
}