'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      pages: ['pages/collection/index', 'pages/index/index', 'pages/mine/mine', 'pages/main/index'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
      },
      "tabBar": {
        "color": "#8590a6",
        "selectedColor": "#1296db",
        "borderStyle": "white",
        "backgroundColor": "#ffffff",
        "list": [{
          "iconPath": "images/home.png",
          "selectedIconPath": "images/home_active.png",
          "pagePath": "pages/index/index",
          "text": "首页"
        }, {
          "iconPath": "images/mine.png",
          "selectedIconPath": "images/mine_active.png",
          "pagePath": "pages/mine/mine",
          "text": "我的"
        }]
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_default, [{
    key: 'onLoad',
    value: function onLoad() {
      wx.login({
        success: function success(data) {
          console.log(data);
        }
      });
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJ3eCIsImxvZ2luIiwic3VjY2VzcyIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MExBR0VBLE0sR0FBUztBQUNQQyxhQUFPLENBQ0osd0JBREksRUFFTCxtQkFGSyxFQUdMLGlCQUhLLEVBSUwsa0JBSkssQ0FEQTtBQVNQQyxjQUFRO0FBQ05DLDZCQUFxQixPQURmO0FBRU5DLHNDQUE4QixNQUZ4QjtBQUdOQyxnQ0FBd0IsUUFIbEI7QUFJTkMsZ0NBQXdCO0FBSmxCLE9BVEQ7QUFlUCxnQkFBVTtBQUNSLGlCQUFTLFNBREQ7QUFFUix5QkFBaUIsU0FGVDtBQUdSLHVCQUFlLE9BSFA7QUFJUiwyQkFBbUIsU0FKWDtBQUtSLGdCQUFRLENBQ047QUFDRSxzQkFBVyxpQkFEYjtBQUVFLDhCQUFtQix3QkFGckI7QUFHRSxzQkFBWSxtQkFIZDtBQUlFLGtCQUFRO0FBSlYsU0FETSxFQU9OO0FBQ0Usc0JBQVksaUJBRGQ7QUFFRSw4QkFBb0Isd0JBRnRCO0FBR0Usc0JBQVksaUJBSGQ7QUFJRSxrQkFBUTtBQUpWLFNBUE07QUFMQTtBQWZILEs7Ozs7OzZCQXVDRDtBQUNOQyxTQUFHQyxLQUFILENBQVM7QUFDUEMsZUFETyxtQkFDQ0MsSUFERCxFQUNNO0FBQ1hDLGtCQUFRQyxHQUFSLENBQVlGLElBQVo7QUFDRDtBQUhNLE9BQVQ7QUFNRDs7OztFQS9DMEIsZUFBS0csRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgcGFnZXM6IFtcclxuICAgICAgICdwYWdlcy9jb2xsZWN0aW9uL2luZGV4JyxcclxuICAgICAgJ3BhZ2VzL2luZGV4L2luZGV4JywgICAgICBcclxuICAgICAgJ3BhZ2VzL21pbmUvbWluZScsXHJcbiAgICAgICdwYWdlcy9tYWluL2luZGV4J1xyXG4gICAgICBcclxuICAgICBcclxuICAgIF0sXHJcbiAgICB3aW5kb3c6IHtcclxuICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2xpZ2h0JyxcclxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnV2VDaGF0JyxcclxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJ1xyXG4gICAgfSxcclxuICAgIFwidGFiQmFyXCI6IHtcclxuICAgICAgXCJjb2xvclwiOiBcIiM4NTkwYTZcIixcclxuICAgICAgXCJzZWxlY3RlZENvbG9yXCI6IFwiIzEyOTZkYlwiLFxyXG4gICAgICBcImJvcmRlclN0eWxlXCI6IFwid2hpdGVcIixcclxuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCIsXHJcbiAgICAgIFwibGlzdFwiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJpY29uUGF0aFwiOlwiaW1hZ2VzL2hvbWUucG5nXCIsXHJcbiAgICAgICAgICBcInNlbGVjdGVkSWNvblBhdGhcIjpcImltYWdlcy9ob21lX2FjdGl2ZS5wbmdcIixcclxuICAgICAgICAgIFwicGFnZVBhdGhcIjogXCJwYWdlcy9pbmRleC9pbmRleFwiLFxyXG4gICAgICAgICAgXCJ0ZXh0XCI6IFwi6aaW6aG1XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwiaWNvblBhdGhcIjogXCJpbWFnZXMvbWluZS5wbmdcIixcclxuICAgICAgICAgIFwic2VsZWN0ZWRJY29uUGF0aFwiOiBcImltYWdlcy9taW5lX2FjdGl2ZS5wbmdcIixcclxuICAgICAgICAgIFwicGFnZVBhdGhcIjogXCJwYWdlcy9taW5lL21pbmVcIixcclxuICAgICAgICAgIFwidGV4dFwiOiBcIuaIkeeahFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgXVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIG9uTG9hZCgpe1xyXG4gICAgd3gubG9naW4oe1xyXG4gICAgICBzdWNjZXNzKGRhdGEpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gIH1cclxufVxyXG4iXX0=