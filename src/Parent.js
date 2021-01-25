import React, { Component } from 'react';
import {Child} from './Child';

export class Parent extends React.Component {
    state = {msg: ""}
    cbFunction = (cb) => {
        this.setState({msg: cb})
    }
    render() {
        return (<div>
            <h4>Hey There !! From My Parent Componenet</h4>
            <Child dataFromParent="Souvik" parentCallback={this.cbFunction}></Child>
            <p>{this.state.msg}</p>
        </div>)
    }
}   