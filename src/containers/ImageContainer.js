import React from 'react';
import {connect} from "react-redux";
import {stateToPropsMapper, dispatcherToPropsMapper} from "../mappers/widgetMappers";
import * as constants from "../constants/WidgetListEditor";

const ImageWidget =  ({widget, preview, imageSrcChanged, imageNameChanged}) => {
    let inputSrc;
    let selectSearch;
    let inputName;
    let inputSearch;
    let googleSearchUrl = 'https://www.google.com/search?tbm=isch&q=';
    let flickrSearchUrl = 'https://www.flickr.com/search/?q=';
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
                <div className={'mb-2'}>
                    <div className={'row'}>
                        <div className={'col-9 mr-0 pr-2'}>
                            <input type="text" className="form-control"
                                   placeholder="Search images"
                                   // onChange={() => {console.log(inputSearch.value)}}
                                   ref={node => inputSearch = node}>
                            </input>
                        </div>
                        <div className={'col-2 pr-1 pl-0'}>
                            <select
                                ref={node => selectSearch  = node}
                                // onChange={() => {
                                //     console.log(selectSearch.value)}}
                                defaultValue={'Google'}
                                className="custom-select">
                                <option value={'Google'}>Google</option>
                                <option value={'Flickr'}>Flickr</option>
                            </select>
                        </div>

                        <div className={'col-1 ml-0 pl-2'}>
                            <button className={'btn btn-outline-secondary'}
                               onClick={() => {
                                   if(inputSearch.value != ''){
                                       if(selectSearch.value == 'Google'){
                                           window.open(googleSearchUrl+inputSearch.value,'_blank');}
                                       else{
                                           window.open(flickrSearchUrl+inputSearch.value,'_blank');}
                                       }
                                   }}>
                                <i className="fa fa-search" aria-hidden="true"></i></button>
                        </div>
                    </div>



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