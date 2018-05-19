import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';


export default class CourseCard
    extends React.Component
{ render() {
    return (
        <div className="card shadow rounded"
             styles={{width: '12rem'}}>
            <div className="card-header text-center ">
                Information Retrieval
            </div>
            <div className="card-body">
                <img className="card-img-top"
                     src="https://cdn.magnapubs.com/media/newspics/mos-course-design-PC18HA-4-10-18.jpg"/>

                {/*<h5 className="card-title">*/}
                    {/*Course Card title*/}
                {/*</h5>*/}
            </div>
            <div class="card-footer">
                <p className="card-text">
                   Course card description text...

                </p>
                <a href="#" className="btn btn-primary">
                    More&nbsp;
                    <i className="fa fa-pencil"></i>
                    &nbsp;
                    <i className="fa fa-times"></i>
                    &nbsp;
                    <i className=" fa fa-trash-o"></i>

                </a>
                <div class="float-right">

                        <button className="btn btn-light" type="button">
                            <i className="fa fa-ellipsis-v"></i>
                        </button>
                    {/*/!*<div className="dropdown">*!/*/}
                        {/*/!*<div className="dropdown-menu">*!/*/}
                            {/*/!*<button className="dropdown-item" type="button">Action</button>*!/*/}
                            {/*/!*<button className="dropdown-item" type="button">Another action</button>*!/*/}
                            {/*/!*<button className="dropdown-item" type="button">Something else here</button>*!/*/}
                        {/*/!*</div>*!/*/}
                    {/*</div>*/}
                </div>
            </div >
        </div>)
}}