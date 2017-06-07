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

var Collect = function (_wepy$page) {
    _inherits(Collect, _wepy$page);

    function Collect() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Collect);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Collect.__proto__ || Object.getPrototypeOf(Collect)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '我的收藏'
        }, _this.data = {
            imagesArr: [],
            page: 1
        }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Collect, [{
        key: 'onLoad',
        value: function onLoad() {
            var that = this;
            //检查是否登录
            wx.getStorage({
                key: 'session3rd',
                success: function success(res) {
                    that.session3rd = res.data;
                    wx.request({
                        url: "https://www.tukaxiu.com/wxapi/index/myCollect",
                        data: {
                            session3rd: that.session3rd,
                            page: 1
                        },
                        success: function success(res) {
                            var data = res.data;
                            console.log(data);
                            if (data.status == 1) {
                                var dateObj = {};
                                for (var key in data.data) {
                                    if (dateObj.hasOwnProperty(data.data[key].ctime)) {
                                        continue;
                                    }
                                    dateObj[data.data[key].ctime] = [];
                                }
                                console.log(dateObj);
                            }
                        }
                    });
                },
                fail: function fail() {}
            });
        }
    }, {
        key: 'onReachBottom',
        value: function onReachBottom() {}
    }]);

    return Collect;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Collect , 'pages/collection/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNvbGxlY3QiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImltYWdlc0FyciIsInBhZ2UiLCJtZXRob2RzIiwidGhhdCIsInd4IiwiZ2V0U3RvcmFnZSIsImtleSIsInN1Y2Nlc3MiLCJyZXMiLCJzZXNzaW9uM3JkIiwicmVxdWVzdCIsInVybCIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJkYXRlT2JqIiwiaGFzT3duUHJvcGVydHkiLCJjdGltZSIsImZhaWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLE87Ozs7Ozs7Ozs7Ozs7OzRMQUNqQkMsTSxHQUFRO0FBQ05DLG9DQUF3QjtBQURsQixTLFFBSVJDLEksR0FBTTtBQUNGQyx1QkFBVyxFQURUO0FBRUZDLGtCQUFNO0FBRkosUyxRQU1OQyxPLEdBQVMsRTs7Ozs7aUNBSUQ7QUFDSixnQkFBSUMsT0FBTSxJQUFWO0FBQ0E7QUFDQUMsZUFBR0MsVUFBSCxDQUFjO0FBQ1ZDLHFCQUFLLFlBREs7QUFFVkMsdUJBRlUsbUJBRUZDLEdBRkUsRUFFRTtBQUNSTCx5QkFBS00sVUFBTCxHQUFpQkQsSUFBSVQsSUFBckI7QUFDQUssdUJBQUdNLE9BQUgsQ0FBVztBQUNQQyw2QkFBSywrQ0FERTtBQUVQWiw4QkFBTTtBQUNGVSx3Q0FBWU4sS0FBS00sVUFEZjtBQUVGUixrQ0FBTTtBQUZKLHlCQUZDO0FBTVBNLCtCQU5PLG1CQU1DQyxHQU5ELEVBTUs7QUFDUixnQ0FBSVQsT0FBTVMsSUFBSVQsSUFBZDtBQUNBYSxvQ0FBUUMsR0FBUixDQUFZZCxJQUFaO0FBQ0EsZ0NBQUdBLEtBQUtlLE1BQUwsSUFBYSxDQUFoQixFQUFrQjtBQUNkLG9DQUFJQyxVQUFTLEVBQWI7QUFDQSxxQ0FBSSxJQUFJVCxHQUFSLElBQWVQLEtBQUtBLElBQXBCLEVBQXlCO0FBQ3JCLHdDQUFHZ0IsUUFBUUMsY0FBUixDQUF1QmpCLEtBQUtBLElBQUwsQ0FBVU8sR0FBVixFQUFlVyxLQUF0QyxDQUFILEVBQWdEO0FBQzVDO0FBQ0g7QUFDREYsNENBQVFoQixLQUFLQSxJQUFMLENBQVVPLEdBQVYsRUFBZVcsS0FBdkIsSUFBK0IsRUFBL0I7QUFDSDtBQUNETCx3Q0FBUUMsR0FBUixDQUFZRSxPQUFaO0FBQ0g7QUFFSjtBQXBCTSxxQkFBWDtBQXNCSCxpQkExQlM7QUEyQlZHLG9CQTNCVSxrQkEyQkosQ0FFTDtBQTdCUyxhQUFkO0FBK0JIOzs7d0NBRWMsQ0FFZDs7OztFQXJEZ0MsZUFBS2pCLEk7O2tCQUFyQkwsTyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sbGVjdCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWc9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahOaUtuiXjydcclxuICAgIH1cclxuXHJcbiAgICBkYXRhPSB7XHJcbiAgICAgICAgaW1hZ2VzQXJyOiBbXSxcclxuICAgICAgICBwYWdlOiAxXHJcbiAgICB9XHJcblxyXG5cclxuICAgIG1ldGhvZHMgPXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCl7XHJcbiAgICAgICAgbGV0IHRoYXQ9IHRoaXM7XHJcbiAgICAgICAgLy/mo4Dmn6XmmK/lkKbnmbvlvZVcclxuICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAga2V5OiAnc2Vzc2lvbjNyZCcsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MocmVzKXtcclxuICAgICAgICAgICAgICAgIHRoYXQuc2Vzc2lvbjNyZD0gcmVzLmRhdGE7IFxyXG4gICAgICAgICAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vd3d3LnR1a2F4aXUuY29tL3d4YXBpL2luZGV4L215Q29sbGVjdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbjNyZDogdGhhdC5zZXNzaW9uM3JkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlOiAxXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZGF0YS5zdGF0dXM9PTEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGVPYmo9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBrZXkgaW4gZGF0YS5kYXRhKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihkYXRlT2JqLmhhc093blByb3BlcnR5KGRhdGEuZGF0YVtrZXldLmN0aW1lKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlT2JqW2RhdGEuZGF0YVtrZXldLmN0aW1lXT0gW10gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0ZU9iailcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZhaWwoKXtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uUmVhY2hCb3R0b20oKXtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcblxyXG59XHJcbiJdfQ==