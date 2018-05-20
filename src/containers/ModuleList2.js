import React from 'react'
import ModuleListItem from '../components/ModuleListItem'

export  default class ModuleList2
    extends React.Component {



    render() {
        return (
            <div className={"container-fluid"}>
                <ModuleListItem title={"Javascript Module"}/>
                <ModuleListItem title={"jQuery Module"}/>
                <ModuleListItem title={"React Module"}/>
                <ModuleListItem title={"Node Module"}/>
                <ModuleListItem title={"Angular Module"}/>
            </div>
        );}}

