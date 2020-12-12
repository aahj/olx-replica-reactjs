import React, { Component } from 'react'

export default class ProgressBar extends Component {
    render() {
        return (
            <div>
                <div style={{ marginBottom: '10px' }} className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated"
                        role="progressbar"
                        aria-valuenow={this.props.progress}
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: this.props.progress + '%' }}
                    >
                        {this.props.progress}
                    </div>
                </div>
            </div>
        )
    }
}
