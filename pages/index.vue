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
      <div class="flex justify-between">
        <!-- Logo -->
        <div class="flex-auto my-auto">
          <img src="static/icons/cubamax.svg" />
        </div>
        <!-- end Logo -->

        <div class="hidden xs:block text-center text-lg text-primary">
          <div class="columns-1 pl-10">
            <p id="telf">(305)512-0330</p>
          </div>
          <div class="columns-1 mt-2">
            <ul
              class="p-2 text-center text-lg inline-flex align-baseline gap-x-4"
            >
              <li class="mt-2">
                mas <br />
                opciones
              </li>
              <li class="mt-3"><img src="static/icons/palm.svg" alt="" /></li>
              <li class="mt-3"><img src="static/icons/user.svg" alt="" /></li>
              <li><img src="static/icons/briefcase.svg" alt="" /></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- end TopBar -->

    <!-- First Section-->
    <div class="min-h-[90vh] py-10 grid grid-cols-12 mt-5">
      <div
        class="flex place-content-center align-middle flex-wrap gap-y-12 gap-x-10 col-span-12 md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3"
      >
        <avaliable-options v-for="icon in icons" :icon="icon" :key="icon.id" />
      </div>
    </div>
    <!-- end First Section-->
    <cuba-welcome />
    <!-- Second Section -->

    <!-- end Second Section-->
  </div>
</template>
