<script>
import CardComponent from '../components/CardDaily.vue';
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
        CardComponent
    },
    setup() {
        return {
            modules: [Navigation, Pagination],
        };
    },
    data() {
        return {
            cards: [
                {
                    imageSrc: 'https://s3-alpha-sig.figma.com/img/a39b/6384/5a7bb9d7701dea9f3ac242d568667bd7?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FRZd9VzezUFw8XF3ZVK6Bpuzl7iYk276aMvhJlo~G6iGLr1mrOabuwjh9duc2PGwz7tR6t48z00YrpnRZrwT8SqCBPWZbL5GYaZn-D0DbGNwMK55thCYQAZ6qPBXSfxz-VfGmC6c~jM6cU-UaW7gne6cdcmCpEO0tN73Hp31kCogPLgDWgV~X-peZp7uVpQa57uYJeY1cX72RGZPRt~B0ZgMgqWlhd7f3U0hsW8HGSmBgjhDaWqzb~CC8YPpzLpEE~A-3ZGDy8ZG~L5Wx-IaYJgosYG67JEzf7QKqEDjp7C-3nliVS~jKL8VWp4g-kMWbLb-4BEWeqrktMn6307hGA__',
                    imageAlt: 'Explore Papua',
                    title: 'Explore Papua',
                    link: 'https://example.com/papua',
                    buttonText: 'All Day'
                },
                {
                    imageSrc: 'https://s3-alpha-sig.figma.com/img/a39b/6384/5a7bb9d7701dea9f3ac242d568667bd7?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FRZd9VzezUFw8XF3ZVK6Bpuzl7iYk276aMvhJlo~G6iGLr1mrOabuwjh9duc2PGwz7tR6t48z00YrpnRZrwT8SqCBPWZbL5GYaZn-D0DbGNwMK55thCYQAZ6qPBXSfxz-VfGmC6c~jM6cU-UaW7gne6cdcmCpEO0tN73Hp31kCogPLgDWgV~X-peZp7uVpQa57uYJeY1cX72RGZPRt~B0ZgMgqWlhd7f3U0hsW8HGSmBgjhDaWqzb~CC8YPpzLpEE~A-3ZGDy8ZG~L5Wx-IaYJgosYG67JEzf7QKqEDjp7C-3nliVS~jKL8VWp4g-kMWbLb-4BEWeqrktMn6307hGA__',
                    imageAlt: 'Discover Bali',
                    title: 'Discover Bali',
                    link: 'https://example.com/bali',
                    buttonText: 'All Day'
                },
                {
                    imageSrc: 'https://s3-alpha-sig.figma.com/img/a39b/6384/5a7bb9d7701dea9f3ac242d568667bd7?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FRZd9VzezUFw8XF3ZVK6Bpuzl7iYk276aMvhJlo~G6iGLr1mrOabuwjh9duc2PGwz7tR6t48z00YrpnRZrwT8SqCBPWZbL5GYaZn-D0DbGNwMK55thCYQAZ6qPBXSfxz-VfGmC6c~jM6cU-UaW7gne6cdcmCpEO0tN73Hp31kCogPLgDWgV~X-peZp7uVpQa57uYJeY1cX72RGZPRt~B0ZgMgqWlhd7f3U0hsW8HGSmBgjhDaWqzb~CC8YPpzLpEE~A-3ZGDy8ZG~L5Wx-IaYJgosYG67JEzf7QKqEDjp7C-3nliVS~jKL8VWp4g-kMWbLb-4BEWeqrktMn6307hGA__',
                    imageAlt: 'Visit Jakarta',
                    title: 'Visit Jakarta',
                    link: 'https://example.com/jakarta',
                    buttonText: 'All Day'
                },
                {
                    imageSrc: 'https://s3-alpha-sig.figma.com/img/a39b/6384/5a7bb9d7701dea9f3ac242d568667bd7?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FRZd9VzezUFw8XF3ZVK6Bpuzl7iYk276aMvhJlo~G6iGLr1mrOabuwjh9duc2PGwz7tR6t48z00YrpnRZrwT8SqCBPWZbL5GYaZn-D0DbGNwMK55thCYQAZ6qPBXSfxz-VfGmC6c~jM6cU-UaW7gne6cdcmCpEO0tN73Hp31kCogPLgDWgV~X-peZp7uVpQa57uYJeY1cX72RGZPRt~B0ZgMgqWlhd7f3U0hsW8HGSmBgjhDaWqzb~CC8YPpzLpEE~A-3ZGDy8ZG~L5Wx-IaYJgosYG67JEzf7QKqEDjp7C-3nliVS~jKL8VWp4g-kMWbLb-4BEWeqrktMn6307hGA__',
                    imageAlt: 'Discover Bali',
                    title: 'Discover Bali',
                    link: 'https://example.com/bali',
                    buttonText: 'All Day'
                },
                {
                    imageSrc: 'https://s3-alpha-sig.figma.com/img/a39b/6384/5a7bb9d7701dea9f3ac242d568667bd7?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FRZd9VzezUFw8XF3ZVK6Bpuzl7iYk276aMvhJlo~G6iGLr1mrOabuwjh9duc2PGwz7tR6t48z00YrpnRZrwT8SqCBPWZbL5GYaZn-D0DbGNwMK55thCYQAZ6qPBXSfxz-VfGmC6c~jM6cU-UaW7gne6cdcmCpEO0tN73Hp31kCogPLgDWgV~X-peZp7uVpQa57uYJeY1cX72RGZPRt~B0ZgMgqWlhd7f3U0hsW8HGSmBgjhDaWqzb~CC8YPpzLpEE~A-3ZGDy8ZG~L5Wx-IaYJgosYG67JEzf7QKqEDjp7C-3nliVS~jKL8VWp4g-kMWbLb-4BEWeqrktMn6307hGA__',
                    imageAlt: 'Discover Bali',
                    title: 'Discover Bali',
                    link: 'https://example.com/bali',
                    buttonText: 'All Day'
                },
            ]
        };
    }
};
</script>

<template>
    <section class="bg-cover bg-[url('../assets/image/bg-desktop.png')]">
        <img src="../assets/image/balibird.png" alt="../assets/image/balibird.png">
        <div class="px-5 pb-0 lg:pb-44 lg:px-10 container mx-auto">
            <div class="panel-transparent p-5 lg:p-10 rounded-3xl mt-10 mb-[-20%] relative">
                <PanelInfo />
            </div>
        </div>
        <div id="swiper-ps">
            <h4 class="boldfont text-white text-3xl mb-5 text-center">Daily Schedule</h4>
            <div class="pb-10">
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
                        slidesPerView: 3.3,
                        spaceBetween: 20,
                    },
                }" :modules="modules" class="mySwiper ps-10">
                    <swiper-slide v-for="(card, index) in cards" :key="index">
                        <CardComponent :imageSrc="card.imageSrc" :imageAlt="card.imageAlt" :title="card.title"
                            :link="card.link" :buttonText="card.buttonText" />
                    </swiper-slide>
                </swiper>
            </div>
            <div class="mb-[-10%]">
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
                        slidesPerView: 3.3,
                        spaceBetween: 20,
                    },
                }" :modules="modules" class="mySwiper">
                    <swiper-slide v-for="(card, index) in cards" :key="index">
                        <CardComponent :imageSrc="card.imageSrc" :imageAlt="card.imageAlt" :title="card.title"
                            :link="card.link" :buttonText="card.buttonText" />
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </section>
    <section class="bg-cover bg-[url('../assets/image/background-biru-desktop.png')]">
        <h4 class="boldfont text-white w-1/2 mx-auto text-3xl pt-[15%] mb-5 text-center">PURCHASE BALI BIRD PARK GENERAL
            ADMISSION TICKET BY CLICKING ON THIS BUTTON BELOW</h4>
        <div class="text-center pt-10 pb-20">
            <a href="" class="p-4 text-xl rounded-lg bg-white boldfont text-center"> Book Ticket
            </a>
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