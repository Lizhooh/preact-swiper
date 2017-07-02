
## preact-swiper
`preact-swiper` is a [swiper.js](https://github.com/nolimits4web/Swiper) based swiper component.

### Installation

```bash
```

### Usage

```js
import { h, Component } from 'preact';
import PSwiper from 'preact-swiper';

export default class MySwiper extends Component {

    constructor(props) {
        super(props);

        this.state = {
            swiperIsInitialized: null,
            pagination: true,
        }
    }

    render({ }, { pagination, swiperIsInitialized }) {
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
                pagination={pagination}
                swiperIsInitialized={swiperIsInitialized}
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


## License
[License](./LICENSE)
