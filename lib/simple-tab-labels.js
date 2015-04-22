'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _React = require('react');

var _React2 = _interopRequireWildcard(_React);

var _Immutable = require('immutable');

var _Immutable2 = _interopRequireWildcard(_Immutable);

var SimpleTabLabel = (function (_React$Component) {
    function SimpleTabLabel() {
        _classCallCheck(this, SimpleTabLabel);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(SimpleTabLabel, _React$Component);

    _createClass(SimpleTabLabel, [{
        key: 'onClick',
        value: function onClick(e) {
            this.props.onTabChange(this.props.index);
        }
    }, {
        key: 'render',
        value: function render() {
            return _React2['default'].createElement(
                'li',
                { style: this.props.style, onClick: this.onClick.bind(this) },
                this.props.title
            );
        }
    }]);

    return SimpleTabLabel;
})(_React2['default'].Component);

SimpleTableLabel.propTypes = {
    title: _React2['default'].PropTypes.any.isRequired,
    index: _React2['default'].PropTypes.number.isRequired
};

var SimpleTabLabels = (function (_React$Component2) {
    function SimpleTabLabels() {
        _classCallCheck(this, SimpleTabLabels);

        if (_React$Component2 != null) {
            _React$Component2.apply(this, arguments);
        }
    }

    _inherits(SimpleTabLabels, _React$Component2);

    _createClass(SimpleTabLabels, [{
        key: 'render',
        value: function render() {
            var _this = this;

            var style = _Immutable2['default'].Map({
                listStyle: 'none' }).merge(this.props.style).toJS();

            var labels = this.props.tabs.map(function (tab, index) {
                var style = _Immutable2['default'].Map({
                    display: 'inline-block'
                }).merge(tab.style);
                if (_this.props.currentTab == index) style = style.merge(tab.activeStyle);
                style = style.toJS();

                return _React2['default'].createElement(SimpleTabLabel, { title: tab.title, key: index, index: index, onTabChange: _this.props.onTabChange, style: style });
            });

            return _React2['default'].createElement(
                'ul',
                { style: style },
                labels
            );
        }
    }]);

    return SimpleTabLabels;
})(_React2['default'].Component);

exports['default'] = SimpleTabLabels;

SimpleTabLabels.propTypes = {
    tabs: _React2['default'].PropTypes.array.isRequired,
    style: _React2['default'].PropTypes.object
};
module.exports = exports['default'];