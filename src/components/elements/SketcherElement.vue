<script setup lang="ts">

</script>

<template>
<div class="sketcher">
  <div class="sketcher-header">ROUTEAM_Logo_2023.svg</div>
  <div class="sketcher-logo">
    <img src="@/assets/images/routeam.png" alt="logo" width="320" height="320">
  </div>
</div>
</template>

<style lang="scss" scoped>

$border-radius-applet: 20px;

.sketcher {

  .sketcher-header {
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


  .sketcher-logo {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: translateZ(20px)
  }

}



</style>