import React from 'react';
import {connect} from "react-redux";
import {stateToPropsMapper, dispatcherToPropsMapper} from "../mappers/widgetMappers";


const LinkWidget =  ({widget, preview, linkTextChanged, linkHrefChanged, linkNameChanged}) => {
    let inputHref;
    let inputText;
    let inputName;


    return (
        <div>
            <div hidden={preview}>
                <div className={'mb-2'}>
                    <input type="text" className="form-control"
                           placeholder="Link URL"
                           onChange={() => linkHrefChanged(widget.id, inputHref.value)}
                           value={widget.href}
                           ref={node => inputHref = node}></input>
                </div>
                <div className={'mb-3'}>
                    <input type="text" className="form-control"
                           placeholder="Link text"
                           onChange={() => linkTextChanged(widget.id, inputText.value)}
                           value={widget.text}
                           ref={node => inputText = node}
                    ></input>
                </div>
                <div className={'mb-3'}>
                    <input type="text" className="form-control"
                           placeholder="Widget Name"
                           onChange={() => linkNameChanged(widget.id, inputName.value)}
                           value={widget.name}
                           ref={node => inputName = node}></input>
                </div>
                <h5 style={{color:"Gray"}}>Preview</h5>
            </div>
            <a href={widget.href}> {widget.text}</a>
        </div>
    );
}


export const LinkContainer = connect(stateToPropsMapper,dispatcherToPropsMapper)(LinkWidget);