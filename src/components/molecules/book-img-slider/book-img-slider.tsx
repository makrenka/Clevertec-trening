import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Thumbs } from 'swiper';
import bookPageImg from '../../../assets/images/book-page-images/book-cover.jpg';
import './book-img-slider.css';
import 'swiper/css';
import 'swiper/css/pagination';


export const BookImgSlider = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

    const images = {
        book1: [
            bookPageImg,
            bookPageImg,
            bookPageImg,
            bookPageImg,
            bookPageImg,
        ]
    }

    return (
        <div className='book-page__sliders-wrapper'>
            <Swiper
                modules={[Pagination, Thumbs]}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                spaceBetween={50}
                pagination={{
                    type: "bullets",
                    clickable: true,
                }}
                className="book-page__slider"
                data-test-id='slide-big'
            >
                {images.book1.map((item) =>
                    <SwiperSlide className="book-page__slide">
                        <img src={item} alt="book cover" className="book-page__slide-img" />
                    </SwiperSlide>
                )}
            </Swiper>
            <Swiper
                modules={[Thumbs]}
                onSwiper={setThumbsSwiper}
                className="book-page__thumb-slider"
            >
                {images.book1.map((item) =>
                    <SwiperSlide className="book-page__thumb-slide" data-test-id='slide-mini'>
                        <img src={item} alt="book cover" className="book-page__thumb-slide-img" />
                    </SwiperSlide>
                )}
            </Swiper>

        </div>

    )
}