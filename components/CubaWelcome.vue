<template>
  <div class="h-screen">
    <img
      class="object-cover w-full h-[90vh]"
      src="static/icons/havana.jpg"
    />
    <div class="relative grid grid-cols-12 mt-28">
      <div
        class="absolute md:p-24 col-span-10 col-start-2 md:col-span-6 leading-10 md:col-start-2 text-xl xs:text-5xl bottom-0 h-[50vh] bg-accent opacity-80 rounded-xl p-12"
      >
        <p class="text-primary">
          <span class="font-bold"> ¿Va a visitar a Cuba pronto?</span> Conozca
          que debe tener en cuenta para su visita.
        </p>
        <div class="absolute bottom-10 w-full md:translate-x-1/3">
          <button>
            <img src="/static/icons/arrow-button.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
