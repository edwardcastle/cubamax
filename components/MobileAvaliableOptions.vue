<script setup>
const services = ref([
  {
    id: 0,
    icon: "paquete-icon.svg",
    name: "ENVIOS",
  },
  {
    id: 1,
    icon: "viajes-icon.svg",
    name: "VIAJES",
  },
  {
    id: 2,
    icon: "llamadas-icon.svg",
    name: "LLAMADAS Y RECARGAS",
  },
  {
    id: 3,
    icon: "consulado-icon.svg",
    name: "TRAMITES DE CONSULADO",
  },
  {
    id: 4,
    icon: "restaurant-icon.svg",
    name: "ENVIOS DE RESTAURANTES",
  },
  {
    id: 5,
    icon: "ofertas-icon.svg",
    name: "OFERTAS",
  },
]);
</script>

<template>
  <div class="justify-center mt-10">
    <img src="/static/icons/cubamax-services.svg" alt="" />
    <div class="mt-10">
      <ul
        class="mx-auto text-center flex-col align-middle content-center"
        v-for="service in services"
        :key="service.id"
      >
        <li class="flex self-center mt-8">
          <img :src="`/static/icons/${service.icon}`" alt="" />
          <p class="ml-7">{{ service.name }}</p>
        </li>
        <li class="mt-10" v-if="service.id === 0">
          <p>
            Información sobre los tipos de envíos Envío de Remesas Tarjeta MLC
            Envío de paquetes
          </p>
        </li>
      </ul>
    </div>
    <div class="mt-5">
      <img src="/static/icons/cubamax-tienda.svg" alt="" />
    </div>
    <div class="text-center mt-6 space-y-3">
      <p>Contactenos</p>
      <p>Sobre Cubamax</p>
      <p>Asociados de Cubamax</p>
    </div>
  </div>
</template>
