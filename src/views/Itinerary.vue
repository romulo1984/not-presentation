<template>
  <section class="full-page d-flex align-items-center full-page">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-8">
          <h1 class="display-5">
            O que veremos <strong>hoje</strong>?
          </h1>
          <div class="divider bg-vue-color"></div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item options-item" v-for="item in options" :key="item.id" :class="{ 'show-item': item.id <= currentStep }">
              <span v-html="item.title"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Itinerary',
  data () {
    return {
      options: [
        { id: 1, title: 'Iniciar um projeto <strong>Vue.js</strong>', show: true },
        { id: 2, title: 'Roteamento simples', show: false },
        { id: 3, title: 'Git Flow', show: false },
        { id: 4, title: 'Deploy com <strong>Now</strong> (zeit)', show: false }
      ],
      currentStep: 1
    }
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
        if (this.currentStep === 1) {
          this.$router.go(-1)
        } else {
          this.currentStep--
        }
      } else if (event.keyCode === 39) {
        if (this.currentStep >= this.options.length) {
          this.$router.push({ name: 'AboutUfes' })
        } else {
          this.currentStep++
        }
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
