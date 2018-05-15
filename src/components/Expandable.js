import React from "react";
import PropTypes from 'prop-types';


class Expandable extends React.Component {
    constructor() {
        super();

        let title = '';
        let content = '';

        this.props.children.forEach((child) => {
            if (child.type === 'h3'){
                title = child.props.children;
            } else if (child.type === 'div') {
                content = child.props.children;
            }
        });

        this.state = {
            title,
            content,
            isExpanded: false,
        };
    }

    handleToggle() {
        const isExpanded = !this.state.isExpanded;

        this.setState({
            isExpanded
        });
    }

    render() {
        const expandableCss = this.state.isExpanded ? 'expanded' : 'collapsed';
        const buttonText = this.state.isExpanded ? 'Collapse' : 'Expand';

        return (
            <div className={`expandable ${expandableCss}`}>
                <div className="expandable-initial">
                    <div className="number"><span>{this.props.number}</span></div>
                    <p className="title">{this.state.title}</p>
                    <button onClick={this.handleToggle.bind(this)}>{buttonText}</button>
                </div>
                <div className={`expandable-content ${expandableCss}`}>
                    {this.state.content}
                </div>
            </div>
        );
    }
}

Expandable.PropTypes = {
    number: PropTypes.string
};

export default Expandable;