import React from "react";
import PropTypes from 'prop-types';


class Expandable extends React.Component{
    constructor(props) {
        super(props);

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
        const expandableDisplay = this.state.isExpanded ? 'block' : 'none';
        const buttonText = this.state.isExpanded ? '+' : '-';

        return (
            <div className="expandable">
                <div className="expandable-initial">
                    <div className="number"><span>1</span></div>
                    <h3>{this.state.title}</h3>
                    <button onClick={this.handleToggle.bind(this)}>{buttonText}</button>
                </div>
                <div className="expandable-content" style={{ display: expandableDisplay }}>
                    {this.state.content}
                </div>
            </div>
        );
    }
};

// Expandable.PropTypes = {
//     config: React.PropTypes.object
// };

export default Expandable;