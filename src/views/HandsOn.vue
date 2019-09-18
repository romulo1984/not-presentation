<template>
  <section class="full-page d-flex align-items-center full-page">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-8">
          <h1 class="display-5">
            Hands<strong>-on!</strong>
          </h1>
          <div class="divider bg-vue-color"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Itinerary',
  data () {
    return {}
  },
  mounted () {
    document.addEventListener('keyup', this.navigateSlide)
  },
  beforeDestroy () {
    document.removeEventListener('keyup', this.navigateSlide)
  },
  methods: {
    navigateSlide () {
      if (event.keyCode === 37) {
        this.$router.go(-1)
      } else if (event.keyCode === 39) {
        this.$router.push({ name: 'Thanks' })
      }
    }
  }
}
</script>

<style lang="scss">
.options-item {
  opacity: 0;
  transition: opacity .2s linear;
}
.show-item {
  opacity: 1;
}
</style>
