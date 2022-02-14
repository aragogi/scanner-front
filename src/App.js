import "./styles.css";
import BoxesInformation from "./components/boxes-information/BoxesInformation";

import 'react-notifications/lib/notifications.css';
import {NotificationContainer} from 'react-notifications';
import React, {Component} from "react";
import ReactLoading from "react-loading";
import Form from "./components/Form";

export default class App extends Component {
    state = {
        boxes: [],
        isLoading: true,
    };

    componentDidMount = async () => {
        const boxes = [
            {
                title: "all boxes",
                count: 10,
            },
            {
                title: "spent boxes",
                count: 4,
            },
            {
                title: "unspent boxes",
                count: 6,
            },
        ];
        this.setState({boxes, isLoading: false});
    }

    render = () => {
        let res = this.state.boxes;
        let {isLoading} = this.state;
        return (
            <>
                <NotificationContainer/>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Form locked={false} active={false}/>
                        </div>


                        {isLoading ? (
                            <ReactLoading type={"bars"} color="#021155"/>
                        ) : (
                            res?.map((x) => {
                                return (
                                    <div className="col-4 mt-4">
                                        <BoxesInformation title={x.title} count={x.count}/>
                                    </div>
                                );
                            })
                        )}
                    </div>
                </div>
            </>
        );
    }
}
