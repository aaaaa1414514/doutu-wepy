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

var Mine = function (_wepy$page) {
    _inherits(Mine, _wepy$page);

    function Mine() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Mine);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Mine.__proto__ || Object.getPrototypeOf(Mine)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '斗图'
        }, _this.data = {
            logo: null,
            name: null,
            id: 0,
            num: 0,
            toolbox: [{ img: '../../images/wendang.png', title: "使用说明" }, { img: '../../images/guanyu.png', title: "关于" }]
        }, _this.components = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Mine, [{
        key: 'onLoad',
        value: function onLoad() {
            console.log(123);
            var that = this;
            wx.getUserInfo({
                success: function success(ret) {
                    that.logo = ret.userInfo.avatarUrl;
                    that.name = ret.userInfo.nickName;
                    that.$apply();
                }
            });

            wx.getStorage({
                key: 'session3rd',
                success: function success(res) {
                    that.session3rd = res.data;
                    wx.request({
                        url: 'https://www.tukaxiu.com/wxapi/index/userInfo',
                        data: {
                            session3rd: that.session3rd
                        },
                        success: function success(res) {
                            var data = res.data;
                            console.log(data);
                            if (data.status == 1) {
                                that.id = data.msg.id;
                                that.num = data.msg.cnum;
                            }
                        }
                    });
                },
                fail: function fail() {}
            });
        }
    }]);

    return Mine;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Mine , 'pages/mine/mine'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmUuanMiXSwibmFtZXMiOlsiTWluZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibG9nbyIsIm5hbWUiLCJpZCIsIm51bSIsInRvb2xib3giLCJpbWciLCJ0aXRsZSIsImNvbXBvbmVudHMiLCJjb25zb2xlIiwibG9nIiwidGhhdCIsInd4IiwiZ2V0VXNlckluZm8iLCJzdWNjZXNzIiwicmV0IiwidXNlckluZm8iLCJhdmF0YXJVcmwiLCJuaWNrTmFtZSIsIiRhcHBseSIsImdldFN0b3JhZ2UiLCJrZXkiLCJyZXMiLCJzZXNzaW9uM3JkIiwicmVxdWVzdCIsInVybCIsInN0YXR1cyIsIm1zZyIsImNudW0iLCJmYWlsIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUdxQkEsSTs7Ozs7Ozs7Ozs7Ozs7c0xBQ2pCQyxNLEdBQVE7QUFDTkMsb0NBQXdCO0FBRGxCLFMsUUFJUkMsSSxHQUFNO0FBQ0xDLGtCQUFLLElBREE7QUFFTEMsa0JBQUssSUFGQTtBQUdMQyxnQkFBRyxDQUhFO0FBSUxDLGlCQUFJLENBSkM7QUFLTEMscUJBQVEsQ0FDUCxFQUFDQyxLQUFJLDBCQUFMLEVBQWdDQyxPQUFNLE1BQXRDLEVBRE8sRUFFUCxFQUFDRCxLQUFJLHlCQUFMLEVBQStCQyxPQUFNLElBQXJDLEVBRk87QUFMSCxTLFFBaUROQyxVLEdBQWEsRTs7Ozs7aUNBdENMO0FBQ1BDLG9CQUFRQyxHQUFSLENBQVksR0FBWjtBQUNBLGdCQUFJQyxPQUFNLElBQVY7QUFDQUMsZUFBR0MsV0FBSCxDQUFlO0FBQ2RDLHVCQURjLG1CQUNOQyxHQURNLEVBQ0Y7QUFDWEoseUJBQUtWLElBQUwsR0FBV2MsSUFBSUMsUUFBSixDQUFhQyxTQUF4QjtBQUNBTix5QkFBS1QsSUFBTCxHQUFXYSxJQUFJQyxRQUFKLENBQWFFLFFBQXhCO0FBQ0FQLHlCQUFLUSxNQUFMO0FBQ0E7QUFMYSxhQUFmOztBQVFBUCxlQUFHUSxVQUFILENBQWM7QUFDYkMscUJBQUssWUFEUTtBQUViUCx1QkFGYSxtQkFFTFEsR0FGSyxFQUVEO0FBQ1hYLHlCQUFLWSxVQUFMLEdBQWlCRCxJQUFJdEIsSUFBckI7QUFDQVksdUJBQUdZLE9BQUgsQ0FBVztBQUNWQyw2QkFBSSw4Q0FETTtBQUVWekIsOEJBQUs7QUFDSnVCLHdDQUFZWixLQUFLWTtBQURiLHlCQUZLO0FBS1ZULCtCQUxVLG1CQUtGUSxHQUxFLEVBS0U7QUFDWCxnQ0FBSXRCLE9BQU1zQixJQUFJdEIsSUFBZDtBQUNBUyxvQ0FBUUMsR0FBUixDQUFZVixJQUFaO0FBQ0EsZ0NBQUdBLEtBQUswQixNQUFMLElBQWEsQ0FBaEIsRUFBa0I7QUFDakJmLHFDQUFLUixFQUFMLEdBQVNILEtBQUsyQixHQUFMLENBQVN4QixFQUFsQjtBQUNBUSxxQ0FBS1AsR0FBTCxHQUFVSixLQUFLMkIsR0FBTCxDQUFTQyxJQUFuQjtBQUNBO0FBQ0Q7QUFaUyxxQkFBWDtBQWNBLGlCQWxCWTtBQW1CYkMsb0JBbkJhLGtCQW1CUCxDQUVMO0FBckJZLGFBQWQ7QUF5QkE7Ozs7RUFwRDZCLGVBQUtDLEk7O2tCQUFsQmpDLEkiLCJmaWxlIjoibWluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1pbmUgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmlpflm74nXHJcbiAgICB9XHJcblxyXG4gICAgZGF0YT0ge1xyXG4gICAgXHRsb2dvOm51bGwsXHJcbiAgICBcdG5hbWU6bnVsbCxcclxuICAgIFx0aWQ6MCxcclxuICAgIFx0bnVtOjAsXHJcbiAgICBcdHRvb2xib3g6W1xyXG4gICAgXHRcdHtpbWc6Jy4uLy4uL2ltYWdlcy93ZW5kYW5nLnBuZycsdGl0bGU6XCLkvb/nlKjor7TmmI5cIn0sXHJcbiAgICBcdFx0e2ltZzonLi4vLi4vaW1hZ2VzL2d1YW55dS5wbmcnLHRpdGxlOlwi5YWz5LqOXCJ9XHJcbiAgICBcdF1cclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKXtcclxuICAgIFx0Y29uc29sZS5sb2coMTIzKVxyXG4gICAgXHR2YXIgdGhhdD0gdGhpcztcclxuICAgIFx0d3guZ2V0VXNlckluZm8oe1xyXG4gICAgXHRcdHN1Y2Nlc3MocmV0KXtcclxuICAgIFx0XHRcdHRoYXQubG9nbz0gcmV0LnVzZXJJbmZvLmF2YXRhclVybDtcclxuICAgIFx0XHRcdHRoYXQubmFtZT0gcmV0LnVzZXJJbmZvLm5pY2tOYW1lO1xyXG4gICAgXHRcdFx0dGhhdC4kYXBwbHkoKTtcclxuICAgIFx0XHR9XHJcbiAgICBcdH0pXHJcblxyXG4gICAgXHR3eC5nZXRTdG9yYWdlKHtcclxuICAgIFx0XHRrZXk6ICdzZXNzaW9uM3JkJyxcclxuICAgIFx0XHRzdWNjZXNzKHJlcyl7XHJcbiAgICBcdFx0XHR0aGF0LnNlc3Npb24zcmQ9IHJlcy5kYXRhO1xyXG4gICAgXHRcdFx0d3gucmVxdWVzdCh7XHJcblx0XHQgICAgXHRcdHVybDonaHR0cHM6Ly93d3cudHVrYXhpdS5jb20vd3hhcGkvaW5kZXgvdXNlckluZm8nLFxyXG5cdFx0ICAgIFx0XHRkYXRhOntcclxuXHRcdCAgICBcdFx0XHRzZXNzaW9uM3JkOiB0aGF0LnNlc3Npb24zcmRcclxuXHRcdCAgICBcdFx0fSxcclxuXHRcdCAgICBcdFx0c3VjY2VzcyhyZXMpe1xyXG5cdFx0ICAgIFx0XHRcdGxldCBkYXRhPSByZXMuZGF0YTtcclxuXHRcdCAgICBcdFx0XHRjb25zb2xlLmxvZyhkYXRhKTtcclxuXHRcdCAgICBcdFx0XHRpZihkYXRhLnN0YXR1cz09MSl7XHJcblx0XHQgICAgXHRcdFx0XHR0aGF0LmlkPSBkYXRhLm1zZy5pZDtcclxuXHRcdCAgICBcdFx0XHRcdHRoYXQubnVtPSBkYXRhLm1zZy5jbnVtO1xyXG5cdFx0ICAgIFx0XHRcdH1cclxuXHRcdCAgICBcdFx0fVxyXG5cdFx0ICAgIFx0fSlcclxuICAgIFx0XHR9LFxyXG4gICAgXHRcdGZhaWwoKXtcclxuXHJcbiAgICBcdFx0fVxyXG4gICAgXHR9KVxyXG4gICAgXHRcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50cyA9IHtcclxuICAgXHJcbiAgICB9XHJcbn1cclxuIl19