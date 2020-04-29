import { Component, createElement } from "react";
import { hot } from "react-hot-loader/root";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./ui/WwSlickCarousel.css";
import { Carousel } from 'react-responsive-carousel';


class WwSlickCarousel extends Component {
    constructor(props) {
        super(props);
        this.renderSlides = this.renderSlides.bind(this);
    }

    renderSlides() {
        const { datasource, content } = this.props;
        return datasource.status === "loading" ? null
            : datasource.items.map((item) => content(item)) //content here is a function that renders the item
    }

    // renderOneItem = (item) => { this.props.content(item) }

    render() {
        const { swipeable, useKeyboard } = this.props;
        const carouselOptions = {
            showThumbs: false,
            swipeable: swipeable,
            emulateTouch: swipeable,
            useKeyboardArrows: useKeyboard
        }
        return (
            <div className="ww-carousel">
                <Carousel {...carouselOptions}>
                    {this.renderSlides()}
                </Carousel>
            </div>
        )
    }
}

export default hot(WwSlickCarousel);
