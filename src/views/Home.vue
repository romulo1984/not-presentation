<template>
  <section class="d-flex align-items-center full-page">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-8">
          <!-- <img alt="Vue logo" src="../assets/logo.png" width="100"> -->
          <h1 class="display-4">
            Prototipando com <strong class="text-vue-color">Vue.js</strong>
          </h1>
          <h3 class="mt-4 text-muted">e alguns extras!</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'home',
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
        this.$router.push({ name: 'Advantages' })
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/_variables';
</style>
