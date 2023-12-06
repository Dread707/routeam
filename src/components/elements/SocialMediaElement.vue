<script setup lang="ts">
import telegramIcon from "@/assets/icons/telegram.svg"
import whatsAppIcon from "@/assets/icons/whatsapp.svg"
import instagramIcon from "@/assets/icons/instagram.svg"
import vkIcon from "@/assets/icons/vk.svg"


const openSocialApp = (url: string, target: string = "_self") => {
  window.open(url, target)
}

const icons = [
  { src: telegramIcon, alt: 'telegram', command: () => openSocialApp("tg://resolve?domain=(добавить)") },
  { src: whatsAppIcon, alt: 'whatsapp', command: () => openSocialApp("whatsapp://send?phone=(добавить)") },
  { src: instagramIcon, alt: 'instagram', command: () => openSocialApp('https://www.instagram.com/routeamgroup/', "_blank") },
  { src: vkIcon, alt: 'vk', command: () => openSocialApp('https://vk.com/routeam', "_blank") },
]


</script>

<template>
  <div class="social-media">
    <div v-for="(icon, indexIcon) in icons" :key="indexIcon" class="social-media__icon" @click="icon.command">
      <img :src="icon.src" :alt="icon.alt">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.social-media {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: .5rem;
  gap: .5rem;

  &__icon {
    cursor: pointer;
    width: 48px;
    //height: 48px;
  }
}

</style>