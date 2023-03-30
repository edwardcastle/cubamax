<script setup>
const icons = reactive([
  {
    id: 0,
    img: "remesas.svg",
    name: "Remesas",
  },
  {
    id: 1,
    img: "tienda.svg",
    name: "tienda",
  },
  {
    id: 2,
    img: "cellphone.svg",
    name: "Recargas",
  },
  {
    id: 3,
    img: "viajes.svg",
    name: "Viajes",
  },
  {
    id: 4,
    img: "consulado.svg",
    name: "consulado",
  },
  {
    id: 5,
    img: "paquete.svg",
    name: "Paquete",
  },
  {
    id: 6,
    img: "hotel.svg",
    name: "Hotel",
  },
  {
    id: 7,
    img: "car.svg",
    name: "Cars",
  },
]);
</script>

<template>
  <div class="min-h-screen">
    <!-- TopBar -->
    <div class="top-bar">
      <!-- Logo -->
      <div class="h-[97px] w-[292]">
        <img src="static/icons/cubamax.svg" />
      </div>
      <!-- end Logo -->
      <div></div>
    </div>
    <!-- end TopBar -->

    <!-- First Section-->
    <div class="grid grid-cols-12 sm:px-12 mt-5">
      <div class="flex flex-wrap gap-x-7 gap-y-14 col-span-12 lg:col-span-8 lg:col-start-3">
      <avaliable-options v-for="icon in icons" :icon="icon" :key="icon.id" />
    </div>
    </div>
    <!-- end First Section-->

    <!-- Second Section -->

    <!-- end Second Section-->
  </div>
</template>
