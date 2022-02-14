import React, {Component} from "react";

export default class BoxesInformation extends Component {
    render = () => {
        return (
            <div className="information card">
                <div className="card-body">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.count}</p>
                </div>
            </div>
        );
    }
}
