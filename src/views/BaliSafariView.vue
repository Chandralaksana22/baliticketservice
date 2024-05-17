<script>
import ImageCard from '@/components/ImageCard.vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import PlaceToGoPort from '../components/HorizontalCard.vue';
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
        <img src="../assets/image/balisafari.png" alt="../assets/image/balisafari.png">
        <div class="container mx-auto hidden lg:block">
            <div class="px-5 pb-0 lg:pb-44 lg:px-10 container mx-auto">
                <div class="panel-transparent p-5 lg:p-10 rounded-3xl mt-10 mb-[-20%] relative">
                    <PanelInfo />
                </div>
            </div>
            <div id="placetogo">
                <h4 class="boldfont text-white text-3xl mb-5 text-center">General Admission</h4>
                <div class="grid grid-cols-3 p-10 gap-4">
                    <PlaceToGoPort v-for="(place, index) in places" :key="index" :imageSrc="place.imageSrc"
                        :title="place.title" :subTitle="place.subTitle" :description="place.description"
                        :buttonLink="place.buttonLink" />
                </div>
            </div>
            <h4 class="boldfont text-white text-3xl py-10 text-center">WHAT’S NEW ON BALI SAFARI</h4>
            <div class="px-10 relative z-10">
                <div
                    class="rounded-xl p-10 bg-cover bg-[url('../assets/image/bg-card.png')] grid grid-cols-2 gap-4 justify-center">
                    <div>
                        <img src="../assets/image/varunalogo.png" class="object-contain h-40 mb-20" alt="">
                        <h1 class="boldfont text-white text-3xl">Varuna Show</h1>
                        <p class="text-white text-md mt-10">Varuna’s stage bursts to life with vibrant performers,
                            adorned
                            in marine-inspired attire, guiding you through the captivating odyssey of Varuna, the young
                            hero. The voyage unfolds with every dish, act, and moment, creating an immersive narrative.
                        </p>
                    </div>
                    <div class="flex flex-col gap-4">
                        <div class="gap-4 rounded-xl border-2 border-white backdrop-blur-sm bg-white/30 h-fit p-5">
                            <div class="flex justify-between items-center">
                                <h1 class="text-white font-semibold text-xl">PREMIUM PACKAGE</h1>
                                <a href=""
                                    class="p-2 boldfont text-xs bg-white text-black rounded-lg w-fit float-end">Book
                                    Ticket</a>
                            </div>
                            <p class="mt-5 text-sm text-white">Wine (red/white), 3-course lunch, preferential seating,
                                and VIP waiting lounge with free canape & mocktail/cocktail</p>
                        </div>
                        <div class="gap-4 rounded-xl border-2 border-white backdrop-blur-sm bg-white/30 h-fit p-5">
                            <div class="flex justify-between items-center">
                                <h1 class="text-white font-semibold text-xl">PREMIUM PACKAGE</h1>
                                <a href=""
                                    class="p-2 boldfont text-xs bg-white text-black rounded-lg w-fit float-end">Book
                                    Ticket</a>
                            </div>
                            <p class="mt-5 text-sm text-white">Wine (red/white), 3-course lunch, preferential seating,
                                and VIP waiting lounge with free canape & mocktail/cocktail</p>
                        </div>
                        <div class="gap-4 rounded-xl border-2 border-white backdrop-blur-sm bg-white/30 h-fit p-5">
                            <div class="flex justify-between items-center">
                                <h1 class="text-white font-semibold text-xl">PREMIUM PACKAGE</h1>
                                <a href=""
                                    class="p-2 boldfont text-xs bg-white text-black rounded-lg w-fit float-end">Book
                                    Ticket</a>
                            </div>
                            <p class="mt-5 text-sm text-white">Wine (red/white), 3-course lunch, preferential seating,
                                and VIP waiting lounge with free canape & mocktail/cocktail</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img src="../assets/image/background-biru-desktop.png" class="h-[50vh] mt-[-15%] w-full object-cover hidden lg:block"
            lt="../assets/image/background-biru-desktop.png">
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