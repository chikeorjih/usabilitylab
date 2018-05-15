import React from "react";
import PropTypes from 'prop-types';


class ShowHide extends React.Component {
    constructor(props) {
        super();

        this.state = {
            text: `${props.children[0].props.children.substring(0, props.config.trim)}...`,
            isExpanded: false,
        };
    }

    handleToggle() {
        const isExpanded = !this.state.isExpanded;

        this.setState({
            isExpanded,
            text: isExpanded ? this.props.children : `${this.props.children[0].props.children.substring(0, this.props.config.trim)}...`,
        });
    }

    render() {
        const toggleButton = this.state.isExpanded ? '- Show Less' : '+ Show More';

        return (
            <span className="show-hide">
                {this.state.text}
                <span className="text-toggle" onClick={this.handleToggle.bind(this)}>{toggleButton}</span>
            </span>
        );
    }
}

ShowHide.PropTypes = {
    config: PropTypes.object
};

export default ShowHide;