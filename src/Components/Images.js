import React from 'react'
import './Images.css'

const Images = () => {
    return (
        <div className="specialization">
            <h1>Our Specializations</h1>
            <div className="specialization-row">
                <div className="specialization-item">
                    <img
                    alt="..."
                    className="rounded-circle img-raised"
                    src={require("../images/etabs.png").default}
                    ></img>
                </div>
                <div className="specialization-item">
                    <img
                    alt="..."
                    className="rounded-circle img-raised"
                    src={require("../images/Revit.jpg").default}
                    ></img>
                </div>
                <div className="specialization-item">
                    <img
                    alt="..."
                    className="rounded-circle img-raised"
                    src={require("../images/Autocad.png").default}
                    ></img>
                </div>
            </div>
        </div>
    )
}

export default Images
