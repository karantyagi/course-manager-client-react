import * as constants from "../constants/WidgetListEditor"


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
var autoIncrement = 100000;

export const widgetReducer = (state , action) => {

    let index;
    switch(action.type){

        case constants.PREVIEW:
            // console.log("preview fired ! awesome");


            return {
                widgets: state.widgets,
                preview: !state.preview,
                topicId: state.topicId
            }


        case constants.MOVE_UP:

            let upOrder = {widgets: [...state.widgets], preview: state.preview, topicId: state.topicId}
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

            let downOrder = {widgets: [...state.widgets], preview: state.preview, topicId: state.topicId}
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
                preview: state.preview,
                topicId: state.topicId
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
                preview: state.preview,
                topicId: state.topicId
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
                preview: state.preview,
                topicId: state.topicId
            }

        // case constants.ADD_WIDGET:
        //
        //
        //     console.log("TOPIC ID: ", state.topicId);
        //     console.log("Added locally but not saved to DB - added to addIds")
        //
        //     let newAddition;
        //
        //
        //
        //
        //     if(listLen === 0 ){
        //
        //         newAddition = {
        //             widget:
        //                 {
        //                     // id: 9909901,
        //                     widgetType: 'Heading',
        //                     size: '1',
        //                     text:'',
        //                     name: '',
        //                     href: '',
        //                     src: '',
        //                     height: '500',
        //                     width: '500',
        //                     listType: 'Unordered',
        //                     listItems: '',
        //                     topicId: state.topicId,
        //                     widgetOrder: listLen+1
        //                 }
        //         }
        //
        //         widgetURL = 'http://localhost:8080/api/topic/'+ state.topicId.toString() + '/widget';
        //         console.log("adding instantly");
        //
        //         fetch(widgetURL, {
        //                 method: 'post',
        //                 body: JSON.stringify(newAddition),
        //                 headers: {
        //                     'content-type': 'application/json'
        //                 }
        //             }
        //         ).then(function(response){
        //             return response.json();
        //         }).then(function(widget)
        //         {
        //             console.log("NEWLY ADDED widget id: ", widget.id);
        //             newAddition.widget.id = widget.id;
        //             console.log("NEW ADDITION ID UPDATED: ", newAddition.widget.id)
        //         });
        //         console.log("ADDED instantly");
        //
        //         return
        //         (JSON.parse(JSON.stringify({
        //             widgets: [...state.widgets, newAddition],
        //             preview: state.preview,
        //             topicId: state.topicId
        //         })));
        //     }
        //     else{
        //
        //         newAddition = {
        //             widget:
        //                 {
        //                     // id: state.widgets[state.widgets.length -1].id + 823123,
        //                     widgetType: 'Heading',
        //                     size: '1',
        //                     text:'',
        //                     name: 'HEADING NAME',
        //                     href: '',
        //                     src: '',
        //                     height: '500',
        //                     width: '500',
        //                     listType: 'Unordered',
        //                     listItems: '',
        //                     topicId: state.topicId,
        //                     widgetOrder: listLen+1
        //                 }
        //         }
        //
        //         widgetURL = 'http://localhost:8080/api/topic/'+ state.topicId.toString() + '/widget';
        //         console.log("adding instantly");
        //
        //         fetch(widgetURL, {
        //                 method: 'post',
        //                 body: JSON.stringify(newAddition),
        //                 headers: {
        //                     'content-type': 'application/json'
        //                 }
        //             }
        //         ).then(function(response){
        //             return response.json();
        //         }).then(function(widget)
        //         {
        //             console.log("NEWLY ADDED widget id: ", widget.id);
        //             newAddition.widget.id = widget.id;
        //             console.log("NEW ADDITION ID UPDATED: ", newAddition.widget.id)
        //         });
        //         console.log("ADDED instantly");
        //
        //         return
        //         (JSON.parse(JSON.stringify({
        //             widgets: [...state.widgets, newAddition],
        //             preview: state.preview,
        //             topicId: state.topicId
        //         })));
        //
        //
        //     }


        case constants.SELECT_WIDGET_TYPE:

            console.log("WIDGET TYPE CHANGED:  ", action.widgetType);
            let newState = {
                widgets: state.widgets.filter((widget) => {
                    if(widget.id === action.id) {
                        widget.widgetType = action.widgetType
                    }
                    return true;}),
                preview: state.preview,
                topicId: state.topicId
            }
            return (JSON.parse(JSON.stringify(newState)));



        case constants.SAVE:

            console.log("save fired !");
            console.log(state.widgets);
            console.log("just create new widgets and add them to DB");

            // delete all WIDGETS for this topic which are lying in DB
            console.log("Starting expunge");

                fetch('https://kt-course-manager-server.herokuapp.com/api/topic/' + state.topicId.toString()+'/widget/delete',
                    {
                        method: 'delete',
                        headers: {
                            'content-type': 'application/json'}
                    })
                    .then(function (response) {
                       return response.json();
                    }).then(function (deletedWidgets)
                {
                    console.log("DB has deleted: \n",deletedWidgets )
                    console.log("Expunge complete");
                    console.log("Saving current state now");
                    let widgetURL;
                    for(var i=0; i < state.widgets.length; i++) {
                        widgetURL = 'https://kt-course-manager-server.herokuapp.com/api/topic/' + state.topicId.toString()+'/widget';
                        console.log(widgetURL)
                        fetch(widgetURL,
                            {
                                method: 'post',
                                body: JSON.stringify(state.widgets[i]),
                                headers: {
                                    'content-type': 'application/json'}
                            }).then(function(response){
                            return response.json();
                        }).then(function(widget){
                            console.log(widget);
                        });
                    }
                    console.log("All widgets saved !");
                    alert("\nAll widgets saved !")
                });


            // console.log("TOPIC ID: ", state.topicId);

            // for(var c=0; c< state.widgets.length; c++){
            //     console.log("Deleting id: ", state.widgets[c])
            //         widgetURL = 'http://localhost:8080/api/widget/delete';
            //         // console.log(widgetURL);
            //         fetch(widgetURL, {
            //             method: 'delete',
            //             body: JSON.stringify(state.widgets[c]),
            //             headers: {
            //                 'content-type': 'application/json'}
            //         })
            //             .then(function (response) {
            //                 console.log("deleted\n");
            //             });
            // }

            // delete all for topic

            // widgetURL = 'http://localhost:8080/api/topic/' + state.topicId.toString()+'/widget/save';
            // // console.log(widgetURL);
            // fetch(widgetURL, {
            //     method: 'post',
            //     body: JSON.stringify(state.widgets),
            //     headers: {
            //         'content-type': 'application/json'}
            // })




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

           return state;

        case constants.ADD_WIDGET:

            console.log("TOPIC ID: ", state.topicId);
            console.log("Added locally but not saved to DB - added to addIds")
            autoIncrement =autoIncrement+10;
            console.log("Length: ", state.widgets.length)
            console.log("ID", autoIncrement);
            return (
                {
                    widgets: [...state.widgets,
                        {
                            id: autoIncrement,
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
                            topicId: state.topicId,
                            widgetOrder: state.widgets.length+1
                        }],
                    preview: state.preview,
                    topicId: state.topicId
                }
            );


        case constants.DELETE_WIDGET:
            console.log("Deleted locally : deleteID : ", action.id)

            deleteIds.push(action.id);
            return(
                {widgets: state.widgets.filter(widget => {
                        return (
                            widget.id !== action.id
                        );
                    }),
                    preview: state.preview,
                    topicId: state.topicId
                }
            );

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

        case constants.FIND_ALL_WIDGETS_BY_TOPIC:
            // console.log("Action widgets: ",action.widgets)
            // return ({widgets: action.widgets});
            let newState2;
            newState2 = Object.assign({}, state)
            newState2.widgets = action.widgets
            return newState2;





        case constants.PARAGRAPH_TEXT_CHANGED:

            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.text = action.text
                    }
                    return Object.assign({}, widget)
                }),
                preview: state.preview,
                topicId: state.topicId
            }

        case constants.PARAGRAPH_NAME_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.name = action.name
                    }
                    return Object.assign({}, widget)
                }),
                preview: state.preview,
                topicId: state.topicId
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
                preview: state.preview,
                topicId: state.topicId
            }

        case constants.LIST_NAME_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.name = action.name
                    }
                    return Object.assign({}, widget)
                }),
                preview: state.preview,
                topicId: state.topicId
            }

        case constants.LIST_TYPE_CHANGED:

            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.listType = action.listType
                    }
                    return Object.assign({}, widget)
                }),
                preview: state.preview,
                topicId: state.topicId
            }


        case constants.LINK_HREF_CHANGED:

            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.href = action.href
                    }
                    return Object.assign({}, widget)
                }),
                preview: state.preview,
                topicId: state.topicId
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
                preview: state.preview,
                topicId: state.topicId
            }

        case constants.LINK_NAME_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.name = action.name
                    }
                    return Object.assign({}, widget)
                }),
                preview: state.preview,
                topicId: state.topicId
            }

        case constants.IMAGE_NAME_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.name = action.name
                    }
                    return Object.assign({}, widget)
                }),
                preview: state.preview,
                topicId: state.topicId
            }

        case constants.IMAGE_SRC_CHANGED:

            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.src = action.src
                    }
                    return Object.assign({}, widget)
                }),
                preview: state.preview,
                topicId: state.topicId
            }



        default:
            return state;
    }
}