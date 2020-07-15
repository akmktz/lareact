import React from 'react';
import './Test.scss';

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            label: props.label ? props.label : 'Button',
            message: props.match.params.message
        };

        // Эта привязка обязательна для работы `this` в колбэке.
        // this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (e) => {
        e.preventDefault();
        alert(this.state.message);
    }

    render() {
        return (
            <div class="button-test">
                <button
                    onClick={this.handleClick}
                    className="square"
                >
                    {this.state.label}
                </button>
            </div>
        );
    }
}

export default Test;
