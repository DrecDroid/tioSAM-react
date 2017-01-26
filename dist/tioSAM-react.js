'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderer = exports.connect = undefined;

var _mobxReact = require('mobx-react');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Promise = Promise || require('es6-promise').Promise;

function connect(component) {
  return (0, _mobxReact.inject)('actions', 'changes')(component);
}

function renderer(component, element) {
  return function (model, state, actions) {
    return new Promise(function (resolve, reject) {
      _reactDom2.default.render(_react2.default.createElement(
        _mobxReact.Provider,
        { changes: changes, actions: actions },
        component({ model: model })
      ), typeof element === 'string' ? document.querySelector(element) : element, function () {
        resolve();
      });
    });
  };
}

exports.connect = connect;
exports.renderer = renderer;