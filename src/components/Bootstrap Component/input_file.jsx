import React, { Component } from 'react'

export default class Input_file extends Component {
    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <input type="file" className="form-control-file"
                            onChange={this.props.handleChange}
                            required
                        />
                    </div>
                </form>
            </div>
        )
    }
}
