<template>
  <div>
    <v-carousel>
      <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
        src="https://picsum.photos/300/400?random="
        cover
      />
    </v-carousel>
    <NuxtWelcome />
  </div>
</template>
<script setup>
  import { reactive } from 'vue'

  const items = reactive([
  {
      src: 'https://picsum.photos/600/800?random=1'
    },
    {
      src: 'https://picsum.photos/600/800?random=2'
    },
    {
      src: 'https://picsum.photos/600/800?random=3'
    },
    {
      src: 'https://picsum.photos/600/800?random=4'
    }
  ])

   
</script>