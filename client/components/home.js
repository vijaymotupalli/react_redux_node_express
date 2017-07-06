import  React from 'react';
import  ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel'

import 'style-loader!react-responsive-carousel/lib/styles/carousel.css';


class Home extends React.Component{
    onChange() {
    console.log('onChange');
}

    onClickItem() {
    console.log('onClickItem');
}

    onClickThumb() {
    console.log('onClickThumb');
}

    render() {
        return (
            <Carousel axis="horizontal" showThumbs={true} showArrows={true} onChange={this.onChange} onClickItem={this.onClickItem} onClickThumb={this.onClickThumb} dynamicHeight emulateTouch>
                <div>
                    <img src= "http://54.254.175.129:9000/uploads/1499343360532.jpg" />
                    <p className="legend">Location 1</p>
                </div>
                <div>
                    <img src= "http://54.254.175.129:9000/uploads/1499343361039.jpg" />
                    <p className="legend">Location 2</p>
                </div>
                <div>
                    <img src="http://54.254.175.129:9000/uploads/1499343361532.jpg" />
                    <p className="legend">Location 3</p>
                </div>
            </Carousel>
        );
    }
}

export default Home