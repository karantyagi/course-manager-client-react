import React from 'react';
import {connect} from "react-redux";
import {stateToPropsMapper, dispatcherToPropsMapper} from "../mappers/widgetMappers";


const newListItems = (listItems) => {
    // console.log("new items on change: ", listItems)
    let item =  listItems.split("\n");
    let items =  item.map((i,key) => {
        return(
            <li key={"ITEM"+key.toString()} className={"pb-1 pl-1"}>{i}</li>)});
    return (items)
}


const ListWidget = ({widget, preview, listTypeChanged, listItemChanged, listNameChanged}) => {
    let selectedType;
    let inputText;
    let inputName;

    return (
        <div>
            <div hidden={preview}>
                <div className={'mb-2'}>
                <textarea className="form-control" rows="4"
                          placeholder={'Put each\nitem in\na seperate row'}
                          onChange={() => listItemChanged(widget.id, inputText.value)}
                          value={widget.listItems}
                          ref={node => inputText = node}></textarea>
                </div>
                <div className={'mb-2'}>
                    <select className="custom-select"
                            ref={node => selectedType  = node}
                            defaultValue={widget.listType}
                            onChange={() => listTypeChanged(widget.id, selectedType.value)}>
                        <option value="Unordered">Unordered</option>
                        <option value="Ordered">Ordered</option>
                    </select>
                </div>
                <div className={'mb-3'}>
                    <input type="text" className="form-control"
                           placeholder="Widget Name"
                           onChange={() => listNameChanged(widget.id, inputName.value)}
                           value={widget.name}
                           ref={node => inputName = node}></input>
                </div>
                <h5 style={{color:"Gray"}}>Preview</h5>
            </div>

            <div>
                {widget.listType == "Unordered" && <ul>{newListItems(widget.listItems)}</ul>}
                {widget.listType == "Ordered" && <ol>{newListItems(widget.listItems)}</ol>}

            </div>
        </div>
    );
}

export const ListContainer = connect(stateToPropsMapper,dispatcherToPropsMapper)(ListWidget);