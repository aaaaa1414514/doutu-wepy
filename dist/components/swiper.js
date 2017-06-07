'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Swiper = function (_wepy$component) {
  _inherits(Swiper, _wepy$component);

  function Swiper() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Swiper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Swiper.__proto__ || Object.getPrototypeOf(Swiper)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      imgUrls: ['http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg', 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'],
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000,
      circular: true
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Swiper;
}(_wepy2.default.component);

exports.default = Swiper;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN3aXBlci5qcyJdLCJuYW1lcyI6WyJTd2lwZXIiLCJkYXRhIiwiaW1nVXJscyIsImluZGljYXRvckRvdHMiLCJhdXRvcGxheSIsImludGVydmFsIiwiZHVyYXRpb24iLCJjaXJjdWxhciIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsSSxHQUFNO0FBQ0pDLGVBQVMsQ0FDUCxzRUFETyxFQUVQLHNFQUZPLEVBR1Asc0VBSE8sQ0FETDtBQU1KQyxxQkFBZSxJQU5YO0FBT0pDLGdCQUFVLElBUE47QUFRSkMsZ0JBQVUsSUFSTjtBQVNKQyxnQkFBVSxJQVROO0FBVUpDLGdCQUFVO0FBVk4sSzs7OztFQUQ0QixlQUFLQyxTOztrQkFBcEJSLE0iLCJmaWxlIjoic3dpcGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTd2lwZXIgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcbiAgZGF0YT0ge1xyXG4gICAgaW1nVXJsczogW1xyXG4gICAgICAnaHR0cDovL2ltZzAyLnRvb29wZW4uY29tL2ltYWdlcy8yMDE1MDkyOC90b29vcGVuX3N5XzE0MzkxMjc1NTcyNi5qcGcnLFxyXG4gICAgICAnaHR0cDovL2ltZzA2LnRvb29wZW4uY29tL2ltYWdlcy8yMDE2MDgxOC90b29vcGVuX3N5XzE3NTg2NjQzNDI5Ni5qcGcnLFxyXG4gICAgICAnaHR0cDovL2ltZzA2LnRvb29wZW4uY29tL2ltYWdlcy8yMDE2MDgxOC90b29vcGVuX3N5XzE3NTgzMzA0NzcxNS5qcGcnXHJcbiAgICBdLFxyXG4gICAgaW5kaWNhdG9yRG90czogdHJ1ZSxcclxuICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgaW50ZXJ2YWw6IDUwMDAsXHJcbiAgICBkdXJhdGlvbjogMTAwMCxcclxuICAgIGNpcmN1bGFyOiB0cnVlXHJcbiAgfVxyXG59ICBcclxuIl19