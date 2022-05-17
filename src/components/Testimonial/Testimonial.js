import React from "react";
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from "swiper/react";
import circleTastimineal from "../../assets/images/circleTastimonial.png";
import lineStyleImg from '../../assets/images/lineStyle.png';
import user1 from '../../assets/images/user1.jpg';
import user2 from '../../assets/images/user2.jpg';
import user3 from '../../assets/images/user3.jpg';
import user4 from '../../assets/images/user4.jpg';
import user5 from '../../assets/images/user5.jpg';
import user6 from '../../assets/images/user6.jpg';
const Testimonial = () => {
  return (
    <div className="container mx-auto px-2 md:px-6 mt-20">
      <div className="text-center">
        <span style={{
            backgroundImage : `url(${lineStyleImg})`
        }} className="font-bold text-warning px-4 py1 text-xl mb-6 inline-block">Testimonial</span>
        <h2 className="text-2xl mb-8  font-bold text-secondary ">See What Are The Patients Saying About us</h2>
        <div className="flex lg:flex-row flex-col justify-between items-center">
          <div className="mb-8 lg:mb-0">
              <div className="relative">
                <img src={circleTastimineal} alt="" />
                <div>
                    <img style={{
                        top:  "20%",
                        left: "8%"
                    }} className="absolute rounded-full " width="60px" src={user1} alt="" />
                </div>
                <div>
                    <img style={{
                        top:  "20%",
                        right: "8%"
                    }} className="absolute  rounded-full " width="60px" src={user2} alt="" />
                </div>
                <div>
                    <img style={{
                        top:  "0%",
                        right: "40%"
                    }} className="absolute  rounded-full " width="60px" src={user3} alt="" />
                </div>
                <div>
                    <img style={{
                        bottom:  "20%",
                        left: "8%"
                    }} className="absolute  rounded-full " width="60px" src={user4} alt="" />
                </div>
                <div>
                    <img style={{
                        bottom:  "20%",
                        right: "8%"
                    }} className="absolute  rounded-full " width="60px" src={user5} alt="" />
                </div>
                <div>
                    <img style={{
                        bottom:  "0%",
                        right: "40%"
                    }} className="absolute rounded-full " width="60px" src={user6} alt="" />
                </div>
                
              </div>
          </div>

          <div className=" w-10/12 lg:w-3/6 text-left">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y , Autoplay]}

              spaceBetween={50}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              navigation={{ clickable: true }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                  <div className="bg-warning p-4 lg:py-10 lg:px-8 rounded-lg relative ">
                      <span className="bg-white inline-block px-3 py-3 rounded-xl  transform lg:-translate-y-16 "><ImQuotesLeft className=" text-4xl md:text-6xl text-warning" /></span>
                      <p className="text-white text-sm md:text-lg font-medium   ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecena ssuspendisse ultrices gravida.
                      </p>
                      <h4 className="text-white  font-bold text-xl my-3 ">John Deo</h4>
                      <h6 className="uppercase font-bold text-white">patient</h6>
                      <span className=" absolute right-16 bottom-8"><ImQuotesRight className=" text-6xl text-red-300 opacity-80" /></span>
                  </div>
              </SwiperSlide>
              
             
            
         
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
