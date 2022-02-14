import React from "react";
import QRCode from "react-qr-code";
import CopyClipboard from "../copy-clipboard/CopyClipboard";

class AddressCard extends React.Component {
    render = () => {
        if (this.props.showOrHide === "show") {
            return (
                <div className="address card card-body col-12 ">
                    <label>click on the box to copy the address</label>
                    <br/>
                    <div className="text-center">
                        <CopyClipboard value={this.props.address}/>
                        <br/>
                        <QRCode
                            size={128}
                            value={this.props.address}
                        />
                    </div>
                </div>
            );
        } else {
            return (
                <div className="col-12">
                    <div className="text-center">
                    </div>
                </div>
            );
        }
    }
}

export default AddressCard;
