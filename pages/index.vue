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
const loading = ref(true);
onMounted(() => {
  loading.value = false;
});
</script>

<template>
  <div>
    <div v-if="!loading" class="h-screen">
      <!-- TopBar -->
      <div class="top-bar hidden xs:block">
        <div class="flex justify-between">
          <!-- Logo -->
          <div class="flex-auto my-auto">
            <img src="/static/icons/cubamax.svg" />
          </div>
          <!-- end Logo -->

          <!-- Right icons -->
          <div class="hidden xs:block text-center text-lg text-primary">
            <div class="hidden md:flex columns-1 pl-10">
              <p id="telf">(305)512-0330</p>
            </div>
            <div class="hidden md:hidden xs:flex columns-1">
              <track-items />
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
        <!--end Right icons -->
      </div>
      <!-- end TopBar -->

      <!-- First Section-->
      <div class="hidden h-screen xs:flex mt-16">
        <img
          class="object-cover w-full h-screen"
          src="static/icons/beach.jpg"
        />
        <div class="absolute py-10 grid grid-cols-12">
          <div
            class="hidden justify-between my-5 md:flex place-content-end 
            flex-wrap col-span-12 lg:px-24 px-14"
          >
            <p id="telf">(305)512-0330</p>
            <track-items />
          </div>
          <div
            class="flex px-10 mt-10 place-content-center align-middle 
            flex-wrap gap-y-10 gap-x-10 col-span-12 md:col-span-10 md:col-start-2 
            lg:col-span-9 lg:col-start-2 lg:ml-14 xl:col-span-8 xl:col-start-3"
          >
            <avaliable-options
              v-for="icon in icons"
              :icon="icon"
              :key="icon.id"
            />
          </div>
        </div>
      </div>
      <!-- end First Section-->

      <!-- First Section Mobile -->
      <div class="xs:hidden min-h-screen mt-16 bg-gray-light">
        <div class="grid grid-cols-12">
          <div class="col-span-8 col-start-3">
            <mobile-avaliable-options />
          </div>
        </div>
      </div>
      <!-- end First Section Mobile -->

      <!-- Second Section -->
      <cuba-welcome />
      <!-- end Second Section-->

      <!-- Thrid Section-->
      <div class="flex mx-14 xs:mx-32 sm:mx-24 lg:mx-56">
        <div class="my-auto mx-auto grid grid-cols-12">
          <download-application />
        </div>
      </div>
      <!-- end Thrid Section-->

      <!-- Fourth Section -->
      <div class="flex h-screen bg-gray-light">
        <div class="justify-center px-12 w-full flex-1 pt-24">
          <information-footer />
        </div>
      </div>
      <!-- end Fourth Section -->
    </div>
    <div v-else>
      <loading-page />
    </div>
  </div>
</template>
