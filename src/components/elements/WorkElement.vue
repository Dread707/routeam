<script setup lang="ts">
import letsMeetImage from "@/assets/images/letsmeet.png"
import letsMeetLogoImage from "@/assets/images/letsmeetLogo.png"
import bubblesImage from "@/assets/images/bubbles.gif"
import RouteButtonComponent from "@/components/buttons/RouteButtonComponent.vue";


</script>

<template>
  <div class="work">
    <div class="work-header">Наши продукты</div>
    <div class="work-body">
      <div class="work-body-text">
        <div class="work-logo">
          <img :src="letsMeetLogoImage" alt="letsmeet_logo">
        </div>
        <p>Быстрое и удобное решение для Вашего бизнеса, обучения, повседневного общения с друзьями.</p>
      </div>
      <div class="work-body-image">
        <img class="letsmeet" :src="letsMeetImage" alt="letsmeet">
        <img class="bubbles" :src="bubblesImage" alt="bubbles">
      </div>
      <div class="work-body-action">
        <RouteButtonComponent route-name="work" />
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
$border-radius-applet: 20px;

.work {
  max-width: 360px;

  &-header {
    position: relative;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(20px);
    color: #ffffff;
    padding-top: 12px;
    padding-bottom: 13px;
    width: 100%;
    border-top-right-radius: $border-radius-applet;
    border-top-left-radius: $border-radius-applet;
    display: flex;
    justify-content: center;
    font-size: var(--fs-xxxsmall);
    font-weight: 500;
    line-height: 1.25;
  }

  &-body {

    &-text {
      position: relative;
      z-index: 1;
      padding: 20px;
      pointer-events: none;

      h3, p {
        margin-block-start: 0;
        margin-block-end: 0;
      }

      h3 {
        font-size: 24px;
        line-height: 1.33;
        font-weight: 500;
      }

      p {
        font-size: 16px;
        color: rgba(0, 0, 0, 0.7);
      }

    }

    &-image {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 300px;
      }

      .letsmeet {
        z-index: 2;
      }

      .bubbles {
        width: 400px;
        position: absolute;
        z-index: 1;
      }

    }
  }

  &-logo {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;

    img {
      width: 240px;
    }
  }

}


</style>