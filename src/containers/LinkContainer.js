import React from 'react';
import {connect} from "react-redux";
import {stateToPropsMapper, dispatcherToPropsMapper} from "../mappers/widgetMappers";


const LinkWidget = ({widget}) => {
    return (
        <div>
            <div className={'mb-2'}>
                <input type="text" className="form-control"
                       placeholder="Link URL"></input>
            </div>
            <div className={'mb-3'}>
                <input type="text" className="form-control"
                       placeholder="Link text"></input>
            </div>
            <h5 style={{color:"Gray"}}>Preview</h5>
            <h3> Actual widget displayed as html rendering</h3>
        </div>
    );
}


export const LinkContainer = connect(stateToPropsMapper,dispatcherToPropsMapper)(LinkWidget);