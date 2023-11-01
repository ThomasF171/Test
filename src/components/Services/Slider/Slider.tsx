import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { serviceData } from "./Slider.data";
import { RxArrowTopRight } from "react-icons/rx";
import { useState, useEffect } from 'react';

export function Slider() {
    const [swiperHeight, setSwiperHeight] = useState('340px'); 

    useEffect(() => {
        
        const updateSwiperHeight = () => {
            const width = window.innerWidth;
            if (width <= 320) {
                setSwiperHeight('200px'); 
            } else if (width <= 768) {
                setSwiperHeight('200px'); 
            } else {
                setSwiperHeight('340px'); 
            }
        };

        window.addEventListener('resize', updateSwiperHeight);

        updateSwiperHeight();

        return () => {

            window.removeEventListener('resize', updateSwiperHeight);
        };
    }, []);

    return (
        <Swiper
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 15
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 15
                }
            }}
            freeMode={true}
            pagination={{
                clickable: true
            }}
            modules={[Pagination]}
            style={{ height: swiperHeight }} 
            className="w-[270px] md:w-[550px]"
        >
            {serviceData.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className="flex px-6 py-8 text-black rounded-lg cursor-pointer bg-gray-500 sm:flex-col gap-x-6 sm:gap-x-0 group hover:bg-black hover:text-white transition-all duration-300">
                        <div className="mb-4 text-4xl transition-all duration-300 group-hover:text-white">{item.icon}</div>
                        <div>
                            <h3>{item.title}</h3>
                            <p className="text-sm transition-all duration-300 group-hover:text-white">{item.description}</p>
                        </div>
                        <div className="text-3xl">
                            <RxArrowTopRight className="transition-all duration-300 group-hover:rotate-45 group-hover:text-white" />
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
