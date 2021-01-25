import React, {Componenet} from 'react';

export class Child extends React.Component {
    sendData  = () => {this.props.parentCallback("Hey.... There !!!!")}
    render() {
        return(
            <div>
                <h6>Hey There !! From Child Componenet</h6>
                <h6>{this.props.dataFromParent}</h6>
                <button onClick={this.sendData}>Send To parent</button>
            </div>
        )
    }
}