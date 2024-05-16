<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

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
        PanelInfo
    },
    setup() {
        return {
            modules: [Navigation, Pagination],
        };
    },
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
        <div>
            <h4 class="boldfont text-white text-3xl text-center">Popular Activity</h4>
        </div>
    </section>
    <section class="bg-cover h-[25vh] lg:h-auto bg-[url('../assets/image/background-biru-desktop.png')]">

    </section>
    <section>
        <div>
            <div class="hidden lg:grid grid-cols-1 lg:grid-cols-12">
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
                    <button type="button" class="bg-yellow p-3 boldfont text-xl rounded-b-xl" style="position: relative; top:50%; transform-origin: top left; transform: rotate(-90deg) translateX(-50%);">
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
</style>