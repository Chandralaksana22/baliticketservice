<script>
import ImageCard from '@/components/ImageCard.vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import PlaceToGoPort from '../components/PlaceToGoPort.vue';
import HorizontalCard from '../components/HorizontalCard.vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import PanelInfo from '../components/PanelInfo.vue'
export default {
    components: {
        Swiper,
        SwiperSlide,
        PanelInfo,
        PlaceToGoPort,
        ImageCard,
        HorizontalCard
    },
    setup() {
        return {
            modules: [Navigation, Pagination],
        };
    },
    data() {
        return {
            places: [
                {
                    imageSrc: "https://dashboard.bali-zoo.com/storage/photos/shares/Animals/Lion/Lion.jpg",
                    title: "ELEPHANT MUD FUN",
                    description: "Our new Elephant Mud Fun half-day package allowing guest to get down and dirty with our friendly Sumatran elephants while discovering all about their behavior and lifestyle from our experienced mahout handlers.",
                    buttonLink: "/ticket-detail"
                },
                {
                    imageSrc: "https://dashboard.bali-zoo.com/storage/photos/shares/Animals/Lion/Lion.jpg",
                    title: "ELEPHANT MUD FUN",
                    description: "Our new Elephant Mud Fun half-day package allowing guest to get down and dirty with our friendly Sumatran elephants while discovering all about their behavior and lifestyle from our experienced mahout handlers.",
                    buttonLink: "/ticket-detail"
                },
                {
                    imageSrc: "https://dashboard.bali-zoo.com/storage/photos/shares/Animals/Lion/Lion.jpg",
                    title: "ELEPHANT MUD FUN",
                    description: "Our new Elephant Mud Fun half-day package allowing guest to get down and dirty with our friendly Sumatran elephants while discovering all about their behavior and lifestyle from our experienced mahout handlers.",
                    buttonLink: "/ticket-detail"
                },
            ],
            cards: [
                {
                    imageSrc: "https://s3-alpha-sig.figma.com/img/9f18/d927/bafe232f657801dda9a4ba9bf7c762d0?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P-k6X-EVsQMwkLTp2BsPA8SRbi797hesZIhd7znioYF24Nfm7N1zH3AYzKB-XLRMdlrQnxM5uOaTI5PI27qgydyrnlLOiiYmKWRY5PCB5e993KuD-I~kUi34Xulhz-ZLeXsyKk067lsZv4CcOpxZJG1sgah8lWVl3nuU~pHWDYlRj8hZ7a5tNyfS6sv50hE2SgPiJ2LrHbLf3GM8~mq7kVlYmeSdFuaA2mJUu0ACqJ0ELZri0GoJiwyfoenD5xuEUvzhfOMvQsXHdQMejg0-jK9Stv3R6waHeb8uDOrZErRYPXMKH1xRCWl~kxLnO-dTzlJmRgBeFOeM64hm~s4xQQ__",
                    title: "ELEPHANT MUD FUN SESSION ONE",
                    session: "Morning",
                    lastCheckIn: "07:30 (GMT+8)",
                    inclusion: "Admission Ticket, Welcome Drink, Feeding the Elephant, Mud Fun Activity, Lunch, Towel, Insurance",
                    link: "/ticket-detail",
                    buttonText: "Book Now"
                },
                {
                    imageSrc: "https://s3-alpha-sig.figma.com/img/9f18/d927/bafe232f657801dda9a4ba9bf7c762d0?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P-k6X-EVsQMwkLTp2BsPA8SRbi797hesZIhd7znioYF24Nfm7N1zH3AYzKB-XLRMdlrQnxM5uOaTI5PI27qgydyrnlLOiiYmKWRY5PCB5e993KuD-I~kUi34Xulhz-ZLeXsyKk067lsZv4CcOpxZJG1sgah8lWVl3nuU~pHWDYlRj8hZ7a5tNyfS6sv50hE2SgPiJ2LrHbLf3GM8~mq7kVlYmeSdFuaA2mJUu0ACqJ0ELZri0GoJiwyfoenD5xuEUvzhfOMvQsXHdQMejg0-jK9Stv3R6waHeb8uDOrZErRYPXMKH1xRCWl~kxLnO-dTzlJmRgBeFOeM64hm~s4xQQ__",
                    title: "ELEPHANT MUD FUN SESSION TWO",
                    session: "Afternoon",
                    lastCheckIn: "12:30 (GMT+8)",
                    inclusion: "Admission Ticket, Welcome Drink, Feeding the Elephant, Mud Fun Activity, Lunch, Towel, Insurance",
                    link: "/ticket-detail",
                    buttonText: "Book Now"
                },
                {
                    imageSrc: "https://s3-alpha-sig.figma.com/img/9f18/d927/bafe232f657801dda9a4ba9bf7c762d0?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P-k6X-EVsQMwkLTp2BsPA8SRbi797hesZIhd7znioYF24Nfm7N1zH3AYzKB-XLRMdlrQnxM5uOaTI5PI27qgydyrnlLOiiYmKWRY5PCB5e993KuD-I~kUi34Xulhz-ZLeXsyKk067lsZv4CcOpxZJG1sgah8lWVl3nuU~pHWDYlRj8hZ7a5tNyfS6sv50hE2SgPiJ2LrHbLf3GM8~mq7kVlYmeSdFuaA2mJUu0ACqJ0ELZri0GoJiwyfoenD5xuEUvzhfOMvQsXHdQMejg0-jK9Stv3R6waHeb8uDOrZErRYPXMKH1xRCWl~kxLnO-dTzlJmRgBeFOeM64hm~s4xQQ__",
                    title: "ELEPHANT MUD FUN SESSION ONE",
                    session: "Morning",
                    lastCheckIn: "07:30 (GMT+8)",
                    inclusion: "Admission Ticket, Welcome Drink, Feeding the Elephant, Mud Fun Activity, Lunch, Towel, Insurance",
                    link: "/ticket-detail",
                    buttonText: "Book Now"
                },
                {
                    imageSrc: "https://s3-alpha-sig.figma.com/img/9f18/d927/bafe232f657801dda9a4ba9bf7c762d0?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P-k6X-EVsQMwkLTp2BsPA8SRbi797hesZIhd7znioYF24Nfm7N1zH3AYzKB-XLRMdlrQnxM5uOaTI5PI27qgydyrnlLOiiYmKWRY5PCB5e993KuD-I~kUi34Xulhz-ZLeXsyKk067lsZv4CcOpxZJG1sgah8lWVl3nuU~pHWDYlRj8hZ7a5tNyfS6sv50hE2SgPiJ2LrHbLf3GM8~mq7kVlYmeSdFuaA2mJUu0ACqJ0ELZri0GoJiwyfoenD5xuEUvzhfOMvQsXHdQMejg0-jK9Stv3R6waHeb8uDOrZErRYPXMKH1xRCWl~kxLnO-dTzlJmRgBeFOeM64hm~s4xQQ__",
                    title: "ELEPHANT MUD FUN SESSION TWO",
                    session: "Afternoon",
                    lastCheckIn: "12:30 (GMT+8)",
                    inclusion: "Admission Ticket, Welcome Drink, Feeding the Elephant, Mud Fun Activity, Lunch, Towel, Insurance",
                    link: "/ticket-detail",
                    buttonText: "Book Now"
                },
            ],
            balisafari: [
                {
                    imageSrc: "https://s3-alpha-sig.figma.com/img/e095/7c58/13cbb367eb4179926799a97666f74027?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S7eBE3Rgfkfi32kKAQZP7vCrjMWDICzQGKNi2BYQ1-nshkx1Y1VbGaE6cgF2Tc0iPEhGLHwqBroWapK4flazJsONugxplfaBCz70o8OlnoQPC6QHsYsWjULsNDji-kacemJG9CVvtk4s1mYEM4G8sg2cun1vUiKblXGGXwbv3zlEdjJ7cozEUQtbPdudLvFF3~NDYP2DPPaB6ph4Ah6OYzPILCfPaGE0f7fyZpS7wrUjigyDnOpdtw2cGmo7hDQLk7R4MPvcu85rMYPvHoLl2iTzhXojuuMS~gHlT8x-Cd6nXGzAKIwsK8d~zntYNAh~o07ZCITx-ZsmpQfn6tR01Q__",
                    title: "JUNGLE HOPPER",
                    description: "This popular Safari package embarks you on an adventure in the wildlife to encounter a wide variety of animals, even endangered species. Available for ticket purchase.",
                    buttonLink: "/ticket-detail"
                },
                {
                    imageSrc: "https://s3-alpha-sig.figma.com/img/e095/7c58/13cbb367eb4179926799a97666f74027?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S7eBE3Rgfkfi32kKAQZP7vCrjMWDICzQGKNi2BYQ1-nshkx1Y1VbGaE6cgF2Tc0iPEhGLHwqBroWapK4flazJsONugxplfaBCz70o8OlnoQPC6QHsYsWjULsNDji-kacemJG9CVvtk4s1mYEM4G8sg2cun1vUiKblXGGXwbv3zlEdjJ7cozEUQtbPdudLvFF3~NDYP2DPPaB6ph4Ah6OYzPILCfPaGE0f7fyZpS7wrUjigyDnOpdtw2cGmo7hDQLk7R4MPvcu85rMYPvHoLl2iTzhXojuuMS~gHlT8x-Cd6nXGzAKIwsK8d~zntYNAh~o07ZCITx-ZsmpQfn6tR01Q__",
                    title: "JUNGLE HOPPER",
                    description: "This popular Safari package embarks you on an adventure in the wildlife to encounter a wide variety of animals, even endangered species. Available for ticket purchase.",
                    buttonLink: "/ticket-detail"
                },
                {
                    imageSrc: "https://s3-alpha-sig.figma.com/img/e095/7c58/13cbb367eb4179926799a97666f74027?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S7eBE3Rgfkfi32kKAQZP7vCrjMWDICzQGKNi2BYQ1-nshkx1Y1VbGaE6cgF2Tc0iPEhGLHwqBroWapK4flazJsONugxplfaBCz70o8OlnoQPC6QHsYsWjULsNDji-kacemJG9CVvtk4s1mYEM4G8sg2cun1vUiKblXGGXwbv3zlEdjJ7cozEUQtbPdudLvFF3~NDYP2DPPaB6ph4Ah6OYzPILCfPaGE0f7fyZpS7wrUjigyDnOpdtw2cGmo7hDQLk7R4MPvcu85rMYPvHoLl2iTzhXojuuMS~gHlT8x-Cd6nXGzAKIwsK8d~zntYNAh~o07ZCITx-ZsmpQfn6tR01Q__",
                    title: "JUNGLE HOPPER",
                    description: "This popular Safari package embarks you on an adventure in the wildlife to encounter a wide variety of animals, even endangered species. Available for ticket purchase.",
                    buttonLink: "/ticket-detail"
                },
            ],
        };
    }
};
</script>
<template>
    <section class="bg-cover bg-white lg:bg-[url('../assets/image/bg-desktop.png')]">
        <div
            class="bg-center bg-cover h-[100] md:bg-[url('https://s3-alpha-sig.figma.com/img/14d2/7c02/aecd7b00fbca911881978a7901a4dd82?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eB4M6GJ7frnK06sWSjvid1KJpwRfTnNjne0aLNJhTX4bZsE~JpZ0GcocovuEupCWM8L~CM7vtXMpbH5d-zbKBiAztlkewZgrNwjWrIAowJGJHKzZBtjrkcBQHRSi9oQU5f2HeWAOf~C2LWwe3iRjSUsZmuVEPhqp44V3QTs3t7t4mfw-2i3lX3dOCv0Z7k0ZduwZ~4PY3gtTX-Wy~7nGa2r~GasI8BvmBLJwztIn6tpDLT9nnRy8g6bK3DM0LdnI4rWO6mHpm64QRkUN1wUwMk5WGHdhy7u54ldIwPL14jbNIqXmk4FBwYtNBKCoyURysIolFdGG9JLv6jVL7hnk7g__')]">
            <div class="h-[25vh] lg:h-[100vh] px-5 lg:px-10 container mx-auto flex items-center justify-center">
                <h1
                    class="mb-4 boldfont text-3xl mt-10 lg:mt-0 font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-5xl">
                    Tickets</h1>
            </div>
        </div>
        <div id="placetogo" class="hidden lg:block">
            <h4 class="boldfont text-white text-3xl mb-5 mt-10 text-center">General Admission</h4>
            <div class="grid grid-cols-4 p-10 gap-4 ">
                <div class="relative img-border card overflow-hidden zoom-on-hover">
                    <img class="filter brightness-50 h-[60vh] object-cover"
                        src="https://s3-alpha-sig.figma.com/img/2e71/4d3d/9aad058f82c8f1188e2a86e7628b141c?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SbCjRcbtq3ere9ddHQ-Xg1vrR~hRv~6Gxc8oxxHenPHVmrtsE926UOM7ok~iCA~rIrATl-Bt0ntpr-OXlQy3ukRMr76eHzMiPtQKcqGcgAGa~0NrxwuoI~4LmoUsebKLDtrC-WhZAR6ArdF3~X98lt3C0ketJn4RJxu1nrTGfytJbXff~bvzMQr2Z-PoiKRTjXcrOyOdNe4P58dpxdoRV59d6~hG71JXDfUHw1WmcdxvoaOM~mM~tj5e~HVN7wYShEHT3VIgiiEftSKMSBor~2XtsebBioxh3yYkVjwTq3lJcLnXuKvBihtNnSVGbQ4qG58SW3z095BYRZAH1Iw4Wg__"
                        alt="">
                    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 text-center w-100 text-white">
                        <h5 class="boldfont text-xl text-white text-center">BALI SAFARI &amp; <br> MARINE PARK </h5>
                    </div>
                    <div class="absolute bottom-[5%] left-1/2 z-50 -translate-x-1/2 text-center w-100 text-white">
                        <a type="submit"
                            class="p-2 text-lg bg-white rounded-lg text-black slide boldfont text-center">Book
                            Ticket</a>
                    </div>
                </div>
                <div class="relative img-border card overflow-hidden zoom-on-hover">
                    <img class="filter brightness-50 h-[60vh] object-cover"
                        src="https://s3-alpha-sig.figma.com/img/2e71/4d3d/9aad058f82c8f1188e2a86e7628b141c?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SbCjRcbtq3ere9ddHQ-Xg1vrR~hRv~6Gxc8oxxHenPHVmrtsE926UOM7ok~iCA~rIrATl-Bt0ntpr-OXlQy3ukRMr76eHzMiPtQKcqGcgAGa~0NrxwuoI~4LmoUsebKLDtrC-WhZAR6ArdF3~X98lt3C0ketJn4RJxu1nrTGfytJbXff~bvzMQr2Z-PoiKRTjXcrOyOdNe4P58dpxdoRV59d6~hG71JXDfUHw1WmcdxvoaOM~mM~tj5e~HVN7wYShEHT3VIgiiEftSKMSBor~2XtsebBioxh3yYkVjwTq3lJcLnXuKvBihtNnSVGbQ4qG58SW3z095BYRZAH1Iw4Wg__"
                        alt="">
                    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 text-center w-100 text-white">
                        <h5 class="boldfont text-xl text-white text-center">BALI SAFARI &amp; <br> MARINE PARK </h5>
                    </div>
                    <div class="absolute bottom-[5%] left-1/2 z-50 -translate-x-1/2 text-center w-100 text-white">
                        <a type="submit"
                            class="p-2 text-lg bg-white rounded-lg text-black slide boldfont text-center">Book
                            Ticket</a>
                    </div>
                </div>
                <div class="relative img-border card overflow-hidden zoom-on-hover">
                    <img class="filter brightness-50 h-[60vh] object-cover"
                        src="https://s3-alpha-sig.figma.com/img/2e71/4d3d/9aad058f82c8f1188e2a86e7628b141c?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SbCjRcbtq3ere9ddHQ-Xg1vrR~hRv~6Gxc8oxxHenPHVmrtsE926UOM7ok~iCA~rIrATl-Bt0ntpr-OXlQy3ukRMr76eHzMiPtQKcqGcgAGa~0NrxwuoI~4LmoUsebKLDtrC-WhZAR6ArdF3~X98lt3C0ketJn4RJxu1nrTGfytJbXff~bvzMQr2Z-PoiKRTjXcrOyOdNe4P58dpxdoRV59d6~hG71JXDfUHw1WmcdxvoaOM~mM~tj5e~HVN7wYShEHT3VIgiiEftSKMSBor~2XtsebBioxh3yYkVjwTq3lJcLnXuKvBihtNnSVGbQ4qG58SW3z095BYRZAH1Iw4Wg__"
                        alt="">
                    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 text-center w-100 text-white">
                        <h5 class="boldfont text-xl text-white text-center">BALI SAFARI &amp; <br> MARINE PARK </h5>
                    </div>
                    <div class="absolute bottom-[5%] left-1/2 z-50 -translate-x-1/2 text-center w-100 text-white">
                        <a type="submit"
                            class="p-2 text-lg bg-white rounded-lg text-black slide boldfont text-center">Book
                            Ticket</a>
                    </div>
                </div>
                <div class="relative img-border card overflow-hidden zoom-on-hover">
                    <img class="filter brightness-50 h-[60vh] object-cover"
                        src="https://s3-alpha-sig.figma.com/img/2e71/4d3d/9aad058f82c8f1188e2a86e7628b141c?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SbCjRcbtq3ere9ddHQ-Xg1vrR~hRv~6Gxc8oxxHenPHVmrtsE926UOM7ok~iCA~rIrATl-Bt0ntpr-OXlQy3ukRMr76eHzMiPtQKcqGcgAGa~0NrxwuoI~4LmoUsebKLDtrC-WhZAR6ArdF3~X98lt3C0ketJn4RJxu1nrTGfytJbXff~bvzMQr2Z-PoiKRTjXcrOyOdNe4P58dpxdoRV59d6~hG71JXDfUHw1WmcdxvoaOM~mM~tj5e~HVN7wYShEHT3VIgiiEftSKMSBor~2XtsebBioxh3yYkVjwTq3lJcLnXuKvBihtNnSVGbQ4qG58SW3z095BYRZAH1Iw4Wg__"
                        alt="">
                    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 text-center w-100 text-white">
                        <h5 class="boldfont text-xl text-white text-center">BALI SAFARI &amp; <br> MARINE PARK </h5>
                    </div>
                    <div class="absolute bottom-[5%] left-1/2 z-50 -translate-x-1/2 text-center w-100 text-white">
                        <a type="submit"
                            class="p-2 text-lg bg-white rounded-lg text-black slide boldfont text-center">Book
                            Ticket</a>
                    </div>
                </div>
            </div>
        </div>
        <h4 class="hidden lg:block boldfont text-white text-3xl pt-5 mb-5 text-center">MORE PACKAGES FROM BALI ZOO</h4>
        <div class="relative z-50 p-10 mb-[-10%]">
            <div class="mb-4">
                <ul class="flex flex-wrap -mb-px text-sm font-medium mx-auto justify-center text-center"
                    id="default-styled-tab" data-tabs-toggle="#default-styled-tab-content" role="tablist">
                    <li class="me-2" role="presentation">
                        <button class="inline-block package boldfont rounded-lg p-4" id="profile-styled-tab"
                            data-tabs-target="#styled-profile" type="button" role="tab" aria-controls="profile"
                            aria-selected="false">SINGLE PACKAGE</button>
                    </li>
                    <li class="me-2" role="presentation">
                        <button class="inline-block package boldfont rounded-lg p-4" id="dashboard-styled-tab"
                            data-tabs-target="#styled-dashboard" type="button" role="tab" aria-controls="dashboard"
                            aria-selected="false">COMBO PACKAGE</button>
                    </li>
                    <li class="me-2" role="presentation">
                        <button class="inline-block package boldfont rounded-lg p-4" id="settings-styled-tab"
                            data-tabs-target="#styled-settings" type="button" role="tab" aria-controls="settings"
                            aria-selected="false">STAY PACKAGE</button>
                    </li>
                </ul>
            </div>
            <div id="default-styled-tab-content">
                <div class="hidden" id="styled-profile" role="tabpanel" aria-labelledby="profile-tab">
                    <swiper :slidesPerView="1" :spaceBetween="10" :navigation="true" :breakpoints="{
                        '640': {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        '768': {
                            slidesPerView: 3,
                            spaceBetween: 0,
                        },
                        '1024': {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                    }" :modules="modules" class="mySwiper container mx-auto">
                        <swiper-slide v-for="(item, index) in cards" :key="index">

                            <ImageCard :imageSrc="item.imageSrc" :title="item.title" :session="item.session"
                                :lastCheckIn="item.lastCheckIn" :inclusion="item.inclusion" :link="item.link"
                                :buttonText="item.buttonText" />

                        </swiper-slide>
                    </swiper>
                </div>
                <div class="hidden" id="styled-dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                    <swiper :slidesPerView="1" :spaceBetween="10" :navigation="true" :breakpoints="{
                        '640': {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        '768': {
                            slidesPerView: 3,
                            spaceBetween: 0,
                        },
                        '1024': {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                    }" :modules="modules" class="mySwiper container mx-auto">
                        <swiper-slide v-for="(item, index) in cards" :key="index">

                            <ImageCard :imageSrc="item.imageSrc" :title="item.title" :session="item.session"
                                :lastCheckIn="item.lastCheckIn" :inclusion="item.inclusion" :link="item.link"
                                :buttonText="item.buttonText" />

                        </swiper-slide>
                    </swiper>
                </div>
                <div class="hidden" id="styled-settings" role="tabpanel" aria-labelledby="settings-tab">
                    <swiper :slidesPerView="1" :spaceBetween="10" :navigation="true" :breakpoints="{
                        '640': {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        '768': {
                            slidesPerView: 3,
                            spaceBetween: 0,
                        },
                        '1024': {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                    }" :modules="modules" class="mySwiper container mx-auto">
                        <swiper-slide v-for="(item, index) in cards" :key="index">

                            <ImageCard :imageSrc="item.imageSrc" :title="item.title" :session="item.session"
                                :lastCheckIn="item.lastCheckIn" :inclusion="item.inclusion" :link="item.link"
                                :buttonText="item.buttonText" />

                        </swiper-slide>
                    </swiper>
                </div>

            </div>
        </div>
    </section>
    <section class="hidden lg:block bg-cover bg-white lg:bg-[url('../assets/image/background-biru-desktop.png')]">
        <div id="placetogo" class="pt-[15%]">
            <h4 class="boldfont text-white text-3xl mb-5 text-center">MORE OFFER FROM BALI SAFARI</h4>
            <div class="grid grid-cols-3 p-10 mb-[-10%] gap-4">
                <HorizontalCard v-for="(place, index) in balisafari" :key="index" :imageSrc="place.imageSrc"
                    :title="place.title" :subTitle="place.subTitle" :description="place.description"
                    :buttonLink="place.buttonLink" />
            </div>
        </div>
    </section>
    <section class="hidden lg:block bg-cover bg-white lg:bg-[url('../assets/image/bg-hijau.png')]">
        <div id="placetogo" class="pt-[15%]">
            <h4 class="boldfont text-white text-3xl mb-5 text-center">MORE OFFER FROM BALI SAFARI</h4>
            <div class="grid grid-cols-3 p-10 gap-4">
                <div class="bg-white h-full overflow-hidden rounded-lg card-zoom-hover">
                    <div class="overflow-hidden">
                        <img src="https://s3-alpha-sig.figma.com/img/73b0/5bbc/07f6bef6a1b42099fd61c3147d4891e3?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pWWAhJ~JyFzGlFt2Zk6gBWonI4pug2Vdkt~xMTf5VuSLioaxkduMKn8zFbkCUxxfGSMm-jyyehMeKoRwM~TCd8RySg9Ilc9B8xIc7EnLGQUbAFOEU9p~hshhSP1EeXZyTbd3EMqFkDneWCym19H3R2v42wIFHVKpc-yLlHuAQbS~ngsQzRAaNldT6ThpeoiP7P7c5daohnQ30gOerGWWTySY0yjE4W-vgt~tpZHVxSv2DIunC8ZItL2XeHu24jgaqTPuVgtqwKmWfw5p-NfxDZ7M5r-b5Qa~rJ3XfT9r16bq5tRwj6r2NXwZ1PKa0drlldDpem4gTqE7OBCM~pC0lg__"
                            class="rounded-t-lg h-[35vh] w-full object-cover" alt="...">
                    </div>
                    <div class="p-5">
                        <h4 class="boldfont text-center text-lg text-blue">PREMIUM PACKAGE</h4>
                        <p class="text-sm text-center">Wine (red/white), 3-course lunch, preferential seating,
                            and VIP waiting lounge with free canape &amp; mocktail/cocktail</p>
                    </div>
                </div>
                <div class="bg-white h-full overflow-hidden rounded-lg card-zoom-hover">
                    <div class="overflow-hidden">
                        <img src="https://s3-alpha-sig.figma.com/img/73b0/5bbc/07f6bef6a1b42099fd61c3147d4891e3?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pWWAhJ~JyFzGlFt2Zk6gBWonI4pug2Vdkt~xMTf5VuSLioaxkduMKn8zFbkCUxxfGSMm-jyyehMeKoRwM~TCd8RySg9Ilc9B8xIc7EnLGQUbAFOEU9p~hshhSP1EeXZyTbd3EMqFkDneWCym19H3R2v42wIFHVKpc-yLlHuAQbS~ngsQzRAaNldT6ThpeoiP7P7c5daohnQ30gOerGWWTySY0yjE4W-vgt~tpZHVxSv2DIunC8ZItL2XeHu24jgaqTPuVgtqwKmWfw5p-NfxDZ7M5r-b5Qa~rJ3XfT9r16bq5tRwj6r2NXwZ1PKa0drlldDpem4gTqE7OBCM~pC0lg__"
                            class="rounded-t-lg h-[35vh] w-full object-cover" alt="...">
                    </div>
                    <div class="p-5">
                        <h4 class="boldfont text-center text-lg text-blue">PREMIUM PACKAGE</h4>
                        <p class="text-sm text-center">Wine (red/white), 3-course lunch, preferential seating,
                            and VIP waiting lounge with free canape &amp; mocktail/cocktail</p>
                    </div>
                </div>
                <div class="bg-white h-full overflow-hidden rounded-lg card-zoom-hover">
                    <div class="overflow-hidden">
                        <img src="https://s3-alpha-sig.figma.com/img/73b0/5bbc/07f6bef6a1b42099fd61c3147d4891e3?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pWWAhJ~JyFzGlFt2Zk6gBWonI4pug2Vdkt~xMTf5VuSLioaxkduMKn8zFbkCUxxfGSMm-jyyehMeKoRwM~TCd8RySg9Ilc9B8xIc7EnLGQUbAFOEU9p~hshhSP1EeXZyTbd3EMqFkDneWCym19H3R2v42wIFHVKpc-yLlHuAQbS~ngsQzRAaNldT6ThpeoiP7P7c5daohnQ30gOerGWWTySY0yjE4W-vgt~tpZHVxSv2DIunC8ZItL2XeHu24jgaqTPuVgtqwKmWfw5p-NfxDZ7M5r-b5Qa~rJ3XfT9r16bq5tRwj6r2NXwZ1PKa0drlldDpem4gTqE7OBCM~pC0lg__"
                            class="rounded-t-lg h-[35vh] w-full object-cover" alt="...">
                    </div>
                    <div class="p-5">
                        <h4 class="boldfont text-center text-lg text-blue">PREMIUM PACKAGE</h4>
                        <p class="text-sm text-center">Wine (red/white), 3-course lunch, preferential seating,
                            and VIP waiting lounge with free canape &amp; mocktail/cocktail</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
.swiper-pagination-bullet-active {
    background: white !important;
    width: 25px !important;
    border-radius: 5px !important;
}

.swiper-button-prev,
.swiper-button-next {
    color: #fff !important;
    height: 35px !important;
    width: 35px !important;
    background-color: rgba(0, 0, 0, 0.50) !important;
    border-radius: 100% !important;
    padding: 2% !important;
}

.swiper-button-prev:after,
.swiper-button-next:after {
    font-size: 14px !important;
}

button.package[aria-selected="false"] {
    background-color: #0887BE;
    color: #FFD600;
}

button.package[aria-selected="true"] {
    background-color: #FFD600;
    color: #0887BE;
}
</style>