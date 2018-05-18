import React from 'react'

export default class CourseCard
    extends React.Component
{ render() {
    return (
        <div className="card"
             styles={{width: '18rem'}}>
            <img className="card-img-top"
                 src="https://cdn.magnapubs.com/media/newspics/mos-course-design-PC18HA-4-10-18.jpg"/>
            <div className="card-body">
                <h5 className="card-title">
                    Card title
                </h5>
                <p className="card-text">
                    Card text.
                </p>
                <a href="#" className="btn btn-primary">
                    More...
                </a>
            </div></div>)
}}