'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _preact = require('preact');

var _swiper = require('swiper');

var _swiper2 = _interopRequireDefault(_swiper);

var PSwiper = (function (_Component, _H) {
    _inherits(PSwiper, _Component);

    _createClass(PSwiper, null, [{
        key: 'defaultProps',
        value: {
            swiperIsInitialized: function swiperIsInitialized() { },
            options: {}
        },
        enumerable: true
    }]);

    function PSwiper(props) {
        _classCallCheck(this, PSwiper);

        _Component.call(this, props);

        // default props
        this.props.options = Object.assign({
            pagination: '.swiper-pagination'
        }, this.props.options);

        this.slicelist = this.props.children.map(function (item, index) {
            return _H(
                'div',
                { className: 'swiper-slide', key: 'swiper-slide-' + index },
                item
            );
        });
    }

    // clear

    PSwiper.prototype.componentWillUnmount = function componentWillUnmount() {
        this.swiper.removeAllSlides();
        this.swiper.destroy(true, true);
        this.swiper = null;
    };

    // init

    PSwiper.prototype.componentDidMount = function componentDidMount() {
        var _props = this.props;
        var options = _props.options;
        var swiperIsInitialized = _props.swiperIsInitialized;

        if (typeof window !== undefined) {
            this.swiper = new _swiper2['default'](this.root, options);
            this.props.swiperIsInitialized(this.swiper);
        }
    };

    // You must return false, at this point DOM is operated by an external

    PSwiper.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {

        if (typeof nextProps.activeIndex === 'number') {
            this.swiper.slideTo(nextProps.activeIndex);
        }

        return false;
    };

    PSwiper.prototype.render = function render() {
        var _this = this;

        var _props2 = this.props;
        var options = _props2.options;
        var swiperIsInitialized = _props2.swiperIsInitialized;
        var pagination = _props2.pagination;

        var other = _objectWithoutProperties(_props2, ['options', 'swiperIsInitialized', 'pagination']);

        return _H(
            'div',
            _extends({ className: 'swiper-container' }, other, {
                ref: function (r) {
                    return _this.root = r;
                }
            }),
            _H(
                'div',
                { className: 'swiper-wrapper' },
                this.slicelist
            ),
            !!pagination && _H('div', { className: 'swiper-pagination' })
        );
    };

    return PSwiper;
})(_preact.Component, _preact.h);

exports['default'] = PSwiper;
module.exports = exports['default'];