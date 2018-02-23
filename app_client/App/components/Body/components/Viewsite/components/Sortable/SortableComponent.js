// Import required modules
import React from 'react';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';

class Sortable extends React.Component {
    componentDidMount() {
        this.$node = $(this.refs.sortable);
        this.$node.sortable({
            opacity: this.props.opacity,
            change: (event, ui) => this.props.onChange(event, ui)
        });
    }

    shouldComponentUpdate() { return false; }

    componentWillReceiveProps(nextProps) {
        if (nextProps.enable !== this.props.enable)
            this.$node.sortable(nextProps.enable ? 'enable' : 'disable');
    }

    renderItems() {
        return this.props.data.map( (item, i) =>
            <li key={i} className="ui-state-default">
                <span className="ui-icon ui-icon-arrowthick-2-n-s"></span>
                { item }
            </li>
        );
    }
    render() {
        return (
            <ul ref="sortable">
                { this.renderItems() }
            </ul>
        );
    }

    componentWillUnmount() {
        this.$node.sortable('destroy');
    }

};

// Optional: set the default props, in case none are passed
Sortable.defaultProps = { opacity: 1, enable: true };

// Optional: set the prop types
Sortable.propTypes = {
    opacity: React.PropTypes.number,
    enable: React.PropTypes.bool,
    onChange: React.PropTypes.func.isRequired
};


export default Sortable;