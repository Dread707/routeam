<script setup lang="ts">
import TelegramIcon from "@/assets/icons/telegram.svg?component"
import WhatsAppIcon from "@/assets/icons/whatsapp.svg?component"
import InstagramIcon from "@/assets/icons/instagram.svg?component"

</script>

<template>
<div class="social-media">
  <TelegramIcon class="social-media__icon" />
  <WhatsAppIcon class="social-media__icon" />
  <InstagramIcon class="social-media__icon" />
</div>
</template>

<style lang="scss" scoped>
.social-media {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__icon {
    width: 48px;
    height: 48px;
  }
}

</style>