import * as actions from "../actions/WidgetListEditor";

export const stateToPropsMapper = (state) => {
    return (
        {
            widgets: state.widgets,
            preview: state.preview,
            topicId: state.topicId
        }
    );
}

export const dispatcherToPropsMapper =
    (dispatch) =>
        (
            {
                addWidget: () => actions.addWidget(dispatch),
                saveWidgetList: () => actions.saveWidgetList(dispatch),
                previewWidgetList: () => actions.previewWidgetList(dispatch),
                findAllWidgetsByTopic: (widgetUrl) => actions.findAllWidgetsByTopic(dispatch,widgetUrl),
                findAllWidgets: () => actions.findAllWidgets(dispatch),

                headingSizeChanged: (widgetId, newSize) => actions.headingSizeChanged(dispatch, widgetId, newSize),
                headingTextChanged: (widgetId, newText) => actions.headingTextChanged(dispatch, widgetId, newText),
                headingNameChanged: (widgetId, newName) => actions.headingNameChanged(dispatch, widgetId, newName),

                paragraphTextChanged: (widgetId, newText) => actions.paragraphTextChanged(dispatch, widgetId, newText),
                paragraphNameChanged: (widgetId, newName) => actions.paragraphNameChanged(dispatch, widgetId, newName),

                listItemChanged: (widgetId, newListItems) => actions.listItemChanged(dispatch, widgetId, newListItems),
                listNameChanged: (widgetId, newName) => actions.listNameChanged(dispatch, widgetId, newName),
                listTypeChanged: (widgetId, newType) => actions.listTypeChanged(dispatch, widgetId, newType),

                linkHrefChanged: (widgetId, newHref) => actions.linkHrefChanged(dispatch, widgetId, newHref),
                linkTextChanged: (widgetId, newText) => actions.linkTextChanged(dispatch, widgetId, newText),
                linkNameChanged: (widgetId, newName) => actions.linkNameChanged(dispatch, widgetId, newName),

                imageSrcChanged: (widgetId, newSrc) => actions.imageSrcChanged(dispatch, widgetId, newSrc),
                imageNameChanged: (widgetId, newName) => actions.imageNameChanged(dispatch, widgetId, newName)

            })
