"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _flowRight2 = require("lodash/flowRight");

var _flowRight3 = _interopRequireDefault(_flowRight2);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createReactClass = require("create-react-class");

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _constants = require("./constants");

var _enhanceElement = require("./enhanceElement");

var _enhanceElement2 = _interopRequireDefault(_enhanceElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global google */
var controlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  // [].map.call($0.querySelectorAll("tr>td>code", function(it){ return it.textContent; })
  //    .filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polygon
  draggable: _propTypes2.default.bool,
  editable: _propTypes2.default.bool,
  options: _propTypes2.default.object,
  path: _propTypes2.default.any,
  paths: _propTypes2.default.any,
  visible: _propTypes2.default.bool
};

var defaultUncontrolledPropTypes = (0, _enhanceElement.addDefaultPrefixToPropTypes)(controlledPropTypes);

var eventMap = {
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polygon
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  onClick: "click",

  onDblClick: "dblclick",

  onDrag: "drag",

  onDragEnd: "dragend",

  onDragStart: "dragstart",

  onMouseDown: "mousedown",

  onMouseMove: "mousemove",

  onMouseOut: "mouseout",

  onMouseOver: "mouseover",

  onMouseUp: "mouseup",

  onRightClick: "rightclick"
};

var publicMethodMap = {
  // Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polygon
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  //    .filter(function(it){ return it.match(/^get/) && !it.match(/Map$/); })
  getDraggable: function getDraggable(polygon) {
    return polygon.getDraggable();
  },
  getEditable: function getEditable(polygon) {
    return polygon.getEditable();
  },
  getPath: function getPath(polygon) {
    return polygon.getPath();
  },
  getPaths: function getPaths(polygon) {
    return polygon.getPaths();
  },
  getVisible: function getVisible(polygon) {
    return polygon.getVisible();
  },
  setOptions: function setOptions(polygon, options) {
    polygon.setOptions(options[0]);
  }
};

var controlledPropUpdaterMap = {
  draggable: function draggable(polygon, _draggable) {
    polygon.setDraggable(_draggable);
  },
  editable: function editable(polygon, _editable) {
    polygon.setEditable(_editable);
  },
  options: function options(polygon, _options) {
    polygon.setOptions(_options);
  },
  path: function path(polygon, _path) {
    polygon.setPath(_path);
  },
  paths: function paths(polygon, _paths) {
    polygon.setPaths(_paths);
  },
  visible: function visible(polygon, _visible) {
    polygon.setVisible(_visible);
  }
};

function getInstanceFromComponent(component) {
  return component.state[_constants.POLYGON];
}

exports.default = (0, _flowRight3.default)(_createReactClass2.default, (0, _enhanceElement2.default)(getInstanceFromComponent, publicMethodMap, eventMap, controlledPropUpdaterMap))({
  displayName: "Polygon",

  propTypes: (0, _extends3.default)({}, controlledPropTypes, defaultUncontrolledPropTypes),

  contextTypes: (0, _defineProperty3.default)({}, _constants.MAP, _propTypes2.default.object),

  getInitialState: function getInitialState() {
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polygon
    var polygon = new google.maps.Polygon((0, _extends3.default)({
      map: this.context[_constants.MAP]
    }, (0, _enhanceElement.collectUncontrolledAndControlledProps)(defaultUncontrolledPropTypes, controlledPropTypes, this.props)));
    return (0, _defineProperty3.default)({}, _constants.POLYGON, polygon);
  },
  componentWillUnmount: function componentWillUnmount() {
    var polygon = getInstanceFromComponent(this);
    if (polygon) {
      polygon.setMap(null);
    }
  },
  render: function render() {
    return false;
  }
});