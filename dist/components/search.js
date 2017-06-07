'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
    }, _this.props = {
      fixed: Boolean
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
        this.inputVal = e.detail.value;
      },
      jump: function jump(e) {
        wx.navigateTo({
          url: "../../pages/main/index?tag=" + this.inputVal
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Search, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Search;
}(_wepy2.default.component);

exports.default = Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5qcyJdLCJuYW1lcyI6WyJTZWFyY2giLCJkYXRhIiwiaW5wdXRTaG93ZWQiLCJpbnB1dFZhbCIsInByb3BzIiwiZml4ZWQiLCJCb29sZWFuIiwibWV0aG9kcyIsInNob3dJbnB1dCIsImhpZGVJbnB1dCIsImNsZWFySW5wdXQiLCJpbnB1dCIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsImp1bXAiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsSSxHQUFNO0FBQ0pDLG1CQUFhLEtBRFQ7QUFFSkMsZ0JBQVU7QUFGTixLLFFBS05DLEssR0FBTztBQUNMQyxhQUFNQztBQURELEssUUFRUEMsTyxHQUFTO0FBQ1JDLGVBRFEsdUJBQ0c7QUFDTixhQUFLTixXQUFMLEdBQWtCLElBQWxCO0FBQ0gsT0FITTtBQUlQTyxlQUpPLHVCQUlJO0FBQ1IsYUFBS04sUUFBTCxHQUFlLEVBQWY7QUFDQSxhQUFLRCxXQUFMLEdBQWtCLEtBQWxCO0FBQ0YsT0FQTTtBQVFQUSxnQkFSTyx3QkFRSztBQUNSLGFBQUtQLFFBQUwsR0FBZSxFQUFmO0FBQ0gsT0FWTTtBQVdQUSxXQVhPLGlCQVdEQyxDQVhDLEVBV0M7QUFDTCxhQUFLVCxRQUFMLEdBQWdCUyxFQUFFQyxNQUFGLENBQVNDLEtBQXpCO0FBRUYsT0FkTTtBQWVQQyxVQWZPLGdCQWVGSCxDQWZFLEVBZUE7QUFDTEksV0FBR0MsVUFBSCxDQUFjO0FBQ1pDLGVBQUssZ0NBQThCLEtBQUtmO0FBRDVCLFNBQWQ7QUFHRDtBQW5CTSxLOzs7Ozs2QkFKRCxDQUVQOzs7O0VBWmlDLGVBQUtnQixTOztrQkFBcEJuQixNIiwiZmlsZSI6InNlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gIGRhdGE9IHtcclxuICAgIGlucHV0U2hvd2VkOiBmYWxzZSxcclxuICAgIGlucHV0VmFsOiAnJ1xyXG4gIH0gIFxyXG5cclxuICBwcm9wcz0ge1xyXG4gICAgZml4ZWQ6Qm9vbGVhblxyXG4gIH1cclxuXHJcbiAgb25Mb2FkKCl7XHJcblxyXG4gIH1cclxuXHJcbiAgbWV0aG9kcz0ge1xyXG4gIFx0c2hvd0lucHV0KCl7XHJcbiAgICAgICAgdGhpcy5pbnB1dFNob3dlZD0gdHJ1ZVxyXG4gICAgfSxcclxuICAgIGhpZGVJbnB1dCgpe1xyXG4gICAgICAgdGhpcy5pbnB1dFZhbD0gXCJcIjtcclxuICAgICAgIHRoaXMuaW5wdXRTaG93ZWQ9IGZhbHNlO1xyXG4gICAgfSxcclxuICAgIGNsZWFySW5wdXQoKXtcclxuICAgICAgICB0aGlzLmlucHV0VmFsPSBcIlwiXHJcbiAgICB9LFxyXG4gICAgaW5wdXQoZSl7XHJcbiAgICAgICB0aGlzLmlucHV0VmFsID0gZS5kZXRhaWwudmFsdWU7XHJcbiAgICAgICBcclxuICAgIH0sXHJcbiAgICBqdW1wKGUpe1xyXG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6IFwiLi4vLi4vcGFnZXMvbWFpbi9pbmRleD90YWc9XCIrdGhpcy5pbnB1dFZhbFxyXG4gICAgICB9KSBcclxuICAgIH1cclxuICB9XHRcclxufVxyXG4iXX0=