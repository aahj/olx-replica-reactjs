import React, { Component } from 'react'

export default class Input_group extends Component {
    render() {
        return (
            <div className="input-group input-group-lg">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-lg">{this.props.label}</span>
                </div>
                <input type="number" name='price' className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-lg"
                    onChange={this.props.onChange}
                    min = {this.props.min}
                    max = {this.props.max}
                    value = {this.props.value}
                    />
            </div>
        )
    }
}
