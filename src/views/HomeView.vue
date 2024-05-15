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
    <div
      class="bg-center bg-cover h-[100] bg-no-repeat bg-[url('../assets/image/Homepage-mobile.png')] lg:bg-[url('../assets/image/bg-home.png')]">
      <div class="h-[100vh] px-5 lg:px-10 container mx-auto flex items-center">
        <h1
          class="hidden lg:block mb-4 boldfont text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          EXPERIENCE <br> <span class="text-yellow">A CLOSER LOOK</span> TO <br>
          BALI’S EXOTIC ANIMALS</h1>
        <h1
          class="block lg:hidden mb-4 boldfont text-center mx-auto text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          EXPERIENCE <br> <span class="text-yellow">A CLOSER LOOK</span> <br> TO
          BALI’S <br> EXOTIC ANIMALS</h1>
      </div>
    </div>
    <div class="px-5 pb-0 lg:pb-44 lg:px-10 container mx-auto">
      <div id="feature">
        <h5 class="text-center font-bold text-white text-2xl boldfont">Places To Go</h5>
        <div class="hidden lg:grid grid-cols-1 lg:grid-cols-12 py-5 gap-6">
          <div class="col-span-12 lg:col-span-7">
            <a href="" class="feature-port img-border">
              <img src="https://dashboard.bali-zoo.com/storage/photos/shares/Animals/Lion/Lion.jpg" alt="">
              <div class="cover">
                <div class="detail px-10 text-white">
                  <h3 class="text-2xl boldfont text-white mb-10">Bali Zoo</h3>
                  <p class="text-lg">Bali’s first zoological park is a wondrous place where you can learn
                    the behaviour of over 500 rare and exotic animals in a lush, tropical environment.</p>
                </div>
              </div>
            </a>
          </div>
          <div class="col-span-12 lg:col-span-5">
            <a href="" class="feature-port img-border">
              <img src="https://dashboard.bali-zoo.com/storage/photos/shares/Animals/Lion/Lion.jpg" alt="">
              <div class="cover">
                <div class="detail px-10 text-white">
                  <h3 class="text-2xl boldfont text-white mb-10">Bali Zoo</h3>
                  <p class="text-lg">Bali’s first zoological park is a wondrous place where you can learn
                    the behaviour of over 500 rare and exotic animals in a lush, tropical environment.</p>
                </div>
              </div>
            </a>
          </div>
          <div class="col-span-12 lg:col-span-5">
            <a href="" class="feature-port img-border">
              <img src="https://dashboard.bali-zoo.com/storage/photos/shares/Animals/Lion/Lion.jpg" alt="">
              <div class="cover">
                <div class="detail px-10 text-white">
                  <h3 class="text-2xl boldfont text-white mb-10">Bali Zoo</h3>
                  <p class="text-lg">Bali’s first zoological park is a wondrous place where you can learn
                    the behaviour of over 500 rare and exotic animals in a lush, tropical environment.</p>
                </div>
              </div>
            </a>
          </div>
          <div class="col-span-12 lg:col-span-7">
            <a href="" class="feature-port img-border">
              <img src="https://dashboard.bali-zoo.com/storage/photos/shares/Animals/Lion/Lion.jpg" alt="">
              <div class="cover">
                <div class="detail px-10 text-white">
                  <h3 class="text-2xl boldfont text-white mb-10">Bali Zoo</h3>
                  <p class="text-lg">Bali’s first zoological park is a wondrous place where you can learn
                    the behaviour of over 500 rare and exotic animals in a lush, tropical environment.</p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="grid lg:hidden grid-cols-1 py-5 gap-6">
          <a href="" class="img-border relative">
            <img class="h-[13rem] w-full object-cover object-top filter brightness-50"
              src="https://dashboard.bali-zoo.com/storage/photos/shares/Animals/Lion/Lion.jpg" alt="">
            <div class="absolute top-[30%]">
              <div class="detail px-5 text-white">
                <h3 class="text-xl boldfont text-yellow mb-5">Bali Zoo</h3>
                <p class="text-sm">Bali’s first zoological park is a wondrous place where you can learn
                  the behaviour of over 500 rare and exotic animals in a lush, tropical environment.</p>
              </div>
            </div>
          </a>
          <a href="" class="img-border relative">
            <img class="h-[13rem] w-full object-cover object-top filter brightness-50"
              src="https://dashboard.bali-zoo.com/storage/photos/shares/Animals/Lion/Lion.jpg" alt="">
            <div class="absolute top-[30%]">
              <div class="detail px-5 text-white">
                <h3 class="text-xl boldfont text-yellow mb-5">Bali Zoo</h3>
                <p class="text-sm">Bali’s first zoological park is a wondrous place where you can learn
                  the behaviour of over 500 rare and exotic animals in a lush, tropical environment.</p>
              </div>
            </div>
          </a>
          <a href="" class="img-border relative">
            <img class="h-[13rem] w-full object-cover object-top filter brightness-50"
              src="https://dashboard.bali-zoo.com/storage/photos/shares/Animals/Lion/Lion.jpg" alt="">
            <div class="absolute top-[30%]">
              <div class="detail px-5 text-white">
                <h3 class="text-xl boldfont text-yellow mb-5">Bali Zoo</h3>
                <p class="text-sm">Bali’s first zoological park is a wondrous place where you can learn
                  the behaviour of over 500 rare and exotic animals in a lush, tropical environment.</p>
              </div>
            </div>
          </a>
          <a href="" class="img-border relative">
            <img class="h-[13rem] w-full object-cover object-top filter brightness-50"
              src="https://dashboard.bali-zoo.com/storage/photos/shares/Animals/Lion/Lion.jpg" alt="">
            <div class="absolute top-[30%]">
              <div class="detail px-5 text-white">
                <h3 class="text-xl boldfont text-yellow mb-5">Bali Zoo</h3>
                <p class="text-sm">Bali’s first zoological park is a wondrous place where you can learn
                  the behaviour of over 500 rare and exotic animals in a lush, tropical environment.</p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div>
        <div class="panel-home bg-[#FFD600] p-5 lg:p-10 rounded-3xl mt-10 lg:mt-44 mb-[-20%] relative">
          <PanelInfo />
        </div>
      </div>
    </div>
  </section>
  <section class="bg-cover h-[25vh] lg:h-auto bg-[url('../assets/image/background-biru-desktop.png')]">
    <div>
      <div class="hidden lg:grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div class="col-span-7 pt-24">
          <h4 class="boldfont text-white text-3xl text-center">Explore Bali Zoo</h4>
          <div class="py-20 mx-auto px-10">
            <swiper :navigation="true" :pagination="true" :modules="modules" class="mySwiper">
              <swiper-slide>
                <div class="relative">
                  <img src="../assets/image/bfh5.png" alt=""
                    class="h-[60vh] w-full object-cover filter brightness-50 rounded-[20px]">
                  <div class="px-5 absolute bottom-[5%] text-white">
                    <h1 class="boldfont text-yellow mb-3 text-xl">ZOO EXPLORER</h1>
                    <p class="mb-5">At the Bali Zoo, getting Zoological isn’t just about having exotic animals in
                      eco-friendly habitants, nor is it only about allowing guest to be interactive and
                      hands-on experience.</p>
                    <a class="px-2 py-3 bg-white text-black rounded-md slide boldfont">Book Ticket</a>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="relative">
                  <img src="../assets/image/bfh3.png" alt=""
                    class="h-[60vh] w-full object-cover filter brightness-50 rounded-[20px]">
                  <div class="px-5 absolute bottom-[5%] text-white">
                    <h1 class="boldfont text-yellow mb-3">ZOO EXPLORER</h1>
                    <p class="mb-5">At the Bali Zoo, getting Zoological isn’t just about having exotic animals in
                      eco-friendly habitants, nor is it only about allowing guest to be interactive and
                      hands-on experience.</p>
                    <a class="px-2 py-3 bg-white text-black rounded-md slide boldfont">Book Ticket</a>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <div class="col-span-5 bg-[url('../assets/image/plan.png')]">
          <div class="pt-24">
            <h4 class="boldfont text-white text-3xl text-center"> A WELL SPENT DAY <br> at BALI BIRD PARK</h4>
            <div class="py-20 px-10">
              <swiper :navigation="true" :modules="modules" class="mySwiper">
                <swiper-slide>
                  <div class="relative">
                    <img src="../assets/image/bfh5.png" alt=""
                      class="h-[50vh] w-full object-cover filter brightness-50 rounded-[20px]">
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="relative">
                    <img src="../assets/image/bfh5.png" alt=""
                      class="h-[50vh] w-full object-cover filter brightness-50 rounded-[20px]">
                  </div>
                </swiper-slide>
              </swiper>
              <div class="text-center mx-auto mt-5">
                <p class="mb-5 text-white">Pesky Parakeet Feeding</p>
                <a class="px-2 py-3 bg-white text-black rounded-md slide boldfont">Book Ticket</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div>
      <div class="hidden lg:grid grid-cols-1 lg:grid-cols-12">
        <div class="col-span-5">
          <div class="relative">
            <swiper :navigation="true" :modules="modules" class="mySwiper">
              <swiper-slide>
                <div class="relative">
                  <img src="../assets/image/bfh5.png" alt="" class="h-[100vh] w-full object-cover filter brightness-50">
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="relative">
                  <img src="../assets/image/bfh5.png" alt="" class="h-[100vh] w-full object-cover filter brightness-50">
                </div>
              </swiper-slide>
            </swiper>
            <div
              style="z-index: 99; position: absolute; top: 6rem; left: 50%; transform: translateX(-50%); text-align: center; width: 100%; color: white;">
              <h1 class="boldfont text-3xl">PLAY WITH ALPACA AT BALI FARM HOUSE</h1>
            </div>
            <div
              style="z-index: 99; position: absolute; bottom: 6rem; left: 50%; transform: translateX(-50%); text-align: center; width: 100%; color: white;">
              <a class="px-2 py-3 bg-white text-black rounded-md slide boldfont">Book Ticket</a>
            </div>
          </div>
        </div>
        <div class="col-span-7 bg-contain bg-[url('../assets/image/bg-hijau.png')]">
          <h4 class="boldfont pt-24  text-white text-3xl text-center">Explore Bali Zoo</h4>
          <div class="pt-10 mx-auto px-10">
            <swiper :navigation="true" :pagination="true" :modules="modules" class="mySwiper">
              <swiper-slide>
                <div class="relative">
                  <img src="../assets/image/bfh5.png" alt=""
                    class="h-[60vh] w-full object-cover filter brightness-50 rounded-[20px]">
                  <div class="px-5 absolute bottom-[5%] text-white">
                    <h1 class="boldfont text-yellow mb-3 text-xl">ZOO EXPLORER</h1>
                    <p class="mb-5">At the Bali Zoo, getting Zoological isn’t just about having exotic animals in
                      eco-friendly habitants, nor is it only about allowing guest to be interactive and
                      hands-on experience.</p>
                    <a class="px-2 py-3 bg-white text-black rounded-md slide boldfont">Book Ticket</a>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="relative">
                  <img src="../assets/image/bfh3.png" alt=""
                    class="h-[60vh] w-full object-cover filter brightness-50 rounded-[20px]">
                  <div class="px-5 absolute bottom-[5%] text-white">
                    <h1 class="boldfont text-yellow mb-3">ZOO EXPLORER</h1>
                    <p class="mb-5">At the Bali Zoo, getting Zoological isn’t just about having exotic animals in
                      eco-friendly habitants, nor is it only about allowing guest to be interactive and
                      hands-on experience.</p>
                    <a class="px-2 py-3 bg-white text-black rounded-md slide boldfont">Book Ticket</a>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
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