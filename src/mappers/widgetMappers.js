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

                listTextChanged: (widgetId, newText) => actions.listTextChanged(dispatch, widgetId, newText),
                listNameChanged: (widgetId, newName) => actions.listNameChanged(dispatch, widgetId, newName),
                listTypeChanged: (widgetId, newType) => actions.listTypeChanged(dispatch, widgetId, newType)
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
                // headingSizeChanged: (widgetId, newSize) => actions.headingSizeChanged(dispatch, widgetId, newSize),
                // headingTextChanged: (widgetId, newText) => actions.headingTextChanged(dispatch, widgetId, newText),
                // headingNameChanged: (widgetId, newName) => actions.headingNameChanged(dispatch, widgetId, newName)
                //

            })
