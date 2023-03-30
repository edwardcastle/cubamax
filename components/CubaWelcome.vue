<template>
  <div class="h-screen">
    <img
      class="object-cover w-full h-[80vh]"
      src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
    />
    <div class="relative grid grid-cols-12 mt-16">
      <div
        class="absolute col-span-10 col-start-2 md:col-span-6 leading-[60px] md:col-start-2 text-xl md:text-5xl bottom-0 h-[60vh] bg-accent opacity-70 p-12"
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
