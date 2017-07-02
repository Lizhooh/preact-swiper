
## preact-swiper
`preact-swiper` is a [swiper.js](https://github.com/nolimits4web/Swiper) based swiper component.

**Demo:**

![](./demo/preact-swiper-demo.gif)

### Installation

```bash
npm install --save preact-swiper@https://github.com/Lizhooh/preact-swiper.git
```

### Usage

```js
import { h, Component } from 'preact';
import PSwiper from 'preact-swiper';

export default class MySwiper extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <PSwiper
                style={{
                    height: '240px',
                    backgroundColor: '#3bf'
                }}
                options={{
                    loop: true,
                    autoplay: 3000,
                    autoplayDisableOnInteraction: false,
                    paginationClickable: true
                }}
                pagination={true}
                swiperIsInitialized={swiper => {
                    // swiper Is Initialized
                    this.swiper = swiper;
                }}
                >
                <div className='slide'>Slide 1</div>
                <div className='slide'>Slide 2</div>
                <div className='slide'>Slide 3</div>
            </PSwiper>
        );
    }
}
```

**CSS:**

```css
.slide {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    color: #fff;
    font-size: 32px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
```

## Method
Method API Look: http://idangero.us/swiper/api/#.WVh1NVMT8m4

```js
<PSwiper
    swiperIsInitialized={swiper => {
        // swiper Is Initialized
        this.swiper = swiper;
        this.swiper.slideTo(2); // active index 2
    }}
    >
</PSwiper>
```

## License
[License](./LICENSE)
