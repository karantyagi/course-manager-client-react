import React from 'react';
import {connect} from "react-redux";
import {stateToPropsMapper, dispatcherToPropsMapper} from "../mappers/widgetMappers";


const ParagraphWidget = ({widget, preview, paragraphTextChanged, paragraphNameChanged,}) => {
    let inputTxt;
    let inputName;
    return (
        <div>
            <div hidden={preview}>
                <div className={'mb-2'}>
                    <textarea className="form-control" rows="3" placeholder="lorem ipsum"
                              onChange={() => paragraphTextChanged(widget.id, inputTxt.value)}
                              value={widget.text}
                              ref={node => inputTxt = node}>

                    </textarea>
                </div>
                <div className={'mb-3'}>
                    <input type="text" className="form-control"
                           placeholder="Widget Name"
                           onChange={() => paragraphNameChanged(widget.id, inputName.value)}
                           value={widget.name}
                           ref={node => inputName = node}></input>
                </div>
                <h4 style={{color:"Gray"}}>Preview</h4>
            </div>

            <div>
                <pre>{widget.text}</pre>
            </div>
        </div>
    );
}

export const ParagraphContainer = connect(stateToPropsMapper,dispatcherToPropsMapper)(ParagraphWidget);