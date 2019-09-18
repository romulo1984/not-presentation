<template>
  <section class="full-page d-flex align-items-center full-page">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-8">
          <h1 class="display-5">
            Quem sou <strong>eu</strong>?
          </h1>
          <div class="divider bg-vue-color"></div>
        </div>
        <div class="col-8 about-container">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.about-container {
  min-height: 400px;
}
</style>
