import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom'
import CourseService from "../services/CourseService";


export default class CourseCard
    extends React.Component
{
    constructor(props) {
        super(props);
        this.courseService = CourseService.instance;

    }



     render() {

         var c = this.props.course.created;
         if(c != null){
             c = c.substring(0, c.indexOf('T'));
         }
         else{c='YYYY-MM-DD';}

         var ld = this.props.course.modified;
         if(ld != null){
             ld = ld.substring(0, ld.indexOf('.')).replace('T',' | ');
         }
         else{ld='YYYY-MM-DD | HH:MM:SS';}

    return (
        <div className="card shadow rounded " style={{width:'54rem', backgroundColor:'rgba(0,240,100,0.01)'}}>

            <div className="card-header">
                <Link to=
                          {`/course/${this.props.course.id}/edit`}>
                {this.props.course.title}
                </Link>
            </div>
            <div className="card-body">
                <img className="card-img-top" alt={"course-icon"}
                     src="https://cdn.magnapubs.com/media/newspics/mos-course-design-PC18HA-4-10-18.jpg"/>
                <div className="mt-2">
                <b>Created:</b> <br/>{c}
                <br/>
                <b>Last Modified:</b> <br/> {ld}
                </div>
                {/*<h5 className="card-title">*/}
                    {/*Course Card title*/}
                {/*</h5>*/}
            </div>
            <div className="card-footer">
                {/*<p className="card-text">*/}
                   {/*Course card description text...*/}

                {/*</p>*/}

                        <button className="btn btn-light" type="button">
                            <i className="fa fa-ellipsis-v"></i>
                        </button>

                    <span className="float-right">
                    <button onClick={() =>
                    {this.props.update(this.props.course.id)}}
                            className="edit btn btn-outline-success pr-1 pl-1 pt-0 pb-0" style={{border:'0px solid transparent'}}>
                        <i className="fa fa-pencil fa-2x"></i></button>
                        &nbsp;
                        {/*<a href="#"><i className="fa fa-times"></i></a>*/}
                        <button
                            onClick={() =>
                            {this.props.delete(this.props.course.id)}}
                            className="delete btn btn-outline-danger pr-1 pl-1 pt-0 pb-0" style={{border:'0px solid transparent'}}>
                        <i className="fa fa-times fa-2x"></i></button>
                 </span>
                    {/*/!*<div className="dropdown">*!/*/}
                        {/*/!*<div className="dropdown-menu">*!/*/}
                            {/*/!*<button className="dropdown-item" type="button">Action</button>*!/*/}
                            {/*/!*<button className="dropdown-item" type="button">Another action</button>*!/*/}
                            {/*/!*<button className="dropdown-item" type="button">Something else here</button>*!/*/}
                        {/*/!*</div>*!/*/}
                    {/*</div>*/}

            </div >
        </div>)
}}