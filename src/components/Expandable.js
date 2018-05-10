import React from "react";
import PropTypes from 'prop-types';


class Expandable extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            // title: this.props.title,
            // hiddenContent:,
            // isExpanded: false,
        };
    }

    handleToggle() {
        // const isExpanded = !this.state.isExpanded;

        // this.setState({
        //     isExpanded,
        //     text: isExpanded ? this.props.children : `${this.props.children[0].props.children.substring(0, this.props.config.trim)}...`,
        // });
    }

    render() {
        let title = '';
        let content = '';

        this.props.children.forEach((child) => {
            title = child.type === 'h3' ? child.props.children: '';
            content = child.type === 'div' ? child.props.children: '';
        });

        return (
            <div className="expandable">
                <span>1</span>
                {title}
                <button>Expand</button>
                <div>
                    {content}
                </div>
            </div>
        );
    }
};

// Expandable.PropTypes = {
//     config: React.PropTypes.object
// };

export default Expandable;