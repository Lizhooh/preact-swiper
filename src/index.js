import { h, Component } from 'preact';
import Swiper from 'swiper';

export default class PSwiper extends Component {

    static defaultProps = {
        swiperIsInitialized: () => { },
        options: {},
    };

    constructor(props) {
        super(props);

        // default options
        this.props.options = Object.assign({
            pagination: '.swiper-pagination',
        }, this.props.options);

        this.slicelist = this.props.children.map((item, index) => (
            <div className='swiper-slide' key={`swiper-slide-${index}`}>
                {item}
            </div>
        ));
    }

    // clear
    componentWillUnmount() {
        this.swiper.removeAllSlides();
        this.swiper.destroy(true, true);
        this.swiper = null;
    }

    // init
    componentDidMount() {
        let { options, swiperIsInitialized } = this.props;

        if (typeof window !== undefined) {
            this.swiper = new Swiper(this.root, options);
            this.props.swiperIsInitialized(this.swiper);
        }
    }

    // You must return false, at this point DOM is operated by an external
    shouldComponentUpdate(nextProps, nextState) {

        if (typeof nextProps.activeIndex === 'number') {
            this.swiper.slideTo(nextProps.activeIndex);
        }

        return false;
    }

    render() {
        const {
            options,
            swiperIsInitialized,
            pagination,
            ...other
        } = this.props;

        return (
            <div className="swiper-container" {...other} ref={r => this.root = r}>
                <div className="swiper-wrapper">{
                    this.slicelist
                }</div>
                {!!pagination && <div className="swiper-pagination"></div>}
            </div>
        );
    }
}