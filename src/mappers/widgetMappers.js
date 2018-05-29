import * as actions from "../actions/WidgetListEditor";

export const stateToPropsMapper = (state) => {
    return (
        {
            widgets: state.widgets,
            preview: state.preview}
    );
}

export const dispatcherToPropsMapper =
    (dispatch) =>
        (
            {
                addWidget: () => actions.addWidget(dispatch),
                saveWidgetList: () => actions.saveWidgetList(dispatch),
                previewWidgetList: () => actions.previewWidgetList(dispatch),
                findAllWidgets: () => actions.findAllWidgets(dispatch),

                headingSizeChanged: (widgetId, newSize) => actions.headingSizeChanged(dispatch, widgetId, newSize),
                headingTextChanged: (widgetId, newText) => actions.headingTextChanged(dispatch, widgetId, newText),
                headingNameChanged: (widgetId, newName) => actions.headingNameChanged(dispatch, widgetId, newName),

                paragraphTextChanged: (widgetId, newText) => actions.paragraphTextChanged(dispatch, widgetId, newText),
                paragraphNameChanged: (widgetId, newName) => actions.paragraphNameChanged(dispatch, widgetId, newName),

                listItemChanged: (widgetId, newListItems) => actions.listItemChanged(dispatch, widgetId, newListItems),
                listNameChanged: (widgetId, newName) => actions.listNameChanged(dispatch, widgetId, newName),
                listTypeChanged: (widgetId, newType) => actions.listTypeChanged(dispatch, widgetId, newType),
                //
                linkHrefChanged: (widgetId, newHref) => actions.linkHrefChanged(dispatch, widgetId, newHref),
                linkTextChanged: (widgetId, newText) => actions.linkTextChanged(dispatch, widgetId, newText),
                linkNameChanged: (widgetId, newName) => actions.linkNameChanged(dispatch, widgetId, newName)
                //
                // headingSizeChanged: (widgetId, newSize) => actions.headingSizeChanged(dispatch, widgetId, newSize),
                // headingTextChanged: (widgetId, newText) => actions.headingTextChanged(dispatch, widgetId, newText),
                // headingNameChanged: (widgetId, newName) => actions.headingNameChanged(dispatch, widgetId, newName)
                //
                // headingSizeChanged: (widgetId, newSize) => actions.headingSizeChanged(dispatch, widgetId, newSize),
                // headingTextChanged: (widgetId, newText) => actions.headingTextChanged(dispatch, widgetId, newText),
                // headingNameChanged: (widgetId, newName) => actions.headingNameChanged(dispatch, widgetId, newName)
                //
                // headingSizeChanged: (widgetId, newSize) => actions.headingSizeChanged(dispatch, widgetId, newSize),
                // headingTextChanged: (widgetId, newText) => actions.headingTextChanged(dispatch, widgetId, newText),
                // headingNameChanged: (widgetId, newName) => actions.headingNameChanged(dispatch, widgetId, newName)
                //

            })
