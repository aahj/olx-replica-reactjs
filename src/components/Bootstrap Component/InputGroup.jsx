import React, { Component } from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default class InputGroups extends Component {
    render() {
        return (
            <div>
                <InputGroup className="mb-3 mt-2">
                    <InputGroup.Append>
                        <Button variant="outline-secondary"><FontAwesomeIcon icon={faSearch} /></Button>
                    </InputGroup.Append>
                    <FormControl
                        placeholder={this.props.placeholder}
                        aria-label={this.props.aria_label}
                        aria-describedby="basic-addon2"
                        onChange={this.props.onChange}
                        name={this.props.name}
                        value={this.props.value}
                        id = {this.props.id}
                        disabled = {this.props.disabled}
                    />
                </InputGroup>
            </div>
        )
    }
}
