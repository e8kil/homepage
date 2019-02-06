import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import '../css/Swiper.css'

class Photos extends Component {
    constructor(props) {
        super(props)
        this.goNext = this.goNext.bind(this)
        this.goPrev = this.goPrev.bind(this)
        this.keyBoardFunction = this.keyBoardFunction.bind(this);
        this.swiper = null
    }

    goNext() {
        if (this.swiper) this.swiper.slideNext()
    }

    goPrev() {
        if (this.swiper) this.swiper.slidePrev()
    }

    keyBoardFunction(e) {
        if (e.keyCode === 37) {
            this.swiper.slidePrev()
        } else if (e.keyCode === 39) {
            this.swiper.slideNext()
        }
    }

    componentDidMount() {
        document.addEventListener("keydown", this.keyBoardFunction, false);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.keyBoardFunction, false);
    }


    render() {
        const params = {
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            keyboardControl: 'true',
            coverflowEffect: {
                rotate: 1,
                stretch: 10,
                depth: 120,
                modifier: 8,
                slideShadows: true
            },
            loop: true            
        };

        return (
            <div>
                <Swiper {...params} ref={node => {if (node) this.swiper = node.swiper }}>
                        {this.props.photos.map((photo) => {
                            return (
                                <div className='swiper-slide' style={{ backgroundImage: "url(" + photo + ")" }} ></div>
                            )
                        })}
                </Swiper>
                <div className="swiper-pagination"></div>
                <div onClick={this.goNext} className="swiper-button-next swiper-button-black"></div>
                <div onClick={this.goPrev} className="swiper-button-prev swiper-button-black"></div> 
                {
                    
                }   
            </div>
  
        )
    }  
}

export default Photos;
