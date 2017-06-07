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

var Search = function (_wepy$component) {
  _inherits(Search, _wepy$component);

  function Search() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Search);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Search.__proto__ || Object.getPrototypeOf(Search)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      inputShowed: false,
      inputVal: ''
    }, _this.methods = {
      showInput: function showInput() {
        this.inputShowed = true;
      },
      hideInput: function hideInput() {
        this.inputVal = "";
        this.inputShowed = false;
      },
      clearInput: function clearInput() {
        this.inputVal = "";
      },
      input: function input(e) {
        console.log(e.detail.value);
      },
      aa: function aa(e) {
        console.log("确认");
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Search;
}(_wepy2.default.component);

exports.default = Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiU2VhcmNoIiwiZGF0YSIsImlucHV0U2hvd2VkIiwiaW5wdXRWYWwiLCJtZXRob2RzIiwic2hvd0lucHV0IiwiaGlkZUlucHV0IiwiY2xlYXJJbnB1dCIsImlucHV0IiwiZSIsImNvbnNvbGUiLCJsb2ciLCJkZXRhaWwiLCJ2YWx1ZSIsImFhIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsTTs7Ozs7Ozs7Ozs7Ozs7c0xBQ25CQyxJLEdBQU07QUFDSkMsbUJBQWEsS0FEVDtBQUVKQyxnQkFBVTtBQUZOLEssUUFLTkMsTyxHQUFTO0FBQ1JDLGVBRFEsdUJBQ0c7QUFDTixhQUFLSCxXQUFMLEdBQWtCLElBQWxCO0FBQ0gsT0FITTtBQUlQSSxlQUpPLHVCQUlJO0FBQ1IsYUFBS0gsUUFBTCxHQUFlLEVBQWY7QUFDQSxhQUFLRCxXQUFMLEdBQWtCLEtBQWxCO0FBQ0YsT0FQTTtBQVFQSyxnQkFSTyx3QkFRSztBQUNSLGFBQUtKLFFBQUwsR0FBZSxFQUFmO0FBRUgsT0FYTTtBQVlQSyxXQVpPLGlCQVlEQyxDQVpDLEVBWUM7QUFDTEMsZ0JBQVFDLEdBQVIsQ0FBWUYsRUFBRUcsTUFBRixDQUFTQyxLQUFyQjtBQUVGLE9BZk07QUFnQlBDLFFBaEJPLGNBZ0JKTCxDQWhCSSxFQWdCRjtBQUNEQyxnQkFBUUMsR0FBUixDQUFZLElBQVo7QUFDSDtBQWxCTSxLOzs7O0VBTnlCLGVBQUtJLFM7O2tCQUFwQmYsTSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2ggZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcbiAgZGF0YT0ge1xyXG4gICAgaW5wdXRTaG93ZWQ6IGZhbHNlLFxyXG4gICAgaW5wdXRWYWw6ICcnXHJcbiAgfSAgXHJcblxyXG4gIG1ldGhvZHM9IHtcclxuICBcdHNob3dJbnB1dCgpe1xyXG4gICAgICAgIHRoaXMuaW5wdXRTaG93ZWQ9IHRydWVcclxuICAgIH0sXHJcbiAgICBoaWRlSW5wdXQoKXtcclxuICAgICAgIHRoaXMuaW5wdXRWYWw9IFwiXCI7XHJcbiAgICAgICB0aGlzLmlucHV0U2hvd2VkPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgICBjbGVhcklucHV0KCl7XHJcbiAgICAgICAgdGhpcy5pbnB1dFZhbD0gXCJcIlxyXG5cclxuICAgIH0sXHJcbiAgICBpbnB1dChlKXtcclxuICAgICAgIGNvbnNvbGUubG9nKGUuZGV0YWlsLnZhbHVlKVxyXG4gICAgICAgXHJcbiAgICB9LFxyXG4gICAgYWEoZSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLnoa7orqRcIilcclxuICAgIH1cclxuICB9XHRcclxufVxyXG4iXX0=