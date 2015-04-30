'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _React = require('react');

var _React2 = _interopRequireWildcard(_React);

var _SimpleTabLabels = require('./simple-tab-labels');

var _SimpleTabLabels2 = _interopRequireWildcard(_SimpleTabLabels);

var SimpleTab = (function (_React$Component) {
  function SimpleTab(props) {
    _classCallCheck(this, SimpleTab);

    _get(Object.getPrototypeOf(SimpleTab.prototype), 'constructor', this).call(this, props);
    this.onTabChange = this.onTabChange.bind(this);
    this.state = { currentTab: this.props.initialTab };
  }

  _inherits(SimpleTab, _React$Component);

  _createClass(SimpleTab, [{
    key: 'getDefaultProps',
    value: function getDefaultProps() {
      return {
        initialTab: 0
      };
    }
  }, {
    key: 'onTabChange',
    value: function onTabChange(index) {
      this.setState({ currentTab: index });
    }
  }, {
    key: 'render',
    value: function render() {
      var TabContent;
      if (this.props.tabs.length > 0) TabContent = this.props.tabs[this.state.currentTab].content;
      return _React2['default'].createElement(
        'div',
        { style: this.props.style },
        _React2['default'].createElement(_SimpleTabLabels2['default'], { tabs: this.props.tabs, style: this.props.labelListStyle, onTabChange: this.onTabChange, currentTab: this.state.currentTab }),
        _React2['default'].createElement(
          'div',
          { style: this.props.contentStyle },
          _React2['default'].createElement(TabContent, { style: this.props.contentStyle })
        )
      );
    }
  }]);

  return SimpleTab;
})(_React2['default'].Component);

exports['default'] = SimpleTab;

SimpleTab.propTypes = {
  tabs: _React2['default'].PropTypes.array.isRequired,
  initialTab: _React2['default'].PropTypes.number,
  style: _React2['default'].PropTypes.object,
  labelListStyle: _React2['default'].PropTypes.object,
  contentStyle: _React2['default'].PropTypes.object
};
module.exports = exports['default'];