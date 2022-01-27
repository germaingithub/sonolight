<template>
  <div class="home">
    <base-Carousel
      :navigation="true"
      :pagination="true"
      :startAutoPlay="false"
      :timeout="5000"
      class="carousel"
      v-slot="{ currentSlide }"
    >
      <base-Slide
      v-for="(slide, index) in carouselSlides"
      :key="index"
      >
        <div
        v-show="currentSlide === index + 1"
        class="slide-info"
        >
          <img
          :src="require(`@/assets/${slide}.jpg`)"
          alt=""
          />
        </div>
      </base-Slide>
    </base-Carousel>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    components: { Carousel, Slide },
    setup () {
      const carouselSlides = [
        'bg-1',
        'bg-2',
        'bg-3']

      return { carouselSlides }
    },
  }
</script>

<style lang="scss" scoped>
.carousel {
  position: relative;
  max-height: 100vh;
  height: 100vh;

  .slide-info {
    position: absolute;
    top: 1;
    left: 0;
    width: 100%;
    max-height: 100%;
    height: 100%;

    img {
      min-width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
