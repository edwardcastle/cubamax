<script setup>
const socialMedia = ref([
  {
    id: 0,
    img: "facebook.svg",
  },
  {
    id: 1,
    img: "instagram.svg",
  },
  {
    id: 2,
    img: "twitter.svg",
  },
  {
    id: 3,
    img: "youtube.svg",
  },
  {
    id: 4,
    img: "google.svg",
  },
]);
</script>

<template>
  <div>
    <div class="box">
      <div class="md:w-1/2 w-full">
        <p class="text-primary font-bold md:text-4xl text-xl">
          ¿Buscando Trabajo?
          <br />
          <span class="font-normal"> Únase a nuestro equipo</span>
        </p>
      </div>
      <div class="md:w-1/2 w-full mt-10 md:mt-0">
        <button class="primary">SOLICITAR AHORA</button>
      </div>
    </div>
    <div class="grid grid-cols-12">
      <div class="col-span-12 flex mx-auto my-5 xs:my-20">
        <img src="/static/icons/cubamax-in-charge.svg" alt="" />
      </div>
    </div>
    <div class="md:flex items-center max-w-7xl text-center mx-auto">
      <div class="md:w-1/2 w-full pt-5 xs:pt-16">
        <ul class="inline-flex gap-x-4">
          <li><img src="static/icons/palm2.svg" /></li>
          <li><img src="static/icons/envelope.svg" /></li>
          <li><img src="static/icons/location.svg" /></li>
        </ul>
      </div>
      <div class="md:w-1/2 w-full mt-10 md:mt-0">
        <p class="text-2xl">ENCUENTRANOS EN</p>
        <ul
          class="inline-flex xs:gap-x-4 mt-6"
          v-for="social in socialMedia"
          :key="social.id"
        >
          <li class="mx-2">
            <img :src="`static/icons/${social.img}`" />
          </li>
        </ul>
      </div>
    </div>
    <div
      class="md:flex items-center max-w-7xl text-center mx-auto mt-10 xs:mt-24"
    >
      <div class="md:w-1/2 w-full">
        <p class="text-lg text-primary">
          Términos y Condiciones
          <span class="ml-5">Política de Privacidad</span>
        </p>
      </div>
      <div class="md:w-1/2 w-full">
        <p class="text-lg text-primary">
          © Cubamax 2022. Todos los derechos reservados
        </p>
      </div>
    </div>
  </div>
</template>
