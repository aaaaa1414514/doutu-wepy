'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Img = function (_wepy$page) {
    _inherits(Img, _wepy$page);

    function Img() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Img);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Img.__proto__ || Object.getPrototypeOf(Img)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '搜索图片'
        }, _this.data = {
            startTime: null,
            endTime: null,
            imagesArr: [{ img: "../../images/20160701125111_PsWU8.thumb.700_0.jpeg", src: "asdasd" }, { img: "../../images/20160701125111_PsWU8.thumb.700_0.jpeg", src: "asdasd" }]
        }, _this.methods = {
            mytouchstart: function mytouchstart(e) {
                this.startTime = e.timeStamp;
            },
            mytouchend: function mytouchend(e) {
                this.endTime = e.timeStamp;
            },
            click: function click() {
                var time = this.endTime - this.startTime;
                if (time < 300) {
                    console.log(1);
                    wx.navigateBack();
                } else {
                    wx.getImageInfo({
                        urls: ["http://f10.baidu.com/it/u=2426503362,3170371232&fm=76"],
                        success: function success(e) {
                            console.log(1);
                        }
                    });
                }
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Img, [{
        key: 'onLoad',
        value: function onLoad() {}
    }, {
        key: 'onPullDownRefresh',
        value: function onPullDownRefresh(e) {
            console.log(123);
        }
    }]);

    return Img;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Img , 'pages/main/img'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltZy5qcyJdLCJuYW1lcyI6WyJJbWciLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInN0YXJ0VGltZSIsImVuZFRpbWUiLCJpbWFnZXNBcnIiLCJpbWciLCJzcmMiLCJtZXRob2RzIiwibXl0b3VjaHN0YXJ0IiwiZSIsInRpbWVTdGFtcCIsIm15dG91Y2hlbmQiLCJjbGljayIsInRpbWUiLCJjb25zb2xlIiwibG9nIiwid3giLCJuYXZpZ2F0ZUJhY2siLCJnZXRJbWFnZUluZm8iLCJ1cmxzIiwic3VjY2VzcyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEc7Ozs7Ozs7Ozs7Ozs7O29MQUNqQkMsTSxHQUFRO0FBQ05DLG9DQUF3QjtBQURsQixTLFFBSVJDLEksR0FBTTtBQUNGQyx1QkFBVSxJQURSO0FBRUZDLHFCQUFRLElBRk47QUFHRkMsdUJBQVUsQ0FDTixFQUFDQyxLQUFJLG9EQUFMLEVBQTBEQyxLQUFJLFFBQTlELEVBRE0sRUFFTixFQUFDRCxLQUFJLG9EQUFMLEVBQTBEQyxLQUFJLFFBQTlELEVBRk07QUFIUixTLFFBaUJOQyxPLEdBQVM7QUFDTEMsd0JBREssd0JBQ1FDLENBRFIsRUFDVTtBQUNYLHFCQUFLUCxTQUFMLEdBQWVPLEVBQUVDLFNBQWpCO0FBQ0gsYUFISTtBQUlMQyxzQkFKSyxzQkFJTUYsQ0FKTixFQUlRO0FBQ1QscUJBQUtOLE9BQUwsR0FBYU0sRUFBRUMsU0FBZjtBQUNILGFBTkk7QUFPTEUsaUJBUEssbUJBT0U7QUFDSCxvQkFBSUMsT0FBTyxLQUFLVixPQUFMLEdBQWUsS0FBS0QsU0FBL0I7QUFDQSxvQkFBR1csT0FBSyxHQUFSLEVBQVk7QUFDUkMsNEJBQVFDLEdBQVIsQ0FBWSxDQUFaO0FBQ0FDLHVCQUFHQyxZQUFIO0FBQ0gsaUJBSEQsTUFHSztBQUNERCx1QkFBR0UsWUFBSCxDQUFnQjtBQUNaQyw4QkFBSyxDQUFDLHVEQUFELENBRE87QUFFWkMsK0JBRlksbUJBRUpYLENBRkksRUFFRjtBQUNOSyxvQ0FBUUMsR0FBUixDQUFZLENBQVo7QUFDSDtBQUpXLHFCQUFoQjtBQU1IO0FBQ0o7QUFwQkksUzs7Ozs7aUNBUkQsQ0FFUDs7OzBDQUVpQk4sQyxFQUFFO0FBQ2hCSyxvQkFBUUMsR0FBUixDQUFZLEdBQVo7QUFDSDs7OztFQXBCNEIsZUFBS00sSTs7a0JBQWpCdkIsRyIsImZpbGUiOiJpbWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1nIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZz0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5pCc57Si5Zu+54mHJ1xyXG4gICAgfVxyXG5cclxuICAgIGRhdGE9IHtcclxuICAgICAgICBzdGFydFRpbWU6bnVsbCxcclxuICAgICAgICBlbmRUaW1lOm51bGwsXHJcbiAgICAgICAgaW1hZ2VzQXJyOltcclxuICAgICAgICAgICAge2ltZzpcIi4uLy4uL2ltYWdlcy8yMDE2MDcwMTEyNTExMV9Qc1dVOC50aHVtYi43MDBfMC5qcGVnXCIsc3JjOlwiYXNkYXNkXCJ9LFxyXG4gICAgICAgICAgICB7aW1nOlwiLi4vLi4vaW1hZ2VzLzIwMTYwNzAxMTI1MTExX1BzV1U4LnRodW1iLjcwMF8wLmpwZWdcIixzcmM6XCJhc2Rhc2RcIn1cclxuICAgICAgICBdXHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCl7XHJcbiAgICBcdFxyXG4gICAgfVxyXG5cclxuICAgIG9uUHVsbERvd25SZWZyZXNoKGUpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKDEyMylcclxuICAgIH1cclxuXHJcbiAgICBtZXRob2RzPSB7XHJcbiAgICAgICAgbXl0b3VjaHN0YXJ0KGUpe1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0VGltZT1lLnRpbWVTdGFtcDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG15dG91Y2hlbmQoZSl7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kVGltZT1lLnRpbWVTdGFtcDsgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2xpY2soKXtcclxuICAgICAgICAgICAgbGV0IHRpbWUgPSB0aGlzLmVuZFRpbWUgLSB0aGlzLnN0YXJ0VGltZTtcclxuICAgICAgICAgICAgaWYodGltZTwzMDApe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coMSlcclxuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjaygpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHd4LmdldEltYWdlSW5mbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsczpbXCJodHRwOi8vZjEwLmJhaWR1LmNvbS9pdC91PTI0MjY1MDMzNjIsMzE3MDM3MTIzMiZmbT03NlwiXSxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKGUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygxKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iXX0=