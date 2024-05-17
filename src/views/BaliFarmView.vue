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
                    imageSrc: "https://s3-alpha-sig.figma.com/img/c1dd/ef0e/d5ec30a305a57512c562b1cc81d480f9?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=njFJeXGXT4JIT2yN9TI1Rulyx3mfp8-p6vdc5IAu28rYWTyr0CCXcNo3XdyZFgJMxbNcil03kAO~3SL9knNVAMY5Yz7zfZVEaPrx7fIPtOfWYg1-V0K6UNBJMasYUpWof1wtEv7McG6~YRhnhJVtv3aDz2NJA69NTVTTcR-12Uw-x4VwElFQHUQ7E5lHz5Jyh0EzowzBrjkZvUGkrIkLWp08TSpGEEms9eHcCSdfjOidhLU9O5co3Oonjw4lx4twSdID~AQax7hAI8zoAkuw2SxyVoytQpPlj7AznymQfNoU9BFf8h-LLq3tBtTlMT4fFVNiR23HiKv~MQXIGA2U2g__",
                    title: "ADULT ADMISSION",
                    subTitle: "IDR 100.000 (2-12 years old)",
                    description: "Include IDR 50.000 food credit at The Barn Restaurant",
                    buttonLink: "/ticket-detail"
                },
                {
                    imageSrc: "https://s3-alpha-sig.figma.com/img/c1dd/ef0e/d5ec30a305a57512c562b1cc81d480f9?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=njFJeXGXT4JIT2yN9TI1Rulyx3mfp8-p6vdc5IAu28rYWTyr0CCXcNo3XdyZFgJMxbNcil03kAO~3SL9knNVAMY5Yz7zfZVEaPrx7fIPtOfWYg1-V0K6UNBJMasYUpWof1wtEv7McG6~YRhnhJVtv3aDz2NJA69NTVTTcR-12Uw-x4VwElFQHUQ7E5lHz5Jyh0EzowzBrjkZvUGkrIkLWp08TSpGEEms9eHcCSdfjOidhLU9O5co3Oonjw4lx4twSdID~AQax7hAI8zoAkuw2SxyVoytQpPlj7AznymQfNoU9BFf8h-LLq3tBtTlMT4fFVNiR23HiKv~MQXIGA2U2g__",
                    title: "ADULT ADMISSION",
                    subTitle: "IDR 100.000 (2-12 years old)",
                    description: "Include IDR 50.000 food credit at The Barn Restaurant",
                    buttonLink: "/ticket-detail"
                },
                {
                    imageSrc: "https://s3-alpha-sig.figma.com/img/c1dd/ef0e/d5ec30a305a57512c562b1cc81d480f9?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=njFJeXGXT4JIT2yN9TI1Rulyx3mfp8-p6vdc5IAu28rYWTyr0CCXcNo3XdyZFgJMxbNcil03kAO~3SL9knNVAMY5Yz7zfZVEaPrx7fIPtOfWYg1-V0K6UNBJMasYUpWof1wtEv7McG6~YRhnhJVtv3aDz2NJA69NTVTTcR-12Uw-x4VwElFQHUQ7E5lHz5Jyh0EzowzBrjkZvUGkrIkLWp08TSpGEEms9eHcCSdfjOidhLU9O5co3Oonjw4lx4twSdID~AQax7hAI8zoAkuw2SxyVoytQpPlj7AznymQfNoU9BFf8h-LLq3tBtTlMT4fFVNiR23HiKv~MQXIGA2U2g__",
                    title: "ADULT ADMISSION",
                    subTitle: "IDR 100.000 (2-12 years old)",
                    description: "Include IDR 50.000 food credit at The Barn Restaurant",
                    buttonLink: "/ticket-detail"
                },
            ],
        };
    }
};
</script>

<template>
    <section class="bg-cover bg-white lg:bg-[url('../assets/image/bg-desktop.png')]">
        <img src="../assets/image/bfhhero.png" alt="">
        <div class="hidden lg:block px-5 pb-0 lg:pb-44 lg:px-10 container mx-auto">
            <div class="panel-transparent p-5 lg:p-10 rounded-3xl mt-10 mb-[-20%] relative">
                <PanelInfo />
            </div>
        </div>
        <div id="placetogo" class="hidden lg:block container mx-auto">
            <h4 class="boldfont text-white text-3xl text-center">DAILY PASS</h4>
            <h4 class="text-white text-lg mb-5 text-center">(For Indonesian ID and Kitas holder)</h4>
            <div class="grid grid-cols-3 px-10 mb-[-10%] gap-4 ">
                <PlaceToGoPort v-for="(place, index) in places" :key="index" :imageSrc="place.imageSrc"
                    :title="place.title" :subTitle="place.subTitle" :description="place.description"
                    :buttonLink="place.buttonLink" />
            </div>
        </div>
    </section>
    <section class="hidden lg:block bg-cover bg-[url('../assets/image/background-biru-desktop.png')]">
        <div class="container mx-auto">
            <h4 class="boldfont text-white text-3xl pt-[15%] mb-5 text-center">OTHER ACTIVITY</h4>
            <div class="p-10 grid grid-cols-2 gap-4">
                <div class="relative">
                    <img src="../assets/image/bfh5.png" alt=""
                        class="h-[50vh] w-full object-cover filter brightness-50">
                    <div class="absolute inset-0 flex flex-col justify-center px-10 text-white">
                        <h1 class="boldfont text-yellow mb-3 text-xl">ZOO EXPLORER</h1>
                        <p class="mb-5">At the Bali Zoo, getting Zoological isn’t just about having exotic animals in
                            eco-friendly habitants, nor is it only about allowing guest to be interactive and
                            hands-on experience.</p>
                        <a class="px-2 py-3 bg-white text-black rounded-md slide boldfont w-fit">Book Ticket</a>
                    </div>
                </div>
                <div class="relative">
                    <img src="../assets/image/bfh5.png" alt=""
                        class="h-[50vh] w-full object-cover filter brightness-50">
                    <div class="absolute inset-0 flex flex-col justify-center px-10 text-white">
                        <h1 class="boldfont text-yellow mb-3 text-xl">ZOO EXPLORER</h1>
                        <p class="mb-5">At the Bali Zoo, getting Zoological isn’t just about having exotic animals in
                            eco-friendly habitants, nor is it only about allowing guest to be interactive and
                            hands-on experience.</p>
                        <a class="px-2 py-3 bg-white text-black rounded-md slide boldfont w-fit">Book Ticket</a>
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