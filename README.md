
## preact-swiper
`preact-swiper` is a [swiper.js](https://github.com/nolimits4web/Swiper) based swiper component.

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
                    autoplayDisableOnInteraction: false
                }}
                pagination={true}
                swiperIsInitialized={() => {
                    // swiper Is Initialized
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

**Style:**

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

**Demo:**

![](./demo/preact-swiper-demo.gif)

## Method
Method API Look: http://idangero.us/swiper/api/#.WVh1NVMT8m4

```js
ref={r => this.swiper = r.swiper}
```

## License
[License](./LICENSE)
