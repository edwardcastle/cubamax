<script setup>
const props = defineProps({
  icon: {
    type: Object,
    default: () => {},
    required: true,
  },
});
</script>

<template>
  <div v-if="icon" class="text-center mx-auto">
    <div class="card">

  <img class="inset-0 object-cover my-auto mx-auto" :src="`/static/icons/${icon.img}`" />
  <div class="mt-2 text-primary font-bold">
    <p>{{ icon.name }}</p>
  </div>
</div>
  </div>
</template>

<script></script>
