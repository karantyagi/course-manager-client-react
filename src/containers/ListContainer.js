import React from 'react';
import {connect} from "react-redux";
import {stateToPropsMapper, dispatcherToPropsMapper} from "../mappers/widgetMappers";

const ListWidget = ({widget}) => {
    return (
        <div>
            <div className={'mb-2'}>
                <textarea className="form-control" rows="4"
                          placeholder={'Put each\nitem in\na seperate row'}></textarea>
            </div>
            <div className={'mb-2'}>
                <select className="custom-select">
                    <option>Unordered</option>
                    <option>Ordered</option>
                </select>
            </div>
            <div className={'mb-3'}>
                <input type="text" className="form-control"
                       placeholder="Widget Name"></input>
            </div>
            <h5 style={{color:"Gray"}}>Preview</h5>
            <h3> Actual widget displayed as html rendering</h3>
        </div>
    );
}

export const ListContainer = connect(stateToPropsMapper,dispatcherToPropsMapper)(ListWidget);