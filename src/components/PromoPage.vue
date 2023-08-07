<template>
    <section class="flex flex-col bg-linearUp h-auto pb-4" style="background-image: linear-gradient(to bottom, #e398af 0%, #f2c6cc 100%);">
        <div class="flex items-end justify-end">
            <img src="../assets/img/Pilo.png" alt="PayLoro Logo" class="w-[50%] pt-4 pr-4">
        </div>
        
        <div class="flex items-center w-full relative">
            <img src="../assets/img/Mobile.png" alt="Mobile" class="w-[55%] z-40">
            <h3 class="font-jakartaSansExtraBold text-2xl uppercase w-[45%] z-40 pr-2 text-primary text-center overflow-hidden drop-shadow-xl">Download the new payloro ewallet app!</h3>
            <div class="absolute h-[180px] w-full bg-secondary z-1"></div>
        </div>

        <h3 class="font-jakartaSansMedium text-white text-xl px-4 mt-4 drop-shadow-2xl">
            With a new look and more features, use PayLoro for e-Wallet services such as bill payment, sending money, cash-in, cash-out, eLoad, QR payment,
            and remittance. Access a series of financial services with only your Philippine mobile number and valid ID!
        </h3>

        <h3 class="font-jakartaSansMedium text-lg text-center mt-8 text-white drop-shadow-xl">Available in:</h3>

        <div class="flex mt-4 items-center justify-center gap-2 pb-4">
            <a href="https://apps.apple.com/cn/app/payloro-app/id1524219078" target="_blank" class="w-[30%]"><img src="../assets/img/appstore.svg" alt="AppStore" class="w-full"></a>
            <a href="https://wallet.payloro.ph/profile/upload/update_apk/payloro-prod.apk" class="w-[30%]"><img src="../assets/img/android.png" alt="Download Apk"></a>
            <a href="https://play.google.com/store/apps/details?id=paylor.com" target="_blank" class="w-[30%]"><img src="../assets/img/playstore.png" alt="PlayStore"></a>
        </div>
    </section>

    <section class="bg-white h-auto mb-4">
    <swiper
    :loop="true"
    :effect="'coverflow'"
    :grabCursor="true"
    :centeredSlides="true"
    :slidesPerView="'auto'"
    :coverflowEffect="{
      rotate: 45,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    }"
    :autoplay="{ delay: 4000, disableOnInteraction: false }"
    :pagination="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide class="h-full">
        <img src="../assets/img/HomePage.jpg" class="rounded-2xl"/>
    </swiper-slide>
    <swiper-slide>
        <img src="../assets/img/BillsPage.jpg" class="rounded-2xl"/>
    </swiper-slide>
    <swiper-slide>
        <img src="../assets/img/QRPage.jpg" class="rounded-2xl"/>
    </swiper-slide>
    <swiper-slide>
        <img src="../assets/img/ProfilePage.jpg" class="rounded-2xl"/>
    </swiper-slide>
  </swiper>

    </section>

    <section class="flex flex-col items-center justify-center h-full p-8 gap-4" style="background-image: linear-gradient(to top, #E8A7B8 0%, #E8DAD8 50%, #ffffff 100%);">
        <h3 class="font-jakartaSansExtraBold text-2xl text-center uppercase text-primary drop-shadow-2xl">Scan QR to download the payloro app!</h3>
        <div class="flex gap-4">
            <div class="flex flex-col items-center w-1/2 gap-4">
                <img src="../assets/img/QR_Apple.png" alt="QR AppleStore" class="w-full lg:w-1/2">
                <div class="text-sm text-center font-jakartaSansMedium text-white bg-primary px-4 py-2 rounded-2xl">Apple App Store</div>
            </div>

            <div class="flex flex-col items-center w-1/2 gap-4">
                <img src="../assets/img/QR_Playstore.png" alt="QR PlayStore" class="w-full lg:w-1/2">
                <div class="text-sm text-center font-jakartaSansMedium text-white bg-primary px-4 py-2 rounded-2xl">Google Play Store</div>
            </div>
        </div>
    </section>
</template>

<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/effect-coverflow';
  import 'swiper/css/pagination';

  import '../main.css';

  // import required modules
  import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [EffectCoverflow, Pagination, Autoplay],
      };
    },
  };
</script>

<style>
</style>