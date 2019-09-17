<template>
  <div class="row">
    <div class="col-10">
      <div class="options-item" :class="{ 'show-item': 1 <= currentStep }">
        <h1 class="font-weight-bold">UFES</h1>
      </div>
      <div class="options-item mb-5" :class="{ 'show-item': 2 <= currentStep }">
        <h4>Dehbora: uma ferramenta de agregação e recomendação de conteúdo baseada em filtragem colaborativa</h4>
      </div>
      <div class="options-item" :class="{ 'show-item': 3 <= currentStep }">
        <img src="@/assets/coeficiente.svg" alt="Fórmula" width="100%">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutUfes',
  data () {
    return {
      currentStep: 1,
      totalSteps: 3
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
          this.$router.push({ name: 'AboutConceptho' })
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
