import React from "react";
import PropTypes from 'prop-types';


class Expandable extends React.Component {
    constructor(props) {
        super();

        let title = '';
        let content = '';

        props.children.forEach((child) => {
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

    handleToggle = () => {
        const isExpanded = !this.state.isExpanded;

        this.setState({
            isExpanded
        });
    }

    render() {
        const expandableCss = this.state.isExpanded ? 'expanded' : 'collapsed';
        const buttonText = this.state.isExpanded ? 'Got it!' : 'Explain';

        return (
            <div className={`expandable ${expandableCss}`}>
                <div className="expandable-initial">
                    <div className="number"><span>{this.props.number}</span></div>
                    <p className="title">{this.state.title}</p>
                    <button onClick={this.handleToggle}>{buttonText}</button>
                </div>
                <div className={`expandable-content ${expandableCss}`}>
                    {this.state.content}
                </div>
            </div>
        );
    }
}

Expandable.propTypes = {
    number: PropTypes.string
};

export default Expandable;