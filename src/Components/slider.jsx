import React, { Component } from 'react'
import img1 from './imgs/img_1.jpg'
import img2 from './imgs/img_2.jpg'
import img3 from './imgs/img_3.jpg'
import img4 from './imgs/img_4.jpg'


export default class Slider extends Component {
    constructor() {
        super();
        this.state = {
            currentIndex: 0,
            autoSlide: false,
        };
        this.images = [img1, img2, img3, img4];
        this.intervalId = null;
    }
    componentDidMount() {
        this.startAutoSlide()
    }
    componentWillUnmount() {
        this.stopAutoSlide();
    }

    startAutoSlide = () => {
        this.intervalId = setInterval(this.nextSlide, 3000);
        this.setState({ autoSlide: true });
    };

    stopAutoSlide = () => {
        clearInterval(this.intervalId);
        this.setState({ autoSlide: false });
    };

    nextSlide = () => {
        this.setState((prevState) => ({
            currentIndex: (prevState.currentIndex + 1) % this.images.length,
        }));
    };

    prevSlide = () => {
        this.setState((prevState) => ({
            currentIndex:
                prevState.currentIndex === 0
                    ? this.images.length - 1
                    : prevState.currentIndex - 1,
        }));
    };

    render() {
        const { currentIndex, autoSlide } = this.state;
        const currentImage = this.images[currentIndex];
        return (
            <div className='text-center'>
                <img className='mx-auto my-3 rounded-2 d-block' src={currentImage} width={700} height={350} alt=''/>
                <button className='btn btn-dark me-2' onClick={this.prevSlide}>Previous</button>
                <button className='btn btn-dark me-2' onClick={this.nextSlide}>Next</button>
                <button className='btn btn-dark me-2' onClick={autoSlide ? this.stopAutoSlide : this.startAutoSlide}>
                    {autoSlide ? 'Stop' : 'Auto Slide'}
                </button>
            </div>
        )
    }
}
