import { Flex } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, {
  Navigation,
  Pagination
} from 'swiper';

SwiperCore.use([Navigation, Pagination]);

import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {
  return (
    <Flex direction="column">
      <Header />

      <Banner />
    
      <TravelTypes />

      <Swiper
        // install Swiper modules
        navigation={true}
        pagination={true}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </Flex>
  )
}
