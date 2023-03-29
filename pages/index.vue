<script setup>
const icons = reactive(
  {
    id: 0,
    img: "remesas",
    name: "Remesas"
  },
  {
    id: 1,
    img: "tienda",
    name: "tienda",
  },
  {
    id: 2,
    img: "cellphone",
    name: "Recargas",
  },
  {
    id: 3,
    img: "viajes",
    name: "Viajes",
  },
  {
    id: 4,
    img: "consulado",
    name: "consulado",
  },
    {
    id: 5,
    img: "paquete",
    name: "Paquete",
  },
  {
    id: 6,
    img: "hotel",
    name: "Hotel",
  },
  {
    id: 7,
    img: "car",
    name: "Cars",
  }
);
</script>

<template>
  <div>
    <!-- TopBar -->
    <div class="px-16 py-[58px] h-[200px]">
      <!-- Logo -->
      <div class="h-[97px] w-[292]">
        <img src="@/assets/icons/cubamax.svg" />
      </div>
      <!-- end Logo -->
      <div></div>
    </div>
    <!-- end TopBar -->

    <!-- First Section -->
    <avaliable-options/>
    <!-- end First Section-->

    <!-- Second Section -->

    <!-- end Second Section-->
  </div>
</template>
