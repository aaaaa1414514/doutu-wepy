'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _search = require('./../../components/search.js');

var _search2 = _interopRequireDefault(_search);

var _swiper = require('./../../components/swiper.js');

var _swiper2 = _interopRequireDefault(_swiper);

var _itemBox = require('./../../components/itemBox.js');

var _itemBox2 = _interopRequireDefault(_itemBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '斗图'
    }, _this.data = {
      fixed: false,
      session3rd: null,
      list: [{ title: '今日热搜', icon: '../../images/resou.png', imgArr: [] }, { title: '搜索排行榜', icon: '../../images/paihangbang.png', imgArr: [] }, { title: '精选推荐', icon: '../../images/jingxuan.png', imgArr: [] }]
    }, _this.$props = { "itemBox": { "v-bind:item.once": { "for": "list", "item": "item", "index": "index", "key": "index", "value": "session3rd" }, "v-bind:session3rd.once": { "for": "list", "item": "item", "index": "index", "key": "index", "value": "session3rd" } }, "search": { "v-bind:fixed.once": "fixed" } }, _this.$events = {}, _this.components = {
      search: _search2.default,
      swiper: _swiper2.default,
      itemBox: _itemBox2.default
    }, _this.events = {}, _this.methods = {
      //请求接口
      getData: function getData(url, index) {
        var that = this;
        wx.request({
          url: url,
          data: {
            session3rd: that.session3rd
          },
          success: function success(res) {
            if (res.status == 500) {
              //this.login.call(that);
            } else {
              var data = res.data.data;
              that.list[index].imgArr = data;
              that.$apply();
            }
          }
        });
      },
      //登录
      login: function login(callback) {
        var that = this;
        wx.login({
          success: function success(data) {
            if (data.code) {
              //获取用户授权得到信息
              wx.getUserInfo({
                success: function success(info) {
                  //登录
                  wx.request({
                    url: 'https://www.tukaxiu.com/wxapi/wxLogin',
                    data: {
                      code: data.code,
                      rawData: info.rawData,
                      signature: info.signature,
                      encryptData: info.encryptData,
                      iv: info.iv,
                      encryptedData: info.encryptedData
                    },
                    success: function success(data) {
                      console.log('登陆成功');
                      wx.setStorage({
                        key: 'session3rd',
                        data: data.data.data
                      });
                      that.session3rd = data.data.data;
                      //获取数据
                      if (callback) {
                        callback.call(that);
                      }
                    }
                  });
                }
              });
            }
          }
        });
      },
      //登陆成功调用接口
      callback: function callback() {
        this.methods.getData.call(this, "https://www.tukaxiu.com/wxapi/index/hotday", 0);
        //排行
        this.methods.getData.call(this, "https://www.tukaxiu.com/wxapi/index/sonow", 1);
        //精选
        this.methods.getData.call(this, "https://www.tukaxiu.com/wxapi/index/zan", 2);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      //微信登录
      this.methods.login.call(this, this.methods.callback);
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJmaXhlZCIsInNlc3Npb24zcmQiLCJsaXN0IiwidGl0bGUiLCJpY29uIiwiaW1nQXJyIiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJzZWFyY2giLCJzd2lwZXIiLCJpdGVtQm94IiwiZXZlbnRzIiwibWV0aG9kcyIsImdldERhdGEiLCJ1cmwiLCJpbmRleCIsInRoYXQiLCJ3eCIsInJlcXVlc3QiLCJzdWNjZXNzIiwicmVzIiwic3RhdHVzIiwiJGFwcGx5IiwibG9naW4iLCJjYWxsYmFjayIsImNvZGUiLCJnZXRVc2VySW5mbyIsImluZm8iLCJyYXdEYXRhIiwic2lnbmF0dXJlIiwiZW5jcnlwdERhdGEiLCJpdiIsImVuY3J5cHRlZERhdGEiLCJjb25zb2xlIiwibG9nIiwic2V0U3RvcmFnZSIsImtleSIsImNhbGwiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsYUFBTSxLQUREO0FBRUxDLGtCQUFXLElBRk47QUFHTEMsWUFBTSxDQUNKLEVBQUNDLE9BQU0sTUFBUCxFQUFjQyxNQUFLLHdCQUFuQixFQUE0Q0MsUUFBUSxFQUFwRCxFQURJLEVBSUosRUFBQ0YsT0FBTSxPQUFQLEVBQWVDLE1BQUssOEJBQXBCLEVBQW1EQyxRQUFRLEVBQTNELEVBSkksRUFPSixFQUFDRixPQUFNLE1BQVAsRUFBY0MsTUFBSywyQkFBbkIsRUFBK0NDLFFBQVEsRUFBdkQsRUFQSTtBQUhELEssUUFnQlJDLE0sR0FBUyxFQUFDLFdBQVUsRUFBQyxvQkFBbUIsRUFBQyxPQUFNLE1BQVAsRUFBYyxRQUFPLE1BQXJCLEVBQTRC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Ozs7RUEzR2dDLGVBQUtjLEk7O2tCQUFuQjNDLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IFNlYXJjaCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3NlYXJjaCdcclxuaW1wb3J0IFN3aXBlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL3N3aXBlcidcclxuaW1wb3J0IEl0ZW1Cb3ggZnJvbSAnLi4vLi4vY29tcG9uZW50cy9pdGVtQm94J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmlpflm74nXHJcbiAgfVxyXG5cclxuICBkYXRhID0ge1xyXG4gICAgZml4ZWQ6ZmFsc2UsXHJcbiAgICBzZXNzaW9uM3JkOm51bGwsXHJcbiAgICBsaXN0OiBbXHJcbiAgICAgIHt0aXRsZTon5LuK5pel54Ot5pCcJyxpY29uOicuLi8uLi9pbWFnZXMvcmVzb3UucG5nJyxpbWdBcnI6IFtcclxuICAgICAgICBcclxuICAgICAgXX0sXHJcbiAgICAgIHt0aXRsZTon5pCc57Si5o6S6KGM5qacJyxpY29uOicuLi8uLi9pbWFnZXMvcGFpaGFuZ2JhbmcucG5nJyxpbWdBcnI6IFtcclxuICAgICAgXHJcbiAgICAgIF19LFxyXG4gICAgICB7dGl0bGU6J+eyvumAieaOqOiNkCcsaWNvbjonLi4vLi4vaW1hZ2VzL2ppbmd4dWFuLnBuZycsaW1nQXJyOiBbXHJcbiAgICAgXHJcbiAgICAgIF19XHJcbiAgICBdXHJcbiAgfVxyXG5cclxuICRwcm9wcyA9IHtcIml0ZW1Cb3hcIjp7XCJ2LWJpbmQ6aXRlbS5vbmNlXCI6e1wiZm9yXCI6XCJsaXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIixcInZhbHVlXCI6XCJzZXNzaW9uM3JkXCJ9LFwidi1iaW5kOnNlc3Npb24zcmQub25jZVwiOntcImZvclwiOlwibGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCIsXCJ2YWx1ZVwiOlwic2Vzc2lvbjNyZFwifX0sXCJzZWFyY2hcIjp7XCJ2LWJpbmQ6Zml4ZWQub25jZVwiOlwiZml4ZWRcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgc2VhcmNoOiBTZWFyY2gsXHJcbiAgICBzd2lwZXI6IFN3aXBlcixcclxuICAgIGl0ZW1Cb3g6IEl0ZW1Cb3hcclxuICB9XHJcblxyXG4gIGV2ZW50cyA9IHtcclxuXHJcbiAgfVxyXG5cclxuICBtZXRob2RzID0ge1xyXG4gICAgLy/or7fmsYLmjqXlj6NcclxuICAgIGdldERhdGEodXJsLGluZGV4KXtcclxuICAgICAgbGV0IHRoYXQ9IHRoaXM7XHJcbiAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHNlc3Npb24zcmQ6IHRoYXQuc2Vzc2lvbjNyZFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzcyhyZXMpe1xyXG4gICAgICAgICAgaWYocmVzLnN0YXR1cz09NTAwKXtcclxuICAgICAgICAgICAgLy90aGlzLmxvZ2luLmNhbGwodGhhdCk7XHJcbiAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSByZXMuZGF0YS5kYXRhXHJcbiAgICAgICAgICAgIHRoYXQubGlzdFtpbmRleF0uaW1nQXJyID0gZGF0YTtcclxuICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSwvL+eZu+W9lVxyXG4gICAgbG9naW4oY2FsbGJhY2spe1xyXG4gICAgICBsZXQgdGhhdD0gdGhpcztcclxuICAgICAgd3gubG9naW4oe1xyXG4gICAgICAgIHN1Y2Nlc3MoZGF0YSl7XHJcbiAgICAgICAgICBpZihkYXRhLmNvZGUpe1xyXG4gICAgICAgICAgICAvL+iOt+WPlueUqOaIt+aOiOadg+W+l+WIsOS/oeaBr1xyXG4gICAgICAgICAgICB3eC5nZXRVc2VySW5mbyh7XHJcbiAgICAgICAgICAgICAgc3VjY2VzcyhpbmZvKXtcclxuICAgICAgICAgICAgICAgIC8v55m75b2VXHJcbiAgICAgICAgICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cudHVrYXhpdS5jb20vd3hhcGkvd3hMb2dpbicsXHJcbiAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBjb2RlOiBkYXRhLmNvZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgcmF3RGF0YTogaW5mby5yYXdEYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIHNpZ25hdHVyZTogaW5mby5zaWduYXR1cmUsXHJcbiAgICAgICAgICAgICAgICAgICAgZW5jcnlwdERhdGE6IGluZm8uZW5jcnlwdERhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgaXY6IGluZm8uaXYsXHJcbiAgICAgICAgICAgICAgICAgICAgZW5jcnlwdGVkRGF0YTogaW5mby5lbmNyeXB0ZWREYXRhXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoZGF0YSl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eZu+mZhuaIkOWKnycpXHJcbiAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdzZXNzaW9uM3JkJyxcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEuZGF0YS5kYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LnNlc3Npb24zcmQ9IGRhdGEuZGF0YS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIC8v6I635Y+W5pWw5o2uXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY2FsbGJhY2spe1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGF0KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0sLy/nmbvpmYbmiJDlip/osIPnlKjmjqXlj6NcclxuICAgIGNhbGxiYWNrKCl7XHJcbiAgICAgIHRoaXMubWV0aG9kcy5nZXREYXRhLmNhbGwodGhpcyxcImh0dHBzOi8vd3d3LnR1a2F4aXUuY29tL3d4YXBpL2luZGV4L2hvdGRheVwiLDApXHJcbiAgICAgIC8v5o6S6KGMXHJcbiAgICAgIHRoaXMubWV0aG9kcy5nZXREYXRhLmNhbGwodGhpcyxcImh0dHBzOi8vd3d3LnR1a2F4aXUuY29tL3d4YXBpL2luZGV4L3Nvbm93XCIsMSlcclxuICAgICAgLy/nsr7pgIlcclxuICAgICAgdGhpcy5tZXRob2RzLmdldERhdGEuY2FsbCh0aGlzLFwiaHR0cHM6Ly93d3cudHVrYXhpdS5jb20vd3hhcGkvaW5kZXgvemFuXCIsMilcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uTG9hZCgpe1xyXG4gICAgLy/lvq7kv6HnmbvlvZVcclxuICAgIHRoaXMubWV0aG9kcy5sb2dpbi5jYWxsKHRoaXMsdGhpcy5tZXRob2RzLmNhbGxiYWNrKVxyXG5cclxuICAgIFxyXG4gIH1cclxufVxyXG4gICAgICAgIFxyXG4gXHJcbiJdfQ==