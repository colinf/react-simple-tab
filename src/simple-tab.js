var React = require("react");
var Immutable = require("immutable");

var SimpleTabLabels = require("./simple-tab-labels");

var SimpleTab = React.createClass({
    propTypes: {
        tabs: React.PropTypes.array.isRequired,
        style: React.PropTypes.object,
        labelListStyle: React.PropTypes.object
    },

    getInitialState() {
        return {
            currentTab: 0
        };
    },

    onTabChange(index) {
        this.setState({currentTab: index});
    },
    
    render() {
        var TabContent;
        if (this.props.tabs.length > 0)
            TabContent = this.props.tabs[this.state.currentTab].content;
        return (
            <div style={this.props.style}>
                <SimpleTabLabels tabs={this.props.tabs} style={this.props.labelListStyle} onTabChange={this.onTabChange} currentTab={this.state.currentTab} />
                <TabContent />
            </div>
        );
    }
});

module.exports = SimpleTab;
