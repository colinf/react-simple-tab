"use strict";

var React = require("react");
var Immutable = require("immutable");

var SimpleTabLabels = React.createClass({
    displayName: "SimpleTabLabels",

    propTypes: {
        tabs: React.PropTypes.array.isRequired,
        style: React.PropTypes.object
    },

    render: function render() {
        var style = Immutable.Map({
            listStyle: "none" }).merge(this.props.style).toJS();

        var labels = this.props.tabs.map((function (tab, index) {
            var style = Immutable.Map({
                display: "inline-block"
            }).merge(tab.style);
            if (this.props.currentTab == index) style = style.merge(tab.activeStyle);
            style = style.toJS();

            return React.createElement(SimpleTabLabel, { title: tab.title, key: index, index: index, onTabChange: this.props.onTabChange, style: style });
        }).bind(this));

        return React.createElement(
            "ul",
            { style: style },
            labels
        );
    }
});

var SimpleTabLabel = React.createClass({
    displayName: "SimpleTabLabel",

    propTypes: {
        title: React.PropTypes.any.isRequired,
        index: React.PropTypes.number.isRequired
    },

    onClick: function onClick(e) {
        this.props.onTabChange(this.props.index);
    },

    render: function render() {
        return React.createElement(
            "li",
            { style: this.props.style, onClick: this.onClick },
            this.props.title
        );
    }
});

module.exports = SimpleTabLabels;