import React, {Component} from "react";
import {Form, Button} from "react-bootstrap";
import {ApiNetwork} from "../network/Api";
import AddressCard from "./address-card/AddressCard";
import {NotificationManager} from "react-notifications";
import {errorMessage} from "../error-formatter/ErrorFormatters"

class SimpleForm extends Component {
    state = {
        pk: "",
        address: "",
        QRCodeState: "hide"
    };

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleFromSubmit = (event) => {
        event.preventDefault();

        ApiNetwork.getAddress(this.state.pk)
            .then((res) => {
                const address = res?.data?.address;
                this.setState({address: address, QRCodeState: "show"});
            })
            .catch((error) => {
                NotificationManager.error(errorMessage(error), 'Network problem!', 5000);
            });
    }

    render = () => {
        return (
            <Form onSubmit={this.handleFromSubmit.bind(this)} className="form card card-body">
                <Form.Group controlId="form.pk">
                    <Form.Label>Enter your pk in this format: "stealth:pk"</Form.Label>

                    <Form.Control
                        className="mb-4"
                        type="text"
                        placeholder="stealth:pk"
                        value={this.state.pk}
                        name="pk"
                        required
                        onChange={this.handleInputChange.bind(this)}
                    />
                </Form.Group>

                <div className="row mb-3">
                    <div className="col text-center">
                        <Button variant="primary" type="submit" className="col-8">
                            submit
                        </Button>
                    </div>
                </div>

                <AddressCard
                    address={this.state.address} showOrHide={this.state.QRCodeState}
                />
            </Form>
        );
    }
}

export default SimpleForm;
