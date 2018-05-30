import React from 'react';
import * as constants from "../constants/WidgetListEditor"

export const findAllWidgets = dispatch => {
    fetch('http://localhost:8080/api/widget')
        .then(response => (response.json()))
        .then(widgets => dispatch({
            type: constants.FIND_ALL_WIDGETS,
            widgets: widgets }))
}

export const findAllWidgetsByTopic = (dispatch,widgetUrl) => {
    fetch(widgetUrl)
        .then(response => (response.json()))
        .then(widgets => dispatch({
            type: constants.FIND_ALL_WIDGETS_BY_TOPIC,
            widgets: widgets }))
}


export const moveUp = widget => {
    return {
        type: constants.MOVE_UP, widget: widget
    }
}

export const moveDown = widget => {
    return {
        type: constants.MOVE_DOWN, widget: widget
    }
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


export const paragraphTextChanged = (dispatch, widgetId, newText) => (
    dispatch({
        type: constants.PARAGRAPH_TEXT_CHANGED,
        id: widgetId,
        text: newText})
)


export const paragraphNameChanged = (dispatch, widgetId, newName) => (
    dispatch({
        type: constants.PARAGRAPH_NAME_CHANGED,
        id: widgetId,
        name: newName})
)

export const listItemChanged = (dispatch, widgetId, newListItems) => (
    dispatch({
        type: constants.LIST_ITEMS_CHANGED,
        id: widgetId,
        listItems: newListItems})
)


export const listNameChanged = (dispatch, widgetId, newName) => (
    dispatch({
        type: constants.LIST_NAME_CHANGED,
        id: widgetId,
        name: newName})
)

export const listTypeChanged = (dispatch, widgetId, newType) => (
    dispatch({
        type: constants.LIST_TYPE_CHANGED,
        id: widgetId,
        listType: newType})
)


export const linkTextChanged = (dispatch, widgetId, newText) => (
    dispatch({
        type: constants.LINK_TEXT_CHANGED,
        id: widgetId,
        text: newText})
)

export const linkNameChanged = (dispatch, widgetId, newName) => (
    dispatch({
        type: constants.LINK_NAME_CHANGED,
        id: widgetId,
        name: newName})
)

export const linkHrefChanged = (dispatch, widgetId, newHref) => (
    dispatch({
        type: constants.LINK_HREF_CHANGED,
        id: widgetId,
        href: newHref})
)

export const imageNameChanged = (dispatch, widgetId, newName) => (
    dispatch({
        type: constants.IMAGE_NAME_CHANGED,
        id: widgetId,
        name: newName})
)

export const imageSrcChanged = (dispatch, widgetId, newSrc) => (
    dispatch({
        type: constants.IMAGE_SRC_CHANGED,
        id: widgetId,
        src: newSrc})
)