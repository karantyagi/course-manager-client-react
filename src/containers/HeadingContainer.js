import React from 'react';
import {connect} from "react-redux";
import {stateToPropsMapper, dispatcherToPropsMapper} from "../mappers/widgetMappers";


const HeadingWidget = ({widget, preview, headingSizeChanged, headingTextChanged, headingNameChanged,}) => {
    let selectHeadingSize;
    let inputElem;
    let inputName;
    // console.log("preview inside Heading Widget: ", preview);

    return (
        <div>
            <div hidden={preview}>
                {/*<p>*/}
                {/*Final Preview mode: {preview.toString()}*/}
                {/*</p>*/}
                <div className={'mb-2'}>
                    <input type="text" id="headingText" className="form-control"
                           placeholder="Heading Text"
                           onChange={() => headingTextChanged(widget.id, inputElem.value)}
                           value={widget.text}
                           ref={node => inputElem = node}>
                    </input>
                </div>
                <div className={'mb-2'}>
                    {/*<p> "heading size:" {widget.size} </p>*/}
                    <select
                        ref={node => selectHeadingSize  = node}
                        onChange={() => headingSizeChanged(widget.id, selectHeadingSize.value)}
                        defaultValue={widget.size}
                        className="custom-select">
                        <option disabled>Choose size</option>
                        <option value="1">Heading 1</option>
                        <option value="2">Heading 2</option>
                        <option value="3">Heading 3</option>
                    </select>
                </div>
                <div className={'mb-3'}>
                    <input type="text" className="form-control"
                           placeholder="Widget Name"
                           onChange={() => headingNameChanged(widget.id, inputName.value)}
                           value={widget.name}
                           ref={node => inputName = node}></input>
                </div>
                <h4 style={{color:"Gray"}}>Preview</h4>
            </div>

            <div>
                {widget.size == 1 && <h1>{widget.text}</h1>}
                {widget.size == 2 && <h2>{widget.text}</h2>}
                {widget.size == 3 && <h3>{widget.text}</h3>}
            </div>
            {/*<h3> Actual widget displayed as html rendering</h3>*/}
        </div>
    );
}



export const HeadingContainer = connect(stateToPropsMapper,dispatcherToPropsMapper)(HeadingWidget);