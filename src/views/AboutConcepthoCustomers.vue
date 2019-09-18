<template>
  <div class="row">
    <div class="col-12 options-item mb-5" :class="{ 'show-item': 1 <= currentStep }">
      <img src="@/assets/logo-rockpigeon-positive.png" alt="Rockpigeon" style="max-width: 100%;">
    </div>
    <div class="col-12 options-item mb-5" :class="{ 'show-item': 2 <= currentStep }">
      <img src="@/assets/logo-profissa.png" alt="Profissa.net" width="220">
    </div>
    <div class="col-12 options-item mb-5" :class="{ 'show-item': 3 <= currentStep }">
      <img src="@/assets/logo-ax-broker.svg" alt="AxBroker" width=220>
    </div>
    <div class="col-12 options-item mb-5" :class="{ 'show-item': 4 <= currentStep }">
      <img src="@/assets/logo-tribunaonline.svg" alt="Tribuna Online" width=220>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutConceptho',
  data () {
    return {
      currentStep: 1,
      totalSteps: 4
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
        if (this.currentStep >= this.totalSteps) {
          this.$router.push({ name: 'Prototyping' })
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
  .card {
    min-height: 70px;
    h4 {
      font-weight: lighter;
      font-size: 22px;
      text-align: center;
      margin: 0;
      padding: 0;
    }
  }
}
.show-item {
  opacity: 1;
}
</style>
