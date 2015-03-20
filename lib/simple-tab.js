"use strict";

var React = require("react");
var Immutable = require("immutable");

var SimpleTabLabels = require("./simple-tab-labels");

var SimpleTab = React.createClass({
    displayName: "SimpleTab",

    propTypes: {
        tabs: React.PropTypes.array.isRequired,
        style: React.PropTypes.object,
        labelListStyle: React.PropTypes.object
    },

    getInitialState: function getInitialState() {
        return {
            currentTab: 0
        };
    },

    onTabChange: function onTabChange(index) {
        this.setState({ currentTab: index });
    },

    render: function render() {
        var TabContent;
        if (this.props.tabs.length > 0) TabContent = this.props.tabs[this.state.currentTab].content;
        return React.createElement(
            "div",
            { style: this.props.style },
            React.createElement(SimpleTabLabels, { tabs: this.props.tabs, style: this.props.labelListStyle, onTabChange: this.onTabChange, currentTab: this.state.currentTab }),
            React.createElement(TabContent, null)
        );
    }
});

module.exports = SimpleTab;