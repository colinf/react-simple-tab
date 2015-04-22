import React from 'react';
import SimpleTabLabels from './simple-tab-labels';

export default class SimpleTab extends React.Component {

  constructor(props) {
    super(props);
    this.state = {currentTab: 0};
  }

  onTabChange(index) {
    this.setState({currentTab: index});
  }
    
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
}

SimpleTab.propTypes = {
  tabs: React.PropTypes.array.isRequired,
  style: React.PropTypes.object,
  labelListStyle: React.PropTypes.object
};
