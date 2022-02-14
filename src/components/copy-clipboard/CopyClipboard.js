import React from 'react';
import CopyToClipboard from "@vigosan/react-copy-to-clipboard";
import {NotificationManager} from "react-notifications";

class CopyClipboard extends React.Component {

    copyAddress = copyFunction => {
        copyFunction(this.props.value);
        NotificationManager.success("Copied", "Successful")
    }

    render = () => {
        return (
            <CopyToClipboard
                render={({copy}) => (
                    <div onClick={() => this.copyAddress(copy)}>
                        <div className="address-right">
                            {this.props.value.slice(-5)}
                        </div>
                        <div className="overflow-ellipsis">
                            {this.props.value.slice(0, -5)}
                        </div>

                    </div>
                )}
            />

        )
    }
}

export default CopyClipboard;
