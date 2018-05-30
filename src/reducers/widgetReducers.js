import * as constants from "../constants/WidgetListEditor"


const reorder = (arr, to ,from) => {
    arr.splice(to, 0, arr.splice(from, 1)[0]);
    return arr;
}

var autoIncrement = 100000;

export const widgetReducer = (state , action) => {

    let index;
    switch(action.type){

        case constants.PREVIEW:
            return {
                widgets: state.widgets,
                preview: !state.preview,
                topicId: state.topicId
            }


        case constants.MOVE_UP:

            let upOrder = {widgets: [...state.widgets], preview: state.preview, topicId: state.topicId}
            index = action.widget.widgetOrder - 1;
            console.log("index of ",action.widget.widgetType," : ", index);

            if(index !== 0){

                upOrder.widgets = reorder(upOrder.widgets, index, index - 1);

                upOrder.widgets[index-1].widgetOrder = index;
                upOrder.widgets[index].widgetOrder = index+1;

                return (JSON.parse(JSON.stringify(upOrder)))
            }
            console.log("NEW WIDGET ORDER : ",state.widgets);
            return (state);

        case constants.MOVE_DOWN:

            let downOrder = {widgets: [...state.widgets], preview: state.preview, topicId: state.topicId}

            index = action.widget.widgetOrder - 1;
            console.log("index of ",action.widget.widgetType," : ", index);
            if(index !== state.widgets.length-1){

                downOrder.widgets = reorder(downOrder.widgets, index, index + 1);

                downOrder.widgets[index].widgetOrder = index+1;
                downOrder.widgets[index+1].widgetOrder = index+2;

                return (JSON.parse(JSON.stringify(downOrder)))

            }

            console.log("NEW WIDGET ORDER : ",state.widgets);

            return (state);


        case constants.HEADING_SIZE_CHANGED:

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

        case constants.FIND_ALL_WIDGETS:

            let newState1;
            newState1 = Object.assign({}, state)
            newState1.widgets = action.widgets
            return newState1;

        case constants.FIND_ALL_WIDGETS_BY_TOPIC:

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