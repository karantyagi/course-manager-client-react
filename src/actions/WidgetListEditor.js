import * as constants from "../constants/WidgetListEditor"

export const findAllWidgets = dispatch => {
    fetch('http://localhost:8080/api/widget')
        .then(response => (response.json()))
        .then(widgets => dispatch({
            type: constants.FIND_ALL_WIDGETS,
            widgets: widgets }))
}


export const addWidget = dispatch => (dispatch({type: constants.ADD_WIDGET}))


export const saveWidgetList = dispatch => (dispatch({type: constants.SAVE}))


export const previewWidgetList = dispatch => (dispatch({type: constants.PREVIEW}))


export const headingSizeChanged = (dispatch, widgetId, newSize) => (
    dispatch({
        type: constants.HEADING_SIZE_CHANGED,
        id: widgetId,
        size: newSize})
)


export const headingTextChanged = (dispatch, widgetId, newText) => (
    dispatch({
        type: constants.HEADING_TEXT_CHANGED,
        id: widgetId,
        text: newText})
)


export const headingNameChanged = (dispatch, widgetId, newName) => (
    dispatch({
        type: constants.HEADING_NAME_CHANGED,
        id: widgetId,
        name: newName})
)
