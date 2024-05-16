<script>
import ImageCard from '@/components/ImageCard.vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import PlaceToGoPort from '../components/PlaceToGoPort.vue';
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
        ImageCard
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
                    imageSrc: "http://localhost/bts/themes/demo/assets/images/image-1.png",
                    title: "ELEPHANT MUD FUN SESSION ONE",
                    session: "Morning",
                    lastCheckIn: "07:30 (GMT+8)",
                    inclusion: "Admission Ticket, Welcome Drink, Feeding the Elephant, Mud Fun Activity, Lunch, Towel, Insurance",
                    link: "/ticket-detail",
                    buttonText: "Book Now"
                },
                {
                    imageSrc: "http://localhost/bts/themes/demo/assets/images/image-2.png",
                    title: "ELEPHANT MUD FUN SESSION TWO",
                    session: "Afternoon",
                    lastCheckIn: "12:30 (GMT+8)",
                    inclusion: "Admission Ticket, Welcome Drink, Feeding the Elephant, Mud Fun Activity, Lunch, Towel, Insurance",
                    link: "/ticket-detail",
                    buttonText: "Book Now"
                },
                {
                    imageSrc: "http://localhost/bts/themes/demo/assets/images/image-1.png",
                    title: "ELEPHANT MUD FUN SESSION ONE",
                    session: "Morning",
                    lastCheckIn: "07:30 (GMT+8)",
                    inclusion: "Admission Ticket, Welcome Drink, Feeding the Elephant, Mud Fun Activity, Lunch, Towel, Insurance",
                    link: "/ticket-detail",
                    buttonText: "Book Now"
                },
                {
                    imageSrc: "http://localhost/bts/themes/demo/assets/images/image-2.png",
                    title: "ELEPHANT MUD FUN SESSION TWO",
                    session: "Afternoon",
                    lastCheckIn: "12:30 (GMT+8)",
                    inclusion: "Admission Ticket, Welcome Drink, Feeding the Elephant, Mud Fun Activity, Lunch, Towel, Insurance",
                    link: "/ticket-detail",
                    buttonText: "Book Now"
                },
            ]
        };
    }
};
</script>

<template>
    <section class="bg-cover bg-[url('../assets/image/bg-desktop.png')]">
        <div class="bg-center bg-cover h-[100] md:bg-[url('../assets/image/balizoohero.png')]">
            <div class="h-[25vh] lg:h-[100vh] px-5 lg:px-10 container mx-auto flex items-center justify-center">
                <img src="../assets/image/balizoologo.png" class="object-contain h-1/4" alt="image">
            </div>
        </div>
        <div class="px-5 pb-0 lg:pb-44 lg:px-10 container mx-auto">
            <div class="panel-transparent p-5 lg:p-10 rounded-3xl mt-10 mb-[-20%] relative">
                <PanelInfo />
            </div>
        </div>
        <div id="placetogo">
            <h4 class="boldfont text-white text-3xl mb-5 text-center">Popular Activity</h4>
            <div class="grid grid-cols-3 px-10 mb-[-10%] gap-4 ">
                <PlaceToGoPort v-for="(place, index) in places" :key="index" :imageSrc="place.imageSrc"
                    :title="place.title" :subTitle="place.subTitle" :description="place.description"
                    :buttonLink="place.buttonLink" />
            </div>
        </div>
    </section>
    <section class="bg-cover bg-[url('../assets/image/background-biru-desktop.png')]">
        <h4 class="boldfont text-white text-3xl pt-[15%] mb-5 text-center">ALL PACKAGES, GET MORE PAY LESS</h4>
        <div class="p-10">


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
    <section>
        <div>
            <div class="grid grid-cols-1 lg:grid-cols-12">
                <div class="col-span-5">
                    <div class="relative">
                        <swiper :navigation="true" :modules="modules" class="mySwiper">
                            <swiper-slide>
                                <div class="relative">
                                    <img src="../assets/image/bfh5.png" alt=""
                                        class="h-[100vh] w-full object-cover filter brightness-50">
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="relative">
                                    <img src="../assets/image/bfh5.png" alt=""
                                        class="h-[100vh] w-full object-cover filter brightness-50">
                                </div>
                            </swiper-slide>
                        </swiper>
                        <div class="absolute z-10 top-[6rem] left-1/2 translate-x-[-50%] text-center w-full text-white">
                            <h1 class="boldfont text-3xl">General Admission</h1>
                        </div>
                        <div class="absolute z-10 bottom-[6rem] left-1/2 translate-x-[-50%] px-10 w-full text-white">
                            <div class="mb-10">
                                <h1 class="font-bold boldfont text-white">Inclusion :</h1>
                                <p class="text-white">Animal Encounter & Show, Jungle Splash Waterplay, Insurance </p>
                                <h1 class="font-bold boldfont text-white mt-5"> Facilities :</h1>
                                <p class="text-white">Wheelchair access, Toilet, Nursery, Restaurant, Parking area, ATM,
                                    Praying room, Wi-fi, Shuttle bus (inside zoo), Souvenir </p>
                            </div>
                            <div class="text-center">
                                <a class="px-2 py-3 bg-white text-black rounded-md slide boldfont">Book Ticket</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-7 bg-cover bg-center bg-[url('../assets/image/bg-hijau.png')]">
                    <button type="button" class="bg-yellow p-3 boldfont text-xl rounded-b-xl"
                        style="position: relative; top:50%; transform-origin: top left; transform: rotate(-90deg) translateX(-50%);">
                        <h3 class="boldfont">MEMBERSHIP</h3>
                    </button>
                    <div class="flex flex-col items-center justify-center pt-10 mx-auto px-10 space-y-4">
                        <img class="object-contain h-[35vh]" src="../assets/image/member1.png" alt="Member 1">
                        <img class="object-contain h-[35vh]" src="../assets/image/member2.png" alt="Member 2">
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