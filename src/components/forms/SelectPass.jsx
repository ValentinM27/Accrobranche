import React, {Component} from 'react';

class SelectPass extends Component {
    render() {
        const pass = this.props.pass
        return (
            <div>
                <h1>{pass.name}</h1>
                <p>{pass.description}</p>
            </div>
        );
    }
}

export default SelectPass;