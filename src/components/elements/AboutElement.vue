<script setup lang="ts">
import RouteButtonComponent from "@/components/buttons/RouteButtonComponent.vue";

</script>

<template>
  <div class="about">
    <h3>Команда программистов для Вашего бизнеса</h3>
    <p>
      Решаем любые IT-задачи в корпоративном секторе: создание информационных систем, автоматизация процессов,
      диверсификация разработки, внедрение подхода «Команда как сервис», экспертиза и консалтинг в IT-сфере.
    </p>
    <RouteButtonComponent class="gray" route-name="about" />
  </div>

</template>

<style scoped lang="scss">



.about {
  padding: 48px 40px 54px;
  position: relative;
  min-height: 100px;
  max-width: 575px;
  flex: 0 0 100%;

  h3 {
    font-size: 2rem;
    margin-top: 0;
    margin-bottom: 32px;
    font-weight: 500;
    line-height: 1.33;
  }
  p {
    color: #ECECECFF;
    font-size: 24px;
  }
}

</style>