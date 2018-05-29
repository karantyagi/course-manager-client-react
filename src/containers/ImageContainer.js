import React from 'react';
import {connect} from "react-redux";
import {stateToPropsMapper, dispatcherToPropsMapper} from "../mappers/widgetMappers";

const ImageWidget =  ({widget, preview, imageSrcChanged, imageNameChanged}) => {
    let inputSrc;
    let inputName;
    let defaultHeight = 500;
    let defaultWidth = 500;

    if(parseInt(widget.height) < defaultHeight){
        defaultHeight = widget.height;}

    if(parseInt(widget.width) < defaultWidth){
        defaultWidth = widget.width;}

    if(widget.height === null || widget.height === ''){defaultHeight = 500}
    if(widget.width === null || widget.width === ''){defaultWidth = 500}


    return (
        <div>
            <div hidden={preview}>
                <div className={'mb-2'}>
                    <input type="text" className="form-control"
                           placeholder="Image URL"
                           onChange={() => imageSrcChanged(widget.id, inputSrc.value)}
                           value={widget.src}
                           ref={node => inputSrc = node}></input>
                </div>
                <div className={'mb-3'}>
                    <input type="text" className="form-control"
                           placeholder="Widget Name"
                           onChange={() => imageNameChanged(widget.id, inputName.value)}
                           value={widget.name}
                           ref={node => inputName = node}></input>
                </div>
                <h5 style={{color:"Gray"}}>Preview</h5>
            </div>
            <img src={widget.src}
                 alt="Unable to load image" className="img-thumbnail"
                 height={defaultHeight.toString()}
                 width={defaultWidth.toString()}/>
        </div>
    );
}

export const ImageContainer = connect(stateToPropsMapper,dispatcherToPropsMapper)(ImageWidget);