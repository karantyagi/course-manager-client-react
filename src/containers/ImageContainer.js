import React from 'react';
import {connect} from "react-redux";
import {stateToPropsMapper, dispatcherToPropsMapper} from "../mappers/widgetMappers";

const ImageWidget = ({widget}) => {
    return (
        <div>
            <div className={'mb-2'}>
                <input type="text" className="form-control"
                       placeholder="Image URL"></input>
            </div>
            <div className={'mb-3'}>
                <input type="text" className="form-control"
                       placeholder="Widget Name"></input>
            </div>
            <h5 style={{color:"Gray"}}>Preview</h5>
            <img  src={require('./sample.jpg')} alt="imagePreview" className="img-thumbnail" />
        </div>
    );
}

export const ImageContainer = connect(stateToPropsMapper,dispatcherToPropsMapper)(ImageWidget);