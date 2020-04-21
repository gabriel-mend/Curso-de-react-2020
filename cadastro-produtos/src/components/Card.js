import React from 'react'

export default (props) => (
    <div className="card">
        <div className="card-header">
            <h4>
                {props.header}
            </h4>
        </div>
        <div className="card-body">
            {props.children}
        </div>
    </div>
)