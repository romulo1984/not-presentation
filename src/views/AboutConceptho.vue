<template>
  <div class="row">
    <div class="col-12 options-item mb-5" :class="{ 'show-item': 1 <= currentStep }">
      <img src="@/assets/logo-conceptho.png" alt="Conceptho" style="max-width: 100%;">
    </div>
    <div class="col-4 mb-3 options-item" :class="{ 'show-item': 2 <= currentStep }">
      <div class="card">
        <div class="card-body">
          <h4>PHP (Yii)</h4>
        </div>
      </div>
    </div>
    <div class="col-4 mb-3 options-item" :class="{ 'show-item': 3 <= currentStep }">
      <div class="card">
        <div class="card-body">
          <h4>Node (Adonis JS)</h4>
        </div>
      </div>
    </div>
    <div class="col-4 mb-3 options-item" :class="{ 'show-item': 4 <= currentStep }">
      <div class="card">
        <div class="card-body">
          <h4>React Native</h4>
        </div>
      </div>
    </div>
    <div class="col-4 mb-3 options-item" :class="{ 'show-item': 5 <= currentStep }">
      <div class="card">
        <div class="card-body">
          <h4>Flutter</h4>
        </div>
      </div>
    </div>
    <div class="col-4 mb-3 options-item" :class="{ 'show-item': 6 <= currentStep }">
      <div class="card">
        <div class="card-body">
          <h4>Docker</h4>
        </div>
      </div>
    </div>
    <div class="col-4 mb-3 options-item" :class="{ 'show-item': 7 <= currentStep }">
      <div class="card">
        <div class="card-body">
          <h4>GraphQl</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutConceptho',
  data () {
    return {
      currentStep: 1,
      totalSteps: 7
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
          this.$router.push({ name: 'AboutConcepthoCustomers' })
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
