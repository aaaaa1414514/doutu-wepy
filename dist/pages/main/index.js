'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _search = require('./../../components/search.js');

var _search2 = _interopRequireDefault(_search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = function (_wepy$page) {
    _inherits(Main, _wepy$page);

    function Main() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Main);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Main.__proto__ || Object.getPrototypeOf(Main)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '搜索图片'
        }, _this.data = {
            fixed: true,
            tag: null,
            imgData: [],
            imagesArr: [],
            page: 1
        }, _this.methods = {
            mytouchstart: function mytouchstart(e) {
                this.startTime = e.timeStamp;
            },
            mytouchend: function mytouchend(e) {
                this.endTime = e.timeStamp;
            },
            preview: function preview(index) {
                var that = this;
                var time = this.endTime - this.startTime;
                if (time < 300) {
                    //预览
                    wx.previewImage({
                        current: this.imagesArr[index],
                        urls: this.imagesArr
                    });
                } else {
                    //长按搜藏
                    wx.getStorage({
                        key: 'session3rd',
                        success: function success(res) {
                            wx.request({
                                url: 'https://www.tukaxiu.com/wxapi/index/collect',
                                data: {
                                    id: that.imgData[index].id,
                                    session3rd: that.session3rd
                                },
                                success: function success(data) {
                                    if (data.data.status == 1) {
                                        wx.showToast({
                                            title: data.data.msg,
                                            icon: 'success'
                                        });
                                    } else {
                                        wx.showToast({
                                            title: data.data.msg,
                                            icon: 'success'
                                        });
                                    }
                                }
                            });
                        },
                        faill: function faill() {
                            console.log('失败');
                        }
                    });
                }
            }
        }, _this.$props = { "search": { "v-bind:fixed.once": "fixed" } }, _this.$events = {}, _this.components = {
            search: _search2.default
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Main, [{
        key: 'onLoad',
        value: function onLoad(options) {
            this.imagesArr = [];
            this.page = 1;
            this.tag = options.tag;
            var that = this;
            wx.showLoading({
                title: '正在加载中...',
                mask: true
            });

            wx.getStorage({
                key: 'session3rd',
                success: function success(res) {
                    that.session3rd = res.data;

                    wx.request({
                        url: "https://www.tukaxiu.com/wxapi/index/so",
                        data: {
                            tag: that.tag,
                            page: that.page,
                            session3rd: that.session3rd
                        },
                        success: function success(res) {
                            if (res.data.status == 500) {
                                wx.redirectTo({
                                    url: '../../pages/index/index'
                                });
                            } else {
                                var data = res.data.data;
                                var len = data.length;
                                if (len > 0) {
                                    var dataArr = [];
                                    for (var key in data) {
                                        dataArr.push(data[key].image);
                                    }
                                    that.imgData = data;
                                    that.imagesArr = dataArr;
                                    that.$apply();
                                } else {}
                                wx.hideLoading();
                            }
                        }
                    });
                }
            });
        }
    }, {
        key: 'onReachBottom',
        value: function onReachBottom() {
            var that = this;
            this.page++;
            wx.showLoading({
                title: '正在加载中...',
                mask: true
            });
            wx.request({
                url: "https://www.tukaxiu.com/wxapi/index/so",
                data: {
                    tag: that.tag,
                    page: that.page,
                    session3rd: that.session3rd
                },
                success: function success(res) {
                    var data = res.data.data;
                    var len = data.length;
                    if (len > 0) {
                        var dataArr = [];
                        for (var key in data) {
                            dataArr.push(data[key].image);
                        }
                        that.imgData = that.imgData.concat(data);
                        that.imagesArr = that.imagesArr.concat(dataArr);
                        that.$apply();
                    } else {
                        that.page--;
                    }
                    wx.hideLoading();
                }
            });
        }
    }]);

    return Main;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Main , 'pages/main/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk1haW4iLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImZpeGVkIiwidGFnIiwiaW1nRGF0YSIsImltYWdlc0FyciIsInBhZ2UiLCJtZXRob2RzIiwibXl0b3VjaHN0YXJ0IiwiZSIsInN0YXJ0VGltZSIsInRpbWVTdGFtcCIsIm15dG91Y2hlbmQiLCJlbmRUaW1lIiwicHJldmlldyIsImluZGV4IiwidGhhdCIsInRpbWUiLCJ3eCIsInByZXZpZXdJbWFnZSIsImN1cnJlbnQiLCJ1cmxzIiwiZ2V0U3RvcmFnZSIsImtleSIsInN1Y2Nlc3MiLCJyZXMiLCJyZXF1ZXN0IiwidXJsIiwiaWQiLCJzZXNzaW9uM3JkIiwic3RhdHVzIiwic2hvd1RvYXN0IiwidGl0bGUiLCJtc2ciLCJpY29uIiwiZmFpbGwiLCJjb25zb2xlIiwibG9nIiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJzZWFyY2giLCJvcHRpb25zIiwic2hvd0xvYWRpbmciLCJtYXNrIiwicmVkaXJlY3RUbyIsImxlbiIsImxlbmd0aCIsImRhdGFBcnIiLCJwdXNoIiwiaW1hZ2UiLCIkYXBwbHkiLCJoaWRlTG9hZGluZyIsImNvbmNhdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztzTEFDakJDLE0sR0FBUTtBQUNOQyxvQ0FBd0I7QUFEbEIsUyxRQUlSQyxJLEdBQU07QUFDRkMsbUJBQU0sSUFESjtBQUVGQyxpQkFBSSxJQUZGO0FBR0ZDLHFCQUFTLEVBSFA7QUFJRkMsdUJBQVUsRUFKUjtBQU9GQyxrQkFBSztBQVBILFMsUUFXTkMsTyxHQUFTO0FBQ0xDLHdCQURLLHdCQUNRQyxDQURSLEVBQ1U7QUFDWCxxQkFBS0MsU0FBTCxHQUFlRCxFQUFFRSxTQUFqQjtBQUVILGFBSkk7QUFLTEMsc0JBTEssc0JBS01ILENBTE4sRUFLUTtBQUNULHFC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IiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zZWFyY2gnXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW4gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmkJzntKLlm77niYcnXHJcbiAgICB9XHJcblxyXG4gICAgZGF0YT0ge1xyXG4gICAgICAgIGZpeGVkOnRydWUsXHJcbiAgICAgICAgdGFnOm51bGwsIFxyXG4gICAgICAgIGltZ0RhdGE6IFtdLFxyXG4gICAgICAgIGltYWdlc0FycjpbXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgcGFnZToxXHJcbiAgICB9XHJcblxyXG5cclxuICAgIG1ldGhvZHMgPXtcclxuICAgICAgICBteXRvdWNoc3RhcnQoZSl7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRUaW1lPWUudGltZVN0YW1wO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbXl0b3VjaGVuZChlKXtcclxuICAgICAgICAgICAgdGhpcy5lbmRUaW1lPWUudGltZVN0YW1wO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJldmlldyhpbmRleCl7XHJcbiAgICAgICAgICAgIGxldCB0aGF0PSB0aGlzO1xyXG4gICAgICAgICAgICBsZXQgdGltZT0gdGhpcy5lbmRUaW1lIC0gdGhpcy5zdGFydFRpbWU7XHJcbiAgICAgICAgICAgIGlmKHRpbWU8MzAwKXtcclxuICAgICAgICAgICAgICAgIC8v6aKE6KeIXHJcbiAgICAgICAgICAgICAgICB3eC5wcmV2aWV3SW1hZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQ6IHRoaXMuaW1hZ2VzQXJyW2luZGV4XSxcclxuICAgICAgICAgICAgICAgICAgICB1cmxzOiB0aGlzLmltYWdlc0FyclxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAvL+mVv+aMieaQnOiXj1xyXG4gICAgICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgIGtleTogJ3Nlc3Npb24zcmQnLFxyXG4gICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LnR1a2F4aXUuY29tL3d4YXBpL2luZGV4L2NvbGxlY3QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB0aGF0LmltZ0RhdGFbaW5kZXhdLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbjNyZDogdGhhdC5zZXNzaW9uM3JkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoZGF0YSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihkYXRhLmRhdGEuc3RhdHVzPT0xKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogZGF0YS5kYXRhLm1zZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogZGF0YS5kYXRhLm1zZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIGZhaWxsKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+Wksei0pScpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZChvcHRpb25zKXtcclxuICAgICAgICB0aGlzLmltYWdlc0Fycj0gW107XHJcbiAgICAgICAgdGhpcy5wYWdlPSAxO1xyXG4gICAgICAgIHRoaXMudGFnPSBvcHRpb25zLnRhZztcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgd3guc2hvd0xvYWRpbmcoe1xyXG4gICAgICAgICAgICB0aXRsZTon5q2j5Zyo5Yqg6L295LitLi4uJywgXHJcbiAgICAgICAgICAgIG1hc2s6IHRydWVcclxuICAgICAgICB9KVxyXG5cclxuICAgIFxyXG4gICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICBrZXk6ICdzZXNzaW9uM3JkJyxcclxuICAgICAgICAgICAgc3VjY2VzcyhyZXMpe1xyXG4gICAgICAgICAgICAgICAgdGhhdC5zZXNzaW9uM3JkPSByZXMuZGF0YTsgXHJcblxyXG4gICAgICAgICAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOlwiaHR0cHM6Ly93d3cudHVrYXhpdS5jb20vd3hhcGkvaW5kZXgvc29cIixcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiB0aGF0LnRhZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZTogdGhhdC5wYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uM3JkOiB0aGF0LnNlc3Npb24zcmRcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmRhdGEuc3RhdHVzPT01MDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3gucmVkaXJlY3RUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnLi4vLi4vcGFnZXMvaW5kZXgvaW5kZXgnIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YT0gcmVzLmRhdGEuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsZW49IGRhdGEubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYobGVuPjApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhQXJyPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IodmFyIGtleSBpbiBkYXRhKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUFyci5wdXNoKGRhdGFba2V5XS5pbWFnZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5pbWdEYXRhPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuaW1hZ2VzQXJyPSBkYXRhQXJyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBvblJlYWNoQm90dG9tKCl7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMucGFnZSsrO1xyXG4gICAgICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgICAgICAgdGl0bGU6J+ato+WcqOWKoOi9veS4rS4uLicsIFxyXG4gICAgICAgICAgICBtYXNrOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgdXJsOlwiaHR0cHM6Ly93d3cudHVrYXhpdS5jb20vd3hhcGkvaW5kZXgvc29cIixcclxuICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICB0YWc6IHRoYXQudGFnLFxyXG4gICAgICAgICAgICAgICAgcGFnZTogdGhhdC5wYWdlLFxyXG4gICAgICAgICAgICAgICAgc2Vzc2lvbjNyZDogdGhhdC5zZXNzaW9uM3JkXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MocmVzKXtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhPSByZXMuZGF0YS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxlbj0gZGF0YS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBpZihsZW4+MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGFBcnI9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcih2YXIga2V5IGluIGRhdGEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhQXJyLnB1c2goZGF0YVtrZXldLmltYWdlKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGF0LmltZ0RhdGE9IHRoYXQuaW1nRGF0YS5jb25jYXQoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5pbWFnZXNBcnI9IHRoYXQuaW1hZ2VzQXJyLmNvbmNhdChkYXRhQXJyKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpOyAgIFxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5wYWdlLS07XHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgJHByb3BzID0ge1wic2VhcmNoXCI6e1widi1iaW5kOmZpeGVkLm9uY2VcIjpcImZpeGVkXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgICAgICBzZWFyY2g6IFNlYXJjaCxcclxuICAgIH1cclxufVxyXG4iXX0=